import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/authscreen/AuthScreen';
import HomeScreen from '../screens/homescreen/HomeScreen';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreens from '../screens/onboardingscreens/OnboardingScreens';
import PasswordScreen from '../screens/authscreen/PasswordScreen';

const Stack = createStackNavigator();

export const MainNavigation = () => {
  const [showOnBoarding, setShowOnBoarding] = useState(null);

  useEffect(() => {
    const checkOnBoarding = async () => {
      const onboarded = await AsyncStorage.getItem('hasOnboarded');
      setShowOnBoarding(onboarded === null);
    };
    checkOnBoarding();
  }, []);

  if (showOnBoarding === null) return null;
  return (
    <Stack.Navigator>
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
        options={{ header: null }}
      />
      {showOnBoarding && (
        <Stack.Screen
          name="OnboardingScreens"
          component={OnboardingScreens}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};
