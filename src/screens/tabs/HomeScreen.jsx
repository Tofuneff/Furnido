import {
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import BannerSlider from '../../components/Banner';
import AppStyle from '../../theme/styles';
import ProductBlock from '../../components/ProductBlock';
import {products} from '../../api/data';

const HomeScreen = () => {
  return (
    <View style={AppStyle.StyleHome.container}>
      {/* Header */}
      <View style={AppStyle.StyleHome.wrapHeader}>
        <BannerSlider />
        <Pressable
          style={AppStyle.StyleHome.cart}
          onPress={() => console.log('clicked')}>
          <Image source={require('../../assets/icons/shopping-cart.png')} />
        </Pressable>
      </View>
      {/* Product */}
      <SafeAreaView style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProductBlock title="Popular Products" products={products} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
