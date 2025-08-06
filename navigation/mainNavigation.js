import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/authscreen/AuthScreen';
import HomeScreen from '../screens/homescreen/HomeScreen';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreens from '../screens/onboardingscreens/OnboardingScreens';
import PasswordScreen from '../screens/authscreen/PasswordScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AnalysisScreen from '../screens/analysisscreen/AnalysisScreen';
import MoreDetail from '../screens/moredetail/MoreDetail';
import Reports from '../screens/reports/Reports';
import AddTransaction from '../screens/transactions/AddTransaction';
import { horizontalScale, verticalScale } from '../assets/styles/Scaling';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const CustomTabBarButton=({children,onPress})=>(
   <TouchableOpacity style={styles.fabContainer} onPress={onPress}>
        <View style={styles.fab}>{children}</View>
   </TouchableOpacity>
)

const HomeTabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: true,
      tabBarStyle: styles.tabBar,
      headerShown: false,
      tabBarActiveTintColor:'#ffbb5f',
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="home" color={color} size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Analytics"
      component={AnalysisScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="analytics-outline" color={color} size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Add"
      component={AddTransaction}
      options={{
        tabBarLabel:'',
        tabBarIcon:({focused})=>(
          <Feather name="plus" color={'#000000'} size={24} />
        ),
        tabBarButton:props=> <CustomTabBarButton {...props}/>
      }}
    />
    <Tab.Screen
      name="Reports"
      component={Reports}
      options={{
        tabBarIcon: ({ color, size }) => (
          <SimpleLineIcons
            name="notebook"
            color={color}
            size={24}
          />
        ),
      }}
    />
    <Tab.Screen
      name="More"
      component={MoreDetail}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="dots-three-horizontal" color={color} size={24} />
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
    backgroundColor: '#f1eeedff',
    borderTopWidth: 0,
    elevation: 10,
  },
  fabContainer: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    width: horizontalScale(50),
    height: verticalScale(43),
    borderRadius: horizontalScale(100),
    backgroundColor: '#ffbb5f',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    paddingTop:verticalScale(10)
  },
});
