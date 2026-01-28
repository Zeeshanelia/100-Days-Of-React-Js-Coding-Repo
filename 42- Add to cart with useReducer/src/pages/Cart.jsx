import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context&reducer/StoreContext";

export const Cart = () => {
  const { state } = useContext(StoreContext);
  const { total, products } = state;

  return (
    <>
      <div className="flex justify-between mt-20 w-2/4 mx-auto">
        <Link
          className="text-xl bg-gray-200 hover:bg-gray-500 p-3 rounded"
          to="/"
        >
          Home
        </Link>

        <div className="ml-10 p-1 w-14 h-14 text-xl rounded-full bg-gray-200 hover:bg-gray-500 mx-1 flex items-center justify-center">
          <FaShoppingCart />
        </div>
      </div>

      <div>
        <h2 className="text-center font-bold text-2xl mt-10">
          Total Price: {total}
        </h2>
        {products.map((item) => (
          <div
            key={item.id}
            className="flex justify-between w-2/4 mx-auto mt-5 p-3 border border-gray-300 rounded"
          >
            <p className="font-bold">{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
