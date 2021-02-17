import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const CardTitleItem = ({uri, artist, album}) => {
  return(
    <View style={styles.header}>
      <Image source={uri} style={styles.image}/>
      <View style={styles.details}>
        <Text style={styles.artist}>{artist}</Text>
        <Text style={styles.album}>{album}</Text>
      </View>  
    </View>  
  )
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  artist:{
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 13,
    color: "#343434",
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 15,
  },
  album:{
    fontWeight: '500',
    fontSize: 14,
    color: "#343434",
  },
  details:{
    marginLeft: 16
  },
});

export default CardTitleItem;
