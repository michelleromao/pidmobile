import React from 'react';
import {SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Add from "../screens/Add";
import Edit from "../screens/Edit";
import List from "../screens/List";
import Modal from "../screens/Delete";


const MainStack = createStackNavigator();
const ModalStack = createStackNavigator();

const MainScreen = () => {
  return(
    <MainStack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor: '#52BFA5'
        },
        headerTitleAlign: 'center',
        headerTintColor: '#E5E5E5',
        headerTitleAllowFontScaling: true,
        cardStyle: {
          backgroundColor: '#E5E5E5'
        },
        headerBackTitle: 'Voltar',
        headerBackTitleVisible: true,
      }}
    >
      <MainStack.Screen name="List" component={List}/>
      <MainStack.Screen name="Add" component={Add}/>
      <MainStack.Screen name="Edit" component={Edit}/>
    </MainStack.Navigator>
  )
}

const Routes = () => (
  <SafeAreaView style={{flex: 1}}>
    <ModalStack.Navigator
      mode="modal"
      headerMode="none"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5, 0.9, 1],
              outputRange: [0, 0.25, 0.7, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: 'clamp',
            }),
          },
        }),
      }}>
      <ModalStack.Screen name="Main" component={MainScreen}/>
      <ModalStack.Screen name="Delete" component={Modal} options={{headerShown: false}}/>
    </ModalStack.Navigator>
  </SafeAreaView>
)

export default Routes;