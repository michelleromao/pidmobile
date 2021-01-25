import styled from 'styled-components/native';

import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 90%;
  height: 67px;
  flex-direction: row;
  justify-content: ${(props) => (props.icon ? 'space-between' : 'center')};
  align-items: center;
  padding: 3px 15px;
  background-color: ${(props) => (props.negative ? '#24282E' : '#31343f')};
  border-radius: 13px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  font-variant: small-caps;
`;
