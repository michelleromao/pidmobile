import React from 'react';

import {Container, TextInput} from './styles';

const Input = ({...rest}) => {
  return (
    <Container>
      <TextInput
        keyboardAppearance="dark"
        {...rest}
        placeholderTextColor="#686B6F"
      />
    </Container>
  );
};

export default Input;
