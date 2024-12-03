import {View, Text, Pressable, Image, TextInput} from 'react-native';
import React from 'react';
import {Heading} from '../../theme/styled';
import {useNavigation} from '@react-navigation/native';
import AppStyle from '../../theme/styles';

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={AppStyle.StyleSearch.container}>
      <Heading>
        <Text style={AppStyle.StyleCommon.textLabel}>Tìm kiếm</Text>
      </Heading>
      <View>
        <TextInput
          placeholder="Tìm kiếm..."
          style={{
            borderWidth: 1,
            marginHorizontal: 10,
            borderRadius: 5,
            paddingStart: 35,
          }}
        />
        <Image
          style={{position: 'absolute', top: 8, left: 18}}
          source={require('../../assets/icons/search-unfocus.png')}
        />
      </View>
      <View style={{margin: 10, gap: 10}}>
        <View style={{marginTop: 15}}>
          <Text style={{fontSize: 16, fontFamily: 'Poppins-Medium'}}>
            Tìm kiếm gần đây
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              width: 350,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Image source={require('../../assets/icons/clock.png')} />
              <Text style={{fontSize: 14, fontFamily: 'Poppins-Regular'}}>
                Bàn Cafe Gỗ
              </Text>
            </View>
            <View>
              <Image source={require('../../assets/icons/quit.png')} />
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              width: 350,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Image source={require('../../assets/icons/clock.png')} />
              <Text style={{fontSize: 14, fontFamily: 'Poppins-Regular'}}>
                Ghế Sofa Hobro Dài
              </Text>
            </View>
            <View>
              <Image source={require('../../assets/icons/quit.png')} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;
