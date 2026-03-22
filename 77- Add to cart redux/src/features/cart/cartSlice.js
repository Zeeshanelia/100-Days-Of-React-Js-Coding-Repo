import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],           // array of { id, title, price, quantity }
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find(item => item.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.totalPrice += product.price;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);

      if (item) {
        state.totalPrice -= item.price * item.quantity;
        state.items = state.items.filter(i => i.id !== id);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;