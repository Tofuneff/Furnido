import {
  View,
  Text,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Image,
  Pressable,
  StatusBar,
  TouchableWithoutFeedback,
  Platform,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AppStyle from '../theme/styles';
import GradientButton from '../components/Button';
import HorizontalLine from '../components/Line';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [isToggleChecked, setToggleChecked] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const toggleCheck = () => setToggleChecked(preved => !preved);
  const rememberCheck = () => setChecked(preved => !preved);

  return (
    <KeyboardAvoidingView
      style={AppStyle.StyleLogin.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView>
          {/* Header */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground
              style={[AppStyle.StyleLogin.backgroundImage]}
              resizeMode="cover"
              source={require('../assets/images/bgImage.png')}
            />
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
                  placeholder="Nhập email hoặc số điện thoại"
                />
                <View>
                  <TextInput
                    secureTextEntry={!isToggleChecked}
                    placeholderTextColor={'rgba(139, 139, 139, 1)'}
                    style={AppStyle.StyleLogin.input}
                    placeholder="Mật khẩu"
                  />
                  <Pressable
                    style={AppStyle.StyleLogin.togglePassword}
                    onPress={toggleCheck}>
                    {!isToggleChecked ? (
                      <Image
                        source={require('../assets/icons/eye-invisible-filled.png')}
                      />
                    ) : (
                      <Image
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
                        source={require('../assets/icons/checked-circle-line.png')}
                      />
                    )}
                  </Pressable>
                  <Text style={AppStyle.StyleLogin.textRememberAccount}>
                    Nhớ tài khoản
                  </Text>
                </View>
                <Pressable>
                  <Text style={AppStyle.StyleLogin.textForgotPassword}>
                    Quên mật khẩu ?
                  </Text>
                </Pressable>
              </View>
              {/* Button */}
              <View>
                <GradientButton title="Đăng nhập" />
              </View>
              {/* Or */}
              <View style={AppStyle.StyleLogin.wrapOr}>
                <HorizontalLine />
                <Text style={AppStyle.StyleLogin.textCommon}>Hoặc</Text>
                <HorizontalLine />
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
                <Pressable onPress={() => navigation.navigate('Register')}>
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
