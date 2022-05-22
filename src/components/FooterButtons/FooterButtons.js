import React from 'react';
import * as S from './styles';

const FooterButtons = (props) => {
  const {
    isHome,
    leftButtonName,
    rightButtonName,
    onPressLeft,
    onPressRight,
    isCustom,
    leftIcon,
    rightIcon,
    navigation,
    disableLeft,
    disableRight,
  } = props;

  return (
    <S.Footer>
      <S.FooterButton
        disabled={disableLeft}
        isLeft
        onPress={() => (onPressLeft ? onPressLeft() : navigation.push('Home'))}
        activeOpacity={0.5}
      >
        <S.NavButtonText isActive={isCustom || isHome}>
          {leftButtonName || 'Home'}
        </S.NavButtonText>
        {leftIcon && leftIcon()}
      </S.FooterButton>
      <S.FooterButton
        disabled={disableRight}
        onPress={() =>
          onPressRight ? onPressRight() : navigation.push('Consent')
        }
        activeOpacity={0.5}
      >
        <S.NavButtonText isActive={isCustom || !isHome}>
          {rightButtonName || 'Consents'}
        </S.NavButtonText>
        {rightIcon && rightIcon()}
      </S.FooterButton>
    </S.Footer>
  );
};

export default FooterButtons;
