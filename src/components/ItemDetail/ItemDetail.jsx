import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount.jsx';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext.jsx';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
        id,
        name,
        price,
        };

        addItem(item, quantity);
    };

    return (
        <Container>
        <Row className="mt-4">
            <Col md={6}>
                <Card.Img variant="top" src={img} alt={name} className="w-100" />
            </Col>
            <Col md={6}>
            <Card className="border-0">
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <p className="mb-2">Categoría: {category}</p>
                    <p className="mb-2">Descripción: {description}</p>
                    <p className="mb-2">Precio: ${price}</p>
                </Card.Text>
                {quantityAdded > 0 ? (
                    <Link to="/cart">
                    <Button variant="success">Terminar Compra</Button>
                    </Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )}
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
    );
};

export default ItemDetail;
