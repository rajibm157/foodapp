import { createAsyncThunk } from '@reduxjs/toolkit';

import Services from '_services';
import { setTokens, localStorage } from '_utils';

export const login = createAsyncThunk(
  'auth/login',
  async (params, { rejectWithValue }) => {
    try {
      await localStorage.clear();
      const response = await Services.signIn(params);
      await setTokens(response.data.refreshToken, response.data.accessToken);
      return response.data.user;
    } catch (err) {
      let error = err; // cast the error for access
      if (!error.response) {
        throw err;
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'auth/deleteUser',
  async (params, { rejectWithValue }) => {
    try {
      const response = await Services.deleteUser(params);
      return response.data;
    } catch (err) {
      let error = err; // cast the error for access
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async ({ rejectWithValue }) => {
    try {
      const resToeken = await localStorage.getItem('refreshToken');
      const response = await Services.logout(resToeken);
      await localStorage.clear();
      return response.data;
    } catch (err) {
      let error = err; // cast the error for access
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data.error);
    }
  }
);
