import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppStyle from '../theme/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = () => {
  const cartItems = [
    {
      id: '1',
      name: 'Crescent Cove',
      price: 299,
      color: 'Brown',
      image: 'https://via.placeholder.com/50',
    },
    {
      id: '2',
      name: 'Alvero Chair',
      price: 300,
      color: 'Dark grey',
      image: 'https://via.placeholder.com/50',
    },
    {
      id: '3',
      name: 'Mosaic Chair',
      price: 299,
      color: 'Black',
      image: 'https://via.placeholder.com/50',
    },
  ];

  const recommendations = [
    {
      id: '1',
      name: 'Chopper Willow',
      price: 459,
      image: 'https://via.placeholder.com/50',
    },
    {
      id: '2',
      name: 'Sequila Slab',
      price: 299,
      image: 'https://via.placeholder.com/50',
    },
    {
      id: '3',
      name: 'Mosaic Marvel',
      price: 199,
      image: 'https://via.placeholder.com/50',
    },
  ];

  useEffect(() => {
    const getUserId = async () => {
      const userId = await AsyncStorage.getItem('userId');
      console.log(userId);
    };
    getUserId();
  }, []);

  const renderCartItem = ({item}) => (
    <View style={styles.cartItem}>
      <Image source={{uri: item.image}} style={styles.cartImage} />
      <View style={styles.cartDetails}>
        <Text style={styles.cartTitle}>{item.name}</Text>
        <Text style={styles.cartColor}>{item.color}</Text>
      </View>
      <Text style={styles.cartPrice}>${item.price}</Text>
      <View style={styles.cartActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>1</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderRecommendation = ({item}) => (
    <View style={styles.recommendationItem}>
      <Image source={{uri: item.image}} style={styles.recommendationImage} />
      <Text style={styles.recommendationTitle}>{item.name}</Text>
      <Text style={styles.recommendationPrice}>${item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={AppStyle.StyleCommon.container}>
        <Text style={AppStyle.StyleNotification.textLabel}>Cart</Text>
      </View>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
        style={styles.cartList}
      />
      <View style={styles.promoCodeSection}>
        <Text>Have a promo code?</Text>
        <TextInput
          placeholder="Input promo code here..."
          style={styles.promoInput}
        />
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Recommendation</Text>
      <FlatList
        data={recommendations}
        renderItem={renderRecommendation}
        keyExtractor={item => item.id}
        horizontal
        style={styles.recommendationList}
      />
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>$222 · Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
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
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  cartDetails: {
    flex: 1,
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
  },
  cartActions: {
    flexDirection: 'row',
    alignItems: 'center',
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
  promoCodeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  promoInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  promoButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#000',
    borderRadius: 8,
  },
  promoButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  recommendationList: {
    marginBottom: 16,
  },
  recommendationItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  recommendationImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 8,
  },
  recommendationTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  recommendationPrice: {
    fontSize: 14,
    color: '#888',
  },
  checkoutButton: {
    padding: 16,
    backgroundColor: '#000',
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartScreen;
