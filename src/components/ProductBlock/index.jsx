import React from 'react';
import {View, Text, Image, FlatList, Pressable} from 'react-native';
import styles from './style';

const ProductBlock = ({title, products}) => {
  const renderProductItem = ({item}) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <View style={styles.colorContainer}>
        {item.colors.map((color, index) => (
          <View
            key={index}
            style={[styles.colorDot, {backgroundColor: color}]}
          />
        ))}
        {/* <View style={[styles.colorDot, {backgroundColor: item.colors}]} /> */}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <Text style={styles.title}>{title}</Text>
        <Pressable
          style={styles.btnMore}
          onPress={() => console.log('clicked')}>
          <Text style={styles.more}>View all</Text>
        </Pressable>
      </View>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        numColumns={2} // Thiết lập số cột
        columnWrapperStyle={styles.row} // Áp dụng style cho từng hàng
        contentContainerStyle={styles.productList}
        scrollEnabled={false}
      />
    </View>
  );
};

export default ProductBlock;
