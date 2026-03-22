import { useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm mb-3">
      <div>
        <h4 className="font-medium">{item.title}</h4>
        <p className="text-sm text-gray-600">
          ${item.price.toFixed(2)} × {item.quantity}
        </p>
      </div>
      <div className="text-right">
        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="text-red-600 hover:text-red-800 text-sm mt-1"
        >
          Remove
        </button>
      </div>
    </div>
  );
}