import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, LogBox } from 'react-native';

import Routes from "./src/Routes"

export default function App() {
  LogBox.ignoreLogs(['Setting a timer']);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Routes />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});
