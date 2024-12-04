import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Text, View} from 'react-native';

export default CheckoutScreen = ({route}) => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  return (
    <View>
      <Text>Check out screen</Text>
    </View>
  );
};
