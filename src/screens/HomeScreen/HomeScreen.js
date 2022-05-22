import React, { useState, useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Platform } from 'react-native';
import {
  requestMultiple,
  PERMISSIONS,
  checkMultiple,
} from 'react-native-permissions';
import * as S from './style';
import FooterButtons from '../../components/FooterButtons/FooterButtons';

const HomeScreen = (props) => {
  const { navigation } = props;
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(null);
  const [name, setName] = useState('');
  const [arePermissionsAsked, setArePermissionsAsked] = useState(false);

  useEffect(() => {
    !arePermissionsAsked && askPermissions();
  });

  const askPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const { WRITE_EXTERNAL_STORAGE, READ_EXTERNAL_STORAGE, RECORD_AUDIO } =
          PERMISSIONS.ANDROID;

        const grants = await requestMultiple([
          WRITE_EXTERNAL_STORAGE,
          READ_EXTERNAL_STORAGE,
          RECORD_AUDIO,
        ]);

        console.log('write external stroage', grants);

        checkMultiple([
          WRITE_EXTERNAL_STORAGE,
          READ_EXTERNAL_STORAGE,
          RECORD_AUDIO,
        ]).then((statuses) => {
          console.log(
            'WRITE_EXTERNAL_STORAGE',
            statuses[WRITE_EXTERNAL_STORAGE]
          );
          console.log('READ_EXTERNAL_STORAGE', statuses[READ_EXTERNAL_STORAGE]);
          console.log('RECORD_AUDIO', statuses[RECORD_AUDIO]);
          if (
            statuses[WRITE_EXTERNAL_STORAGE] === 'granted' &&
            statuses[READ_EXTERNAL_STORAGE] === 'granted' &&
            statuses[RECORD_AUDIO] === 'granted'
          ) {
            setArePermissionsAsked(true);
            console.log('Permissions granted');
          } else {
            setArePermissionsAsked(false);
            console.log('All required permissions not granted');
          }
        });
      } catch (err) {
        console.warn(err);
      }
    }
  };

  return (
    <S.Container>
      <S.Title>Consent Form</S.Title>
      <S.FieldContainer>
        <S.Label>Name</S.Label>
        <S.TextInput
          placeholder="Enter your name"
          onChangeText={(text) => setName(text)}
          value={name}
        />
      </S.FieldContainer>
      <S.FieldContainer marginTop={24}>
        <S.Label>Language</S.Label>
        <S.DropDown
          open={open}
          value={language}
          items={[
            { label: 'English', value: 'english' },
            { label: 'French', value: 'french' },
          ]}
          setOpen={setOpen}
          setValue={setLanguage}
          placeholder="Select language"
          placeholderStyle={{
            fontWeight: 'normal',
            fontFamily: 'Product Sans',
            color: '#AAAAAA',
            fontSize: 16,
            paddingHorizontal: 5,
          }}
          textStyle={{
            fontWeight: 'normal',
            fontFamily: 'Product Sans',
            color: '#333333',
            fontSize: 16,
            paddingHorizontal: 5,
          }}
          labelStyle={{
            fontWeight: 'normal',
            fontFamily: 'Product Sans',
            color: '#333333',
            fontSize: 16,
          }}
          dropDownContainerStyle={{
            borderWidth: 1,
            borderColor: '#d8d8d8',
            borderStyle: 'solid',
            borderRadius: 0,
          }}
        />
      </S.FieldContainer>
      <S.NavButton
        disabled={!name || !language}
        onPress={() => navigation.push('Record', { name, language })}
        activeOpacity={0.5}
      >
        <S.NavButtonText>Next</S.NavButtonText>
        <AntDesign name="arrowright" size={20} color="#666666" />
      </S.NavButton>
      <FooterButtons disableLeft isHome navigation={navigation} />
    </S.Container>
  );
};

export default HomeScreen;
