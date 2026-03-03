import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);
    const addToCart = (products) =>{
        setCartItem([...cartItem , products])
    }

    return (
        <CartContext.Provider value={{ cartItem, setCartItem, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};


export const useCart = () => useContext(CartContext);  // added helper hook