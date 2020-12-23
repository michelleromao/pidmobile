import React, {useState, useCallback} from 'react';
import { StyleSheet,Text, TextInput, Button, View } from 'react-native';

import IMCCalc from "../IMCCalc";

export default function IMCApp() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [calc, setCalc] = useState(false);
  const [values, setValues] = useState({height: 0,weight:0});

  const calculate = useCallback(() => {
    if(!weight | !height){
      alert("O valor da altura e do peso não podem estar vazios.");
      setCalc(false);
    }
    else if((weight === 0) || (height === 0)){
      alert("O valor da altura e do peso não pode ser 0.");
      setCalc(false);
    }else{
      setCalc(true);
      setValues({height,weight});
    }
  },[height,
    weight]);
    
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calcule seu IMC</Text>
      <TextInput 
        style={styles.textInput}
        placeholder="Digite a altura (metros)"
        keyboardType="number-pad"
        onChangeText={text => setHeight(Number(text))}
      />
       <TextInput 
        style={styles.textInput}
        placeholder="Digite o peso (kg)"
        keyboardType="number-pad"
        onChangeText={text => setWeight(Number(text))}
      />
      <View style={styles.viewButton}>
        <Button title="Calcular" onPress={() => (calculate())}/>
      </View>
      {calc && 
      <>
        <IMCCalc values={values}/>
      </>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 20,
    textAlign: 'center',
    margin:10,
    fontWeight: "bold"
  },
  textInput:{
    height: 45,
    width: "95%",
    borderColor: "gray",
    borderWidth: 2,
    paddingLeft: 20,
    marginBottom: 20
  },
  viewButton:{
    width: "93%",
    margin: 15,
    backgroundColor: "red"
  }
});
