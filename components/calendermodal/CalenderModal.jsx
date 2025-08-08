import React, { useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalenderModal = () => {



  return(
    <Modal transparent visible={calenderVisible} animationType="slide" onRequestClose={()=>setCalenderVisible(false)}>
         <View style={styles.modalContainer}>
              <View style={styles.calendarWrapper}>
                  <Calendar onDayPress={(day)=>{

                  }}/>
              </View>
         </View>
    </Modal>
  );
};



export default CalenderModal;


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  calendarWrapper: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
});