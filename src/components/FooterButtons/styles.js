import styled from 'styled-components/native';

export const NavButtonText = styled.Text`
  font-family: 'Product Sans';
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => (props.isActive ? '#666666' : '#AAAAAA')};
  margin-right: 15px;
`;

export const FooterButton = styled.TouchableOpacity`
  border: 1px solid #d8d8d8;
  justify-content: center;
  align-items: center;
  height: 40px;
  background: #ffffff;
  flex: 1;
  flex-direction: row;
`;
export const Footer = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 0;
`;
