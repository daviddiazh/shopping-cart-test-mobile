/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from './styles';
import { View } from 'react-native';
import { Icon } from '../../components/Icon';
import { COLORS } from '../../theme';
import { ProductsScreen } from '../../screen/private/ProductsScreen';
import { MyOrders } from '../../screen/private/MyOrders';
import { ShoppingCart } from '../../screen/private/ShoppingCart';

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
              <IconTabBar {...tabBarProps} iconName="file-06" />
            ),
          }}
          component={MyOrders}
        />

        <NavigationTab.Screen
          name="CartScreen"
          options={{
            tabBarLabel: 'Carrito',
            tabBarIcon: (tabBarProps: any) => (
              <IconTabBar {...tabBarProps} iconName="shopping-bag-03" />
            ),
          }}
          component={ShoppingCart}
        />
      </NavigationTab.Navigator>
    );
};
