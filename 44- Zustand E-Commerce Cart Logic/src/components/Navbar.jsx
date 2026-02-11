import React from 'react';
import { useCartStore } from '../store/cartStore';

export const Navbar = () => {
  const cart = useCartStore(state => state.cart);

  return (
    <nav className="bg-purple-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Shop</h1>
      <div>
        Cart: <span className="font-bold">{cart.length}</span>
      </div>
    </nav>
  );
};
