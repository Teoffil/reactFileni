import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx';
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext.jsx";

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }
    
    return (
            <Container>
                <Row>
                    <Col md={6}>
                        <Card>
                            <Card.Img variant="top" src={img} alt={name} />
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    <p>Categoría: {category}</p>
                                    <p>Descripción: {description}</p>
                                    <p>Precio: ${price}</p>
                                </Card.Text>
                                {
                                    quantityAdded > 0 ? (
                                        <Link to='/cart'>Terminar Compra</Link>
                                        ) : (
                                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                                        )
                                }
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
    );
}

export default ItemDetail;
