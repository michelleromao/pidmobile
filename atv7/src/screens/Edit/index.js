import React, {useState, useCallback} from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import {firestore} from "../../services/firebase";

import Input from "../../components/Input";
import Button from "../../components/Button";

const Edit = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [curso, setCurso] = useState(route.params.course);
  const [nome, setNome] = useState(route.params.name);
  const [idade, setIdade] = useState(route.params.age);
  
  const handleAddStudent = useCallback(async () => {
    if((curso && nome && idade) !== undefined &&
       (curso && nome && idade) !== "" &&
       (curso && nome && idade) !== " " &&
       (curso !== route.params.course) ||
       (nome !== route.params.name) ||
       (idade !== route.params.age)
      ){
        const docUpdate = await firestore.collection("alunos").doc(route.params.id);
        const ref = await docUpdate.update({
          curso: curso,
          nome: nome,
          idade: idade,
        });
        navigation.navigate("List");
    }
  }, [curso,
    nome,
    idade]);

  return(
    <View style={styles.container}>
      <Input 
        label={"Curso"}
        onChangeText={(value) => setCurso(value)}
        defaultValue={route.params.course} />
      <Input 
        label={"Nome"}
        onChangeText={(value) => setNome(value)}
        defaultValue={route.params.name} />
      <Input 
        label={"Idade"}
        onChangeText={(value) => setIdade(value)}
        keyboardType="numeric"
        defaultValue={route.params.age}
         />
      <View style={styles.button}>
        <Button text={"Editar"} onPress={() => handleAddStudent()}/>
        <View style={styles.margin}>
          <Button text={"Cancelar"} red onPress={() => navigation.navigate("List")}/>
         </View>
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
  },
  margin: {
    marginTop: 15
  }
});

export default Edit;