import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../../../assets/styles/gloabalStyle';
import DatePicker from '../../calendermodal/DatePicker';
import { Button, TextInput } from 'react-native-paper';
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

          <TouchableOpacity style={globalStyle.mt15}>
            <TextInput
              label="Add short Note"
              style={globalStyle.transactionInputBig}
              underlineColor="transparent"
              left={
                <TextInput.Icon
                  icon="note"
                  style={{ backgroundColor: '#FFFFFF' }}
                />
              }
            />
          </TouchableOpacity>
          <TouchableOpacity style={globalStyle.mt15}>
            <TextInput
              label="Add invoice"
              style={globalStyle.transactionInput}
              underlineColor="transparent"
              left={
                <TextInput.Icon
                  icon="invoice"
                  style={{ backgroundColor: '#FFFFFF' }}
                />
              }
            />
          </TouchableOpacity>

          <Button
            mode="contained"
            style={[
              globalStyle.mt30,
              globalStyle.py5,
              globalStyle.rounded2,
              globalStyle.fs4,
              globalStyle.textcenter,
              {
                backgroundColor:'#ffbb5f'
              },
            ]}
          >
            <Text style={globalStyle.textWhite}>
            Add Transaction
            </Text>
          </Button>
        </View>
      </View>
    </>
  );
};

export default Expense;
