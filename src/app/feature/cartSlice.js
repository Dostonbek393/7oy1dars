import { createSlice } from "@reduxjs/toolkit";

const getLocalCart = () => {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
};

const saveLocalCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const initialState = {
  cart: getLocalCart(),
  totalAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart.push(payload);
      saveLocalCart(state.cart);
    },

    incrementAmount: (state, { payload }) => {
      const item = state.cart.find((i) => i.id === payload);
      if (item) {
        item.amount += 1;
        saveLocalCart(state.cart);
      }
    },

    decrementAmount: (state, { payload }) => {
      const item = state.cart.find((i) => i.id === payload);
      if (item && item.amount > 1) {
        item.amount -= 1;
        saveLocalCart(state.cart);
      }
    },

    deleteCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload);
      saveLocalCart(state.cart);
    },

    clearCart: (state) => {
      state.cart = [];
      saveLocalCart(state.cart);
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
