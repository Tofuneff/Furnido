import {get, post, put, del} from './api';

export const getProducts = () => get('/products');

export const getProductsByCategory = categoryId =>
  get(`/products/by-category/${categoryId}`);

export const getProductDetails = productId => get(`/products/${productId}`);
