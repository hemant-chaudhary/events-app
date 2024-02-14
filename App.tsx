/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Text,
  View,
} from 'react-native';


import { store } from './src/store'
import { Provider } from 'react-redux'
import Home from './src/screens/Home/Home';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import EventDetails from './src/screens/EventDetails/EventDetails';
import TrackingList from './src/screens/TrackingList/TrackingList';
import { RootStackParamList } from './src/types';

const Stack = createStackNavigator<RootStackParamList>();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={EventDetails} />
        <Stack.Screen name="UserTrackingList" component={TrackingList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const App = () => {

  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
}

export default App;
