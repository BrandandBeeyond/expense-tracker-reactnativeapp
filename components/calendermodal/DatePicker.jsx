import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


const DatePicker = () => {
  const [datePickerVisble, setDatePickerVisble] = useState(false);
  const [selectDate, setSelectDate] = useState('');


  const showDatePicker = () => {
    setDatePickerVisble(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisble(false);
  };

  const handleConfirm = date => {
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    setSelectDate(formattedDate);
    hideDatePicker();
  };

  useEffect(() => {
    const today = new Date();
    const formattedToday = today.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    setSelectDate(formattedToday);
  }, []);
  // Initialize with today's date}
  return (
    <>
      <TouchableOpacity onPress={showDatePicker}>
        <TextInput
          label="Select Date"
          value={selectDate}
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
        isVisible={datePickerVisble}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      
    </>
  );
};

export default DatePicker;
