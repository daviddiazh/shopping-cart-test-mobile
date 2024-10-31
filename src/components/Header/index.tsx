import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '../Icon';
import { styles } from './styles';
import { useAuth } from '../../context/auth/AuthProvider';

export const Header = () => {

  const { logout } = useAuth();

  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.text}>by. David Diaz H</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={logout}>
                <Icon name="cerrar-sesion" size={15} />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};
