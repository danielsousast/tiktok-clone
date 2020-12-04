import ViewPager from '@react-native-community/viewpager';
import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

const {height} = Dimensions.get('window');

export const HeroContainer = styled(ViewPager)`
  height: ${height}px;
`;

export const Gradient = styled(LinearGradient)`
  height: 100%;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

export const Center = styled.View`
  flex: 1;
  flex-direction: row;
`;
