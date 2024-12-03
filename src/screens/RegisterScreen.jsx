import {
  View,
  Text,
  ImageBackground,
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
import {register} from '../api/authService';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [isToggleChecked, setToggleChecked] = useState(false);
  const toggleCheck = () => setToggleChecked(preved => !preved);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const signup = async () => {
    checkValidate();
    const user = {
      name,
      email,
      phone,
      password,
    };

    const res = await register(user);
    if (res.result.code === 200) {
      resetUser();
      goSignIn();
      Alert.alert('Notification', res.result.message);
    }
  };

  const goSignIn = () => navigation.navigate('login');

  const resetUser = () => {
    setName('');
    setEmail('');
    setPhone('');
    setPassword('');
  };

  const checkValidate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name) {
      Alert.alert('', 'Không được để trống thông tin');
      return false;
    }
    if (!email) {
      Alert.alert('', 'Không được để trống thông tin');
      return false;
    }
    if (!phone) {
      Alert.alert('', 'Không được để trống thông tin');
      return false;
    }
    if (!password) {
      Alert.alert('', 'Không được để trống thông tin');
      return false;
    }
    if (!emailRegex.test(email)) {
      Alert.alert('', 'Không đúng định dạng email');
      return false;
    }
    if (password.length < 6) {
      Alert.alert('', 'Mật khẩu không được nhỏ hơn 6 kí tự');
      return false;
    }
  };

  return (
    <KeyboardAvoidingView
      style={AppStyle.StyleRegister.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView>
          {/* loading */}
          {loading && (
            <FastImage
              source={{
                uri: 'https://i.pinimg.com/originals/46/9f/d4/469fd4135baf412f55e28a1b207d876f.gif',
              }} // URL hoặc file GIF trong assets
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
          {/* Header */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={AppStyle.StyleRegister.wrapLogo}>
              <Image
                style={AppStyle.StyleRegister.logo}
                source={require('../assets/images/logo.jpg')}
              />
            </View>
            {/* Content */}
            <View style={AppStyle.StyleRegister.mainWrapper}>
              <View style={AppStyle.StyleRegister.wrapTitle}>
                <Text style={AppStyle.StyleRegister.textHeaderTitle}>
                  Đăng ký
                </Text>
                <Text style={AppStyle.StyleRegister.textTitle}>
                  Tạo tài khoản
                </Text>
              </View>
              {/* Input */}
              <View style={AppStyle.StyleRegister.wrapInput}>
                <TextInput
                  keyboardType="default"
                  placeholderTextColor={'rgba(139, 139, 139, 1)'}
                  style={AppStyle.StyleRegister.input}
                  placeholder="Họ tên"
                  value={name}
                  onChangeText={setName}
                />
                <TextInput
                  keyboardType="email-address"
                  placeholderTextColor={'rgba(139, 139, 139, 1)'}
                  style={AppStyle.StyleRegister.input}
                  placeholder="E-mail"
                  value={email}
                  onChangeText={setEmail}
                />
                <TextInput
                  keyboardType="numeric"
                  placeholderTextColor={'rgba(139, 139, 139, 1)'}
                  style={AppStyle.StyleRegister.input}
                  placeholder="Số điện thoại"
                  value={phone}
                  onChangeText={setPhone}
                />
                <View>
                  <TextInput
                    secureTextEntry={!isToggleChecked}
                    placeholderTextColor={'rgba(139, 139, 139, 1)'}
                    style={AppStyle.StyleRegister.input}
                    placeholder="Mật khẩu"
                    value={password}
                    onChangeText={setPassword}
                  />
                  <Pressable
                    style={AppStyle.StyleRegister.togglePassword}
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
              {/* Terms & Conditions and Privacy Policy */}
              <View style={AppStyle.StyleRegister.wrapTermsAndConditions}>
                <Text style={AppStyle.StyleRegister.textCommon}>
                  Để đăng ký tài khoản, bạn đồng ý
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Pressable>
                    <Text style={AppStyle.StyleRegister.textTermsAndConditions}>
                      Điều khoản & Điều kiện
                    </Text>
                  </Pressable>
                  <Text style={AppStyle.StyleRegister.textCommon}> và </Text>
                  <Pressable>
                    <Text style={AppStyle.StyleRegister.textTermsAndConditions}>
                      Chính sách bảo mật
                    </Text>
                  </Pressable>
                </View>
              </View>
              {/* Button */}
              <View>
                <GradientButton title="Đăng ký" onPress={signup} />
              </View>
              {/* Or */}
              <View style={AppStyle.StyleRegister.wrapOr}>
                <HorizontalLine
                  width={145}
                  borderBottomWidth={1}
                  borderBottomColor={'#402700'}
                  marginVertical={11}
                />
                <Text style={AppStyle.StyleRegister.textCommon}>Hoặc</Text>
                <HorizontalLine
                  width={145}
                  borderBottomWidth={1}
                  borderBottomColor={'#402700'}
                  marginVertical={11}
                />
              </View>
              {/* Google and Facebook */}
              <View style={AppStyle.StyleRegister.wrapGoogleAndFacebook}>
                <Pressable>
                  <Image source={require('../assets/icons/google.png')} />
                </Pressable>
                <Pressable>
                  <Image source={require('../assets/icons/facebook.png')} />
                </Pressable>
              </View>
              {/* Footer */}
              <View style={AppStyle.StyleRegister.wrapFooter}>
                <Text style={AppStyle.StyleRegister.textCommon}>
                  Bạn đã có tài khoản?
                </Text>
                <Pressable onPress={() => navigation.navigate('login')}>
                  <Text style={AppStyle.StyleRegister.textCreateAccount}>
                    Đăng nhập
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

export default RegisterScreen;
