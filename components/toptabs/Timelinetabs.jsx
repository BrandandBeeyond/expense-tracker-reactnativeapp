import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/Scaling';
import Monthly from './tabs/Monthly';
import Yearly from './tabs/Yearly';

const Timelinetabs = () => {

  const Tab = createMaterialTopTabNavigator();


  return (
    <Tab.Navigator
      style={[globalStyle.px20, { marginTop: verticalScale(20) }]}
      screenOptions={{
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderRadius: horizontalScale(12),
          borderWidth: horizontalScale(1),
          borderColor: '#ffbb5f',
          height: verticalScale(33),
        },
        tabBarItemStyle: {
          height: verticalScale(33),
          justifyContent: 'center',
        },
        tabBarLabelStyle: {
          marginTop: verticalScale(-5),
          fontSize: scaleFontSize(14),
          paddingVertical: 0, // removes default padding
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#ffbb5f',
          height: '100%',
          borderRadius: horizontalScale(12),
        },
      }}
    >
      <Tab.Screen name="Monthly" component={Monthly} />
      <Tab.Screen name="Yearly" component={Yearly} />
    </Tab.Navigator>
  );
};

export default Timelinetabs;
