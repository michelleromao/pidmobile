import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function IMCMsg({imc}) {
  console.log(imc);
  return (
    <View style={styles.container}>
      {imc && 
      (imc < 17) ? (<Text style={styles.textRed}>Muito abaixo do peso</Text>) : 
      ((imc >= 17) && (imc <= 18.49)) ? (<Text style={styles.textRed}>Abaixo do peso</Text>) :
      ((imc >= 18.50) && (imc <= 24.99)) ? (<Text style={styles.textBlue}>Peso normal</Text>) :
      ((imc >= 25 ) && (imc <= 29.99)) ? (<Text style={styles.textRed}>Acima do peso</Text>) :
      ((imc >= 30) &&(imc <= 34.99)) ? (<Text style={styles.textRed}>Obesidade I</Text>) :
      ((imc >= 35) && (imc <= 39.99)) ? (<Text style={styles.textRed}>Obesidade II (severa) </Text>) :
      (<Text style={styles.textRed}>Obesidade III (mórbida) </Text>)
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRed: {
    color: "#DB0000",
    fontSize: 20,
    textAlign: 'center',
    margin:10,
    fontWeight: "bold"
  },
  textBlue: {
    color: "#023562",
    fontSize: 20,
    textAlign: 'center',
    margin:10,
    fontWeight: "bold"
  }
});
