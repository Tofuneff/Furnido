import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

const ProductBottomSheet = ({product, sheetRef, onBuyNow, onAddToCart}) => {
  const [variantId, setVariantId] = useState(product?.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product?.price);

  useEffect(() => {
    setTotalPrice(product.price * quantity);
  }, [quantity]);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleVariantSelect = variantId => {
    setVariantId(variantId);
  };

  const renderContent = () => (
    <View style={styles.sheetContent}>
      {/* <Image source={{uri: product.imageUrl}} style={styles.productImage} /> */}
      <Text style={styles.name}>{product?.name}</Text>
      <Text style={styles.productPrice}>${product?.price}</Text>
      <Text style={styles.colorLabel}>Select Color:</Text>
      <FlatList
        data={product?.variants}
        horizontal
        keyExtractor={item => item}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.colorOption,
              {backgroundColor: item?.color?.hexCode},
              variantId === item.id && styles.activeColor,
            ]}
            onPress={() => handleVariantSelect(item.id)}
          />
        )}
      />
      {/* <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={handleDecreaseQuantity}>
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityValue}>{quantity}</Text>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={handleIncreaseQuantity}>
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text> */}
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.buyNowButton}
          onPress={() => onBuyNow(variantId)}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => onAddToCart(variantId)}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={['75%', 0]}
      borderRadius={20}
      renderContent={renderContent}
    />
  );
};

const styles = StyleSheet.create({
  sheetContent: {
    backgroundColor: '#fff',
    padding: 20,
    height: '100%',
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  colorLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 5,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  activeColor: {
    borderColor: '#ccc',
    borderWidth: 3,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityValue: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  buyNowButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  addToCartButton: {
    padding: 10,
    backgroundColor: '#28a745',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductBottomSheet;
