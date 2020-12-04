import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Border, Button, Icon, Menu, MenuText, TabsContainer} from './styles';

const Tabs: React.FC = () => {
  return (
    <TabsContainer>
      <Menu>
        <Icon source={require('../../assets/icons/home.png')} />
        <MenuText active={true}>Início</MenuText>
      </Menu>

      <Menu>
        <Icon source={require('../../assets/icons/discover.png')} />
        <MenuText>Descobrir</MenuText>
      </Menu>

      <Menu>
        <Border
          start={{x: 1, y: 0}}
          locations={[0, 0.5, 0.5, 1]}
          colors={['#f42365', '#f42365', '#37d7cf', '#37d7cf']}>
          <Button>
            <Feather name="plus" size={20} />
          </Button>
        </Border>
      </Menu>

      <Menu>
        <Icon source={require('../../assets/icons/message.png')} />
        <MenuText>Entrada</MenuText>
      </Menu>

      <Menu>
        <Icon source={require('../../assets/icons/profile.png')} />
        <MenuText>Eu</MenuText>
      </Menu>
    </TabsContainer>
  );
};

export default Tabs;
