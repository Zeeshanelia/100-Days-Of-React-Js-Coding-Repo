// Cart.jsx
import React from 'react';
import { useCartStore } from '../store/cartStore'; // ✅ Make sure this path is correct

export const Cart = () => {
  const cart = useCartStore(state => state.cart);
  const removeItem = useCartStore(state => state.removeItem);

  return (
    <div className="mt-8">
      <h2 className="font-bold text-xl mb-4">Cart Items</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      {cart.map(item => (
        <div key={item.id} className="flex justify-between items-center border-b py-2">
          <span>{item.name}</span>
          <span>${item.price}</span>
          <button
            onClick={() => removeItem(item.id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};
