import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/Scaling';
import { useSelector } from 'react-redux';
import Onboarding from 'react-native-onboarding-swiper';
import { TextInput } from 'react-native-paper';

const BudgetCategory = () => {
  const { expenseCategories } = useSelector(state => state.expenses);



  return (
    <View
      style={[
        globalStyle.mt15,
         {padding:horizontalScale(6)}
       
      ]}
    >
      <Text style={[{ marginBottom: verticalScale(10) ,fontSize:scaleFontSize(15), fontWeight: '500' }]}>
        Included Categories
      </Text>

      <TouchableOpacity style={globalStyle.mt15}>
             <TextInput
               label="Select Categories"
               editable={false}
               style={globalStyle.transactionInput}
               underlineColor="transparent"
               left={
                 <TextInput.Icon
                   icon="format-list-bulleted"
                   style={{ backgroundColor: '#FFFFFF' }}
                 />
               }
               right={<TextInput.Icon icon="chevron-right" />}
             />
           </TouchableOpacity>
    </View>
  );
};

export default BudgetCategory;
