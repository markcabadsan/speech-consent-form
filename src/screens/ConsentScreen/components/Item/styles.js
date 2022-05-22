import styled from 'styled-components/native';

export const Item = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 54px;
  background-color: ${(props) => props.backgroundColor};
`;

export const Name = styled.Text`
  font-family: 'Product Sans';
  font-size: 16px;
  line-height: 19px;
  color: #333333;
`;

export const Language = styled.Text`
  font-family: 'Product Sans';
  font-size: 12px;
  line-height: 15px;
  color: #aaaaaa;
`;

export const Play = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  background: #d8d8d8;
  justify-content: center;
  align-items: center;
  border-radius: 36px;
  margin-left: 26px;
`;

export const ConsentGivenContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
