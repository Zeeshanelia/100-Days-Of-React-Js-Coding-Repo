import React from 'react';
import { useCartStore } from '../store/cartStore';

// Named export
export const ProductCard = ({ product }) => {
  const addItem = useCartStore(state => state.addItem);

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="font-bold text-lg">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <button
        onClick={() => addItem(product)}
        className="mt-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Add to Cart
      </button>
    </div>
  );
};
