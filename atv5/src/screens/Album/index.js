import React, {useEffect, useState} from 'react';

import {View, ActivityIndicator, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Card from '../../components/Card';

import api from "../../services/index";

const Album = () => {
  const [albums, setAlbums] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadAlbum = async () => {
      const {data} = await api.get('/albums.json');
      setAlbums(data.albums);
      setLoading(true);
    }
    loadAlbum();
  },[]);

  return(
    <>
      <SafeAreaView style={styles.container} >
      <ScrollView style={{width: "90%"}} 
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {loading ? 
        albums && albums.map((album) => 
          <Card data={album} key={album.id}/>
        )
      : (
          <ActivityIndicator color="#fff" style={{marginTop: '100%'}}/>
        )}
      </ScrollView>
      </SafeAreaView>
    </>
  )}

const styles = StyleSheet.create({
  container: {
   width: '100%',
   alignItems: 'center',
  },
});

export default Album;