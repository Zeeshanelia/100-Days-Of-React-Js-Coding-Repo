import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {

    // ✅ lazy init with try/catch — handles null, undefined, invalid JSON
    const [cartItem, setCartItem] = useState(() => {
        try {
            const stored = localStorage.getItem("cartItem")
            if (!stored || stored === "undefined") return []
            return JSON.parse(stored)
        } catch (error) {
            console.log("localStorage error:", error)
            return []
        }
    })

    // ✅ save to localStorage whenever cartItem changes
    useEffect(() => {
        if (cartItem !== undefined) {
            localStorage.setItem("cartItem", JSON.stringify(cartItem))
        }
    }, [cartItem])

    const addToCart = (products) => {
        const itemInCart = cartItem.find((item) => item.id === products.id)

        if (itemInCart) {
            const updateCart = cartItem.map((item) =>
                item.id === products.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
            setCartItem(updateCart)
            toast.success('Item quantity updated')
        } else {
            toast.success('Product added to cart')
            setCartItem([...cartItem, { ...products, quantity: 1 }])
        }
    }

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
        toast.success('Item deleted')
        setCartItem(cartItem.filter((item) => item.id !== productId))
    }

    return (
        <CartContext.Provider value={{ cartItem, setCartItem, addToCart, updateQuantity, deleteItem }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);