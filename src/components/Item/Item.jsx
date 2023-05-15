import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import './Item.css';

const Item = ({ id, name, img, price, stock }) => {
    return (
        <Card className="item-card">
        <Card.Img variant="top" src={img} alt={name} />
        <Card.Body>
            <div className="card-content">
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                <p>Precio: ${price}</p>
                <p>Stock disponible: {stock}</p>
            </Card.Text>
            </div>
            <Link to={`/Item/${id}`}>
                <Button variant="primary" className="card-button">Ver detalle</Button>
            </Link>
        </Card.Body>
        </Card>
    );
}

export default Item;
