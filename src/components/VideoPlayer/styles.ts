import styled from 'styled-components/native';
import Video from 'react-native-video';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export const Poster = styled.ImageBackground`
  height: 100%;
`;

export const Play = styled(Video)`
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
