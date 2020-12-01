import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import Student from "../assets/student.png";

export default function Corpo() {
  return (
    <View style={styles.container}>
      <Image source={Student} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 108,
    height: 108,
    borderRadius: 100,
  }
});
