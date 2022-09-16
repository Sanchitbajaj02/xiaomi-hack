import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import orderReducer from "./features/orderSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
  },
});
