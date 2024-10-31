/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';

import React, { FC, ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Navigation } from './navigation/Navigation';
import { COLORS } from './theme';
import { AuthProvider } from './context/auth/AuthProvider';
import { SocketProvider } from './context/sockets/SocketsProvider';
// import messaging from '@react-native-firebase/messaging';

const AppState: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AuthProvider>
      <SocketProvider>
        { children }
      </SocketProvider>
    </AuthProvider>
  );
};

function App(): React.JSX.Element {

  // const requestPNPermission = async () => {
  //   const authStatus = await messaging().requestPermission();

  //   const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     console.log('Authorization Status: ', authStatus);
  //     getFcmToken();
  //   }
  // };

  // const getFcmToken = async () => {
  //   const token = await messaging().getToken();
  //   console.log({ token });
  //   return token;
  // };

  // useEffect(() => {
  //   requestPNPermission();

  //   const unsuscribe = messaging().onMessage(async remeoteMessage => {
  //     console.log({ remeoteMessage });
  //   });

  //   return unsuscribe;
  // }, []);

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
