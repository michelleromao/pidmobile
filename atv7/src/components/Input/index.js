import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Input = ({label, ...rest}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      <TextInput style={styles.input} {...rest}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    borderColor: "#52BFA5",
    borderWidth: 2,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    height: 59,
    marginBottom: 20
  },
  label: {
    color: "#52BFA5",
    fontSize: 18,
    marginLeft: 15,
  },
  input:{
    flex:1,
    paddingLeft: 10,
    fontWeight: 'bold',
    color: "#52BFA5",
    fontSize: 18,
  }
});

export default Input;