import React from 'react'
import { View } from 'react-native'
import { globalStyle } from '../../../assets/styles/gloabalStyle'
import BudgetInput from '../../setbudget/BudgetInput'

const Monthly = () => {
  return (
    <View style={[globalStyle.flex,globalStyle.bgWhite]}>
         <BudgetInput mode="monthly"/>
    </View>
  )
}

export default Monthly