import React from 'react';
import {View} from 'react-native';

import Button from '../../components/Button';

import Photo from '../../assets/pexels-photo-5941929.jpeg';
import {Container, Content, Text, Strong, Image} from './styles';

const Perfil = ({navigation, route}) => {
  return (
    <Container>
      <Text>
        <Strong>Perfil</Strong>
      </Text>
      <Image source={Photo} />
      <Content>
        <Text>
          <Strong>Nome:</Strong> {route.params.name}
        </Text>
        <Text>
          <Strong>Idade:</Strong> {route.params.age}
        </Text>
        <Text>
          <Strong>E-mail:</Strong> {route.params.mail}
        </Text>
      </Content>
      <Button
        text="home"
        negative
        onPress={() => navigation.navigate('Atividade 4')}
      />
    </Container>
  );
};

export default Perfil;
