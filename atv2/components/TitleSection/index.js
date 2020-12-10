import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TitleSection({text}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.divider}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 22
  },
  text:{
    color: '#4B4B4B',
    fontWeight: "bold",
    fontVariant: ['small-caps'],
    marginBottom: 9,
    fontSize: 14,
    
  },
  divider: {
    backgroundColor: '#52BFA5',
    opacity: 0.5, 
    width: 300,
    height: 1,
  }
});
