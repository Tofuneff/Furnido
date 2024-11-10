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
} from 'react-native';
import React, {useState} from 'react';
import AppStyle from '../theme/styles';
import GradientButton from '../components/Button';
import HorizontalLine from '../components/Line';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [isToggleChecked, setToggleChecked] = useState(false);
  const toggleCheck = () => setToggleChecked(preved => !preved);

  return (
    <KeyboardAvoidingView
      style={AppStyle.StyleRegister.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView>
          {/* Header */}
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* <ImageBackground
              style={[AppStyle.StyleRegister.backgroundImage]}
              resizeMode="cover"
              source={require('../assets/images/bgImage1.png')}
            /> */}
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
                />
                <TextInput
                  keyboardType="email-address"
                  placeholderTextColor={'rgba(139, 139, 139, 1)'}
                  style={AppStyle.StyleRegister.input}
                  placeholder="E-mail"
                />
                <TextInput
                  keyboardType="numeric"
                  placeholderTextColor={'rgba(139, 139, 139, 1)'}
                  style={AppStyle.StyleRegister.input}
                  placeholder="Số điện thoại"
                />
                <View>
                  <TextInput
                    secureTextEntry={!isToggleChecked}
                    placeholderTextColor={'rgba(139, 139, 139, 1)'}
                    style={AppStyle.StyleRegister.input}
                    placeholder="Mật khẩu"
                  />
                  <Pressable
                    style={AppStyle.StyleRegister.togglePassword}
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
              {/* Terms & Conditions and Privacy Policy */}
              <View style={AppStyle.StyleRegister.wrapTermsAndConditions}>
                <Text style={AppStyle.StyleRegister.textCommon}>
                  Để đăng ký tài khoản, bạn đồng ý
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Pressable>
                    <Text style={AppStyle.StyleRegister.textTermsAndConditions}>
                      Terms & Conditions
                    </Text>
                  </Pressable>
                  <Text style={AppStyle.StyleRegister.textCommon}> and </Text>
                  <Pressable>
                    <Text style={AppStyle.StyleRegister.textTermsAndConditions}>
                      Privacy Policy
                    </Text>
                  </Pressable>
                </View>
              </View>
              {/* Button */}
              <View>
                <GradientButton title="Đăng ký" />
              </View>
              {/* Or */}
              <View style={AppStyle.StyleRegister.wrapOr}>
                <HorizontalLine />
                <Text style={AppStyle.StyleRegister.textCommon}>Hoặc</Text>
                <HorizontalLine />
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
                <Pressable onPress={() => navigation.navigate('Login')}>
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
