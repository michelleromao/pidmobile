import React from 'react';
import {SafeAreaView} from 'react-native';
import Firebase from './src/components/Firebase';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Firebase />
    </SafeAreaView>
  );
};

export default App;
