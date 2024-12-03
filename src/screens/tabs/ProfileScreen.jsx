import {View, Text, Image, Alert} from 'react-native';
import React from 'react';
import AppStyle from '../../theme/styles';
import {Heading, Wrapper} from '../../theme/styled';
import SettingBlock from '../../components/SettingBlock/SettingBlock';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const logout = async () => {
    await AsyncStorage.removeItem('userId');
    navigation.navigate('login');
  };

  const optionsCommon = [
    {
      label: 'Chỉnh sửa thông tin',
      type: 'navigation',
      onPress: () => {},
    },
    {
      label: 'Lịch sử giao dịch',
      type: 'navigation',
      onPress: () => {},
    },
    {
      label: 'Q & A',
      type: 'navigation',
      onPress: () => {},
    },
  ];

  const options = [
    {
      label: 'Chế độ',
      type: 'toggle',
      value: false,
      onToggle: value => console.log('Face ID toggled:', value),
    },
    {
      label: 'Điều khoản và điều kiện',
      type: 'navigation',
      onPress: () => {},
    },
    {
      label: 'Chính sách quyền riêng tư',
      type: 'navigation',
      onPress: () => {},
    },
    {
      label: 'Đăng xuất',
      type: 'navigation-logout',
      onPress: () =>
        Alert.alert('', 'Bạn có chắc chắn muốn đăng xuất không?', [
          {
            text: 'Không',
            style: 'cancel',
          },
          {
            text: 'Đăng xuất',
            onPress: logout,
          },
        ]),
    },
  ];

  return (
    <View style={AppStyle.StyleCommon.container}>
      {/* Header */}
      <Heading>
        <Text style={AppStyle.StyleProfile.textLabel}>Thông tin</Text>
      </Heading>
      <Wrapper>
        <View style={AppStyle.StyleProfile.wrapInformation}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Image
              style={AppStyle.StyleProfile.avatar}
              source={require('../../assets/images/avatar.jpg')}
            />
            <Text style={AppStyle.StyleProfile.textName}>Đỗ Minh Hiếu</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Image source={require('../../assets/icons/ic-message.png')} />
            <Image
              source={require('../../assets/icons/ic-customer-support.png')}
            />
          </View>
        </View>
        <SettingBlock title="Chung" options={optionsCommon} />
        <SettingBlock title="Khác" options={options} />
      </Wrapper>
    </View>
  );
};

export default ProfileScreen;
