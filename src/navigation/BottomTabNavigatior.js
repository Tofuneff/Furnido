import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/tabs/HomeScreen';
import SearchScreen from '../screens/tabs/SearchScreen';
import NotificationScreen from '../screens/tabs/NotificationScreen';
import ProfileScreen from '../screens/tabs/ProfileScreen';
import {Dimensions, Image} from 'react-native';

const Tab = createBottomTabNavigator();

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
          const iconSource = focused
            ? icons[route.name].focused
            : icons[route.name].unfocused;
          return <Image source={iconSource} resizeMode="contain" />;
        },
        tabBarStyle: {
          height: 75,
          paddingTop: 6,
          backgroundColor: '#FFFFFF',
        },
        tabBarActiveTintColor: '#000000',
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Poppins-Medium',
          paddingTop: 4,
        },
        tabBarPosition: Dimensions.width > 600 ? 'left' : 'bottom',
        tabBarLabel: route.name,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarLabel: 'Trang chủ'}}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{tabBarLabel: 'Tìm kiếm'}}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{tabBarLabel: 'Thông báo'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarLabel: 'Thông tin'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
