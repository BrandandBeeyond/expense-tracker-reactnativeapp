import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './navigation/mainNavigation';

const App = () => {


  return (
    <SafeAreaProvider>
       <NavigationContainer>
          <MainNavigation/>
       </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;