import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    marginBottom: 10,
  },
  productList: {
    paddingHorizontal: 5,
  },
  row: {
    justifyContent: 'space-between',
  },
  productContainer: {
    flex: 1,
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 160,
    height: 160,
    borderRadius: 8,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  productDesc: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    color: 'gray',
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
    justifyContent: 'center',
    marginTop: 5,
  },
  colorDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  placeholder: {
    backgroundColor: 'transparent',
    flex: 1,
  },
});

export default styles;
