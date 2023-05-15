import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import CartItem from '../CartItem/CartItem.jsx';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, totalQuantity, getTotalPrice } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
        <div>
            <h1>No hay ítems en el carrito</h1>
            <Link to="/">Productos</Link>
        </div>
        );
    }

    return (
        <div>
        {cart.map((p) => (
            <CartItem key={p.id} {...p} />
        ))}
        <h3>Total: ${getTotalPrice()}</h3>
        <button onClick={() => clearCart()}>Limpiar carrito</button>
        <Link to="/checkout">Checkout</Link>
        </div>
    );
};

export default Cart;
