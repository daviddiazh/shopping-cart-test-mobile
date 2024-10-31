/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useAxios } from '../../../hooks/useAxios';
import { styles } from './styles';
import { IProduct } from '../../../interfaces/products';
import { Icon } from '../../../components/Icon';
import { Header } from '../../../components/Header';
import { useSocketProvider } from '../../../context/sockets/SocketsProvider';
import { useNavigation } from '@react-navigation/native';

export const ProductsScreen = () => {

  const { fakeApiGet } = useAxios();
  const { socket } = useSocketProvider();
  const navigate: any = useNavigation();
  const [ products, setProducts ] = useState([]);

  const fetch = async () => {
    const { data } = await fakeApiGet();
    setProducts(data);
  };

  useEffect(() => {
    fetch().then(d => d);
  }, []);

  const selectArticle = (product: IProduct) => {
    socket.emit('create-order', product);
    navigate.navigate('OrdersScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <Header />
            <Text style={styles.title}>Productos</Text>
            <View style={styles.cards}>
                {
                    products?.length > 0 && products?.map((product: IProduct) => (
                        <View style={styles.card} key={product?.id}>
                            <Image source={{ uri: product?.image }} width={80} height={80} />
                            <View style={{ width: '70%' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.productName}>{ product?.title}</Text>
                                    <Text
                                        style={styles.productDescription}
                                    >
                                        { product?.description?.length > 100
                                            ? product?.description?.substring(0, 100)
                                            : product?.description
                                        }
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.price}>$ { product?.price }</Text>
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => selectArticle(product)}>
                                        <Icon name="shopping-bag-03" size={13} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))
                }
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};
