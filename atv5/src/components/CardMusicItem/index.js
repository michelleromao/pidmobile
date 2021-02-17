import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const CardMusicItem = ({index, duration, title}) => {
  return(
    <View style={styles.tracks}>
      <Text >{`${index}. [${duration}] - ${title}`}</Text>
    </View>  
  )
}
const styles = StyleSheet.create({
  tracks:{
    marginBottom: '2%',
  }, 
});

export default CardMusicItem;
