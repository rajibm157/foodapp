import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import authReducer from "_features/authSlice";
import loadingReducer from "_features/loadingSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
