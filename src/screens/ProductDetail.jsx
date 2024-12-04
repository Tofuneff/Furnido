import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  Pressable,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import AppStyle from '../theme/styles';
import {favoriteProduct, getProductDetails} from '../api/productService';
import {useNavigation} from '@react-navigation/native';
import {alterCart} from '../api/cartService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Product from '../components/Product/Product';

const screenWidth = Dimensions.get('window').width;

const ProductDetail = ({route}) => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [product, setProduct] = useState(null);
  const flatListRef = useRef(null);
  const flatListThumbnailRef = useRef(null);
  const [userId, setUserId] = useState('');
  const [viewedProductList, setViewedProductList] = useState([]);

  const {productId} = route.params;
  const [isVisible, setIsVisible] = useState(false);

  const fetchProductDetails = async () => {
    const userId = await AsyncStorage.getItem('userId');
    const data = await getProductDetails(productId, userId);
    setProduct(data);
    addToViewedProducts(data);
  };

  const addToViewedProducts = async product => {
    console.log('addToViewedProducts');
    const viewedProductsJson = await AsyncStorage.getItem('viewedProducts');
    if (viewedProductsJson == null) {
      const viewedProducts = new Array(...product);
      await AsyncStorage.setItem(
        'viewedProducts',
        JSON.stringify(viewedProducts),
      );
    }
    const viewedProducts = JSON.parse(viewedProductsJson);
    console.log('viewedProducts', viewedProducts);
    const viewedProductIds = new Set(viewedProducts.map(product => product.id));
    console.log('viewedProductIds', viewedProductIds);
    if (!viewedProductIds.has(product.id)) {
      viewedProducts.push(product);
      setViewedProductList(viewedProducts.filter(p => p.id !== product.id));
      await AsyncStorage.setItem(
        'viewedProducts',
        JSON.stringify(viewedProducts),
      );
    }
    console.log('viewedProductList', viewedProductList);
  };

  useEffect(() => {
    const getUserId = async () => {
      const userId = await AsyncStorage.getItem('userId');
      setUserId(userId);
    };
    getUserId();
  }, []);

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  const onScroll = e => {
    const scrollPosition = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(scrollPosition / screenWidth);
    setActiveIndex(currentIndex);
    if (product?.images && currentIndex < product?.images.length) {
      flatListThumbnailRef.current.scrollToIndex({
        index: currentIndex,
        animated: true,
      });
    }
  };

  const scrollToIndex = index => {
    flatListRef.current.scrollToIndex({index, animated: true});
    setActiveIndex(index);
  };

  const formattedUnitPrice = product?.price
    ? product.price.toLocaleString('vi-VN')
    : '0';

  const handleFavoriteProduct = async () => {
    const userId = await AsyncStorage.getItem('userId');
    const res = await favoriteProduct(productId, +userId);
    if (res.result.code === 200) {
      await fetchProductDetails();
    }
  };

  const addToCart = async () => {
    console.log('addToCart');
    const userId = await AsyncStorage.getItem('userId');
    const productVariantId = product?.variants[0].id;
    const res = await alterCart(userId, {productVariantId, add: true});
    console.log(res);
    if (res.result.code === 200) {
      Alert.alert(res.result.message);
    }
  };

  return (
    <View style={AppStyle.StyleCommon.container}>
      {/* Header */}
      <View style={AppStyle.StyleProductDetails.wrapProductInfo}>
        <FlatList
          ref={flatListRef}
          data={product?.images}
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Image
              style={[
                AppStyle.StyleProductDetails.imageProduct,
                {width: screenWidth},
              ]}
              source={{uri: item.url}}
            />
          )}
        />

        <FlatList
          ref={flatListThumbnailRef}
          data={product?.images}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          style={{marginHorizontal: 10}}
          renderItem={({item, index}) => (
            <Pressable
              style={[
                AppStyle.StyleProductDetails.thumbnail,
                activeIndex === index &&
                  AppStyle.StyleProductDetails.activeThumbnail,
              ]}
              onPress={() => scrollToIndex(index)}>
              <Image
                style={AppStyle.StyleProductDetails.imageProductSlide}
                source={{uri: item.url}}
              />
            </Pressable>
          )}
        />
      </View>
      <View style={AppStyle.StyleProductDetails.wrapHeader}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require('../assets/icons/icon-back.png')} />
        </Pressable>
      </View>
      <View style={AppStyle.StyleProductDetails.productInfo}>
        <View style={AppStyle.StyleProductDetails.innerProductInfo}>
          <View style={AppStyle.StyleProductDetails.wrapTitleWithPrice}>
            <Text style={AppStyle.StyleProductDetails.nameProduct}>
              {product?.name}
            </Text>
          </View>
          <Text style={AppStyle.StyleProductDetails.priceProduct}>
            {formattedUnitPrice}
          </Text>
          <View style={AppStyle.StyleProductDetails.wrapProductColors}>
            <Text style={AppStyle.StyleProductDetails.colorTitleProduct}>
              Color:{' '}
            </Text>
            {product?.variants?.map(variant => (
              <View
                key={variant?.color?.id || variant?.color?.hexCode}
                style={[
                  AppStyle.StyleProductDetails.colorDot,
                  {backgroundColor: variant?.color?.hexCode},
                ]}
              />
            ))}
          </View>
          <View>
            <Text style={AppStyle.StyleProductDetails.descTitle}>
              Description
            </Text>
            <Text style={AppStyle.StyleProductDetails.descriptionProduct}>
              {product?.description}
            </Text>
          </View>
        </View>
      </View>
      <FlatList
        data={viewedProductList}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Product product={item} />}
      />
      <View style={AppStyle.StyleProductDetails.footer}>
        <Pressable onPress={handleFavoriteProduct}>
          {product?.favorite ? (
            <Image source={require('../assets/icons/remove-favorite.png')} />
          ) : (
            <Image source={require('../assets/icons/icon-favourite.png')} />
          )}
        </Pressable>
        <Pressable
          style={AppStyle.StyleProductDetails.addToCart}
          onPress={() => addToCart()}>
          <Text style={AppStyle.StyleProductDetails.commonCart}>
            Add To Cart
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ProductDetail;
