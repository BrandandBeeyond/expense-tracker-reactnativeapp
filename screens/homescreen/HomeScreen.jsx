import React from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Topbar from '../../components/topbar/Topbar';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import { HomeStyle } from './HomeStyle';
import { horizontalScale } from '../../assets/styles/Scaling';
import { Avatar, Button, Icon } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.bgWhite]}>
      <Topbar navigation={navigation} />
      <ScrollView>
        <View style={globalStyle.px20}>
          <View style={[HomeStyle.mainBox, { padding: horizontalScale(9) }]}>
            <View
              style={[HomeStyle.tabReal, globalStyle.drow, globalStyle.cg5]}
            >
              <Text style={[HomeStyle.expenseTitles, globalStyle.fwsemibold]}>
                Expenses
              </Text>
              <Text style={HomeStyle.expenseTitles}>₹ 1000</Text>
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
              <Text style={[HomeStyle.expenseTitles, globalStyle.fwsemibold]}>
                Budget
              </Text>
              <Avatar.Icon
                size={24}
                icon="plus"
                style={{
                  width: '50',
                  height: '30',
                  backgroundColor: '#17181c',
                }}
              />
            </View>
          </View>

          <View
            style={[
              globalStyle.mt20,
              globalStyle.aligncenter,
              globalStyle.justifyBtn,
              globalStyle.drow,
            ]}
          >
            <Pressable
              style={[
                globalStyle.drow,
                globalStyle.aligncenter,
                globalStyle.cg5,
              ]}
            >
              <FontAwesome5 name="angle-down" color="#010101" size={20} />{' '}
              <Text style={HomeStyle.expenseTitles}>6 August 25</Text>{' '}
            </Pressable>

            <Button mode="contained" buttonColor="rgba(0,0,0,0.56)">
              <Text
                style={[
                  HomeStyle.expenseTitles,
                  globalStyle.textWhite,
                  globalStyle.textSmall,
                  globalStyle.fwbold,
                ]}
              >
                Balance :
              </Text>{' '}
              <Text
                style={[
                  HomeStyle.expenseTitles,
                  globalStyle.textWhite,
                  globalStyle.textSmall,
                ]}
              >
                ₹ 0.00
              </Text>{' '}
            </Button>
          </View>
        </View>
        <View style={HomeStyle.hrOrange}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
