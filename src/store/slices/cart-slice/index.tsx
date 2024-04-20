import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../../interfaces/cart-items";
import { openModal } from "../cart-modal-slice";

const initialState: {
  cartItems: CartItem[];
} = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.cart_id === newItem.cart_id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }
      if (
        !state.cartItems.find((item) => item.cart_id === action.payload.cart_id)
      ) {
        openModal();
      }
    },
    removeItem(state, action) {
      const cart_id = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.cart_id !== cart_id
      );
    },
    incrementQuantity(state, action) {
      const cart_id = action.payload;
      const item = state.cartItems.find((item) => item.cart_id === cart_id);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity(state, action) {
      const cart_id = action.payload;
      const item = state.cartItems.find((item) => item.cart_id === cart_id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
