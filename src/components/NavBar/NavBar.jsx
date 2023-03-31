import React from 'react';
import CartWidget from '../CartWidget/CartWidget.jsx';

const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce Informático</h3>
            <div>
                <button>Motherboards</button>
                <button>Placas de Video</button>
                <button>Procesadores</button>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;