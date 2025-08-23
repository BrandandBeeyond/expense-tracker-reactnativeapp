import moment from 'moment';
import React, { useState } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import { TextInput } from 'react-native-paper';
import MonthPicker from 'react-native-month-year-picker';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/Scaling';

const BudgetInput = ({ mode = 'monthly' }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [budegt, setBudegt] = useState('');

  const togglePicker = () => setShowPicker(prev => !prev);

  const onChange = (event, newDate) => {
    if (Platform.OS === 'android') {
      togglePicker();
    }
    if (newDate) {
      setSelectedDate(newDate);
    }
  };

  const displayValue =
    mode === 'monthly'
      ? moment(selectedDate).format('MMMM YYYY')
      : moment(selectedDate).format('YYYY');

  return (
    <>
   
      <View
        style={[
          globalStyle.mt20,
          {padding:horizontalScale(6)}
         
        ]}
      >
        <Text
          style={[{ marginBottom: verticalScale(15) ,fontSize:scaleFontSize(15), fontWeight: '500' }]}
        >
          {mode === 'monthly' ? 'Budget for Month' : 'Budget for Year'}
        </Text>
        <TouchableOpacity onPress={togglePicker}>
          <TextInput
            value={displayValue}
            editable={false}
            label={mode === 'monthly' ? 'Select Month' : 'Select Year'}
            style={[globalStyle.transactionInput]}
            underlineColor="transparent"
            left={
              <TextInput.Icon
                icon="calendar"
                style={{ backgroundColor: '#FFFFFF' }}
              />
            }
          />
        </TouchableOpacity>

        <Text
          style={[{ marginTop: verticalScale(15) ,fontSize:scaleFontSize(15), fontWeight: '500' }]}
        >
          Set Budget Amount
        </Text>
        <TextInput
          value={budegt}
          label="Set Budget Amount"
          style={[globalStyle.transactionInput, globalStyle.mt10]}
          underlineColor="transparent"
          left={
            <TextInput.Icon
              icon="currency-inr"
              style={{ backgroundColor: '#FFFFFF' }}
            />
          }
        />
      </View>

      {showPicker && (
        <MonthPicker
          onChange={onChange}
          value={selectedDate}
          minimumDate={new Date(2000, 0)}
          maximumDate={new Date(2100, 11)}
          locale="en"
          mode={mode === 'monthly' ? 'month' : 'year'}
        />
      )}
    </>
  );
};

export default BudgetInput;
