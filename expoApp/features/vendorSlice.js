import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vendorDetails: {},
  token: "",
};

export const vendorSlice = createSlice({
  name: "cendor",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
    addVendor: (state, action) => {
      state.vendorDetails = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToken, addVendor } = vendorSlice.actions;

export const getToken = (state) => state.vendor.token;

export default vendorSlice.reducer;
