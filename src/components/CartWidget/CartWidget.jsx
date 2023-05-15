import carts from './assets/carts.svg'
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <div>
            <Link to='/cart'>
                <img src={carts} alt="cart-widget" style={{ maxWidth: '30px', maxHeight: '30px' }} />
                {totalQuantity}
            </Link>
        </div>
    );
};

export default CartWidget;