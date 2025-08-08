import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Expense from './tabs/Expense';
import Income from './tabs/Income';
import Transfer from './tabs/Transfer';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/Scaling';
import { globalStyle } from '../../assets/styles/gloabalStyle';

const Tab = createMaterialTopTabNavigator();

const Transactiontabs = () => {
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
          marginTop:verticalScale(-5),
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
      <Tab.Screen name="Expense" component={Expense} />
      <Tab.Screen name="Income" component={Income} />
      <Tab.Screen name="Transfer" component={Transfer} />
    </Tab.Navigator>
  );
};

export default Transactiontabs;
