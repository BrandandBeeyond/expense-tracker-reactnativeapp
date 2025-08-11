import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../../../assets/styles/gloabalStyle';
import DatePicker from '../../calendermodal/DatePicker';
import { TextInput } from 'react-native-paper';
import ExpenseCategoryModal from '../../expensecategory/ExpenseCategoryModal';
import PayTypesModal from '../../paytype/PayTypesModal';

const Expense = () => {
  return (
    <>
      <View style={[globalStyle.bgWhite, globalStyle.flex]}>
        <View style={[globalStyle.mt30]}>
          <DatePicker />

          <TouchableOpacity style={globalStyle.mt15}>
            <TextInput
              label="Amount"
              style={globalStyle.transactionInput}
              underlineColor="transparent"
              left={
                <TextInput.Icon
                  icon="currency-inr"
                  style={{ backgroundColor: '#FFFFFF' }}
                />
              }
            />
          </TouchableOpacity>

          <ExpenseCategoryModal />
          <PayTypesModal />
        </View>
      </View>
    </>
  );
};

export default Expense;
