import React, { useState } from 'react';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { scaleFontSize } from '../../assets/styles/Scaling';
import { LoginUser } from '../../redux/actions/UserAction';
import { useDispatch } from 'react-redux';

const PasswordScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const { email } = route.params || {};
  const [password, setPassword] = useState('');

 const handleLogin = async () => {
  console.log("Email:", email);
  console.log("Password:", password);

  if (!email || !password) {
    Alert.alert('Missing Fields', 'Email or password is missing');
    return;
  }

  setLoading(true);
  try {
    await dispatch(LoginUser({email, password}));
    navigation.replace('HomeTabs');
  } catch (error) {
    Alert.alert('Login Failed', error.message || 'Please try again');
  } finally {
    setLoading(false);
  }
};
  const [passwordShow, setPasswordShow] = useState(false);
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
        <View style={[{ width: '100%' }]}>
          <Text
            style={[
              globalStyle.fs3,
              globalStyle.textWhite,
              globalStyle.textcenter,
            ]}
          >
            Welcome Back !
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
          <View style={globalStyle.mt40}>
            <TextInput
              label="Password"
              secureTextEntry={!passwordShow}
              value={password}
              onChangeText={text => setPassword(text)}
              mode="outlined"
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
          </View>
        </View>

        <View style={globalStyle.mt10}>
          <Text
            style={{
              fontSize: scaleFontSize(13),
              color: '#cccccc',
              textAlign: 'right',
            }}
          >
            Forgot Password ?
          </Text>
        </View>

        <View style={globalStyle.mt40}>
          <Button
            mode="contained"
            style={[
              globalStyle.py5,
              globalStyle.rounded2,
              globalStyle.fs4,
              {
                backgroundColor: '#e76a3d',
              },
            ]}
            onPress={handleLogin}
          >
            {loading ? (
              <ActivityIndicator color={'#ffffff'} size={20} />
            ) : (
              'Login'
            )}
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PasswordScreen;
