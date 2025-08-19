import React from 'react'
import { View } from 'react-native'
import { globalStyle } from '../../../assets/styles/gloabalStyle'
import BudgetInput from '../../setbudget/BudgetInput'
import BudgetCategory from '../../setbudget/BudgetCategory'

const Monthly = () => {
  return (
    <View style={[globalStyle.flex,globalStyle.bgWhite]}>
         <BudgetInput mode="monthly"/>
         <BudgetCategory/>
    </View>
  )
}

export default Monthly