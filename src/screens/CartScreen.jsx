import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {alterCart, clearCart, getCart} from '../api/cartService';

const CartScreen = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);
  const [totalItem, setTotalItem] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const deliveryAmount = 80000;

  const handleGetCart = async () => {
    const userId = await AsyncStorage.getItem('userId');
    const res = await getCart(userId);
    console.log(res);
    if (res.items.length > 0) {
      setItems(res.items);
      console.log(res.items);
      setTotalItem(res.totalItem);
      setTotalAmount(res.totalAmount);
    }
  };

  const handleDecrease = async productVariantId => {
    const userId = await AsyncStorage.getItem('userId');
    const res = await alterCart(userId, {productVariantId, add: false});
    if (res.result.code === 200) {
      await handleGetCart();
    }
  };

  const handleIncrease = async productVariantId => {
    const userId = await AsyncStorage.getItem('userId');
    const res = await alterCart(userId, {productVariantId, add: true});
    if (res.result.code === 200) {
      await handleGetCart();
    }
  };

  const totalBillAmount = () => totalAmount + deliveryAmount;

  const handleClearCart = async () => {
    console.log('handleClearCart');
    const userId = await AsyncStorage.getItem('userId');
    const res = await clearCart(userId);
    console.log(res);
    if (res.result.code === 200) {
      setItems([]);
      setTotalItem(0);
      setTotalAmount(0);
    }
  };

  useEffect(() => {
    handleGetCart();
  }, []);

  const renderCartItem = ({item}) => (
    <View style={styles.cartItem}>
      <Image source={{uri: item.imageUrl}} style={styles.cartImage} />
      <View style={styles.cartDetails}>
        <Text style={styles.cartTitle}>{item.productName}</Text>
        <Text style={styles.cartPrice}>
          {item.price ? item.price.toLocaleString('vi-VN') : '0'}
        </Text>
        <View style={styles.cartActions}>
          <TouchableOpacity
            onPress={() => handleDecrease(item.productVariantId)}
            style={styles.actionButton}>
            <Text style={styles.actionText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => handleIncrease(item.productVariantId)}
            style={styles.actionButton}>
            <Text style={styles.actionText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require('../assets/icons/icon-back.png')} />
        </Pressable>
        <Text style={styles.title}>Carts ({totalItem})</Text>
        <TouchableOpacity onPress={handleClearCart}>
          <Text style={styles.clearCart}>Clear</Text>
        </TouchableOpacity>
      </View>
      {items.length > 0 ? (
        <View style={styles.container}>
          <FlatList
            data={items}
            renderItem={renderCartItem}
            keyExtractor={item => item.id}
            style={styles.cartList}
          />
          <View style={styles.billInfo}>
            <View style={styles.summary}>
              <Text style={styles.summaryTitle}>Order Summary</Text>
              <View style={styles.summaryDetails}>
                <View style={styles.draft}>
                  <Text style={styles.draftTitle}>Total</Text>
                  <Text style={styles.draftAmount}>
                    {totalAmount.toLocaleString('vi-VN')}
                  </Text>
                </View>
                <View style={styles.delivery}>
                  <Text style={styles.deliveryTitle}>Delivery Charge</Text>
                  <Text style={styles.deliveryAmount}>
                    {deliveryAmount.toLocaleString('vi-VN')}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.line} />
            <View style={styles.total}>
              <Text style={styles.totalTitle}>Total Price</Text>
              <Text style={styles.totalAmount}>
                {totalBillAmount().toLocaleString('vi-VN')}
              </Text>
            </View>
          </View>
          <Pressable
            style={styles.checkoutButton}
            onPress={() => navigation.navigate('checkout')}>
            <Text style={styles.checkoutText}>Check Out</Text>
          </Pressable>
        </View>
      ) : (
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            fontFamily: 'Poppins-Medium',
          }}>
          Chưa có sản phẩm nào.
        </Text>
      )}
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
  clearCart: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: 'tomato',
  },
  cartList: {
    marginBottom: 16,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cartImage: {
    width: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 12,
  },
  cartDetails: {
    flex: 1,
    gap: 10,
  },
  cartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartColor: {
    fontSize: 14,
    color: '#888',
  },
  cartPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  cartActions: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  actionButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  actionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  checkoutButton: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#996633',
    marginBottom: 25,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  billInfo: {
    flexDirection: 'column',
    gap: 20,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 25,
    backgroundColor: '#f2e6d9',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  summary: {
    flexDirection: 'column',
    gap: 20,
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  summaryDetails: {
    flexDirection: 'column',
    gap: 5,
  },
  draft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  draftTitle: {
    fontSize: 16,
    fontWeight: 600,
  },
  draftAmount: {
    fontSize: 16,
    fontWeight: 600,
  },
  delivery: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deliveryTitle: {
    fontSize: 16,
    fontWeight: 600,
  },
  deliveryAmount: {
    fontSize: 16,
    fontWeight: 600,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#000',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  totalTitle: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'right',
  },
});

export default CartScreen;
