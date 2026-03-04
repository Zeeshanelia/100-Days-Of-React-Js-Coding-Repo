import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);

    const addToCart = (products) => {
        const itemInCart = cartItem.find((item) => item.id === products.id)

        if (itemInCart) {
            const updateCart = cartItem.map((item) =>
                item.id === products.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
            setCartItem(updateCart)
        } else {
            setCartItem([...cartItem, { ...products, quantity: 1 }])
        }
    }

    // ✅ removed cartItem parameter — uses state directly
    const updateQuantity = (productId, action) => {
        setCartItem(cartItem.map((item) => {
            if (item.id === productId) {
                let newUnit = item.quantity;
                if (action === "increase") {
                    newUnit = newUnit + 1
                } else if (action === "decrease") {
                    newUnit = newUnit - 1
                }
                return newUnit > 0 ? { ...item, quantity: newUnit } : null
            }
            return item;
        }).filter((item) => item !== null))
    }

    const deleteItem = (productId) => {
        setCartItem(cartItem.filter((item) => item.id !== productId))
    }

    return (
        <CartContext.Provider value={{ cartItem, setCartItem, addToCart, updateQuantity, deleteItem }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);