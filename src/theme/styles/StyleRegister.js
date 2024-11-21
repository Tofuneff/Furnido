import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const StyleRegister = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 80,
    height: 80,
  },
  wrapLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
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
  wrapTermsAndConditions: {
    width: 350,
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 20,
    marginTop: 20,
  },
  textTermsAndConditions: {
    fontFamily: 'Poppins-Regular',
    textDecorationLine: 'underline',
    color: '#402700',
  },
  wrapOr: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 20,
  },
  textCommon: {
    textAlign: 'center',
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
    color: '#402700',
  },
});

export default StyleRegister;
