import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  enableScreens();
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <Routes/>
      <StatusBar style="inverted" />
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
