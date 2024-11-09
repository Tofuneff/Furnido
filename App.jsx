import React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import RootStack from './src/navigation/StackNavigator';
import {StatusBar} from 'react-native';

const Navigation = createStaticNavigation(RootStack);
const App = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <Navigation />
    </>
  );
};

export default App;
