import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Result({photo, quantity}) {
  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.image} />
      <Text  style={styles.text}>{quantity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    overflow: 'hidden',
  },
  image:{
    width: 60.82,
    height: 60.82,
    opacity: 0.3,
    alignItems:'center',
    justifyContent: 'center',
    position: "relative"
  },
  text:{
    opacity: 1,
    color: '#282828',
    fontWeight: 'bold',
    overflow: 'hidden',
    position: "absolute"

  }
});
