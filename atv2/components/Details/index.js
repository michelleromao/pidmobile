import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

var width = Dimensions.get('window').width;

export default function Details({result}) {
  const [moreVote, setMoreVote] = useState([]);
  const [lessVote, setLessVote] = useState([]);

  useEffect(()=>{
 
    const values = result.map(item =>{
      return item.votes;
    });
    const max = values.reduce((a,b) =>{
      return Math.max(a,b);
    });
    const min = values.reduce((a,b) =>{
      return Math.min(a,b);
    });

    let arrMore = [];
    let arrLess = [];

    result.find((item)=>{
      if(item.votes === max && max != 0){
        arrMore.push(item.city);
      }
    });
    result.find((item)=>{
      if(item.votes === min && min != 0 && min != max){
        arrLess.push(item.city);
      }
    });
    setMoreVote(arrMore);
    setLessVote(arrLess);

  },[result]);

  return (
    <>
    <View style={styles.divider}/>

    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Mais votada(s): 
      </Text>
      <Text  style={styles.textBody}>
          {moreVote.join(" - ")}
      </Text>
      
    </View>

    <View style={styles.divider}/>

    <View style={styles.container}>
      <Text style={styles.textBody}>
        Menos votada(s): 
      </Text>
      <Text style={styles.textTitle}>
        {lessVote.join(" - ")}
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
