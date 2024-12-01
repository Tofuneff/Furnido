import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  Pressable,
  Alert,
  TouchableOpacity,
} from 'react-native';
import AppStyle from '../theme/styles';
import {getProductDetails} from '../api/productService';
import {useNavigation} from '@react-navigation/native';
import {alterCart} from '../api/cartService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomBottomSheet from '../components/BottomSheet/BottomSheet';

const screenWidth = Dimensions.get('window').width;

const ProductDetail = ({route}) => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [product, setProduct] = useState(null);
  const flatListRef = useRef(null);
  const flatListThumbnailRef = useRef(null);
  const [userId, setUserId] = useState('');

  const {productId} = route.params;
  const [isVisible, setIsVisible] = useState(false);

  const toggleBottomSheet = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProductDetails(productId);
      setProduct(data);
    };

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

  useEffect(() => {
    const getUserId = async () => {
      const userId = await AsyncStorage.getItem('userId');
      setUserId(userId);
    };
    getUserId();
  }, []);

  // const handleBuyNow = async productVariantId => {
  //   console.log('Buy Now:', productVariantId);
  //   await handleAlterCart(productVariantId);
  //   navigation.navigate('cart');
  // };

  // const handleAddToCart = async productVariantId => {
  //   console.log('Add to Cart:', productVariantId);
  //   await handleAlterCart(productVariantId);
  // };

  const handleAlterCart = () => {
    // const res = await alterCart(userId, {productVariantId, add: true});
    // Alert.alert(res.result.message);
    toggleBottomSheet();
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
        <Pressable>
          <Image source={require('../assets/icons/icon-favourite.png')} />
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
      <View style={AppStyle.StyleProductDetails.footer}>
        <Pressable
          style={AppStyle.StyleProductDetails.addToCart}
          onPress={() => handleAlterCart()}>
          <Text style={AppStyle.StyleProductDetails.commonCart}>
            Add To Cart
          </Text>
        </Pressable>
        {/* <CustomBottomSheet isVisible={isVisible} onClose={toggleBottomSheet} /> */}
      </View>
    </View>
  );
};

export default ProductDetail;
