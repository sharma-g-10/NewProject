import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './routes';

const AppNavigator = () => {
  

  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};
export default AppNavigator;
