import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export const CartContext = createContext({
    cart: [],
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
        setCart((prev) => [...prev, { ...item, quantity }]);
        } else {
        console.error('El producto ya fue agregado');
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter((prod) => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.quantity * item.price, 0);
    };

    return (
        <div>
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getTotalPrice }}>
            {children}
        </CartContext.Provider>
        </div>
    );
};


