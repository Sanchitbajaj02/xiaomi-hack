import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addTocart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromcart: (state, action) => {
      const index = state.items.findIndex(
        item => item.productId === action.payload,
      );
      console.log(action.payload);

      let newcart = [...state.items];

      if (index >= 0) {
        newcart.splice(index, 1);
      } else {
        console.warn(
          `Cant Remove product (id: ${action.payload.id}) as its not cart`,
        );
      }

      state.items = newcart;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addTocart, removeFromcart} = cartSlice.actions;

export const selectcartItems = state => state.cart.items;

export const selectcartItemWithId = (state, id) =>
  state.cart.items.filter(item => item.id == id);

export const selectcartTotal = state =>
  state.cart.items.reduce((total, item) => (total += +item.price), 0);

export default cartSlice.reducer;
