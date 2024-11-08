import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderRadius: 15, // Bo tròn góc cho nút
    overflow: 'hidden', // Để gradient không bị tràn ra ngoài
  },
  buttonContent: {
    width: 350,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
});

export default styles;
