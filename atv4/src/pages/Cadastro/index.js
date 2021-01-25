import React, {useState, useCallback} from 'react';
import {ScrollView, Alert} from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container} from './styles';

const Cadastro = ({navigation}) => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [mail, setMail] = useState();

  const handleNavigate = useCallback(() => {
    if ((name && age && mail) !== undefined) {
      navigation.navigate('Perfil', {
        name: name,
        age: age,
        mail: mail,
      });
    } else {
      Alert.alert(
        'Campo(s) vazio(s)',
        'preencha os campos de texto',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  }, [name, age, mail, navigation]);

  return (
    <ScrollView
      contentContainerStyle={{flex: 1}}
      keyboardShouldPersistTaps="handled">
      <Container>
        <Input placeholder="Nome" onChangeText={(text) => setName(text)} />
        <Input
          placeholder="Idade"
          onChangeText={(text) => setAge(text)}
          keyboardType="numeric"
        />
        <Input placeholder="E-mail" onChangeText={(text) => setMail(text)} />
        <Button text="ok" onPress={() => handleNavigate()} />
      </Container>
    </ScrollView>
  );
};

export default Cadastro;
