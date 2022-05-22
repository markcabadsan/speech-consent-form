import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import FooterButtons from '../../components/FooterButtons/FooterButtons';
import * as S from './styles';
import { getData } from '../../utils/AsyncStorage';
import Item from './components/Item';

const ConsentScreen = (props) => {
  const { navigation } = props;
  const [items, setItems] = useState([]);
  const [isItemSet, setIsItemSet] = useState(false);

  useEffect(() => {
    !isItemSet && getItems();
  });

  const getItems = async () => {
    const savedData = await getData();
    const items = savedData ? savedData.items : [];
    setItems(items);
    setIsItemSet(true);
  };

  return (
    <S.Container>
      <S.Title>All Consents</S.Title>
      <S.HeaderContainer>
        <S.Header>Details</S.Header>
        <S.Header>Consent Given</S.Header>
      </S.HeaderContainer>
      <FlatList
        data={items}
        renderItem={({ index, item }) => <Item index={index} item={item} />}
      />
      <FooterButtons disableRight navigation={navigation} />
    </S.Container>
  );
};

export default ConsentScreen;
