import {get, post, put, del} from './api';

export const getCategories = () => get('/categories');

// export const addUser = userData => post('/users', userData);

// export const updateUser = (userId, userData) =>
//   put(`/users/${userId}`, userData);

// export const deleteUser = userId => del(`/users/${userId}`);
