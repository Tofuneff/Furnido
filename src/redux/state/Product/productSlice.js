import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
  extraReducers: builder => {
    // logic here...
  },
});

export const {addTodo} = productSlice.actions;
export default productSlice.reducer;
