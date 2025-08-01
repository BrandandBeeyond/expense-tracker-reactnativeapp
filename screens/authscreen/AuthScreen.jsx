import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import { scaleFontSize, verticalScale } from '../../assets/styles/Scaling';
import { Button, TextInput } from 'react-native-paper';
// import GoogleLogo from '../../assets/images/icons/google.png';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { IOS_CLIENT_ID, WEB_CLIENT_ID } from '../../config/Key';
import { signIn } from '../../config/Googlesign';
import { useNavigation } from '@react-navigation/native';

GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID,
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  offlineAccess: true,
  forceCodeForRefreshToken: false,
  iosClientId: IOS_CLIENT_ID,
});

const Login = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const navigation = useNavigation();


  const handleSignIn=()=>{
    signIn(navigation);
  }

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

        <View style={[globalStyle.mt30, { width: '100%' }]}>
          <TextInput
            label="Email"
            mode="outlined"
            underlineColor="transparent"
            style={globalStyle.authInput}
            textColor="#ffffff"
            theme={{
              colors: {
                text: '#ffffff',
                placeholder: '#bbbbbb', 
                primary:'#e76a3d',
                outline:'#202020ff'
              },
            }}
          />
        </View>
        {/* <View style={[globalStyle.mt20, { width: '100%' }]}>
          <TextInput
            label="Password"
            secureTextEntry={!passwordShow}
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
                placeholder: '#bbbbbb', // label color
              },
            }}
          />
        </View> */}
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

        <View style={globalStyle.mt20}>
          <Button
            mode="contained"
            buttonColor='#e76a3d'
            style={[globalStyle.py5, globalStyle.rounded2, globalStyle.fs4]}
          >
            Continue
          </Button>
        </View>

        <View style={[globalStyle.mt100]}>
      
          <GoogleSigninButton
             style={{width:'100%',height:verticalScale(45)}}
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

const signUp = () => {
  return (
    <View>
      <Text style={{ color: '#ffffff' }}>Hello signup</Text>
    </View>
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
