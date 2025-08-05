import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import Topbar from '../../components/topbar/Topbar'
import { globalStyle } from '../../assets/styles/gloabalStyle'
import { HomeStyle } from './HomeStyle'
import { horizontalScale } from '../../assets/styles/Scaling'

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.flex,globalStyle.bgWhite]}>
        <Topbar navigation={navigation}/>
        <ScrollView style={globalStyle.px20}>
             <View style={[HomeStyle.mainBox,{padding:horizontalScale(10)}]}>
                  <View style={[HomeStyle.tabReal]}>
                       <Text style={HomeStyle.expenseTitles}>Expenses</Text>
                  
                  </View>
                  <View style={[globalStyle.dcolend]}>
                       <Text style={globalStyle.textSmall}>Expenses</Text>
                       <Text style={globalStyle.textxSmall}>5000</Text>
                  </View>
                  <View style={[globalStyle.dcolend]}>
                       <Text style={globalStyle.textSmall}>Expenses</Text>
                       <Text style={globalStyle.textxSmall}>5000</Text>
                  </View>
             </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen