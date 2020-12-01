import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Cabecalho({ name, course }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.course}>{course}</Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    backgroundColor: '#4C2E90',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 30
  },
  name: {
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 16,
  },
  course: {
    color: '#fff',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 16,
  }
});
