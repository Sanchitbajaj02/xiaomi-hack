import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProducts } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;

export default productSlice.reducer;
