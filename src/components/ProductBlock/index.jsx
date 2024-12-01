import React from 'react';
import {View, Text, Image, FlatList, Pressable} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const ProductBlock = ({products}) => {
  const navigation = useNavigation();

  const paddedProducts =
    products.length % 2 === 0 ? products : [...products, {id: 'placeholder'}];

  const goProductDetails = productId => {
    navigation.navigate('productDetail', {productId});
  };

  const renderProductItem = ({item}) => {
    // Nếu là placeholder thì render một View trống
    if (item.id === 'placeholder') {
      return <View style={[styles.productContainer, styles.placeholder]} />;
    }

    return (
      <View style={styles.productContainer}>
        <Pressable onPress={() => goProductDetails(item.id)}>
          <Image
            source={{uri: item.images.find(image => image.isMain)?.url}}
            style={styles.productImage}
          />
          <Text style={styles.productTitle}>{item.name}</Text>
        </Pressable>
        <Text style={styles.productPrice}>
          {item.price ? item.price.toLocaleString('vi-VN') : '0'}
        </Text>
        <Text style={styles.productDesc} numberOfLines={2} ellipsizeMode="tail">
          {item.description}
        </Text>
        <View style={styles.colorContainer}>
          {item.colors.map(color => (
            <View
              key={color.id || color.hexCode}
              style={[styles.colorDot, {backgroundColor: color.hexCode}]}
            />
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={paddedProducts}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.productList}
        scrollEnabled={false}
      />
    </View>
  );
};

export default ProductBlock;
