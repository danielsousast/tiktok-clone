import React, {useState} from 'react';
import {View} from 'react-native';
import Info from '../Info';
import Sidebar from '../Sidebar';
import VideoPlayer from '../VideoPlayer';
import {Center, Gradient, HeroContainer} from './styles';

export interface UserType {
  username: string;
  description: string;
  avatar: any;
  music: string;
}

interface Video {
  id: number;
  poster: any;
  user: UserType;
  count: any;
  video: any;
}

interface ComponentProps {
  videos: Video[];
}

const Hero: React.FC<ComponentProps> = ({videos}) => {
  const [selected, setSelected] = useState(0);

  return (
    <HeroContainer
      orientation="vertical"
      onPageSelected={(e) => setSelected(e.nativeEvent.position)}
      initialPage={0}>
      {videos.map((item, index) => (
        <View key={item.id}>
          <Gradient
            locations={[0, 0.26, 0.6, 1]}
            colors={[
              'rgba(26,26,26,0.6)',
              'rgba(26,26,26,0)',
              'rgba(26,26,26,0)',
              'rgba(26,26,26,0.6)',
            ]}>
            <Center>
              <Info user={item.user} />
              <Sidebar count={item.count} avatar={item.user.avatar} />
            </Center>
          </Gradient>
          <VideoPlayer
            poster={item.poster}
            video={item.video}
            isPlay={selected === index}
          />
        </View>
      ))}
    </HeroContainer>
  );
};

export default Hero;
