import React from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const SettingBlock = ({title, options}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {options.map((option, index) => (
        <View key={index} style={styles.optionContainer}>
          <View style={styles.option}>
            <TouchableOpacity
              onPress={option.onPress}
              disabled={option.type === 'toggle' ? true : false}>
              <Text
                style={
                  option.type === 'navigation-logout'
                    ? styles.logout
                    : styles.optionText
                }>
                {option.label}
              </Text>
            </TouchableOpacity>

            {option.type === 'toggle' ? (
              <Switch
                value={option.value}
                onValueChange={option.onToggle}
                trackColor={{false: '#ccc', true: '#0f9d58'}}
              />
            ) : (
              <TouchableOpacity onPress={option.onPress}>
                <Image
                  source={require('../../assets/icons/ic-arrow-right.png')}
                  style={styles.arrow}
                />
              </TouchableOpacity>
            )}
          </View>
          {index < options.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
  },
  optionContainer: {
    flexDirection: 'column',
    marginVertical: 8,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 345,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Poppins-Medium',
  },
  wrapArrow: {
    flexDirection: 'row',
  },
  arrow: {
    width: 20,
    height: 20,
    tintColor: '#888',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginTop: 8,
  },
  logout: {
    fontSize: 16,
    color: 'red',
    fontFamily: 'Poppins-Medium',
  },
});

export default SettingBlock;
