import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Topbar from '../../components/topbar/Topbar';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import { HomeStyle } from './HomeStyle';
import { horizontalScale } from '../../assets/styles/Scaling';
import { Avatar, Button } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.bgWhite]}>
      <Topbar navigation={navigation} />
      <ScrollView style={globalStyle.px20}>
        <View style={[HomeStyle.mainBox, { padding: horizontalScale(9) }]}>
          <View style={[HomeStyle.tabReal,globalStyle.drow,globalStyle.cg5]}>
            <Text style={[HomeStyle.expenseTitles,globalStyle.fwbold]}>Expenses</Text>
              <Text style={HomeStyle.expenseTitles}>1000</Text>
          </View>
          <View style={HomeStyle.br}></View>
          <View
            style={[
              HomeStyle.tabReal,
              globalStyle.drow,
              globalStyle.aligncenter,
              globalStyle.cg5,
            ]}
          >
            <Text style={[HomeStyle.expenseTitles,globalStyle.fwbold]}>Budget</Text>
            <Avatar.Icon size={24}  icon="plus" style={{width:'50',height:'30',backgroundColor:'#17181c'}}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
