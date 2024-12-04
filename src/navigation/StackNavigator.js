import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import BottomTabs from './BottomTabNavigatior';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProductDetail from '../screens/ProductDetail';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';

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
    favoriteProducts: FavoriteScreen,
    checkout: CheckoutScreen,
    changePassword: ChangePasswordScreen,
  },
});

export default RootStack;
