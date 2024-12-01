import {StyleSheet} from 'react-native';

const StyleProfile = StyleSheet.create({
  container: {
    flex: 1,
  },
  textLabel: {
    fontSize: 18,
    marginStart: 155,
    fontFamily: 'Poppins-Medium',
  },
  wrapAvatar: {
    width: 55,
    height: 55,
    borderWidth: 2,
    borderColor: '#C3C3C3',
    borderRadius: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 51,
    height: 51,
    borderRadius: 30,
  },
  wrapInformation: {
    flexDirection: 'row',
    gap: 20,
  },
  textName: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'rgba(0, 0, 0, 1)',
  },
  textEmail: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: 'rgba(127, 127, 127, 1)',
  },
});

export default StyleProfile;
