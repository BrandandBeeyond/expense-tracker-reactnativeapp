import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Appbar } from 'react-native-paper';

const Topbar = () => {
  return (
    <>
      <SafeAreaView>
        <Appbar.Header>
          <Appbar.Content title="Title" />
          <Appbar.Action icon="magnify" onPress={() => {}} />
        </Appbar.Header>
      </SafeAreaView>
    </>
  );
};

export default Topbar;
