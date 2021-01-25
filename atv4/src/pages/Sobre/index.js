import React from 'react';

import Button from '../../components/Button';

import Photo from '../../assets/myself.png';
import {Container, Text, Image, Strong} from './styles';

const Sobre = ({navigation}) => {
  return (
    <Container>
      <Image source={Photo} />

      <Text>
        <Strong>Michelle Romão - Design Digital, UFC</Strong>
      </Text>

      <Text>
        Snow falls down from the gray sky; Ashes fall in the sea; Plans are
        thrown to the wayside; Frozen days of the week;
      </Text>
      <Button
        text="home"
        negative
        onPress={() => navigation.navigate('Atividade 4')}
      />
    </Container>
  );
};

export default Sobre;
