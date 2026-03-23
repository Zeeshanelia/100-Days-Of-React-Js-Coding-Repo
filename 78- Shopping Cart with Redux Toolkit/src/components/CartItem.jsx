import { useDispatch } from 'react-redux';
import { decreaseQuantity, removeFromCart, addToCart } from '../features/cart/cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row gap-5 bg-white p-5 rounded-xl shadow-sm border mb-5">
      <div className="w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 bg-white p-2 border rounded-lg">

        <img
          src={item.image} alt={item.title}
          className="w-full h-full object-contain mix-blend-multiply"/>
      </div>

      <div className="flex-1">
        <h3 className="font-medium text-gray-900 line-clamp-2 mb-1.5">
          {item.title}
          </h3>
        <p className="text-indigo-600 font-bold text-lg mb-3">
          ${item.price.toFixed(2)}
        </p>

        <div className="flex items-center gap-6">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button
              onClick={() => dispatch(decreaseQuantity(item.id))}
              className="px-4 py-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed" disabled={item.quantity <= 1}> −
            </button>
            <span className="px-5 py-2 font-medium bg-gray-50">
              {item.quantity}
            </span>
            <button
              onClick={() => dispatch(addToCart(item))}
              className="px-4 py-2 hover:bg-gray-100">
              +
            </button>
          </div>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-red-600 hover:text-red-800 font-medium">
            Remove
          </button>
        </div>
      </div>

      <div className="text-right font-bold text-lg min-w-[100px]">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
}