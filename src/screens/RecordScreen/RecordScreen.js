import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import Tts from 'react-native-tts';
import Voice from '@react-native-community/voice';
// import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import Constants from './constants';
import * as S from './styles';
import { getData, storeData } from '../../utils/AsyncStorage';
import FooterButtons from '../../components/FooterButtons/FooterButtons';

// const audioRecorderPlayer = new AudioRecorderPlayer();

const RecordScreen = (props) => {
  const { route, navigation } = props;
  const { language, name } = route.params;
  const selectedLanguage = language.toUpperCase();
  const [hideMic, setHideMic] = useState(false);
  const [response, setResponse] = useState('');
  const [areVoiceListenersAdded, setAreVoiceListenersAdded] = useState(false);
  const [isConsentRead, setIsConsentRead] = useState(false);
  // const [recordURI, setRecordURI] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    !areVoiceListenersAdded && addVoiceListeners();

    !isConsentRead &&
      Tts.getInitStatus().then(
        () => {
          Tts.addEventListener('tts-finish', (event) => {
            // startRecord();
            startListening();
          });
          Tts.speak(Constants.CONSENT_TEXT[selectedLanguage]);
          setIsConsentRead(true);
        },
        (err) => {
          if (err.code === 'no_engine') {
            Tts.requestInstallEngine();
          }
        }
      );

    return () => {
      Voice.stop();
      Voice.destroy();
      Voice.removeAllListeners;

      // stopRecord();

      Tts.stop();
      Tts.removeAllListeners('tts-finish');
    };
  }, []);

  const addVoiceListeners = async () => {
    Voice.onSpeechStart = (e) => console.log('onSpeechStart', e);
    Voice.onSpeechEnd = (e) => {
      // stopRecord();
      console.log('onSpeechEnd', e);
    };

    Voice.onSpeechResults = (e) => {
      const results = e.value;
      const responseYes = Constants.RESPONSE.YES[selectedLanguage];
      const responseNo = Constants.RESPONSE.NO[selectedLanguage];
      if (results.includes(responseYes.toLowerCase())) {
        setResponse(responseYes);
      } else if (results.includes(responseNo.toLowerCase())) {
        setResponse(responseNo);
      } else {
        setResponse('');
      }

      setHideMic(true);
    };

    Voice.onSpeechError = (e) => {
      console.log('onSpeechError', e);
      setResponse('');
      setHideMic(true);
    };

    setAreVoiceListenersAdded(true);
  };

  const startListening = async () => {
    try {
      const locale = Constants.VOICE_LOCALE[selectedLanguage];
      await Voice.start(locale);
    } catch (e) {
      console.error(e);
    }
  };

  const displayResponseText = () => {
    if (response) {
      return `You responded “${response}”`;
    } else {
      return 'Invalid/No response';
    }
  };

  const retry = () => {
    setHideMic(false);
    startListening();
  };

  // const startRecord = async () => {
  //   const result = await audioRecorderPlayer.startRecorder();
  //   setRecordURI(result);
  //   console.log(result);
  // };

  // const stopRecord = async () => {
  //   const result = await audioRecorderPlayer.stopRecorder();
  //   console.log(result);
  // };

  // const startPlay = async () => {
  //   console.log('onStartPlay');
  //   const msg = await audioRecorderPlayer.startPlayer();
  //   console.log(msg);
  // };

  // const pausePlay = async () => {
  //   await audioRecorderPlayer.pausePlayer();
  // };

  // const stopPlay = async () => {
  //   console.log('onStopPlay');
  //   audioRecorderPlayer.stopPlayer();
  // };

  const saveData = async () => {
    const json = {
      name,
      language,
      response,
    };
    const savedData = await getData();
    const previousItems = savedData ? savedData.items : [];
    storeData({ items: [...previousItems, json] }).then(
      navigation.push('Success')
    );
  };

  return (
    <S.Container>
      <S.Title>Consent Form</S.Title>
      <S.ConsentText>{Constants.CONSENT_TEXT[selectedLanguage]}</S.ConsentText>
      {!hideMic && (
        <S.Button disabled={true} activeOpacity={0.5}>
          <Ionicons name="ios-mic-sharp" size={20} color="#666666" />
        </S.Button>
      )}
      {hideMic && (
        <S.ResponseTextContainer>
          <S.Button
            activeOpacity={0.5}
            onPress={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Entypo name="controller-play" size={20} color="#666666" />
            ) : (
              <Foundation name="pause" size={20} color="#666666" />
            )}
          </S.Button>
          <S.ResponseText>{displayResponseText()}</S.ResponseText>
        </S.ResponseTextContainer>
      )}
      {hideMic && (
        <FooterButtons
          isCustom
          leftButtonName="Retry"
          leftIcon={() => (
            <AntDesign name="reload1" size={20} color="#666666" />
          )}
          onPressLeft={() => retry()}
          rightButtonName="Save"
          rightIcon={() => (
            <AntDesign name="arrowright" size={20} color="#666666" />
          )}
          onPressRight={() => saveData()}
        />
      )}
    </S.Container>
  );
};

export default RecordScreen;
