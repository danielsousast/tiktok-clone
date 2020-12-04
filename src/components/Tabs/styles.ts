import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

interface StyledProps {
  active?: boolean;
}

export const TabsContainer = styled.View`
  height: 59px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
  border-top-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.2);
  flex-direction: row;
`;

export const Menu = styled.TouchableOpacity`
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.Image.attrs({resizeMode: 'contain'})`
  height: 32px;
`;

export const MenuText = styled.Text<StyledProps>`
  font-size: 9px;
  margin-top: -3px;
  color: ${({active}) => (active ? '#fff' : 'rgba(255,255,255,0.6)')};
`;

export const Border = styled(LinearGradient)`
  width: 44px;
  height: 28px;
  border-radius: 8px;
  align-items: center;
`;

export const Button = styled.View`
  width: 36px;
  height: 28px;
  background: #fff;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
