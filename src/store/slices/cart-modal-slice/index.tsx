import { createSlice } from "@reduxjs/toolkit";
import { CartModalState } from "../../../interfaces/cart-modal";

const initialState: CartModalState = {
  isOpen: false,
};

const cartModalSlice = createSlice({
  name: "cart-modal",
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = cartModalSlice.actions;

export default cartModalSlice.reducer;
