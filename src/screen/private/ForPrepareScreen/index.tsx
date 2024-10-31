/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSocketProvider } from '../../../context/sockets/SocketsProvider';
import { useAxios } from '../../../hooks/useAxios';
import { styles } from './styles';
import { IProduct } from '../../../interfaces/products';
import { Header } from '../../../components/Header';

export const ForPrepareScreen = () => {

  const { socket } = useSocketProvider();
  const [ orders, setOrders ] = useState([]);
  const { get } = useAxios();

  socket?.on('get-orders', (data) => {
    setOrders(data?.filter((o: any) => o?.status === 'preparing'));
  });

  const fetch = async () => {
    const { data } = await get('/api/orders');
    setOrders(data?.filter((o: any) => o?.status === 'preparing'));
  };

  useEffect(() => {
    fetch();
  }, [orders]);

  const handleOrder = (order: any) => {
    socket?.emit('update-order', {...order, newStatus: 'walking'});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Text style={styles.title}>Pedidos en Preparación</Text>

        <View style={styles.cards}>
          {
            orders?.length > 0 ? orders?.map((order: any) => (
              order?.products?.map((product: IProduct) => (
                <View style={styles.card} key={product?.id}>
                  <Image source={{ uri: product?.image }} width={80} height={80} />
                  <View style={{ width: '70%' }}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.orderName}>{ product?.title}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'  }}>
                      <Text>{ order?.status }</Text>
                      <TouchableOpacity onPress={() => handleOrder(order)}>
                        <Text>Terminar</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))
            )) : (
              <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center', }}>
                <Text>Parece que no hay ordenes pendientes</Text>
              </View>
            )
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
