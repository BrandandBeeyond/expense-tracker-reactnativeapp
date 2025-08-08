import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import CalenderModal from './CalenderModal';

const DatePicker = () => {
  const [calenderVisible, setCalenderVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const showCalenderModal = () => {
    setCalenderVisible(true);
  };

  const hideCalederModal = () => {
    setCalenderVisible(false);
  };

  useEffect(() => {
    const today = new Date();

    const formatted = today.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    setSelectedDate(formatted);
  }, []);


  
  return (
    <>
      <TouchableOpacity onPress={showCalenderModal}>
        <TextInput label="Select Date" value={selectedDate} editable={false} />
      </TouchableOpacity>

      <CalenderModal
        visible={calenderVisible}
        hideModal={hideCalederModal}
        onSelectDate={day => {
          const dateObj = new Date(day.dateString);

          const formatted = dateObj.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          });
          setSelectedDate(formatted);
        }}
      />
    </>
  );
};

export default DatePicker;
