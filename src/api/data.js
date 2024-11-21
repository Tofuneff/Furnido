export const products = [
  {
    id: '1',
    image: require('../assets/images/products/product1.jpg'),
    title: 'Corvus Chair',
    description: 'Description for product 1',
    price: '29.99',
    colors: ['#002B4E', '#45B26D', '#666ECA'],
  },
  {
    id: '2',
    image: require('../assets/images/products/product2.jpg'),
    title: 'Field Lounge Chair',
    description: 'Description for product 2',
    price: '49.99',
    colors: ['#B6B1AC', '#187CEA', '#FC157E'], // Danh sách màu cho sản phẩm
  },
  {
    id: '3',
    image: require('../assets/images/products/product3.jpg'),
    title: 'Chester Chair',
    description: 'Description for product 3',
    price: '29.99',
    colors: ['#343A14', '#FF4555'],
  },
  {
    id: '4',
    image: require('../assets/images/products/product4.jpg'),
    title: 'Avrora Chair',
    description: 'Description for product 4',
    price: '49.99',
    colors: ['#605C3C', '#88C45D'],
  },
  // thêm các sản phẩm khác vào đây
];

export const images = [
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

export const categories = [
  {id: '1', name: 'Chairs', apiEndpoint: 'chairs'},
  {id: '2', name: 'Sofas', apiEndpoint: 'sofas'},
  {id: '3', name: 'Tables', apiEndpoint: 'tables'},
  {id: '4', name: 'Kitchen', apiEndpoint: 'kitchen'},
  {id: '5', name: 'Beds', apiEndpoint: 'beds'},
];
