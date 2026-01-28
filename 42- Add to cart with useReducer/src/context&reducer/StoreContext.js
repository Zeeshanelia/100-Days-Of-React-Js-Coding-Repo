
import { createContext, useReducer } from "react";
// import { storeReducer, initialState } from "./StoreReducer";

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