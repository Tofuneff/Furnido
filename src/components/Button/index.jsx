import {Pressable, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const GradientButton = ({title, onPress}) => {
  return (
    <LinearGradient
      colors={['#402700', '#402700']} // Màu gradient
      style={styles.button}
      start={{x: 0, y: 0}} // Bắt đầu từ góc trái trên
      end={{x: 1, y: 0}} // Kết thúc ở góc phải trên
    >
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          {
            opacity: pressed ? 0.8 : 1,
          },
          styles.buttonContent,
        ]}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </LinearGradient>
  );
};

export default GradientButton;
