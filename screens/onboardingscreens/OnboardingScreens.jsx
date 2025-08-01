import React, { useRef, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { Button, TextInput } from 'react-native-paper';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/Scaling';
import LottieView from 'lottie-react-native';

const OnboardingScreens = () => {
  const [budget, setBudget] = useState('');
  const [loading, setLoading] = useState(false);
  const onBoardingRef = useRef();

  const handleNext = () => {
    if (!budget) return Alert.alert('Please enter a monthly budget');

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onBoardingRef.current.goToPage(2, true);
    }, 3000);
  };

  const handleFinish = async () => {
    await AsyncStorage.setItem('hasOnBoarded', 'true');
    await AsyncStorage.setItem('monthlyBudget', budget);

    console.log('navigate to home');
  };

  return (
    <Onboarding
      ref={onBoardingRef}
      showNext={true}
      showDone={false}
      showSkip={false}
      pages={[
        {
          backgroundColor: '#17181c',
          title: 'Get Started',
          subtitle: (
            <View
              style={{
                alignItems: 'center',
                paddingHorizontal: horizontalScale(10),
                width: '100%',
              }}
            >
              <View style={[globalStyle.mt30, { width: '100%' }]}>
                <TextInput
                  label="name"
                  mode="outlined"
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
            </View>
          ),
        },
        {
          backgroundColor: '#e76a3d',
          title: 'Welcome!',
          subtitle:
            'Track your daily expenses and stay on top of your spending.',
        },
        {
          backgroundColor: '#abbabdff',
          title: 'You’re All Set!',
          subtitle: (
            <View
              style={{
                alignItems: 'center',
                paddingHorizontal: horizontalScale(10),
                width: '100%',
              }}
            >
              <LottieView
                autoPlay
                loop={true}
                style={{ height: 400, width: 400 }}
                source={require('../../svg/Finance.json')}
              />
              <Text style={styles.smallText}>
                Start managing your daily expenses like a pro with our
                all-in-one Expense Tracker app — a smart, strategic, and
                completely free way to track your spending, set financial goals,
                and stay on top of your money.
              </Text>

              <View style={[globalStyle.mt30, { width: '100%' }]}>
                <Button
                  mode="contained"
                  buttonColor="#000000"
                  onPress={handleFinish}
                  style={[
                    globalStyle.py5,
                    globalStyle.rounded2,
                    globalStyle.fs4,
                    { width: '100%' },
                  ]}
                >
                  Get Started
                </Button>
              </View>
            </View>
          ),
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: scaleFontSize(18),
    textAlign: 'center',
    marginBottom: verticalScale(10),
  },
  smallText: {
    fontSize: scaleFontSize(15),
    lineHeight: verticalScale(21),
    marginBottom: verticalScale(10),
  },
});

export default OnboardingScreens;
