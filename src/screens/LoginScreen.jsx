import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Image,
  Pressable,
  TouchableWithoutFeedback,
  Platform,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import AppStyle from '../theme/styles';
import GradientButton from '../components/Button';
import HorizontalLine from '../components/Line';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login} from '../api/authService';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [isToggleChecked, setToggleChecked] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toggleCheck = () => setToggleChecked(preved => !preved);
  const rememberCheck = () => setChecked(preved => !preved);

  const signin = async () => {
    // checkValidate();
    setLoading(true);
    const res = await login({username, password});
    if (res.result.code === 200) {
      setUser(res.data);
      directToHome();
      resetInput();
      setLoading(false);
    }
  };

  const setUser = async user => {
    await AsyncStorage.setItem('user', JSON.stringify(user));
    await AsyncStorage.setItem('userId', user.id.toString());
  };

  const directToHome = () => navigation.navigate('bottomTab');

  const resetInput = () => {
    setUsername('');
    setPassword('');
  };

  const checkValidate = () => {
    if (!username || !password) {
      Alert.alert('', 'Không được để trống tên người dùng và mật khẩu');
      return false;
    }
    if (password.length < 6) {
      Alert.alert('', 'Mật khẩu không được nhỏ hơn 6 kí tự');
      return false;
    }
  };

  return (
    <KeyboardAvoidingView
      style={AppStyle.StyleLogin.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView>
          {/* Header */}
          {loading && (
            <FastImage
              source={{
                uri: 'https://i.pinimg.com/originals/d7/1e/c3/d71ec3b3901cb6e71b14a2764521d559.gif',
              }}
              style={{
                width: 100,
                height: 100,
                position: 'absolute',
                bottom: 150,
                top: 400,
                left: 150,
                right: 50,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          )}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={AppStyle.StyleLogin.wrapLogo}>
              <Image
                style={AppStyle.StyleLogin.logo}
                source={require('../assets/images/logo.jpg')}
              />
            </View>
            {/* Content */}
            <View style={AppStyle.StyleLogin.mainWrapper}>
              <View style={AppStyle.StyleLogin.wrapTitle}>
                <Text style={AppStyle.StyleLogin.textHeaderTitle}>
                  Chào mừng bạn
                </Text>
                <Text style={AppStyle.StyleLogin.textTitle}>
                  Đăng nhập tài khoản
                </Text>
              </View>
              {/* Input */}
              <View style={AppStyle.StyleLogin.wrapInput}>
                <TextInput
                  keyboardType="email-address"
                  placeholderTextColor={'rgba(139, 139, 139, 1)'}
                  style={AppStyle.StyleLogin.input}
                  placeholder="Nhập tên người dùng"
                  value={username}
                  onChangeText={text => setUsername(text)}
                  // onBlur={checkValidate}
                />
                <View>
                  <TextInput
                    secureTextEntry={!isToggleChecked}
                    placeholderTextColor={'rgba(139, 139, 139, 1)'}
                    style={AppStyle.StyleLogin.input}
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChangeText={setPassword}
                    // onBlur={checkValidate}
                  />
                  <Pressable
                    style={AppStyle.StyleLogin.togglePassword}
                    onPress={toggleCheck}>
                    {!isToggleChecked ? (
                      <Image
                        tintColor={'#402700'}
                        source={require('../assets/icons/eye-invisible-filled.png')}
                      />
                    ) : (
                      <Image
                        tintColor={'#402700'}
                        source={require('../assets/icons/eye-filled.png')}
                      />
                    )}
                  </Pressable>
                </View>
              </View>
              {/* Remember account and Forgot Password */}
              <View style={AppStyle.StyleLogin.wrapRememberAndForgotPassword}>
                <View style={AppStyle.StyleLogin.wrapCheckbox}>
                  <Pressable onPress={rememberCheck}>
                    {!isChecked ? (
                      <Image
                        source={require('../assets/icons/checkbox-circle-line.png')}
                      />
                    ) : (
                      <Image
                        tintColor={'#402700'}
                        source={require('../assets/icons/checked-circle-line.png')}
                      />
                    )}
                  </Pressable>
                  {!isChecked ? (
                    <Text style={AppStyle.StyleLogin.textRememberAccount}>
                      Nhớ tài khoản
                    </Text>
                  ) : (
                    <Text
                      style={[
                        AppStyle.StyleLogin.textRememberAccount,
                        {color: '#402700'},
                      ]}>
                      Nhớ tài khoản
                    </Text>
                  )}
                </View>
                <Pressable>
                  <Text style={AppStyle.StyleLogin.textForgotPassword}>
                    Quên mật khẩu ?
                  </Text>
                </Pressable>
              </View>
              {/* Button */}
              <View>
                <GradientButton title="Đăng nhập" onPress={signin} />
              </View>
              {/* Or */}
              <View style={AppStyle.StyleLogin.wrapOr}>
                <HorizontalLine
                  width={145}
                  borderBottomWidth={1}
                  borderBottomColor={'#402700'}
                  marginVertical={11}
                />
                <Text style={AppStyle.StyleLogin.textCommon}>Hoặc</Text>
                <HorizontalLine
                  width={145}
                  borderBottomWidth={1}
                  borderBottomColor={'#402700'}
                  marginVertical={11}
                />
              </View>
              {/* Google and Facebook */}
              <View style={AppStyle.StyleLogin.wrapGoogleAndFacebook}>
                <Pressable>
                  <Image source={require('../assets/icons/google.png')} />
                </Pressable>
                <Pressable>
                  <Image source={require('../assets/icons/facebook.png')} />
                </Pressable>
              </View>
              {/* Footer */}
              <View style={AppStyle.StyleLogin.wrapFooter}>
                <Text style={AppStyle.StyleLogin.textCommon}>
                  Bạn không có tài khoản?
                </Text>
                <Pressable onPress={() => navigation.navigate('register')}>
                  <Text style={AppStyle.StyleLogin.textCreateAccount}>
                    Tạo tài khoản
                  </Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
