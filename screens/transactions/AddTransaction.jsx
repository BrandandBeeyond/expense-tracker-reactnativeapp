import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import Transactiontabs from '../../components/toptabs/Transactiontabs';


const AddTransaction = () => {


  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.bgWhite]}>
        <Transactiontabs />
    </SafeAreaView>
  );
};

export default AddTransaction;
