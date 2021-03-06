import { createSlice } from '@reduxjs/toolkit';

import { login } from '_actions/authAction';

const initialState = {
  isLogedIn: false,
  isLoginCheck: true,
  user: {},
  error: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checkLogin: (state, action) => {
      state.isLogedIn = action.payload;
      state.isLoginCheck = false;
    },
    logout: (state) => {
      state.isLogedIn = false;
    },
    updateProfile: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLogedIn = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }
    });
  },
});

export const { logout, updateProfile, checkLogin } = authSlice.actions;

export default authSlice.reducer;
