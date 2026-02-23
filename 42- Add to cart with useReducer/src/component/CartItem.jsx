export const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="flex justify-between mt-5 w-2/4 mx-auto p-3 border border-gray-300 rounded items-center">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded"
      />
      <p className="font-bold">{item.name}</p>
      <p>${item.price.toFixed(2)}</p>
      <button
        onClick={() => removeFromCart(item.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
};