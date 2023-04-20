import { Link } from 'react-router-dom';
import './Item.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

const Item = ({id, name, img, price, stock}) => {
    return (
        <div className='cardAltura'>
            <Card>
                <Card.Img variant="top" src={img} alt={name} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>Precio: ${price}</p>
                        <p>Stock disponible: {stock}</p>
                    </Card.Text>
                    <Link to={`/Item/${id}`}>
                        <Button variant="primary">Ver detalle</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Item;
