import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {getOrders} from '../api/orderService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default TransactionHistoryScreen = ({route}) => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    console.log('fetchOrders');
    const userId = await AsyncStorage.getItem('userId');
    console.log('userId', userId);
    const res = await getOrders(userId);
    console.log(res);
    setOrders(res);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.orderDetails}>
      <View style={styles.fields}>
        <Text style={styles.fieldTitle}>Order: </Text>
        <Text>#{item?.id}</Text>
      </View>
      <View style={styles.fields}>
        <Text style={styles.fieldTitle}>Total Amout: </Text>
        <Text>
          {item?.totalAmount ? item?.totalAmount.toLocaleString('vi-VN') : '0'}
        </Text>
      </View>
      <View style={styles.fields}>
        <Text style={styles.fieldTitle}>Created At: </Text>
        <Text>{item?.createdAt}</Text>
      </View>
      <View style={styles.fields}>
        <Text style={styles.fieldTitle}>Shipping Address: </Text>
        <Text>{item?.shippingAddress}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require('../assets/icons/icon-back.png')} />
        </Pressable>
        <Text style={styles.title}>Transaction History</Text>
        <Text></Text>
      </View>
      <FlatList
        style={styles.ordersContainer}
        data={orders}
        keyExtractor={({item}) => item?.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  ordersContainer: {},
  orderDetails: {
    flexDirection: 'column',
    gap: 20,
    padding: 10,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  fields: {
    flexDirection: 'column',
    gap: 5,
  },
  fieldTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});
