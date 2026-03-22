import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import CartItem from './CartItem';

export default function Cart() {
  const { items, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-xl shadow-md p-1">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>

      {items.length === 0 ? (
        <p className="text-center text-gray-500">Cart is empty</p>
      ) : (
        <>
          <div className="mb-6">
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button onClick={() => dispatch(clearCart())}
              className="w-full mt-4 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition">
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}