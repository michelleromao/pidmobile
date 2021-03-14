import React, {useState, useCallback} from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import {firestore} from "../../services/firebase";

import Input from "../../components/Input";
import Button from "../../components/Button";

const Add = () => {
  const navigation = useNavigation();
  const [curso, setCurso] = useState("");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  const handleAddStudent = useCallback(async () => {
    if((curso && nome && idade) !== undefined &&
       (curso && nome && idade) !== "" &&
       (curso && nome && idade) !== " "
      ){
        const docAdd = await firestore.collection("alunos").doc();
        const ref = await docAdd.set({
          curso: curso,
          nome: nome,
          idade: idade,
        });
        navigation.navigate("List");
    }else{
      alert("Você precisa preencher todos os dados")
    }
  }, [curso,
    nome,
    idade]);

  return(
    <View style={styles.container}>
      <Input 
        label={"Curso*"}
        onChangeText={(value) => setCurso(value)} />
      <Input 
        label={"Nome*"}
        onChangeText={(value) => setNome(value)} />
      <Input 
        label={"Idade*"}
        onChangeText={(value) => setIdade(value)}
        keyboardType="numeric"
         />
      <View style={styles.button}>
        <Button text={"Adicionar"} onPress={() => handleAddStudent()}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    marginTop: 20,
    width: '100%',
  }
});

export default Add;