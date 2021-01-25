import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${(props) =>
    props.red ? '#DB0000' : props.green ? '#52BFA5' : '#fff'};
  font-size: ${(props) => (props.red || props.green ? '24px' : '18px')};
  margin-bottom: 17px;
`;

export const Strong = styled.Text`
  font-weight: 700;
`;

export const Image = styled.Image`
  width: 108px;
  height: 108px;
  align-self: center;
  border-radius: 100px;
`;
