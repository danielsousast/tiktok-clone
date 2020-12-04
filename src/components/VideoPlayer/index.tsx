import React from 'react';

import {Poster, Play} from './styles';

interface ComponentProps {
  poster: any;
  video: any;
  isPlay: boolean;
}

const VideoPlayer: React.FC<ComponentProps> = ({poster, video, isPlay}) => {
  return isPlay ? (
    <Play
      source={video}
      hideShutterView={true}
      resizeMode="cover"
      controls={true}
    />
  ) : (
    <Poster source={poster} />
  );
};

export default VideoPlayer;
