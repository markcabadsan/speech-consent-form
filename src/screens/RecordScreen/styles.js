import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: white;
  flex: 1;
`;

export const Title = styled.Text`
  font-family: 'Product Sans';
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #444444;
  font-weight: bold;
  margin: 72px 0 36px 0;
`;

export const ConsentText = styled.Text`
  font-family: 'Product Sans';
  font-size: 16px;
  line-height: 19px;
  color: #666666;
  text-align: justify;
  margin: 0 24px 36px 24px;
`;

export const ResponseText = styled.Text`
  font-family: 'Product Sans';
  font-size: 16px;
  line-height: 19px;
  color: #666666;
  margin-left: 24px;
`;

export const Button = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background: #d8d8d8;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 60px;
`;

export const ResponseTextContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
