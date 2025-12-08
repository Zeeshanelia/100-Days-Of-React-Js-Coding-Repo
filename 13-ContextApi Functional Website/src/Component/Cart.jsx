import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, increment, decrement, removeItem } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 0),
    0
  );

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 bg-white rounded-xl shadow"
            >
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600 text-sm">${item.price}</p>
              </div>

              <div className="flex items-center space-x-3">
                {/* Decrement */}
                <button
                  onClick={() => decrement(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded-lg text-lg hover:bg-gray-300"
                >
                  –
                </button>

                {/* Quantity */}
                <span className="font-semibold text-lg">{item.quantity}</span>

                {/* Increment */}
                <button
                  onClick={() => increment(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded-lg text-lg hover:bg-gray-300"
                >
                  +
                </button>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-3 text-red-500 hover:text-red-700"
                >
                  🗑
                </button>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="text-right mt-4">
            <h3 className="text-xl font-bold">
              Total: <span className="text-green-600">${total.toFixed(2)}</span>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
