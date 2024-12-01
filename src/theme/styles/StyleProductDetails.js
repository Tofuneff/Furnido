import {StyleSheet} from 'react-native';

const StyleProductDetails = StyleSheet.create({
  wrapHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 375,
    position: 'absolute',
    top: 40,
    left: 18,
  },
  imageProduct: {
    // width: 360,
    height: 360,
    alignSelf: 'center',
    resizeMode: 'cover',
    marginBottom: 10,
  },
  imageProductSlide: {
    width: 93,
    height: 93,
    borderRadius: 15,
  },
  thumbnail: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  activeThumbnail: {
    width: 110,
    height: 110,
    borderWidth: 8,
    borderColor: '#ECEEEF',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productInfo: {
    height: '100%',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  colorDot: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginHorizontal: 3,
  },
  wrapProductInfo: {
    gap: 8,
    marginBottom: 15,
  },
  innerProductInfo: {
    width: '95%',
    marginTop: 10,
  },
  wrapProductColors: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  wrapTitleWithPrice: {
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  descriptionProduct: {
    marginBottom: 25,
    fontFamily: 'Poppins-Regular',
    color: '#757575',
  },
  nameProduct: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  colorTitleProduct: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },
  priceProduct: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: 'tomato',
    marginBottom: 10,
  },
  selectQty: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    flexBasis: '30%',
  },
  btnAction: {
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    backgroundColor: '#E0E0E0',
  },
  common: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
  addToCart: {
    borderRadius: 20,
    paddingHorizontal: 50,
    paddingVertical: 15,
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#996633',
    bottom: 15,
  },
  footer: {
    paddingHorizontal: 50,
    flexDirection: 'row',
    gap: 50,
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 20,
    marginHorizontal: 10,
  },
  commonCart: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },
});

export default StyleProductDetails;
