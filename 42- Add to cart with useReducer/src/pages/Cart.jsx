import { useContext } from "react";
import { StoreContext } from "../context&reducer/StoreContext";
import { Nav } from "../component/Nav";
import { CartItem } from "../component/CartItem";

export const Cart = () => {
  const { state, removeFromCart } = useContext(StoreContext);
  const { products, total } = state;

  return (
    <>
      <Nav />

      <h2 className="text-center font-bold text-2xl mt-10">
        Total Price: ${total.toFixed(2)}
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500 mt-5">Your cart is empty.</p>
      ) : (
        products.map((item) => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))
      )}
    </>
  );
};