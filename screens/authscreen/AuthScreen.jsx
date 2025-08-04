import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import { verticalScale } from '../../assets/styles/Scaling';
import { Button, TextInput } from 'react-native-paper';

import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { IOS_CLIENT_ID, WEB_CLIENT_ID } from '../../config/Key';
import { signIn } from '../../config/Googlesign';
import { useNavigation } from '@react-navigation/native';
import { CheckUserExists } from '../../redux/actions/UserAction';
import { useDispatch } from 'react-redux';
import { Routes } from '../../navigation/Routes';

GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID,
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  offlineAccess: true,
  forceCodeForRefreshToken: false,
  iosClientId: IOS_CLIENT_ID,
});

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const emailRef = useRef();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  const handleSignIn = () => {
    signIn(navigation);
  };

  const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = text => {
    setEmail(text);
    setButtonDisabled(!isValidEmail(text));
  };

  const handleContinue = async () => {
    if (!email.trim()) return;

    const normalizedEmail = email.trim().toLowerCase();
    setLoading(true);

    try {
      const userExist = await dispatch(CheckUserExists(normalizedEmail));

      if (userExist) {
        navigation.navigate(Routes.PasswordScreen, { email: normalizedEmail });
      } else {
        navigation.navigate(Routes.OnboardingScreens, {
          email: normalizedEmail,
        });
      }
    } catch (error) {
      console.error('Error checking user existence:', error);
      Alert.alert('error checking user existence', error.message);
    } finally {
      setLoading(false);
      setEmail('');
    }
  };

  return (
    <>
      <View style={{ width: '100%' }}>
        <Text
          style={[
            globalStyle.fs3,
            globalStyle.textWhite,
            globalStyle.textcenter,
          ]}
        >
          Getting Started !
        </Text>
        <Text
          style={[
            globalStyle.textSecondary,
            globalStyle.mt5,
            globalStyle.textcenter,
          ]}
        >
          Please Sign in to your account
        </Text>

        <View style={[globalStyle.mt30, { width: '100%' }]}>
          <TextInput
            label="Email"
            mode="outlined"
            ref={emailRef}
            value={email}
            onChangeText={handleEmailChange}
            underlineColor="transparent"
            style={globalStyle.authInput}
            textColor="#ffffff"
            theme={{
              colors: {
                text: '#ffffff',
                placeholder: '#bbbbbb',
                primary: '#e76a3d',
                outline: '#202020ff',
              },
            }}
          />
        </View>

        <View style={globalStyle.mt20}>
          <Button
            mode="contained"
            style={[
              globalStyle.py5,
              globalStyle.rounded2,
              globalStyle.fs4,
              {
                backgroundColor: buttonDisabled ? '#ef9271ff' : '#e76a3d', // 👈 override color here
              },
            ]}
            disabled={buttonDisabled}
            onPress={handleContinue}
          >
            {loading ? (
              <ActivityIndicator color={'#ffffff'} size={20} />
            ) : (
              'Continue'
            )}
          </Button>
        </View>

        <View style={[globalStyle.mt100]}>
          <GoogleSigninButton
            style={{ width: '100%', height: verticalScale(45) }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={handleSignIn}
            disabled={false}
          />
          ;
        </View>
      </View>
    </>
  );
};

const AuthScreen = () => {
  return (
    <SafeAreaView
      style={[
        globalStyle.flex,
        globalStyle.bgdark,
        globalStyle.mainFont,
        globalStyle.dflex,
        globalStyle.aligncenter,
        globalStyle.justifycenter,
      ]}
    >
      <View style={[globalStyle.px20]}>
        <Login />
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
