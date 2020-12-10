import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

var width = Dimensions.get('window').width;

export default function Details({more, less}) {
  const [moreVote, setMoreVote] = useState(() => more ? more.join(' - ') : ' ');
  const [lessVote, setLessVote] = useState(() => less ? less.join(' - ') : ' ');

  return (
    <>
    <View style={styles.divider}/>

    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Mais votada(s): 
      </Text>
      <Text  style={styles.textBody}>
          {moreVote}
      </Text>
      
    </View>

    <View style={styles.divider}/>

    <View style={styles.container}>
      <Text style={styles.textBody}>
        Menos votada(s): 
      </Text>
      <Text style={styles.textTitle}>
        {lessVote}
      </Text>
    </View>

    <View style={styles.divider}/>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: 300,
    opacity: 0.8, 
  },
  divider:{
    backgroundColor: '#52BFA5',
    opacity: 0.3, 
    width: width,
    height: 1,
    marginBottom: 20,
    marginTop: 20,
  },
  textTitle: {fontWeight:'bold', color: '#4B4B4B'},
  textBody: {fontWeight:'bold', color: '#4B4B4B'}
});
