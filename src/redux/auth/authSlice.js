import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { persistReducer } from 'redux-persist'; // to connect Redux State with LocalStorage
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { LOCAL_STORAGE_KEY } from 'redux/constants';
import { userLogin, userLogout, userRegister } from './authOperations';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: {
    // [userRegister.pending]() {},
    [userRegister.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = null;
      toast.success(
        `User ${payload.user.name.toUpperCase()} has been successfully registered`
      );
    },
    [userRegister.rejected](state, { payload }) {
      state.error = payload;
      toast.error('Register failed. Please, try again');
    },

    // [userLogin.pending]() {},
    [userLogin.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = null;
      toast.success(
        `User ${payload.user.name.toUpperCase()} has been successfully logged in`
      );
    },
    [userLogin.rejected](state, { payload }) {
      state.error = payload;
      toast.error('Log in failed. Please, verify data and try again');
    },
    [userLogout.fulfilled](state, { payload }) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
      toast.success(
        `User ${payload.toUpperCase()} has been successfully logged out`
      );
    },
    [userLogout.rejected](state, { payload }) {
      toast.error('Log out failed. Please, try again');
    },
  },
});

// export const authReducer = authSlice.reducer;
const persistConfig = {
  key: LOCAL_STORAGE_KEY.user,
  storage,
};

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
