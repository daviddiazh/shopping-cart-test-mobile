/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React, { FC, ReactNode } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Navigation } from './navigation/Navigation';
import { COLORS } from './theme';
import { AuthProvider } from './context/auth/AuthProvider';

const AppState: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  );
}

function App(): React.JSX.Element {

  return (
    <AppState>
      <NavigationContainer>
        <SafeAreaView />
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.gray}}>
          <Navigation />
        </SafeAreaView>
      </NavigationContainer>
    </AppState>
  );
}

export default App;
