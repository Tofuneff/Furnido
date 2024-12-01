import {View, Text, Image} from 'react-native';
import React from 'react';
import AppStyle from '../../theme/styles';
import {Heading, Wrapper} from '../../theme/styled';

const ProfileScreen = () => {
  return (
    <View style={AppStyle.StyleCommon.container}>
      {/* Header */}
      <Heading>
        <Text style={AppStyle.StyleProfile.textLabel}>Profile</Text>
      </Heading>
      <Wrapper>
        <View style={AppStyle.StyleProfile.wrapInformation}>
          <View style={AppStyle.StyleProfile.wrapAvatar}>
            <Image
              style={AppStyle.StyleProfile.avatar}
              source={require('../../assets/images/avatar.jpg')}
            />
          </View>
          <View>
            <Text style={AppStyle.StyleProfile.textName}>Đỗ Minh Hiếu</Text>
            <Text style={AppStyle.StyleProfile.textEmail}>
              hieudmph47182@fpt.edu.vn
            </Text>
          </View>
        </View>
      </Wrapper>
    </View>
  );
};

export default ProfileScreen;
