import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import BottomTabs from './BottomTabNavigatior';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProductDetail from '../screens/ProductDetail';
import CartScreen from '../screens/CartScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'login',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    splash: SplashScreen,
    login: LoginScreen,
    register: RegisterScreen,
    bottomTab: BottomTabs,
    productDetail: ProductDetail,
    cart: CartScreen,
  },
});

export default RootStack;
