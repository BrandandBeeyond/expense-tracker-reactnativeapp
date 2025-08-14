import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { scaleFontSize, verticalScale } from '../../assets/styles/Scaling';



const Topbar = () => {
  return (
    <SafeAreaView>
      <Appbar.Header style={styles.header}>
       
        <Appbar.Action
          icon={({ size }) => (
             <Avatar.Image size={30} source={require('../../assets/images/icons/avatar.png')}/>
          )}
          onPress={() => {}}
        />

      
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Home</Text>
        </View>

      
        <View style={styles.actionsWrapper}>
          <Appbar.Action
            icon={({ color, size }) => (
              <EvilIcons name="search" size={30} color={color} />
            )}
            onPress={() => {}}
          />

          
        </View>
      </Appbar.Header>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    height:verticalScale(60),
  },
  titleWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: -1,
  },
  title: {
    fontSize: scaleFontSize(18),
    fontWeight:'600',
    color: '#010101',
  },
  actionsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarWrapper: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Topbar;
