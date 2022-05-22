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

export const Header = styled.Text`
  font-family: 'Product Sans';
  font-size: 16px;
  line-height: 19px;
  color: #666666;
  text-align: center;
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

export const Play = styled.View`
  width: 36px;
  height: 36px;
  background: #d8d8d8;
  justify-content: center;
  align-items: center;
  border-radius: 36px;
  margin-left: 26px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 24px 16px 24px;
`;

export const Item = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 54px;
  background-color: ${(props) => props.backgroundColor};
`;

export const ConsentGivenContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
