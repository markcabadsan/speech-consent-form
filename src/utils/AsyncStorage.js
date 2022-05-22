import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    const ret = await AsyncStorage.setItem('@storage_Key', jsonValue);
  } catch (e) {
    console.log('storeData error', e);
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('getData error', e);
  }
};
