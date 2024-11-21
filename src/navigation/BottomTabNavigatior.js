import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/tabs/HomeScreen';
import SearchScreen from '../screens/tabs/SearchScreen';
import NotificationScreen from '../screens/tabs/NotificationScreen';
import ProfileScreen from '../screens/tabs/ProfileScreen';
import {Dimensions, Image} from 'react-native';

const Tab = createBottomTabNavigator();

// Import các hình ảnh icon từ thư mục images
const icons = {
  Home: {
    unfocused: require('../assets/icons/home-unfocus.png'),
    focused: require('../assets/icons/home-focused.png'),
  },
  Search: {
    unfocused: require('../assets/icons/search-unfocus.png'),
    focused: require('../assets/icons/search-focused.png'),
  },
  Notification: {
    unfocused: require('../assets/icons/notification-unfocus.png'),
    focused: require('../assets/icons/notification-focused.png'),
  },
  Profile: {
    unfocused: require('../assets/icons/profile-unfocus.png'),
    focused: require('../assets/icons/profile-focused.png'),
  },
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          // Chọn icon dựa trên trạng thái focused
          const iconSource = focused
            ? icons[route.name].focused
            : icons[route.name].unfocused;
          return <Image source={iconSource} resizeMode="contain" />;
        },
        // Điều chỉnh chiều cao của bottom tab
        tabBarStyle: {
          height: 75, // Đặt chiều cao theo ý muốn
          paddingTop: 6, // Căn chỉnh icon bên trong tab bar
          backgroundColor: '#FFFFFF',
        },
        tabBarActiveTintColor: '#000000',
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Poppins-Medium',
          paddingTop: 4,
        },
        tabBarPosition: Dimensions.width > 600 ? 'left' : 'bottom',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
