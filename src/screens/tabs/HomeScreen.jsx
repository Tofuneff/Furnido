import {
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import BannerSlider from '../../components/Banner';
import AppStyle from '../../theme/styles';
import ProductBlock from '../../components/ProductBlock';
import CategorySelector from '../../components/CategorySelector';
import {getProductsByCategory} from '../../api/productService';
import {getCategories} from '../../api/categoryService';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const fetchCategories = async () => {
    setLoading(true);
    const data = await getCategories();
    setCategories(data);

    if (data.length > 0) {
      setSelectedCategoryId(data[0].id);
    }
  };

  const fetchProductsByCategory = async categoryId => {
    setLoading(true);
    const data = await getProductsByCategory(categoryId);
    setProducts(data);
  };

  const goFavoriteProducts = () => {
    console.log('goFavoriteProducts');
    navigation.navigate('favoriteProducts');
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategoryId !== null) {
      fetchProductsByCategory(selectedCategoryId);
    }
  }, [selectedCategoryId]);

  return (
    <View style={AppStyle.StyleHome.container}>
      {/* Header */}
      <View style={AppStyle.StyleHome.wrapHeader}>
        <Image
          style={AppStyle.StyleHome.logo}
          source={require('../../assets/images/logo.jpg')}
        />
        <View style={AppStyle.StyleHome.buttons}>
          <Pressable
            style={AppStyle.StyleHome.cart}
            onPress={() => navigation.navigate('cart')}>
            <Image source={require('../../assets/icons/shopping-cart.png')} />
          </Pressable>
          <Pressable
            style={AppStyle.StyleHome.favourite}
            onPress={goFavoriteProducts}>
            <Image source={require('../../assets/icons/icon-favourite.png')} />
          </Pressable>
        </View>
      </View>
      {/* Product */}
      <SafeAreaView style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Banner */}
          <BannerSlider />
          <CategorySelector
            categories={categories}
            selectedCategoryId={selectedCategoryId}
            onCategoryChange={setSelectedCategoryId}
          />
          {!products.length ? (
            loading && (
              <FastImage
                source={{
                  uri: 'https://i.pinimg.com/originals/ba/9a/b4/ba9ab42593e487b4e349973e1d43b11d.gif',
                }} // URL hoặc file GIF trong assets
                style={{
                  width: 100,
                  height: 100,
                  position: 'absolute',
                  bottom: 150,
                  top: 400,
                  left: 150,
                  right: 50,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            )
          ) : (
            <ProductBlock products={products} />
          )}
          {/* Thanh chọn danh mục */}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
