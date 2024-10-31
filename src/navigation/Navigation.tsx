/* eslint-disable react/react-in-jsx-scope */

import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/public/LoginScreen';
import { NavigationTabStack } from './tab';
import { COLORS } from '../theme';
import { useAuth } from '../context/auth/AuthProvider';

const NavigationStack = createStackNavigator();

export const Navigation = () => {

  const { status } = useAuth();

  return (
    <NavigationStack.Navigator
      key={status}
      id="Navigation"
      initialRouteName={
        status === 'authenticated' ? 'NavigationTabStack' : 'PublicNavigation'
      }
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        headerShown: false,
        cardStyle: {
          backgroundColor: COLORS.gray,
        },
      }}>
      {status === 'authenticated' ? (
        <NavigationStack.Screen
          name="NavigationTabStack"
          component={NavigationTabStack}
        />
      ) : (
        <NavigationStack.Screen
          name="PublicNavigation"
          component={LoginScreen}
        />
      )}
    </NavigationStack.Navigator>
  );
};
