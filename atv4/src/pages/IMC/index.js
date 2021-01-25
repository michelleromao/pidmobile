import React, {useState} from 'react';
import {ScrollView, Alert} from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {Container} from './styles';

const IMC = ({navigation}) => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();

  const handleNavigate = () => {
    if ((weight && height) !== undefined) {
      navigation.push('Resultado', {
        weight: weight,
        height: height,
      });
    } else {
      Alert.alert(
        'Campo(s) vazio(s)',
        'preencha os campos de texto',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{flex: 1}}
      keyboardShouldPersistTaps="handled">
      <Container>
        <Input
          placeholder="Peso"
          onChangeText={(text) => setWeight(text)}
          keyboardType="numeric"
        />
        <Input
          placeholder="Altura"
          onChangeText={(text) => setHeight(text)}
          keyboardType="numeric"
        />

        <Button text="ok" onPress={() => handleNavigate()} />
      </Container>
    </ScrollView>
  );
};

export default IMC;
