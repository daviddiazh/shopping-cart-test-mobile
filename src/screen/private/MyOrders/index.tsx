/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
import { Image, SafeAreaView, Text, View } from 'react-native';
import { useSocketProvider } from '../../../context/sockets/SocketsProvider';
import { useEffect, useState } from 'react';
import { styles } from './styles';
import { useAxios } from '../../../hooks/useAxios';

export const MyOrders = () => {

  const [ orders, setOrders ] = useState([]);
  const { socket } = useSocketProvider();
  const { get } = useAxios();

  socket?.on('get-orders', (data) => {
    setOrders(data);
  });

  const fetch = async () => {
    const { data } = await get('http://localhost:9000/api/orders'); //todo
    setOrders(data);
  };

  useEffect(() => {
    fetch().then(d => d);
  }, []);

  return (
    <SafeAreaView>
      <Text style={styles.title}>Mis Ordenes</Text>

      <View style={styles.cards}>
        {
          orders?.length > 0 && orders?.map((order) => (
            order?.products?.map((product) => (
              <View style={styles.card} key={product?.id}>
                <Image source={{ uri: product?.image }} width={80} height={80} />
                <View style={{ width: '70%' }}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.orderName}>{ product?.title}</Text>
                  </View>
                  <Text>{ order?.status }</Text>
                </View>
              </View>
            ))
          ))
        }
      </View>
    </SafeAreaView>
  );
};
