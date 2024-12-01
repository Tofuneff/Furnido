import {View} from 'react-native';

const HorizontalLine = ({
  width,
  borderBottomWidth,
  borderBottomColor,
  marginVertical,
}) => (
  <View
    style={{
      width: width,
      borderBottomWidth: borderBottomWidth,
      borderBottomColor: borderBottomColor,
      marginVertical: marginVertical,
    }}
  />
);

export default HorizontalLine;
