import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/tabs/HomeScreen';
import SearchScreen from '../screens/tabs/SearchScreen';
import NotificationScreen from '../screens/tabs/NotificationScreen';
import ProfileScreen from '../screens/tabs/ProfileScreen';

const BottomTabs = createBottomTabNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: HomeScreen,
    Search: SearchScreen,
    Notification: NotificationScreen,
    Profile: ProfileScreen,
  },
});

export default BottomTabs;
