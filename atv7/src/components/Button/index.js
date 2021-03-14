import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = ({text, red, ...rest}) => {
  return(
    <View style={styles.container}>
      <TouchableOpacity {...rest} style={red ? [styles.button, styles.red] : [styles.button, styles.green]}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
  },
  green: {
    backgroundColor: "#52BFA5",
  },
  red: {
    backgroundColor: "#BF5252",
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 15
  },
  text:{
    color: "#E5E5E5",
    fontSize: 18,
  }
});

export default Button;