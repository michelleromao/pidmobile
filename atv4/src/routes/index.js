import React from 'react';
import {SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import FeatherIcon from 'react-native-vector-icons/Feather';

import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home';
import IMC from '../pages/IMC';
import Perfil from '../pages/Perfil';
import Resultado from '../pages/Resultado';
import Sobre from '../pages/Sobre';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#31343F',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleAllowFontScaling: true,
        cardStyle: {backgroundColor: '#312e38'},
        headerBackTitle: 'Voltar',
        headerBackTitleVisible: true,
        headerBackTitleStyle: {fontSize: 12},
        headerBackImage: () => (
          <FeatherIcon name="chevron-left" size={20} color="#fff" />
        ),
      }}>
      <MainStack.Screen name="Atividade 4" component={Home} />
      <MainStack.Screen name="Cadastro" component={Cadastro} />
      <MainStack.Screen name="IMC" component={IMC} />
      <MainStack.Screen name="Resultado" component={Resultado} />
      <MainStack.Screen name="Sobre" component={Sobre} />
    </MainStack.Navigator>
  );
};

const ModalScreen = () => (
  <SafeAreaView style={{flex: 1}}>
    <RootStack.Navigator
      mode="modal"
      headerMode="none"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'transparent'},
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({current: {progress}}) => ({
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
      <RootStack.Screen name="Main" component={MainScreen} />
      <RootStack.Screen
        name="Perfil"
        component={Perfil}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  </SafeAreaView>
);
export default ModalScreen;
