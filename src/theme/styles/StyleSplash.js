import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const StyleSplash = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 30,
    color: colors.Black,
    textAlign: 'center',
  },
});

export default StyleSplash;
