import { useCart } from "../context/CartContext";

export const ProductCart = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-cart p-4 bg-white rounded-xl shadow hover:shadow-lg transition-all">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />

      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>

      <div className="flex items-center justify-between">
        <p className="text-gray-600 mb-3">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="px-3 py-1 bg-black text-white rounded-md text-sm hover:bg-gray-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
