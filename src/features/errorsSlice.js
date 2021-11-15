import { createSlice } from '@reduxjs/toolkit';

import { login } from '_actions/authAction';

export const errorsSlice = createSlice({
  name: 'errors',
  initialState: {
    error: {},
    type: null,
  },
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
      state.type = action.payload.type;
    },
    clearError: (state) => {
      state.error = {};
      state.type = null;
    },
  },
  extraReducers: {
    [login.rejected]: (state, action) => {
      if (action.payload) {
        state.error = action.payload;
        state.type = 'Login';
      } else {
        state.error = action.error;
        state.type = 'NetworError';
      }
    },
  },
});

export const { setError, clearError } = errorsSlice.actions;

export default errorsSlice.reducer;
