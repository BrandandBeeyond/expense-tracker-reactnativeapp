import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Topbar from '../../components/topbar/Topbar';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import { HomeStyle } from './HomeStyle';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/Scaling';
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

        <View style={[globalStyle.mt15]}>
          <View style={globalStyle.mx10}>
            <Text
              style={[
                globalStyle.fs5,
                globalStyle.fwbold,
                { marginVertical: verticalScale(12) },
              ]}
            >
              Your Budgets
            </Text>
            <View style={[HomeStyle.budgetBoxSet, globalStyle.p15]}>
              <View style={{ width: '70%' }}>
                <Text
                  style={[{ fontSize: scaleFontSize(14), fontWeight: '500' }]}
                >
                  No budget for this month ?
                </Text>
                <Text
                  style={[
                    {
                      fontSize: scaleFontSize(13),
                      lineHeight: verticalScale(16),
                      fontWeight: '400',
                      marginTop: verticalScale(8),
                    },
                  ]}
                >
                  setting a budget for your spending is a crucial in achieving
                  your financial goals
                </Text>

                <Button
                  mode="contained"
                  buttonColor="#17181c"
                  onPress={() => navigation.navigate('AddBudget')}
                  style={[HomeStyle.normalBtn,{
                    borderRadius: horizontalScale(6)
                  }]}
                >
                  <Text style={[globalStyle.textWhite, {fontSize:scaleFontSize(11),lineHeight: verticalScale(9)}]}>
                  Setup budget
                  </Text>
                </Button>
              </View>
              <View>
                <Image
                  source={require('../../assets/images/vectors/budget.png')}
                  objectFit="contain"
                  resizeMode="contain"
                  style={{
                    width: horizontalScale(65),
                    height: verticalScale(110),
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
