import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart.push(payload);
    },
    incrementAmount: (state, { payload }) => {
      const item = state.cart.find((i) => i.id == payload);
      item.amount += 1;
    },
    decrementAmount: (state, { payload }) => {
      const item = state.cart.find((i) => i.id == payload);
      if (item && item.amount > 1) {
        item.amount -= 1;
      }
    },
    clearCart: () => {},
    deleteCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload);
    },
  },
});

export const {
  addToCart,
  clearCart,
  decrementAmount,
  deleteCart,
  incrementAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
