import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import CartItem from '../CartItem/CartItem.jsx';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css'

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
        <div className="cart-wrapper">
            <div className="cart-container">
                {cart.map((p) => (
                    <CartItem key={p.id} {...p} />
                ))}
                    <div className="cart-summary">
                    <h3>Total: ${getTotalPrice()}</h3>
                    <button className="btn btn-primary btn-clear" onClick={() => clearCart()}>Limpiar carrito</button>
                    <Link to="/checkout" className="btn btn-success">Terminar Compra</Link>
                    </div>
            </div>
        </div>
    );
};

export default Cart;
