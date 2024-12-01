import React from 'react';
import {FlatList, Pressable, Text, StyleSheet} from 'react-native';

const CategorySelector = ({
  categories,
  selectedCategoryId,
  onCategoryChange,
}) => {
  const renderItem = ({item}) => {
    const isSelected = item.id === selectedCategoryId;
    return (
      <Pressable
        style={[styles.categoryItem, isSelected && styles.selectedCategory]}
        onPress={() => onCategoryChange(item.id)}>
        <Text style={[styles.categoryText, isSelected && styles.selectedText]}>
          {item.name}
        </Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={categories}
      horizontal
      keyExtractor={item => item.id}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      getItemLayout={(data, index) => ({
        length: 50, // Chiều cao cố định
        offset: 50 * index,
        index,
      })}
    />
  );
};

export default CategorySelector;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row', // Sắp xếp item theo chiều ngang
    alignItems: 'center', // Căn giữa item theo chiều dọc
    height: 70, // Giới hạn chiều cao toàn bộ danh sách
  },
  categoryItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 5,
    borderColor: '#000000',
    borderWidth: 1.5,
    minWidth: 80, // Chiều rộng tối thiểu
    maxHeight: 50, // Giới hạn chiều cao
    alignItems: 'center', // Căn giữa nội dung theo chiều dọc
    justifyContent: 'center', // Căn giữa nội dung theo chiều ngang
  },
  selectedCategory: {
    backgroundColor: '#000',
  },
  categoryText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: 70, // Giới hạn chiều rộng chữ
    flexWrap: 'wrap', // Đảm bảo chữ không tràn
    fontFamily: 'Poppins-Medium',
  },
  selectedText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
  },
});
