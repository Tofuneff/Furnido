import {StyleSheet} from 'react-native';

const StyleProfile = StyleSheet.create({
  container: {
    flex: 1,
  },
  textLabel: {
    fontSize: 18,
    marginStart: 140,
    fontFamily: 'Poppins-Medium',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  wrapInformation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  textName: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'rgba(0, 0, 0, 1)',
  },
});

export default StyleProfile;
