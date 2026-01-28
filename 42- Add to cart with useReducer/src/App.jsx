
// src/
// ├─ App.js
// ├─ context&reducer/
// │  ├─ StoreContext.js
// │  └─ StoreReducer.js
// ├─ pages/
// │  ├─ Home.jsx
// │  ├─ Cart.jsx
// │  └─ Product.jsx (optional)
// ├─ components/
// │  ├─ Nav.jsx
// │  └─ CartItem.jsx



import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { StoreProvider } from "./context&reducer/StoreContext";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;

export const initialState = {
  total: 0,
  products: []
};

export const storeReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        products: action.payload
      };
    case "remove":
      return {
        ...state,
        products: action.payload
      };
    case "update price":
      return {
        ...state,
        total: action.payload
      };
    default:
      return state;
  }
};



import { createContext, useReducer } from "react";
import { storeReducer, initialState } from "./StoreReducer";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const addToCart = (product) => {
    const updatedProducts = [...state.products, product];
    dispatch({ type: "add", payload: updatedProducts });
    const totalPrice = updatedProducts.reduce((sum, p) => sum + p.price, 0);
    dispatch({ type: "update price", payload: totalPrice });
  };

  const removeFromCart = (productId) => {
    const updatedProducts = state.products.filter(
      (product) => product.id !== productId
    );
    dispatch({ type: "remove", payload: updatedProducts });
    const totalPrice = updatedProducts.reduce((sum, p) => sum + p.price, 0);
    dispatch({ type: "update price", payload: totalPrice });
  };

  return (
    <StoreContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};




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



import { useContext } from "react";
import { StoreContext } from "../context&reducer/StoreContext";
import { Nav } from "../components/Nav";
import { CartItem } from "../components/CartItem";

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
