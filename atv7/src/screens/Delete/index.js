import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";
import { firestore } from "../../services/firebase";

import Button from "../../components/Button";

const Delete = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  const handleDelete = useCallback(async () => {
    const res = await firestore.collection("alunos").doc(route.params.id).delete();
    navigation.navigate("List");
  },[]);

  return(
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textHeader}>Excluir aluno</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Você tem certeza que deseja excluir 
            <Text style={styles.student}> {route.params.name}</Text> do curso <Text style={styles.student}>{route.params.course}</Text>?
          </Text>
        </View>
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button red text="Não" onPress={() => navigation.navigate("List")}/>
          </View>
          <View style={styles.button}>
            <Button text="Sim" onPress={() => handleDelete()}/>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  container:{
    backgroundColor: "#E5E5E5",
    width: "100%",
    borderRadius: 15
  },
  header:{
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    width: "100%",
    backgroundColor: "#52BFA5",
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textHeader:{
    fontSize: 18,
    color: "#E5E5E5",
  },
  content:{
    marginTop: 20,
    padding: 20,

  },  
  text:{
    fontSize: 18,
    color: "#52BFA5",
  },
  student: {
    fontWeight: 'bold'
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 20,
  },
  button:{
    width: '45%',
  }
});

export default Delete;