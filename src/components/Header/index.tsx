import React from 'react';

import {View} from 'react-native';
import {HeaderContainer, HeaderMenu, HeaderSeparator} from './styles';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderMenu>Seguindo</HeaderMenu>
      <HeaderSeparator />
      <HeaderMenu bold>Para você</HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;
