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

export const NavButton = styled.TouchableOpacity`
  width: 181px;
  height: 40px;
  background: #d8d8d8;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-right: 24px;
  margin-top: 36px;
  flex-direction: row;
`;

export const NavButtonText = styled.Text`
  font-family: 'Product Sans';
  font-size: 16px;
  line-height: 19px;
  color: #666666;
  margin-right: 15px;
`;

export const FooterButton = styled.TouchableOpacity`
  border: 1px solid #d8d8d8;
  justify-content: center;
  align-items: center;
  height: 40px;
  background: #ffffff;
  flex: 1;
`;
export const Footer = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 0;
`;

export const Message = styled.Text`
  font-family: 'Product Sans';
  font-size: 16px;
  line-height: 19px;
  color: #666666;
  text-align: center;
  margin: 20px 24px 0 24px;
`;

export const SavedIcon = styled.View`
  width: 60px;
  height: 60px;
  background: #d8d8d8;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 60px;
`;
