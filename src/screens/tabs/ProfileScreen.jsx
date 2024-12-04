import {View, Text, Image, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppStyle from '../../theme/styles';
import {Heading, Wrapper} from '../../theme/styled';
import SettingBlock from '../../components/SettingBlock/SettingBlock';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  const getUser = async () => {
    console.log('getUser');
    const userJson = await AsyncStorage.getItem('user');
    console.log('userJson', userJson);
    const user = JSON.parse(userJson);
    console.log('user', user);
    setUser(user);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('userId');
    navigation.navigate('login');
  };

  useEffect(() => {
    getUser();
  }, []);

  const userInfo = [
    {
      label: 'Đỗ Minh Hiếu',
    },
    {
      label: 'PH47182',
    },
    {
      label: 'MD19202',
    },
  ];

  const optionsCommon = [
    {
      label: 'Đổi mật khẩu',
      type: 'navigation',
      onPress: () => {
        navigation.navigate('changePassword');
      },
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
            <Text style={AppStyle.StyleProfile.textName}>{user?.name}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Image source={require('../../assets/icons/ic-message.png')} />
            <Image
              source={require('../../assets/icons/ic-customer-support.png')}
            />
          </View>
        </View>
        <SettingBlock title="Thông tin sinh viên" options={userInfo} />
        <SettingBlock title="Thiết lập riêng" options={optionsCommon} />
        <SettingBlock title="Khác" options={options} />
      </Wrapper>
    </View>
  );
};

export default ProfileScreen;
