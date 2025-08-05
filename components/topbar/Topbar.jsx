import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { globalStyle } from '../../assets/styles/gloabalStyle';
import { scaleFontSize } from '../../assets/styles/Scaling';

const UserAvatar = () => (
  <Avatar.Icon
    size={46}
    color={'#4e4e4eff'}
    icon={({ color, size }) => (
      <Ionicons name="person-circle-outline" color={color} size={size} />
    )}
    style={{ backgroundColor: 'transparent' }}
  />
);

const Topbar = () => {
  return (
    <SafeAreaView>
      <Appbar.Header style={styles.header}>
        {/* Menu Icon */}
        <Appbar.Action
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="menu" size={size} color={color} />
          )}
          onPress={() => {}}
        />

        {/* Title in Center */}
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Home</Text>
        </View>

        {/* Right Icons */}
        <View style={styles.actionsWrapper}>
          <Appbar.Action
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="magnify" size={size} color={color} />
            )}
            onPress={() => {}}
          />

          {/* Use TouchableOpacity to wrap the Avatar */}
          <TouchableOpacity onPress={() => {}} style={styles.avatarWrapper}>
            <UserAvatar />
          </TouchableOpacity>
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
