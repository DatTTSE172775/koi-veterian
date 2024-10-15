import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./accountSlide";
import authReducer from "./authSlide";

const store = configureStore({
  reducer: {
    auth: authReducer,
    account: accountReducer,
  },
});

export default store;
