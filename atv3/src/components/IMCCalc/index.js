import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import IMCMsg from "../IMCMsg";

export default function IMCCalc({values}) {
  const [imc, setImc] = useState();

  useEffect(()=>{
    setImc((values.weight/(values.height*values.height)).toFixed(2));
  })

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seu IMC é {imc}</Text>
      <IMCMsg imc={imc}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 20,
    textAlign: 'center',
    margin:10,
    fontWeight: "bold"
  },
});
