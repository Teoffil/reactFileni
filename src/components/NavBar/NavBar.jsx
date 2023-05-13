import React from 'react';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { NavLink } from "react-router-dom";
/* React Boostrap */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
/* Mi css */
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" className="mb-3">
            <Container>
            <Navbar.Brand href="/">
                    <img
                    src='https://firebasestorage.googleapis.com/v0/b/react-2023-fdf7c.appspot.com/o/infogame.png?alt=media&token=baed97c6-56c1-45a7-9a7b-245e7454235d'
                    width="150"
                    height="150"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/">Sobre Nosotros</Nav.Link>
                    <NavDropdown title="Categorías" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <NavLink to='/category/motherboards' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Motherboards</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/category/gpus' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Placas de Video</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/category/procesadores' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Procesadores</NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;