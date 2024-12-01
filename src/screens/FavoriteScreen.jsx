import {
  Alert,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useEffect, useState} from 'react';
import FavoriteProduct from '../components/Product/FavoriteProduct';
import {favoriteProduct, getFavoriteProducts} from '../api/productService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const FavoriteScreen = () => {
  const [userId, setUserId] = useState(0);
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  const getUserId = async () => {
    const userId = await AsyncStorage.getItem('userId');
    setUserId(userId);
  };

  const fetchFavoriteProducts = async () => {
    const userId = await AsyncStorage.getItem('userId');
    const products = await getFavoriteProducts(+userId);
    setProducts(products);
  };

  const removeFavorite = async productId => {
    const res = await favoriteProduct(productId, userId);
    if (res.result.code === 200) {
      Alert.alert(res.result.message);
      await fetchFavoriteProducts();
    }
  };

  useEffect(() => {
    getUserId();
    fetchFavoriteProducts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require('../assets/icons/icon-back.png')} />
        </Pressable>
        <Text style={styles.title}>Favorite products</Text>
        <Text></Text>
      </View>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <FavoriteProduct product={item} onRemoveFavorite={removeFavorite} />
        )}
        scrollEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 40,
    flex: 1,
    paddingHorizontal: 15,
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
});

export default FavoriteScreen;
