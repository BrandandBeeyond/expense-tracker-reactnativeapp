import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/authscreen/AuthScreen';
import HomeScreen from '../screens/homescreen/HomeScreen';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreens from '../screens/onboardingscreens/OnboardingScreens';
import PasswordScreen from '../screens/authscreen/PasswordScreen';

const Stack = createStackNavigator();

export const MainNavigation = () => {
 

  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(()=>{
      const checkAppState = async()=>{
        const token = await AsyncStorage.getItem('authToken');
        
        if(token){
          setInitialRoute('HomeScreen');
        } else {
          setInitialRoute('AuthScreen');
        }
      };

      checkAppState();
  },[]); 

  if (initialRoute === null) return null;

  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PasswordScreen"
        component={PasswordScreen}
        options={{
          headerStyle: {
            backgroundColor: '#17181c',
          },
          headerTitle: () => null,
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown:false}}
      />
     
        <Stack.Screen
          name="OnboardingScreens"
          component={OnboardingScreens}
          options={{ headerShown: false }}
        />
      
    </Stack.Navigator>
  );
};
