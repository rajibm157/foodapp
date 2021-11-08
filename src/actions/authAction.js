import { createAsyncThunk } from "@reduxjs/toolkit";

import Services from "_services";

export const login = createAsyncThunk(
  "auth/login",
  async (params, { rejectWithValue }) => {
    try {
      const response = await Services.signIn(params);
      return response.data;
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
