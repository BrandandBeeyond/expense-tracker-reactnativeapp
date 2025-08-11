import React, { useState } from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import { Icon, RadioButton, TextInput } from 'react-native-paper';
import ReactNativeModal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { horizontalScale, scaleFontSize } from '../../assets/styles/Scaling';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PayTypesModal = () => {
  const [payModalVisible, setPayModalVisible] = useState(false);
  const [paymentType, setPaymentType] = useState('cash');
  const [paymentIcon, setPaymentIcon] = useState('cash');

  const showPayModal = () => {
    setPayModalVisible(true);
  };

  const hidePayModal = () => {
    setPayModalVisible(false);
  };

  const handleSelect = (value, icon) => {
    setPaymentType(value);
    setPaymentIcon(icon);
    hidePayModal();
  };

  return (
    <>
      <TouchableOpacity style={globalStyle.mt15} onPress={showPayModal}>
        <TextInput
          label="Payment Mode"
          editable={false}
          style={globalStyle.transactionInput}
          underlineColor="transparent"
          value={paymentType === 'cash' ? 'Cash' : paymentType === 'bank' ? 'Bank Account' : 'UPI'}
          left={
            <TextInput.Icon
              icon={paymentIcon}
              style={{ backgroundColor: '#FFFFFF' }}
            />
          }
          right={<TextInput.Icon icon="chevron-right" />}
        />
      </TouchableOpacity>

      <ReactNativeModal
        isVisible={payModalVisible}
        onBackdropPress={hidePayModal}
        style={globalStyle.btmmodal}
      >
        <View style={globalStyle.modalContentBig}>
          <View
            style={[
              globalStyle.justifyBtn,
              globalStyle.aligncenter,
              globalStyle.p15,
              globalStyle.drow,
            ]}
          >
            <Text style={[globalStyle.fs5, globalStyle.fwbold]}>
              Choose Payment Type
            </Text>
            <Pressable onPress={hidePayModal} color={'#000000'}>
              <AntDesign name="close" size={20} />
            </Pressable>
          </View>

          <View
            style={[
              globalStyle.mt15,
              { paddingHorizontal: horizontalScale(12) },
            ]}
          >
            <RadioButton.Group
              value={paymentType}
              onValueChange={value => {
                if (value === 'cash') handleSelect('cash', 'cash');
                if (value === 'bank') handleSelect('bank', 'bank');
                if (value === 'upi') handleSelect('upi', 'qrcode');
              }}
            >
              <View
                style={[
                  globalStyle.drow,
                  globalStyle.aligncenter,
                  globalStyle.cg5,
                  globalStyle.mb20,
                ]}
              >
                <FontAwesome name="bank" color={'#e76a3d'} size={20} />
                <Text style={{ fontSize: scaleFontSize(15) }}>
                  Bank Accounts
                </Text>
              </View>
              <View
                style={[
                  globalStyle.drow,
                  globalStyle.justifyBtn,
                  globalStyle.aligncenter,
                  globalStyle.transactionInput,
                  globalStyle.p10,
                ]}
              >
                <View style={[globalStyle.aligncenter, globalStyle.drow]}>
                  <RadioButton value="bank" color={'#e76a3d'} />
                  <Text style={globalStyle.fs5}>Bank Account</Text>
                </View>
                <Text style={globalStyle.fs5}>*****</Text>
              </View>
              <View
                style={[
                  globalStyle.drow,
                  globalStyle.aligncenter,
                  globalStyle.cg5,
                  globalStyle.my20,
                ]}
              >
                <Icon source="cash" size={26} color={'#e76a3d'} />
                <Text style={{ fontSize: scaleFontSize(15) }}>Cash</Text>
              </View>
              <View
                style={[
                  globalStyle.drow,
                  globalStyle.justifyBtn,
                  globalStyle.aligncenter,
                  globalStyle.transactionInput,
                  globalStyle.p10,
                ]}
              >
                <View style={[globalStyle.aligncenter, globalStyle.drow]}>
                  <RadioButton value="cash" color={'#e76a3d'} />
                  <Text style={globalStyle.fs5}>Cash</Text>
                </View>
                <Text style={globalStyle.fs5}>*****</Text>
              </View>

              <View
                style={[
                  globalStyle.drow,
                  globalStyle.aligncenter,
                  globalStyle.cg5,
                  globalStyle.my20,
                ]}
              >
                <Icon source="qrcode" size={26} color={'#e76a3d'} />
                <Text style={{ fontSize: scaleFontSize(15) }}>UPI</Text>
              </View>
              <View
                style={[
                  globalStyle.drow,
                  globalStyle.justifyBtn,
                  globalStyle.aligncenter,
                  globalStyle.transactionInput,
                  globalStyle.p10,
                ]}
              >
                <View style={[globalStyle.aligncenter, globalStyle.drow]}>
                  <RadioButton value="upi" color={'#e76a3d'} />
                  <Text style={globalStyle.fs5}>UPI</Text>
                </View>
                <Text style={globalStyle.fs5}>*****</Text>
              </View>
            </RadioButton.Group>
          </View>
        </View>
      </ReactNativeModal>
    </>
  );
};

export default PayTypesModal;
