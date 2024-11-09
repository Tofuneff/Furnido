import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';

// Lấy ra kích thước của màn hình thông qua Dimensions.get('window')
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const BannerSlider = () => {
  const images = [
    {
      id: 1,
      image:
        'https://i.pinimg.com/564x/f9/0c/23/f90c23f1af3af74ca36a2a4536944544.jpg',
    },
    {
      id: 2,
      image:
        'https://i.pinimg.com/564x/17/1b/55/171b55e04758e1fb29ba0f75b4b28072.jpg',
    },
    {
      id: 3,
      image:
        'https://i.pinimg.com/564x/1e/38/dc/1e38dcccee1347c91506ea23a8d7a627.jpg',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef();

  useEffect(() => {
    const lastIndex = images.length - 1;
    // if activeIndex === lastIndex --> trở về index 0
    // else activeIndex + 1
    let interval = setInterval(() => {
      if (activeIndex === lastIndex) {
        flatListRef.current.scrollToIndex({
          index: 0,
          animated: true,
        });
      } else {
        flatListRef.current.scrollToIndex({
          index: activeIndex + 1,
          animated: true,
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemLayout = (data, index) => ({
    length: WIDTH,
    offset: WIDTH * index,
    index: index,
  });

  const onChange = nativeEvent => {
    if (nativeEvent) {
      const scrollPosition = nativeEvent.contentOffset.x;
      const screenWidth = nativeEvent.layoutMeasurement.width;
      const slideIndex = Math.ceil(
        // scrollPosition: Chiều rồng của screen position từ lúc bắt đầu scroll đến lúc scroll hoàn thành
        // index: 0 - scrollPosition: 0 --> scroll đến index: 1 - scrollPosition: 368 ví dụ vậy
        // screenWidth: Chiều rộng của màn hình
        // scrollPosition / screenWidth = 368 / 368 = 1 --> slideIndex = 1
        // khi đi từ index 1 tới index 2 = scrollPosition + scrollPosition = 368 + 368 = 736 / 368 = 2 --> slideIndex = 2
        scrollPosition / screenWidth,
      );
      if (slideIndex != activeIndex) setActiveIndex(slideIndex);
      // nếu slide != active
      //       0         0
      // scroll tới slide tiếp theo
      // slide != active
      //   1   !=    0  =  true
      // set giá trị index của slide hiện tại vào state active
      // nếu slide != active
      //       1         1
      // scroll tới slide tiếp theo
      // slide != active
      //   2   !=    1  =  true
      // set giá trị index của slide hiện tại vào state active...
    }
  };

  const renderItem = ({item}) => {
    return (
      <Image
        source={{uri: item.image}}
        resizeMode="stretch"
        style={styles.wrap}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <StatusBar hidden={true} />
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          onScroll={({nativeEvent}) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          ref={flatListRef}
          getItemLayout={getItemLayout}
          // Chỉ load các item trong viewport và một màn hình xung quanh nó
          windowSize={1}
          removeClippedSubviews={true}
          // initialNumToRender={1} // Chỉ render 1 item ban đầu
          style={styles.wrap}
        />
        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            <View
              key={e.id}
              style={
                activeIndex == index ? styles.dotInActive : styles.dotUnActive
              }
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BannerSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 5,
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 5,
  },
  dotInActive: {
    width: 10,
    height: 3,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  dotUnActive: {
    width: 5,
    height: 3,
    borderRadius: 10,
    backgroundColor: '#C3C3C3',
  },
});
