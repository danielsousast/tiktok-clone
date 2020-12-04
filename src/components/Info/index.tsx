import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {UserType} from '../Hero';
import {Checked, Container, Description, Music, User, UserName} from './styles';

interface ComponentProps {
  user: UserType;
}

const Info: React.FC<ComponentProps> = ({user}) => {
  return (
    <Container>
      <User>
        <UserName>{user.username}</UserName>
        <Checked source={require('../../assets/icons/checked.png')} />
      </User>
      <Description>{user.description}</Description>
      <Music>
        <Feather name="music" size={13} />
        {user.music}
      </Music>
    </Container>
  );
};

export default Info;
