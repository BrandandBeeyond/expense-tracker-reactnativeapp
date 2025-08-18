import moment from 'moment';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import { TextInput } from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { horizontalScale } from '../../assets/styles/Scaling';

const BudgetInput = ({ mode }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const handleConfirm = () => {
    const formatted = (mode = 'monthly'
      ? moment().format('MMMM')
      : moment().format('YYYY'));
    setSelectedDate(formatted);
    hideDatePicker();
  };

  return (
    <View style={[globalStyle.px20, globalStyle.mt15]}>
      <View style={{ backgroundColor: '#ffbb5f', borderRadius: horizontalScale(10) , padding: horizontalScale(6) }}>
        <TouchableOpacity onPress={showDatePicker}>
          <TextInput
            label="Select Date"
            value={selectedDate || 'Select Date'}
            editable={false}
            style={globalStyle.calenderInput}
            underlineColor="transparent"
            left={
              <TextInput.Icon
                icon="calendar"
                style={{ backgroundColor: '#FFFFFF' }}
              />
            }
          />
        </TouchableOpacity>

        <DateTimePickerModal
          mode="date"
          isVisible={isDatePickerVisible}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          dispay="spinner"
        />
      </View>
    </View>
  );
};

export default BudgetInput;
