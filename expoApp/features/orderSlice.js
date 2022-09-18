import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customerInfo: {
    customerName: "",
    customerEmail: "",
    customerNumber: "",
    customerAddress: "",
    customerCity: "",
    customerState: "",
    customerZip: "",
  },
  paymentInfo: {},
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addCustomerInfo: (state, action) => {
      state.customerInfo = action.payload;
    },
    addPaymentInfo: (state, action) => {
      state.paymentInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCustomerInfo, addPaymentInfo } = orderSlice.actions;

export default orderSlice.reducer;
