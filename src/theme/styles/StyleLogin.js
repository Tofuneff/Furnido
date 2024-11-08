import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const StyleLogin = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: 412,
    height: 360,
  },
  mainWrapper: {
    alignItems: 'center',
    flex: 1,
  },
  wrapTitle: {
    marginVertical: 10,
  },
  textHeaderTitle: {
    fontSize: 32,
    color: colors.Black,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  textTitle: {
    fontSize: 20,
    color: colors.Black,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  input: {
    width: 350,
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(139, 139, 139, 1)',
    borderRadius: 10,
    paddingStart: 15,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  wrapInput: {
    gap: 10,
    marginVertical: 6,
  },
  togglePassword: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  wrapRememberAndForgotPassword: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 6,
  },
  wrapCheckbox: {
    flexDirection: 'row',
    gap: 6,
  },
  textRememberAccount: {
    fontFamily: 'Poppins-Regular',
    color: 'rgba(148, 144, 144, 1)',
  },
  textForgotPassword: {
    fontFamily: 'Poppins-Regular',
    color: 'rgba(0, 146, 69, 1)',
  },
  wrapOr: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 20,
  },
  textCommon: {
    fontFamily: 'Poppins-Regular',
    color: 'rgba(0, 0, 0, 1)',
  },
  wrapGoogleAndFacebook: {
    flexDirection: 'row',
    gap: 30,
    marginVertical: 25,
  },
  wrapFooter: {
    width: 400,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  textCreateAccount: {
    fontFamily: 'Poppins-Regular',
    color: 'rgba(0, 146, 69, 1)',
  },
});

export default StyleLogin;
