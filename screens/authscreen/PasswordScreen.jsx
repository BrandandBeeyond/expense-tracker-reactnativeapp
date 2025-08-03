import React, { useState } from 'react';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import { SafeAreaView, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { scaleFontSize } from '../../assets/styles/Scaling';

const PasswordScreen = () => {
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
        <View style={[globalStyle.mt20, { width: '100%' }]}>
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
      </View>
    </SafeAreaView>
  );
};

export default PasswordScreen;
