import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import BottomTabs from './BottomTabNavigatior';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Splash',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Splash: SplashScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    BottomTab: BottomTabs,
  },
});

export default RootStack;
