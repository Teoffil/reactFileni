import React from 'react';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce Informático</h3>
            <div>
                <NavLink to='/category/motherboards' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Motherboards</NavLink>
                <NavLink to='/category/gpus' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Placas de Video</NavLink>
                <NavLink to='/category/procesadores' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Procesadores</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;