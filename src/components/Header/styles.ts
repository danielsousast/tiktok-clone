import {Platform} from 'react-native';
import styled from 'styled-components/native';

interface StyledProps {
  bold?: boolean;
}

export const HeaderContainer = styled.View`
  top: 22px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: absolute;
  z-index: 1;
`;

export const HeaderMenu = styled.Text<StyledProps>`
  color: #fff;
  font-size: ${({bold}) => (bold ? '16px' : '15px')};
  letter-spacing: 0.8px;
  margin: 11px 12px;
  font-weight: ${({bold}) => (bold ? 'bold' : 'normal')};
  opacity: ${({bold}) => (bold ? 1 : 0.8)};
  margin-top: ${Platform.OS === 'ios' ? '16px' : 0};
`;

export const HeaderSeparator = styled.View`
  width: 1px;
  height: 13px;
  background: #d8d8d8;
  opacity: 0.6;
`;
