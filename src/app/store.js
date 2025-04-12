import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../app/feature/cartSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
