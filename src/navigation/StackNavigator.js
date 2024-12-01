import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import BottomTabs from './BottomTabNavigatior';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProductDetail from '../screens/ProductDetail';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'bottomTab',
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
  },
});

export default RootStack;
