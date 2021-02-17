import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Album from '../screens/Album';
import ModalScreen from '../screens/Modal';

const ModalStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainScreen = () => {
  return(
    <MainStack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor: '#302F2F'
        },
        headerTintColor: '#DEDEDE',
        headerTitleAllowFontScaling: true,
        cardStyle: {
          backgroundColor: '#161616'
        },
        headerBackTitle: 'Voltar',
        headerBackTitleVisible: true,
      }}
    >
      <MainStack.Screen name="Album" component={Album}/>
    </MainStack.Navigator>
  )
}

const Routes = () =>{
  return(
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
        <ModalStack.Screen name="Main" component={MainScreen}
        />
        <ModalStack.Screen name="Modal" component={ModalScreen} options={{headerShown: false}} />
      </ModalStack.Navigator>
    </SafeAreaView>
  );
}

export default Routes;