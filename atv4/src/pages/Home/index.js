import React from 'react';

import Button from '../../components/Button';

import {Container} from './styles';

const Home = ({navigation}) => {
  return (
    <Container>
      <Button
        icon
        text="cadastro"
        onPress={() => navigation.navigate('Cadastro')}
      />
      <Button icon text="imc" onPress={() => navigation.navigate('IMC')} />
      <Button icon text="sobre" onPress={() => navigation.navigate('Sobre')} />
    </Container>
  );
};

export default Home;
