import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Disciplina({ subject }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{subject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 336,
    height: 67,
    backgroundColor: '#31343F',
    borderRadius: 13,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,

  },

  text: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
