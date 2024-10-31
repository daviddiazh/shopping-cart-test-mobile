/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Navigation } from './navigation/Navigation';
import { COLORS } from './theme';

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <SafeAreaView />
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.gray}}>
        <Navigation />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
