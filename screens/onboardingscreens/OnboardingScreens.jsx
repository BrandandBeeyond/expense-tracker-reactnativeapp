import React, { useRef, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { Button, RadioButton, TextInput } from 'react-native-paper';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/Scaling';
import LottieView from 'lottie-react-native';
import { RegisterNewUser } from '../../redux/actions/UserAction';
import { useDispatch } from 'react-redux';

const OnboardingScreens = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [budget, setBudget] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const onBoardingRef = useRef();
  const { email } = route.params || {};

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    mobile: '',
    password: '',
  });

  const handlePreRegister = async () => {
    const { name, mobile, gender, password } = formData;

    if (!name || !mobile || !gender || !password) {
      Alert.alert('All fields are required');
      return;
    }

    try {
      setLoading(true);
      await AsyncStorage.setItem(
        'onboardFormData',
        JSON.stringify({ name, mobile, gender }),
      );
      onBoardingRef.current.goToPage(1, true);
    } catch (error) {
      Alert.alert('Registration Failed', error.message || 'Please try again');
    }finally{
      setLoading(false);
    }
  };

  const handleFinish = async () => {
    try {
      const { name, mobile, gender, password } = formData;

      await dispatch(RegisterNewUser({name,email,mobile,gender,password}));

      navigation.replace('HomeScreen')

    } catch (error) {
      Alert.alert('Registration Failed', error.message || 'Please try again');

    }
   

    console.log('navigate to home');
  };

  return (
    <Onboarding
      ref={onBoardingRef}
      showDone={false}
      showNext={false}
      showSkip={false}
      pageIndexCallback={index => {
        setCurrentPage(index);
        setScrollEnabled(index !== 0);
      }}
      flatlistProps={{
        scrollEnabled: scrollEnabled,
      }}
      pages={[
        {
          backgroundColor: '#17181c',
          title: 'Create Account',
          titleStyles: {
            fontSize: scaleFontSize(25),
          },

          subtitle: (
            <View
              style={{
                alignItems: 'center',
                paddingHorizontal: horizontalScale(10),
              }}
            >
              <Text
                style={[
                  globalStyle.mainFont,
                  globalStyle.textWhite,
                  { fontSize: scaleFontSize(15) },
                ]}
              >
                Welcome to ExpenseEase !
              </Text>

              <View style={[{ width: '100%' }]}>
                <TextInput
                  label="Name"
                  mode="outlined"
                  value={formData.name}
                  onChangeText={text =>
                    setFormData({ ...formData, name: text })
                  }
                  underlineColor="transparent"
                  style={[globalStyle.authInput, globalStyle.mt30]}
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
                <TextInput
                  label="Mobile"
                  mode="outlined"
                  underlineColor="transparent"
                  keyboardType="phone-pad"
                  value={formData.mobile}
                  onChangeText={text =>
                    setFormData({ ...formData, mobile: text })
                  }
                  style={[globalStyle.authInput, globalStyle.mt15]}
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
                <View style={globalStyle.mt20}>
                  <Text
                    style={[
                      styles.normalText,
                      globalStyle.textMain,
                      { paddingStart: horizontalScale(6) },
                    ]}
                  >
                    Select Gender
                  </Text>

                  <RadioButton.Group
                    value={formData.gender}
                    onValueChange={value =>
                      setFormData({ ...formData, gender: value })
                    }
                  >
                    <View style={{ flexDirection: 'row', gap: '20' }}>
                      <RadioButton.Item
                        label="Male"
                        value="male"
                        theme={{ colors: { primary: '#e76a3d' } }}
                        labelStyle={{ color: '#e76a3d' }}
                      />
                      <RadioButton.Item
                        label="Female"
                        value="female"
                        theme={{ colors: { primary: '#e76a3d' } }}
                        labelStyle={{ color: '#e76a3d' }}
                      />
                    </View>
                  </RadioButton.Group>
                </View>

                <TextInput
                  label="Password"
                  secureTextEntry={!passwordShow}
                  mode="outlined"
                  value={formData.password}
                  onChangeText={text =>
                    setFormData({ ...formData, password: text })
                  }
                  underlineColor="transparent"
                  right={
                    <TextInput.Icon
                      icon={passwordShow ? 'eye-off' : 'eye'}
                      color={'#cccccc'}
                      onPress={() => setPasswordShow(!passwordShow)}
                    />
                  }
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
                <View style={globalStyle.mt40}>
                  <Button
                    mode="contained"
                    onPress={handlePreRegister}
                    buttonColor="#e76a3d"
                    style={[
                      globalStyle.py5,
                      globalStyle.rounded2,
                      globalStyle.fs4,
                    ]}
                  >
                    Continue
                  </Button>
                </View>
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
                source={require('../../svg/FinanceSvg.json')}
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
     fontFamily:'Lato'
  },
  smallText: {
    fontSize: scaleFontSize(15),
    lineHeight: verticalScale(21),
    marginBottom: verticalScale(10),
     fontFamily:'Lato'
  },
  normalText: {
    fontSize: scaleFontSize(16),
    lineHeight: verticalScale(22),
    marginBottom: verticalScale(10),
     fontFamily:'Lato'
  },
});

export default OnboardingScreens;
