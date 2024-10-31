/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from './styles';
import { View } from 'react-native';
import { Icon } from '../../components/Icon';
import { COLORS } from '../../theme';
import { ProductsScreen } from '../../screen/private/ProductsScreen';
import { MyOrders } from '../../screen/private/MyOrders';
import { useAuth } from '../../context/auth/AuthProvider';
import { ForPrepareScreen } from '../../screen/private/ForPrepareScreen';
import { ForDeliveryScreen } from '../../screen/private/ForDeliveryScreen';

const NavigationTab = createBottomTabNavigator();

const IconTabBar: React.FC<any> = ({focused, iconName}) => (
    <View>
      <Icon
        name={iconName}
        color={focused ? COLORS.primary.default : COLORS.dark}
        size={15}
      />
    </View>
  );

export const NavigationTabStack: React.FC = () => {

  const { role } = useAuth();

  return (
    <NavigationTab.Navigator
      id="NavigationTabStack"
      initialRouteName="ProductsScreen"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: styles.tabBarLabelStyles,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarActiveTintColor: COLORS.primary.default,
        tabBarItemStyle: {borderTopWidth: 0},
      }}
      sceneContainerStyle={{backgroundColor: '#fff'}}>
      {
        role === 'user' && (
          <>
            <NavigationTab.Screen
              name="ProductsScreen"
              options={{
                tabBarLabel: 'Inicio',
                tabBarIcon: (tabBarProps: any) => (
                  <IconTabBar {...tabBarProps} iconName="casa-04" />
                ),
              }}
              component={ProductsScreen}
            />

            <NavigationTab.Screen
              name="OrdersScreen"
              options={{
                tabBarLabel: 'Ordenes',
                tabBarIcon: (tabBarProps: any) => (
                  <IconTabBar {...tabBarProps} iconName="shopping-bag-03" />
                ),
              }}
              component={MyOrders}
            />
          </>
        )
      }

      {
        role === 'business' && (
          <NavigationTab.Screen
            name="ForPrepareScreen"
            options={{
              tabBarLabel: 'Por Preparar',
              tabBarIcon: (tabBarProps: any) => (
                <IconTabBar {...tabBarProps} iconName="archivo" />
              ),
            }}
            component={ForPrepareScreen}
          />
        )
      }

      {
        role === 'delivery' && (
          <NavigationTab.Screen
            name="ForDeliveryScreen"
            options={{
              tabBarLabel: 'Por Entregar',
              tabBarIcon: (tabBarProps: any) => (
                <IconTabBar {...tabBarProps} iconName="corazon-mano" />
              ),
            }}
            component={ForDeliveryScreen}
          />
        )
      }
      
    </NavigationTab.Navigator>
  );
};
