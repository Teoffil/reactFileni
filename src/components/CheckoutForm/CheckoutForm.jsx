import './CheckoutForm.css';
import { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email
    };
    onConfirm(userData);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center checkout-form-container">
      <Card className="p-4 shadow rounded">
        <Form onSubmit={handleConfirm}>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPhone" className="mb-3">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="text"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Crear Orden
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default CheckoutForm;
