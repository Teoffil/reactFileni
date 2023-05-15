import './ItemCount.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
        setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
        setQuantity(quantity - 1);
        }
    };

    return (
        <div className="Counter d-flex align-items-center gap-2">
        <button className="btn btn-outline-primary" onClick={decrement}>
            -
        </button>
        <h4 className="Number">{quantity}</h4>
        <button className="btn btn-outline-primary" onClick={increment}>
            +
        </button>
        <button
            className="btn btn-primary"
            onClick={() => onAdd(quantity)}
            disabled={!stock}
        >
            Agregar al Carrito
        </button>
        </div>
    );
};

export default ItemCount;
