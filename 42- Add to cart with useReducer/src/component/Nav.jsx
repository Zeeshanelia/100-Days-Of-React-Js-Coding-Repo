import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { StoreContext } from "../context&reducer/StoreContext";

export const Nav = () => {
  const { state } = useContext(StoreContext);
  const cartCount = state.products.length;

  return (
    <div className="flex justify-between w-3/4 mx-auto h-12 items-center mt-5">
      <Link
        className="text-xl bg-gray-200 hover:bg-gray-500 p-2 rounded"
        to="/"
      >
        Home
      </Link>

      <div className="md:text-xl font-bold text-indigo-900 tracking-wide text-center">
        Custom Slider
      </div>

      <Link
        className="relative w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-500 flex items-center justify-center"
        to="/cart"
      >
        <FaShoppingCart />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>
    </div>
  );
};
