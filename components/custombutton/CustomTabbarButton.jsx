import React, { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/styles/Scaling';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';

const CustomTabbarButton = ({ onPress }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) onPress;
    navigation.navigate(Routes.AddTransaction);
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.fabContainer}>
        <View style={styles.fab}>
          <Feather name="plus" color="#000000" size={24} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomTabbarButton;

const styles = StyleSheet.create({
  fabContainer: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    width: horizontalScale(50),
    height: verticalScale(43),
    borderRadius: horizontalScale(100),
    backgroundColor: '#ffbb5f',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});
