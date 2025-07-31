import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import Topbar from '../../components/topbar/Topbar'

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
        <Topbar navigation={navigation}/>
        
        <ScrollView></ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen