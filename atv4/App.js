import 'react-native-gesture-handler';
import React from 'react';
import {enableScreens} from 'react-native-screens';

import {NavigationContainer} from '@react-navigation/native';

import {StatusBar, View} from 'react-native';

import Routes from './src/routes';

const App = () => {
  enableScreens();
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#31343F" />
        <View style={{flex: 1, backgroundColor: '#24282E'}}>
          <Routes />
        </View>
      </NavigationContainer>
    </>
  );
};

export default App;
