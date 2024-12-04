import axios from 'axios';
import {Alert} from 'react-native';

const backendURL = '10.0.2.2';
const port = '8080';

// Cấu hình cơ bản Axios
const apiClient = axios.create({
  baseURL: `http://${backendURL}:${port}/api`, // Đặt URL của backend
  timeout: 10000, // Thời gian timeout (ms)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Hàm GET chung
export const get = async (url, params = {}) => {
  console.log('get', url, params);
  try {
    const response = await apiClient.get(url, {params});
    return response.data.data;
  } catch (error) {
    handleError(error);
  }
};

// Hàm POST chung
export const post = async (url, data = {}, params) => {
  console.log('url', url);
  console.log('data', data);
  console.log('params', params);
  try {
    const response = await apiClient.post(url, data, {params});
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Hàm PUT chung
export const put = async (url, data = {}) => {
  try {
    const response = await apiClient.put(url, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Hàm DELETE chung
export const del = async (url, params) => {
  try {
    const response = await apiClient.delete(url, {params});
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Hàm xử lý lỗi
const handleError = error => {
  console.log(error.response?.data?.result);
  Alert.alert(error?.message || error.response?.result?.message);
  throw error.response?.data?.result?.message;
};
