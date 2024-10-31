/* eslint-disable react/react-in-jsx-scope */

import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/public/LoginScreen';
import { NavigationTabStack } from './tab';
import { COLORS } from '../theme';

const NavigationStack = createStackNavigator();

const status = 'authenticated';

export const Navigation = () => {

    return (
        <NavigationStack.Navigator
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
          <NavigationStack.Screen
            name="LoginScreen"
            component={LoginScreen}
          />
          <NavigationStack.Screen
            name="NavigationTabStack"
            component={NavigationTabStack}
          />
        </NavigationStack.Navigator>
    );
};
