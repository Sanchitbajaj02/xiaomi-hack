import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import orderReducer from "./features/orderSlice";
import productReducer from "./features/productSlice";
import vendorReducer from "./features/vendorSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    product: productReducer,
    vendor: vendorReducer,
  },
});
