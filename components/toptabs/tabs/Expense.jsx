import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../../../assets/styles/gloabalStyle';
import DatePicker from '../../calendermodal/DatePicker';
import { TextInput } from 'react-native-paper';
import ReactNativeModal from 'react-native-modal';

const Expense = () => {
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);

  const showCategoryModal = () => {
    setCategoryModalVisible(true);
  };

  const hideCategoryModal = () => {
    setCategoryModalVisible(false);
  };
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
          <TouchableOpacity
            style={globalStyle.mt15}
            onPress={showCategoryModal}
          >
            <TextInput
              label="Select Category"
              editable={false}
              style={globalStyle.transactionInput}
              underlineColor="transparent"
              left={
                <TextInput.Icon
                  icon="format-list-bulleted"
                  style={{ backgroundColor: '#FFFFFF' }}
                />
              }
              right={<TextInput.Icon icon="chevron-right" />}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ReactNativeModal
        isVisible={categoryModalVisible}
        onBackdropPress={hideCategoryModal}
        style={globalStyle.btmmodal}
      >
        <View style={globalStyle.modalContent}></View>
      </ReactNativeModal>
    </>
  );
};

export default Expense;
