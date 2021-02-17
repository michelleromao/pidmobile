import React, {useEffect, useState} from 'react';
import { useRoute } from '@react-navigation/native';

import {View, StyleSheet, ActivityIndicator, SafeAreaView, ScrollView} from 'react-native';
import CardTitleItem from '../../components/CardTitleItem';
import CardMusicItem from '../../components/CardMusicItem';
import CardBackItem from '../../components/CardBackItem';

import api from "../../services/index";

const Modal = () => {
  const route = useRoute();
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState();

  useEffect(() => {
    const loadDetails = async () => {
     const {data} = await api.get(`/albums/${route.params.id}/tracks.json`);
     setDetails(data.tracks);
     setLoading(true);
    }
    loadDetails();
  },[]);

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <CardTitleItem 
          uri={{uri: `https://raw.githubusercontent.com/san650/ten/master/apps/music/${route.params.img}`}}
          album={route.params.album}
          artist={route.params.artist}
        />
        <View style={{marginTop: '10%', marginBottom: '10%'}}>
          <ScrollView style={{width: "90%"}} 
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            {loading ? 
              details && details.map((detail, index) =>
              <CardMusicItem key={detail.id} 
                duration={detail.duration} 
                index={details.indexOf(detail)} 
                title={detail.title}/>
              )
            : 
            <ActivityIndicator size="large" color="#161616"/>}
          </ScrollView>
        </View>
        <CardBackItem />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   width: '100%',
   alignItems: 'center',
   justifyContent: 'center',
   flex: 1,
  },
  content:{
    width: '90%',
    borderRadius: 15,
    padding: "5%",
    backgroundColor: "#DEDEDE",
  },
});

export default Modal;