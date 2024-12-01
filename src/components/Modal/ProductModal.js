import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  FlatList,
} from 'react-native';

const ProductModal = ({visible, onClose, product, onBuyNow, onAddToCart}) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);

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

  const handleColorSelect = color => {
    setSelectedColor(color);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>×</Text>
          </TouchableOpacity>
          <Image source={{uri: product.imageUrl}} style={styles.productImage} />
          <Text style={styles.productName}>{product.productName}</Text>
          <Text style={styles.productPrice}>${product.price}</Text>
          <Text style={styles.colorLabel}>Select Color:</Text>
          <FlatList
            data={product.colors}
            horizontal
            keyExtractor={item => item}
            renderItem={({item}) => (
              <TouchableOpacity
                style={[
                  styles.colorOption,
                  {backgroundColor: item},
                  selectedColor === item && styles.activeColor,
                ]}
                onPress={() => handleColorSelect(item)}
              />
            )}
          />
          <View style={styles.quantityContainer}>
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
          <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={styles.buyNowButton}
              onPress={() =>
                onBuyNow({
                  productVariantId: selectedColor,
                  productName: product.productName,
                  price: product.price,
                  quantity,
                  totalPrice,
                  imageUrl: product.imageUrl,
                })
              }>
              <Text style={styles.buttonText}>Buy Now</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() =>
                onAddToCart({
                  productVariantId: selectedColor,
                  productName: product.productName,
                  price: product.price,
                  quantity,
                  totalPrice,
                  imageUrl: product.imageUrl,
                })
              }>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    color: '#555',
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
    marginVertical: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buyNowButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginRight: 10,
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

export default ProductModal;
