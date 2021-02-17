import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardBackItem = () => {
  const navigation = useNavigation(); 
  return(
    <TouchableOpacity onPress={() => {navigation.goBack()}} style={styles.borderButton}>
      <Text style={styles.textBorderButton}>Voltar</Text>
    </TouchableOpacity> 
  )
}
const styles = StyleSheet.create({
  borderButton:{
    width: '100%',
    height: 51,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'#302F2F',
    borderWidth: 3,
  },
  textBorderButton:{
    color: '#302F2F',
    fontWeight: 'bold',
    fontSize: 18
  }, 
});

export default CardBackItem;
