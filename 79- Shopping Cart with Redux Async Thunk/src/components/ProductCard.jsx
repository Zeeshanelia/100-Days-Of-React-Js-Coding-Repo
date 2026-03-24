import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
      <div className="h-52 p-6 bg-white flex items-center justify-center border-b">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain mix-blend-multiply"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-medium text-gray-800 line-clamp-2 min-h-[2.75rem] mb-2">
          {product.title}
        </h3>

        <p className="text-2xl font-bold text-indigo-600 mt-auto mb-4">
          ${product.price.toFixed(2)}
        </p>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg font-medium transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}