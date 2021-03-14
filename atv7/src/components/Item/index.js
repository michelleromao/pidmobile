import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

import Button from "../Button/";

const Item = ({id, course, name, age}) => {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.course}>{course}</Text>
        <View style={styles.contentDetails}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>-</Text>
          <Text style={styles.text}>{age}</Text>
        </View>
      </View>
      <View style={styles.contentDetails}>
        <TouchableOpacity 
          style={[styles.action, styles.edit]} 
          onPress={() => {navigation.navigate("Edit", {id, course, name, age})}}>
            <Feather name="edit-2" size={20} color="#E5E5E5" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.action, styles.remove]} 
          onPress={() => navigation.navigate("Delete", {id, name, course})}>
            <Ionicons name="ios-close" size={20} color="#E5E5E5" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: 20,
    borderColor: '#52BFA5',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  contentDetails: {
    flexDirection: 'row',
    
  },
  text:{
    color: '#52BFA5',
    fontSize: 18,
    marginRight: 5,
    marginTop: 5

  },
  course:{
    fontWeight: 'bold',
    color: '#52BFA5',
    fontSize: 18,
  },
  action:{
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  edit:{
    backgroundColor: "#BDBF52",
    marginRight: 15
  },
  remove: {
    backgroundColor: "#BF5252",
  },
  backgroundModal: {
    backgroundColor: "#00000025",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Item;