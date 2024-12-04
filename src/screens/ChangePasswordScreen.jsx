import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {changePassword} from '../api/authService';
import GradientButton from '../components/Button';

export default ChangePasswordScreen = () => {
  const navigation = useNavigation();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleChangePassword = async () => {
    validate();

    const userJson = await AsyncStorage.getItem('user');
    const user = JSON.parse(userJson);
    const currentPassword = user.password;
    if (currentPassword !== oldPassword) {
      if (newPassword !== confirmNewPassword) {
        Alert.alert('', 'Mật khẩu cũ chưa chính xác');
        return false;
      }
    }

    const res = await changePassword({id: user.id, oldPassword, newPassword});
    console.log(res);
    if (res.result.code === 200) {
      Alert.alert('', 'Đổi mật khẩu thành công');
    }
  };

  const validate = async () => {
    if (!oldPassword) {
      Alert.alert('', 'Mật khẩu hiện tại không được để trống');
      return false;
    }
    if (!newPassword) {
      Alert.alert('', 'Mật khẩu mới không được để trống');
      return false;
    }
    if (!confirmNewPassword) {
      Alert.alert('', 'Mật khẩu xác nhận không được để trống');
      return false;
    }
    if (newPassword !== confirmNewPassword) {
      Alert.alert('', 'Mật khẩu mới không khớp');
      return false;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require('../assets/icons/icon-back.png')} />
        </Pressable>
        <Text style={styles.title}>Change Password</Text>
        <Text></Text>
      </View>
      <View style={styles.wrapInput}>
        <TextInput
          placeholderTextColor={'rgba(139, 139, 139, 1)'}
          style={styles.input}
          placeholder="Mật khẩu hiện tại"
          value={oldPassword}
          onChangeText={setOldPassword}
        />
        <TextInput
          placeholderTextColor={'rgba(139, 139, 139, 1)'}
          style={styles.input}
          placeholder="Mật khẩu mới"
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TextInput
          placeholderTextColor={'rgba(139, 139, 139, 1)'}
          style={styles.input}
          placeholder="Xác nhận mật khẩu mới"
          value={confirmNewPassword}
          onChangeText={setConfirmNewPassword}
        />
      </View>
      <View style={styles.button}>
        <GradientButton title="Đổi mật khẩu" onPress={handleChangePassword} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  wrapInput: {
    marginTop: 20,
    flexDirection: 'column',
    gap: 10,
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
  button: {
    marginTop: 20,
  },
});
