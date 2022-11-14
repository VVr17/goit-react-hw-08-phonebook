import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { authorizationHeader } from 'helpers/axiosOptions';

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
