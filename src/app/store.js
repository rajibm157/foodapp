import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import authReducer from '_features/authSlice';
import loadingReducer from '_features/loadingSlice';
import errorsSlice from '_features/errorsSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    errors: errorsSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
