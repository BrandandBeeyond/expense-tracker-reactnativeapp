import React from 'react';
import { View } from 'react-native';
import { globalStyle } from '../../../assets/styles/gloabalStyle';
import BudgetInput from '../../setbudget/BudgetInput';

const Yearly = () => {
  return (
    <View style={[globalStyle.flex, globalStyle.bgWhite]}>
      {' '}
      <BudgetInput mode="monthly" />
    </View>
  );
};

export default Yearly;
