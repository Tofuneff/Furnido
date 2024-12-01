import React, {useRef, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CustomBottomSheet = ({isVisible, onClose}) => {
  const sheetRef = useRef(null);
  const insets = useSafeAreaInsets();

  const renderContent = () => (
    <View style={[styles.container, {paddingBottom: insets.bottom}]}>
      <Text style={styles.title}>Bottom Sheet Title</Text>
      <TouchableOpacity onPress={onClose}>
        <Text style={styles.closeButton}>Close</Text>
      </TouchableOpacity>
    </View>
  );

  useEffect(() => {
    if (isVisible) {
      sheetRef.current.snapTo(0);
    } else {
      sheetRef.current.snapTo(1);
    }
  }, [isVisible]);

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[300, 0]}
      borderRadius={10}
      renderContent={renderContent}
      onCloseEnd={onClose}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    height: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 20,
    color: 'blue',
  },
});

export default CustomBottomSheet;
