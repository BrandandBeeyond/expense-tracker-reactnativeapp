import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/authscreen/AuthScreen';
import HomeScreen from '../screens/homescreen/HomeScreen';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreens from '../screens/onboardingscreens/OnboardingScreens';
import PasswordScreen from '../screens/authscreen/PasswordScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AnalysisScreen from '../screens/analysisscreen/AnalysisScreen';
import MoreDetail from '../screens/moredetail/MoreDetail';
import Reports from '../screens/reports/Reports';
import AddTransaction from '../screens/transactions/AddTransaction';
import CustomTabbarButton from '../components/custombutton/CustomTabbarButton';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../assets/styles/Scaling';
import AddBudget from '../screens/transactions/AddBudget';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomBackButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ marginRight: 20, marginLeft: 10 }}
    >
      <FontAwesome6 name="arrow-left-long" color={'#000000'} size={20} />
    </TouchableOpacity>
  );
};

const HomeTabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: true,
      tabBarStyle: styles.tabBar,
      tabBarActiveTintColor: '#ffbb5f',
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="home" color={color} size={20} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Analytics"
      component={AnalysisScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="analytics-outline" color={color} size={20} />
        ),
      }}
    />
    <Tab.Screen
      name="AddTransaction"
      component={AddTransaction}
      options={({ navigation }) => ({
        tabBarLabel: '',
        tabBarIcon: () => null,
        headerTitle: 'Add Transaction',
        headerTitleStyle: { fontSize: scaleFontSize(17) },
        tabBarStyle: { display: 'none' },
        headerLeft: () => <CustomBackButton navigation={navigation} />,
        tabBarButton: props => <CustomTabbarButton {...props} />,
      })}
    />
    <Tab.Screen
      name="Reports"
      component={Reports}
      options={{
        tabBarIcon: ({ color, size }) => (
          <SimpleLineIcons name="notebook" color={color} size={20} />
        ),
      }}
    />
    <Tab.Screen
      name="More"
      component={MoreDetail}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="dots-three-horizontal" color={color} size={20} />
        ),
      }}
    />
  </Tab.Navigator>
);

export const MainNavigation = () => {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    const checkAppState = async () => {
      const token = await AsyncStorage.getItem('authToken');

      if (token) {
        setInitialRoute('HomeTabs');
      } else {
        setInitialRoute('AuthScreen');
      }
    };

    checkAppState();
  }, []);

  if (initialRoute === null) return null;

  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PasswordScreen"
        component={PasswordScreen}
        options={{
          headerStyle: {
            backgroundColor: '#17181c',
          },
          headerTitle: () => null,
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AddBudget"
        component={AddBudget}
        options={({ navigation }) => ({
          headerTitle: 'Add Budget',
          headerTitleStyle: { fontSize: scaleFontSize(17) },
          headerLeft:()=><CustomBackButton navigation={navigation}/>
        })}
      />

      <Stack.Screen
        name="OnboardingScreens"
        component={OnboardingScreens}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    height: 65,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#0d0f1b',
    borderTopWidth: 0,
    bottom: verticalScale(30),
    elevation: 3,
    borderRadius: horizontalScale(100),
    paddingTop: verticalScale(5),
    paddingHorizontal: horizontalScale(10),
    marginHorizontal: horizontalScale(20),
  },
});
