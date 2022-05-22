import React, { useState } from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import * as S from './styles';
import Constants from './../../constants';

const Item = (props) => {
  const { index, item } = props;
  const { name, language, response } = item;
  const colors = ['#F4F4F4', '#FFFFFF'];
  const [isPlaying, setIsPlaying] = useState(false);
  const selectedLanguage = language.toUpperCase();
  const responseYes = Constants.RESPONSE.YES[selectedLanguage];

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <S.Item backgroundColor={colors[index % colors.length]}>
      <View>
        <S.Name>{name}</S.Name>
        <S.Language>Language: {capitalize(language)}</S.Language>
      </View>
      <S.ConsentGivenContainer>
        {response === responseYes ? (
          <Ionicons name="checkmark" size={25} color="#666666" />
        ) : (
          <Ionicons name="close-outline" size={30} color="#666666" />
        )}
        <S.Play activeOpacity={0.5} onPress={() => setIsPlaying(!isPlaying)}>
          {!isPlaying ? (
            <Entypo name="controller-play" size={20} color="#666666" />
          ) : (
            <Foundation name="pause" size={20} color="#666666" />
          )}
        </S.Play>
      </S.ConsentGivenContainer>
    </S.Item>
  );
};

export default Item;
