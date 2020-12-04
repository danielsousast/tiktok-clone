import React from 'react';
import {
  Container,
  Menu,
  Avatar,
  Count,
  Icon,
  User,
  Sound,
  SoundBg,
} from './styles';

interface CountType {
  like: string;
  comment: string;
  share: string;
}

interface ComponentProps {
  count: CountType;
  avatar: any;
}

const Sidebar: React.FC<ComponentProps> = ({count, avatar}) => {
  return (
    <Container>
      <Menu>
        <User>
          <Avatar resizeMode="cover" source={avatar} />
        </User>
      </Menu>

      <Menu>
        <Icon
          resizeMode="contain"
          source={require('../../assets/icons/like.png')}
        />
        <Count>{count.like}</Count>
      </Menu>

      <Menu>
        <Icon
          resizeMode="contain"
          source={require('../../assets/icons/comment.png')}
        />
        <Count>{count.comment}</Count>
      </Menu>

      <Menu>
        <Icon
          resizeMode="contain"
          source={require('../../assets/icons/share.png')}
        />
        <Count>{count.share}</Count>
      </Menu>

      <Menu>
        <SoundBg>
          <Sound resizeMode="cover" source={avatar} />
        </SoundBg>
      </Menu>
    </Container>
  );
};

export default Sidebar;
