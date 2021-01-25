import React from 'react';

import FeatherIcon from 'react-native-vector-icons/Feather';

import {Container, ButtonText} from './styles';

const Button = ({icon, negative, text, ...rest}) => {
  return (
    <Container {...rest} icon={icon} negative={negative}>
      <ButtonText>{text}</ButtonText>
      {icon && <FeatherIcon name="chevron-right" size={20} color="#fff" />}
    </Container>
  );
};

export default Button;
