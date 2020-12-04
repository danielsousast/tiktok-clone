import React from 'react';
import {StatusBar} from 'react-native';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Tabs from '../../components/Tabs';
import {HomeContainer} from './styles';
import api from '../../services/api';

const Home: React.FC = () => {
  return (
    <>
      <HomeContainer>
        <Header />
        <Hero videos={api} />
        <Tabs />
      </HomeContainer>

      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
    </>
  );
};

export default Home;
