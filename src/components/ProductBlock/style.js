import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  wrapperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    marginBottom: 10,
  },
  more: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    textDecorationLine: 'underline',
  },
  btnMore: {
    alignSelf: 'center',
  },
  productList: {
    paddingHorizontal: 5,
  },
  row: {
    justifyContent: 'space-between', // Căn đều các sản phẩm theo hàng
  },
  productContainer: {
    flex: 1, // Chia đều không gian cho mỗi item
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  productCategory: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: 'tomato',
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  colorDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
});

export default styles;
