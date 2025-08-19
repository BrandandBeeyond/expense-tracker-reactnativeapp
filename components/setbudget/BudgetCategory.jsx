import React, { use } from 'react';
import { Text, View } from 'react-native';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import { horizontalScale } from '../../assets/styles/Scaling';
import { useSelector } from 'react-redux';

const BudgetCategory = () => {

  const {expenseCategories} = useSelector(state => state.expenses);

  

  return (
    <View
      style={[
        globalStyle.mt15,
        globalStyle.p15,
        {
          backgroundColor: '#f5bf73ff',
          borderRadius: horizontalScale(10),
          borderTopRightRadius: horizontalScale(10),
          borderBottomRightRadius: horizontalScale(10),
        },
      ]}
    >
      <Text style={globalStyle.fs5}>Included Categories</Text>


    </View>
  );
};

export default BudgetCategory;
