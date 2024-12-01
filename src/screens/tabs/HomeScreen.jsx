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

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const navigation = useNavigation();

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);

    if (data.length > 0) {
      setSelectedCategoryId(data[0].id);
    }
  };

  const fetchProductsByCategory = async categoryId => {
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
          <View style={AppStyle.StyleHome.wrapBanner}>
            {/* Banner */}
            <BannerSlider />
          </View>
          <CategorySelector
            categories={categories}
            selectedCategoryId={selectedCategoryId}
            onCategoryChange={setSelectedCategoryId}
          />
          {!products.length ? (
            <Text
              style={{
                textAlign: 'center',
                paddingTop: '40%',
                fontFamily: 'Poppins-Medium',
              }}>
              Product is coming soon...
            </Text>
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
