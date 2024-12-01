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
  const [username, setUsername] = useState(false);
  const [password, setPassword] = useState(false);

  const toggleCheck = () => setToggleChecked(preved => !preved);
  const rememberCheck = () => setChecked(preved => !preved);

  const signin = async () => {
    setLoading(true);
    const res = await login({username, password});
    if (res.result.code === 200) {
      await AsyncStorage.setItem('userId', res.data.id.toString());
      directToHome();
      resetInput();
    }
  };

  const directToHome = () => navigation.navigate('bottomTab');

  const resetInput = () => {
    setUsername('');
    setPassword('');
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
                  Welcome back
                </Text>
                <Text style={AppStyle.StyleLogin.textTitle}>Login Account</Text>
              </View>
              {/* Input */}
              <View style={AppStyle.StyleLogin.wrapInput}>
                <TextInput
                  keyboardType="email-address"
                  placeholderTextColor={'rgba(139, 139, 139, 1)'}
                  style={AppStyle.StyleLogin.input}
                  placeholder="Enter your username"
                  value={username}
                  onChangeText={setUsername}
                />
                <View>
                  <TextInput
                    secureTextEntry={!isToggleChecked}
                    placeholderTextColor={'rgba(139, 139, 139, 1)'}
                    style={AppStyle.StyleLogin.input}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
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
                      Remember account
                    </Text>
                  ) : (
                    <Text
                      style={[
                        AppStyle.StyleLogin.textRememberAccount,
                        {color: '#402700'},
                      ]}>
                      Remember account
                    </Text>
                  )}
                </View>
                <Pressable>
                  <Text style={AppStyle.StyleLogin.textForgotPassword}>
                    Forgot password ?
                  </Text>
                </Pressable>
              </View>
              {/* Button */}
              <View>
                <GradientButton title="Login" onPress={signin} />
              </View>
              {/* Or */}
              <View style={AppStyle.StyleLogin.wrapOr}>
                <HorizontalLine
                  width={145}
                  borderBottomWidth={1}
                  borderBottomColor={'#402700'}
                  marginVertical={11}
                />
                <Text style={AppStyle.StyleLogin.textCommon}>Or</Text>
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
                  You don't have an account?
                </Text>
                <Pressable onPress={() => navigation.navigate('register')}>
                  <Text style={AppStyle.StyleLogin.textCreateAccount}>
                    Create an account
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
