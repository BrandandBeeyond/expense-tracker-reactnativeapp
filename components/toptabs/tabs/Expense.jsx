import React from 'react';
import { View } from 'react-native';
import { globalStyle } from '../../../assets/styles/gloabalStyle';
import DatePicker from '../../calendermodal/DatePicker';





const Expense = () => {
  return (
    <View style={[globalStyle.bgWhite, globalStyle.flex]}>
      <View style={[globalStyle.mt30]}>
           {/* <DatePicker/> */}
      </View>
    </View>
  );
};

export default Expense;
