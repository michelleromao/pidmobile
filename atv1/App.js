import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Cabecalho from "./components/Cabecalho";
import Corpo from "./components/Corpo";
import Disciplina from "./components/Disciplina";


export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho name={"Michelle Romão"} course={"Design Digital"} />
      <Corpo />
      <Disciplina subject={"Projeto de Interfaces para Dispositivos Móveis"} />
      <Disciplina subject={"Design e Inovação"} />
      <Disciplina subject={"Projeto Integrado 4"} />
      <Disciplina subject={"Concepção de Produto"} />
      <Disciplina subject={"Fundamentos de Banco de Dados"} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24282E',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
