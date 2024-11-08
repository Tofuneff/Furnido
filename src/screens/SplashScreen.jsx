import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import AppStyle from '../theme/styles';

const SplashScreen = () => {
  return (
    <View style={AppStyle.StyleSplash.container}>
      <ImageBackground
        style={AppStyle.StyleSplash.backgroundImage}
        source={require('../assets/images/bgImage.png')}
      />
      <View>
        <Text style={AppStyle.StyleSplash.text}>Sinh viên: Đỗ Minh Hiếu</Text>
        <Text style={AppStyle.StyleSplash.text}>Mã sinh viên: PH47182</Text>
        <Text style={AppStyle.StyleSplash.text}>Lớp: MD19202</Text>
        <Text style={AppStyle.StyleSplash.text}>Mã môn: CRO102</Text>
        <Text style={AppStyle.StyleSplash.text}>Giảng viên: Đặng Thái Sơn</Text>
        <Text style={AppStyle.StyleSplash.text}>Sản phẩm: Assignment</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
