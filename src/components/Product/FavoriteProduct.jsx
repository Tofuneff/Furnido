import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

export default FavoriteProduct = ({product, onRemoveFavorite}) => {
  const goProductDetails = productId => {
    console.log(productId);
  };

  return (
    <View style={styles.productContainer}>
      <Pressable
        style={styles.productInfo}
        onPress={() => goProductDetails(product.id)}>
        <Image
          source={{uri: product.images.find(image => image.isMain)?.url}}
          style={styles.productImage}
        />
        <View style={styles.productInfoDetails}>
          <Text style={styles.productTitle}>{product.name}</Text>
          <Text style={styles.productPrice}>
            {product.price ? product.price.toLocaleString('vi-VN') : '0'}
          </Text>
          <Text
            style={styles.productDesc}
            numberOfLines={1}
            ellipsizeMode="tail">
            {product.description}
          </Text>
          <View style={styles.colorContainer}>
            {product.colors.map(color => (
              <View
                key={color.id || color.hexCode}
                style={[styles.colorDot, {backgroundColor: color.hexCode}]}
              />
            ))}
          </View>
        </View>
      </Pressable>
      <Pressable
        style={styles.removeFavoriteButton}
        onPress={() => onRemoveFavorite(product.id)}>
        <Image source={require('../../assets/icons/remove-favorite.png')} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  productInfo: {
    flexDirection: 'row',
    gap: 10,
    flex: 1,
    marginRight: 10,
  },
  productInfoDetails: {
    flexDirection: 'column',
    flexShrink: 1,
  },
  productImage: {
    width: 90,
    height: 90,
    borderRadius: 8,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  productDesc: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: 'gray',
    flexWrap: 'nowrap',
  },
  productCategory: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: 'tomato',
  },
  colorContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  colorDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  removeFavoriteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    marginLeft: 10,
  },
});
