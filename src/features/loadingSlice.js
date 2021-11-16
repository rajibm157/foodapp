import { createSlice } from '@reduxjs/toolkit';

import { login, logout, deleteUser } from '_actions/authAction';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false,
  },
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [logout.pending]: (state, action) => {
      state.isLoading = true;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [logout.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [deleteUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [deleteUser.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { showLoading, stopLoading, setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
