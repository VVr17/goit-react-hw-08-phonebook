import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from 'redux/constants';

axios.defaults.baseURL = BASE_URL;

// при перезагрузке проверить есть ли токен в хранилище и достать оттуда

const authorizationHeader = {
  setAuthToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  deleteAuthToken(token) {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const userRegister = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    console.log('credentials', credentials);
    try {
      const { data } = await axios.post('/users/signup', credentials);
      authorizationHeader.setAuthToken(data.token);
      console.log('data.token', data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      authorizationHeader.setAuthToken(data.token);
      console.log('data.token', data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userLogout = createAsyncThunk(
  'auth/logout',
  async (name, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/logout');
      console.log('data', response);
      authorizationHeader.deleteAuthToken();
      return name;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
