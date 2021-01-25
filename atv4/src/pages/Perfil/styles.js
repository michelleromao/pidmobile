import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  background-color: #31343f;
  padding: 15px 30px;
  margin-top: 50%;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;
export const Content = styled.View`
  align-self: flex-start;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 18px;
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
