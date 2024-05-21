import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const itemExists = state.value.find(
          (item) => item.product.id === action.payload.product.id
        );
        if (itemExists) {
          itemExists.quantity = Number(action.payload.quantity);
        } else {
          state.value.push({ ...action.payload });
        }
      },
    deleteFromCart: (state, action) => {
        state.value = state.value.filter((el) => el.product.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
