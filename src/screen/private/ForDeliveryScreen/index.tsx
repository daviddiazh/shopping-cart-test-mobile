/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../../components/Header';
import { styles } from '../ForPrepareScreen/styles';
import { useSocketProvider } from '../../../context/sockets/SocketsProvider';
import { useAxios } from '../../../hooks/useAxios';
import { IProduct } from '../../../interfaces/products';

export const ForDeliveryScreen = () => {

  const { socket } = useSocketProvider();
  const [ orders, setOrders ] = useState([]);
  const { get } = useAxios();

  socket?.on('get-orders', (data: any) => {
    setOrders(data?.filter((o: any) => o?.status === 'walking'));
  });

  const fetch = async () => {
    const { data } = await get('/api/orders');
    setOrders(data?.filter((o: any) => o?.status === 'walking'));
  };

  useEffect(() => {
    fetch();
  }, [orders]);

  const handleOrder = (order: any) => {
    socket?.emit('update-order', {...order, newStatus: 'done'});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Text style={styles.title}>Pedidos para Entregar</Text>

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
