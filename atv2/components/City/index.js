import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Vibration } from 'react-native';



export default function City({photo, city, setVoteCity}) {
  const [vote, setVote] = useState(0);

  const handleVoteCity = useCallback(() =>{
    setVote(vote + 1);
    setVoteCity(vote + 1);
  },[vote]);

  return (
    <View style={styles.container}>
      <Image source={photo} />
      <Text style={styles.text}>{city}</Text>
      <TouchableOpacity  style={styles.button} onPress={handleVoteCity} >
        <Text style={styles.textButton}>VOTE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    height: 67,
    width: 300,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:'row',
    marginBottom: 20,
  },
  text:{
    color: '#4B4B4B',
    flex: 3,
    textAlign: 'center'

  },
  button:{
    height: 67,
    flex: 1,
    backgroundColor: '#52BFA5',
    alignItems:'center',
    justifyContent: 'center',
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,


  },  
  textButton:{
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12
  }

});
