import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import TitleSection from './components/TitleSection';
import City from './components/City';
import Result from './components/Result';
import Details from './components/Details';

import Fortaleza from './assets/fortaleza.png'
import Quixada from './assets/quixada.png'
import Limoeiro from './assets/limoeiro.png'
import Juazeiro from './assets/juazeiro.png'

var width = Dimensions.get('window').width;


export default function App() {
  return (
    <>
    <View style={styles.bar}/>

    <View style={styles.container}>

      <TitleSection text="a melhor cidade"/>

      <City photo={Fortaleza} city="Fortaleza"/>
      <City photo={Quixada} city="Quixadá"/>
      <City photo={Limoeiro} city="Limoeiro do Norte"/>
      <City photo={Juazeiro} city="Juazeiro do Norte"/>

      <TitleSection text="resultados"/>

      <View style={styles.containerResults}>
        <Result photo={Fortaleza}/>
        <Result photo={Quixada}/>
        <Result photo={Limoeiro}/>
        <Result photo={Juazeiro}/>
      </View>

     <Details  />
      <StatusBar style="inverted"  />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  bar:{
    height: 31,
    marginBottom: 32,
    backgroundColor: '#52BFA5'
  },
  container: {
    flex: 1,
    backgroundColor: '#FEFEFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerResults:{
    width: 300,
    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom: 2
  }
});
