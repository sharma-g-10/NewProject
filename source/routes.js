import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
     <Stack.Screen name='Home' component={HomeScreen} />
     <Stack.Screen name='Details' component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
