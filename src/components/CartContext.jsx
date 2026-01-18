import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    });

    // Odio il localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prev) => [...prev, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems((prev) => {
            const index = prev.findIndex(item => item.product_id === productId);
            if (index !== -1) {
                const newCart = [...prev];
                newCart.splice(index, 1);
                return newCart;
            }
            return prev;
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);