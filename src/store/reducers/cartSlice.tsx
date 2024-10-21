import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import {
  calculateTotals,
  getFromLocalStorage,
  saveToLocalStorage,
} from "@/lib/getFromLocalStorage";
import { cartItem } from "@/types/cartItem";

const initialState = {
  cartItems: getFromLocalStorage("cartItems")
    ? JSON.parse(getFromLocalStorage("cartItems") || "[]")
    : [],
  cartData: getFromLocalStorage("cartData")
    ? JSON.parse(getFromLocalStorage("cartData") || "{}")
    : {
        total: 0,
        subtotal: 0,
        tax: 0,
      },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { item } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem: cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].quantity++;
        toast.success("item already in the cart!");
      } else {
        state.cartItems.push({ ...item });
        toast.success("item added to cart!");
      }

      saveToLocalStorage("cartItems", JSON.stringify(state.cartItems));
      const { subtotal, tax, total } = calculateTotals(state.cartItems);
      state.cartData.subtotal = subtotal;
      state.cartData.tax = tax;
      state.cartData.total = total;
      saveToLocalStorage("cartData", JSON.stringify(state.cartData));
    },

    removeFromCart: (state, action) => {
      const { itemId } = action.payload;
      state.cartItems = state.cartItems.filter(
        (item: cartItem) => item.id !== itemId
      );

      saveToLocalStorage("cartItems", JSON.stringify(state.cartItems));
      const { subtotal, tax, total } = calculateTotals(state.cartItems);
      state.cartData.subtotal = subtotal;
      state.cartData.tax = tax;
      state.cartData.total = total;
      saveToLocalStorage("cartData", JSON.stringify(state.cartData));
    },

    increment: (state, action) => {
      const { itemId } = action.payload;
      const item = state.cartItems.find((item: cartItem) => item.id === itemId);
      if (item) {
        item.quantity++;

        saveToLocalStorage("cartItems", JSON.stringify(state.cartItems));
        const { subtotal, tax, total } = calculateTotals(state.cartItems);
        state.cartData.subtotal = subtotal;
        state.cartData.tax = tax;
        state.cartData.total = total;
        saveToLocalStorage("cartData", JSON.stringify(state.cartData));
      }
    },

    decrement: (state, action) => {
      const { itemId } = action.payload;
      const item = state.cartItems.find((item: cartItem) => item.id === itemId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.cartItems = state.cartItems.filter(
            (item: cartItem) => item.id !== itemId
          );
        }

        saveToLocalStorage("cartItems", JSON.stringify(state.cartItems));
        const { subtotal, tax, total } = calculateTotals(state.cartItems);
        state.cartData.subtotal = subtotal;
        state.cartData.tax = tax;
        state.cartData.total = total;
        saveToLocalStorage("cartData", JSON.stringify(state.cartData));
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.cartData = {
        total: 0,
        subtotal: 0,
        tax: 0,
      };

      localStorage.removeItem("cartItems");
      localStorage.removeItem("cartData");
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
