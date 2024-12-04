import {get, post, del} from './api';

const BASE_URL = '/orders';

// Lấy danh sách đơn hàng
export const getOrders = userId => {
  return get(`${BASE_URL}`, {userId});
};

// Thêm hoặc sửa sản phẩm trong giỏ hàng
export const alterCart = (userId, itemData) => {
  return post(`${BASE_URL}`, itemData, {userId});
};

// Xóa toàn bộ giỏ hàng
export const clearCart = userId => {
  return del(`${BASE_URL}`, {userId});
};

// Xóa một sản phẩm trong giỏ hàng
export const removeItemFromCart = (userId, productVariantId) => {
  return del(`${BASE_URL}/remove/${productVariantId}`, {userId});
};
