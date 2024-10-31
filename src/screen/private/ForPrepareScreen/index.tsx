/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSocketProvider } from '../../../context/sockets/SocketsProvider';
import { useAxios } from '../../../hooks/useAxios';
import { styles } from './styles';

export const ForPrepareScreen = () => {

  const { socket } = useSocketProvider();
  const [ orders, setOrders ] = useState([]);
  const { get } = useAxios();

  socket?.on('get-orders', (data) => {
    console.log({ data })
    setOrders(data?.filter((o: any) => o?.status === 'preparing'));
  });

  const fetch = async () => {
    const { data } = await get('http://localhost:9000/api/orders'); //todo
    setOrders(data?.filter((o: any) => o?.status === 'preparing'));
  };

  useEffect(() => {
    fetch().then(d => d);
  }, []);

  return (
    <SafeAreaView>
      <Text style={styles.title}>Pedidos en Preparación</Text>

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
