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
import {categories} from '../../api/data';
import CategorySelector from '../../components/CategorySelector';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0].apiEndpoint,
  ); // Mặc định chọn category đầu tiên
  const [products, setProducts] = useState([]); // Danh sách sản phẩm

  const fetchProducts = async categoryEndpoint => {
    try {
      // Gọi API từ json-server
      const response = await fetch(`http://10.0.2.2:3000/${categoryEndpoint}`);

      // Kiểm tra status code
      if (!response.ok) {
        console.error('API Error:', response.status, response.statusText);
        const text = await response.text(); // Lấy nội dung trả về
        console.log('Response:', text);
        return;
      }

      const data = await response.json(); // Lọc sản phẩm theo categoryId
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Lấy sản phẩm khi thay đổi danh mục
  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  if (!products || products.length === 0) {
    return <Text>No products available</Text>;
  }

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
            onPress={() => console.log('clicked')}>
            <Image source={require('../../assets/icons/shopping-cart.png')} />
          </Pressable>
          <Pressable
            style={AppStyle.StyleHome.favourite}
            onPress={() => console.log('clicked')}>
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
          {/* Thanh chọn danh mục */}
          <CategorySelector
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={endpoint => setSelectedCategory(endpoint)}
          />
          <ProductBlock title="Popular Products" products={products} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
