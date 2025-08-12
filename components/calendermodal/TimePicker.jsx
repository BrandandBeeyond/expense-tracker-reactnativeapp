import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const TimePicker = () => {
  const [timePickerVisible, setTimePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleConfirm = time => {
    const formattedTime = time.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    setSelectedTime(formattedTime);
    hideTimePicker();
  };

  useEffect(() => {
    const now = new Date();
    const formattedNow = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    setSelectedTime(formattedNow);
  }, []);

  return (
    <>
      <TouchableOpacity onPress={showTimePicker}>
        <TextInput
          label="Select Time"
          value={selectedTime}
          editable={false}
          style={globalStyle.calenderInput}
          underlineColor="transparent"
          left={
            <TextInput.Icon
              icon="clock"
              style={{ backgroundColor: '#FFFFFF' }}
            />
          }
        />
      </TouchableOpacity>

      <DateTimePickerModal
        mode="time"
        isVisible={timePickerVisible}
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
      />
    </>
  );
};

export default TimePicker;
