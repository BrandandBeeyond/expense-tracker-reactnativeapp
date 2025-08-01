// import statusCodes along with GoogleSignin
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { Routes } from '../navigation/Routes';




export const signIn = async (navigation) => {

  
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log('User Info:', userInfo);

    const onboarded = await AsyncStorage.getItem('hasOnBoarded');

    if(onboarded === null){
       navigation.replace(Routes.OnboardingScreens);
    }
    else{
       navigation.replace(Routes.HomeScreen);
    }

  } catch (error) {
    console.error('Google Sign-in error:', error);
    if (error.code) {
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          console.warn('Sign-in already in progress');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.warn('Google Play Services not available');
          break;
        case statusCodes.SIGN_IN_CANCELLED:
          console.warn('User cancelled sign-in');
          break;
        default:
          console.warn('Unknown error occurred during sign-in');
      }
    }
  }
};