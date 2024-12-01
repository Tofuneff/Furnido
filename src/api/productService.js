import {get, post, put, del} from './api';

export const searchProducts = ({name, min, max, sortDir}) =>
  get('/products', {name, min, max, sortDir});

export const getProductsByCategory = categoryId =>
  get(`/products/by-category/${categoryId}`);

export const getProductDetails = (productId, userId) =>
  get(`/products/${productId}`, {userId});

export const getFavoriteProducts = userId =>
  get('/products/favorites', {userId});

export const favoriteProduct = (productId, userId) =>
  post(`/products/${productId}/favorite`, null, {userId});
