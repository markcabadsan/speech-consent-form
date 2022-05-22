import DropDownPicker from 'react-native-dropdown-picker';
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

export const Label = styled.Text`
  font-family: 'Product Sans';
  font-size: 16px;
  line-height: 19px;
  color: #666666;
  margin: 0 0 10px 16px;
`;

export const TextInput = styled.TextInput`
  border: 1px solid #d8d8d8;
  padding: 10px 16px 11px 16px;
  font-family: 'Product Sans';
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
`;

export const DropDown = styled(DropDownPicker)`
  border: 1px solid #d8d8d8;
  font-family: 'Product Sans';
  border-radius: 0;
  padding: 10px 10px 11px 10px;
`;

export const FieldContainer = styled.View`
  margin: 0 24px;
  margin-top: ${(props) => props.marginTop || 0}px;
`;

export const NavButton = styled.TouchableOpacity`
  width: 103px;
  height: 40px;
  background: #d8d8d8;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
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
