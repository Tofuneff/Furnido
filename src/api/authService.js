import {get, post, put, del} from './api';

export const register = data => post('/auth/register', data);

export const login = data => post('/auth/login', data);

export const changePassword = data => post('/auth/change-password', data);
