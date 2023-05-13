import carts from './assets/carts.svg'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <div>
            <Link to='/cart' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img src={carts} alt="cart-widget" style={{ maxWidth: '30px', maxHeight: '30px' }}/>
            {totalQuantity}
            </Link>
        </div>
    );
}

export default CartWidget;
