import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FooterButtons from '../../components/FooterButtons/FooterButtons';
import * as S from './styles';

const SuccessScreen = (props) => {
  const { navigation } = props;

  return (
    <S.Container>
      <S.Title>Consent Form</S.Title>
      <S.SavedIcon>
        <Octicons name="checklist" size={20} color="#666666" />
      </S.SavedIcon>
      <S.Message>
        Thank you, your consent has been successfully saved!
      </S.Message>
      <S.NavButton
        onPress={() => navigation.push('Consent')}
        activeOpacity={0.5}
      >
        <S.NavButtonText>View all consents</S.NavButtonText>
        <AntDesign name="arrowright" size={20} color="#666666" />
      </S.NavButton>
      <FooterButtons isHome navigation={navigation} />
    </S.Container>
  );
};

export default SuccessScreen;
