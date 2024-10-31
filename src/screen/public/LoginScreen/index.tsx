import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useAuth } from '../../../context/auth/AuthProvider';
import { Role } from '../../../context/auth/AuthContext';

export const LoginScreen = () => {

  const { login } = useAuth();

  const handleAuth = (role: Role) => {
    login(role);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => handleAuth('user')}
      >
        <Text style={styles.buttonText}>Ingresar como Usuario</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => handleAuth('business')}
      >
        <Text style={styles.buttonText}>Ingresar como Negocio</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => handleAuth('delivery')}
      >
        <Text style={styles.buttonText}>Ingresar como Repartidor</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
