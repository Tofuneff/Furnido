import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const StyleSplash = StyleSheet.create({
  container: {
    flex: 1,
    gap: 50,
  },
  backgroundImage: {
    width: 412,
    height: 360,
    objectFit: 'cover',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 30,
    color: colors.Black,
    textAlign: 'center',
  },
});

export default StyleSplash;
