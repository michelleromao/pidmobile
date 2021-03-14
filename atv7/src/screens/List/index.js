import React, {useCallback, useEffect, useState} from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import Item from "../../components/Item";
import Button from "../../components/Button";

import { firestore } from "../../services/firebase";
import { ScrollView } from 'react-native-gesture-handler';

const List = () => {
  const navigation = useNavigation();
  const [list, setList] = useState();
  const isFocused = useIsFocused();

  const loadData = useCallback(async () => {
    const docRef = await firestore.collection("alunos").get();
    var students = [];
    console.log("aq")
    docRef.forEach((doc) => {
        students.push({
        id: doc.id,
        curso: doc.data().curso,
        nome: doc.data().nome,
        idade: doc.data().idade
      });
    })
    setList(students);
  },[]);
 
  useEffect(() => {
    if(isFocused){
      loadData();
    }
  },[isFocused, loadData])

  return(
    <View style={styles.container}>
      <View style={styles.button}>
        <Button text={"Adicionar"} onPress={() => navigation.navigate("Add")}/>
      </View>
      <ScrollView style={{marginBottom: 20}}>
      {list && list.map(item => (
        <Item 
          key={item.id}
          id={item.id} 
          course={item.curso} 
          name={item.nome} 
          age={item.idade}/>
      ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    margin: 20,
    width: 208
  }
})

export default List;