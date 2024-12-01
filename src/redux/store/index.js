import {configureStore} from '@reduxjs/toolkit';
import productReducer from '../state/Product/productSlice';

export default configureStore({
  reducer: {
    productsStore: productReducer,
  },
});
