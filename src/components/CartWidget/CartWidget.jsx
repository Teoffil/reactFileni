import React from 'react';
import carts from './assets/carts.svg'

const CartWidget = () => {
    return (
        <div>
            <img src={carts} alt="cart-widget" />
            0
        </div>
    );
}

export default CartWidget;
