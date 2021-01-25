import React, {useState, useCallback, useEffect} from 'react';

import Button from '../../components/Button';

import {Container, Content, Text, Strong, ner} from './styles';

const Resultado = ({navigation, route}) => {
  const [imc, setImc] = useState();

  const calculate = useCallback(() => {
    setImc(route.params.weight / (route.params.height * route.params.height));
  }, [route.params.weight, route.params.height]);

  useEffect(() => {
    calculate();
  }, [calculate]);

  return (
    <Container>
      <Text>
        <Strong>Seu IMC é: </Strong> {imc}
      </Text>
      <Text>
        <Strong>
          {imc && imc < 17 ? (
            <Text red>Muito abaixo do peso</Text>
          ) : imc >= 17 && imc <= 18.49 ? (
            <Text red>Abaixo do peso</Text>
          ) : imc >= 18.5 && imc <= 24.99 ? (
            <Text green>Peso normal</Text>
          ) : imc >= 25 && imc <= 29.99 ? (
            <Text red>Acima do peso</Text>
          ) : imc >= 30 && imc <= 34.99 ? (
            <Text red>Obesidade I</Text>
          ) : imc >= 35 && imc <= 39.99 ? (
            <Text red>Obesidade II (severa) </Text>
          ) : (
            <Text red>Obesidade III (mórbida) </Text>
          )}
        </Strong>
      </Text>
      <Button
        text="home"
        negative
        onPress={() => navigation.navigate('Atividade 4')}
      />
    </Container>
  );
};

export default Resultado;
