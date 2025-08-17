import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { globalStyle } from '../../assets/styles/gloabalStyle'
import Timelinetabs from '../../components/toptabs/Timelinetabs'

const AddBudget = () => {
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.bgWhite]}>
        <Timelinetabs/>
    </SafeAreaView>
  )
}

export default AddBudget