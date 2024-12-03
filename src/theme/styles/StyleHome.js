import {StyleSheet} from 'react-native';

const StyleHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  wrapHeader: {
    marginHorizontal: 20,
    marginTop: 50,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
  },
  cart: {
    marginEnd: 5,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favourite: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 35,
    height: 35,
  },
});

export default StyleHome;
