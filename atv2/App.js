import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import TitleSection from './components/TitleSection';
import City from './components/City';
import Result from './components/Result';
import Details from './components/Details';

import Fortaleza from './assets/fortaleza.png'
import Quixada from './assets/quixada.png'
import Limoeiro from './assets/limoeiro.png'
import Juazeiro from './assets/juazeiro.png'

export default function App() {
  const [voteFortaleza, setVoteFortaleza] = useState(0);
  const [voteQuixada, setVoteQuixada] = useState(0);
  const [voteLimoeiro, setVoteLimoeiro] = useState(0);
  const [voteJuazeiro, setVoteJuazeiro] = useState(0);

  const handleVoteFortaleza = useCallback((qtdFortaleza) =>{
    setVoteFortaleza(qtdFortaleza);
  },[]);

  const handleVoteQuixada = useCallback((qtdQuixada) =>{
    setVoteQuixada(qtdQuixada);
  },[]);

  const handleVoteLimoeiro = useCallback((qtdLimoeiro) =>{
    setVoteLimoeiro(qtdLimoeiro);
  },[]);

  const handleVoteJuazeiro = useCallback((qtdJuazeiro) =>{
    setVoteJuazeiro(qtdJuazeiro);
  },[]);

  return (
    <>
    <View style={styles.bar}/>

    <View style={styles.container}>

      <TitleSection text="a melhor cidade"/>

      <City photo={Fortaleza} city="Fortaleza" setVoteCity={handleVoteFortaleza}/>
      <City photo={Quixada} city="Quixadá" setVoteCity={handleVoteQuixada}/>
      <City photo={Limoeiro} city="Limoeiro do Norte" setVoteCity={handleVoteLimoeiro}/>
      <City photo={Juazeiro} city="Juazeiro do Norte" setVoteCity={handleVoteJuazeiro}/>

      <TitleSection text="resultados"/>

      <View style={styles.containerResults}>
        <Result photo={Fortaleza} quantity={voteFortaleza}/>
        <Result photo={Quixada} quantity={voteQuixada}/>
        <Result photo={Limoeiro} quantity={voteLimoeiro}/>
        <Result photo={Juazeiro} quantity={voteJuazeiro}/>
      </View>

     <Details 
     result={
       [
        {city:'Fortaleza',votes: voteFortaleza},
        {city:'Quixada',votes: voteQuixada},
        {city:'Limoeiro',votes: voteLimoeiro},
        {city:'Juazeiro',votes: voteJuazeiro},

      ]} />
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
