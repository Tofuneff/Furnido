import {get, post, del} from './api';

const BASE_URL = '/carts';

// Lấy thông tin giỏ hàng
export const getCart = userId => {
  return get(`${BASE_URL}/`, {userId});
};

// Thêm hoặc sửa sản phẩm trong giỏ hàng
export const alterCart = (userId, itemData) => {
  return post(`${BASE_URL}/`, itemData, {userId});
};

// Xóa toàn bộ giỏ hàng
export const clearCart = userId => {
  return del(`${BASE_URL}/`, {userId});
};

// Xóa một sản phẩm trong giỏ hàng
export const removeItemFromCart = (userId, productVariantId) => {
  return del(`${BASE_URL}/remove/${productVariantId}`, {userId});
};
