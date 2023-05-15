import './CheckoutForm.css';
import { useState } from 'react';

const CheckoutForm = ({ onConfirm }) => {
  const [nombre, setNombre] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      nombre,
      phone,
      email
    };
    onConfirm(userData);
  };

  return (
    <div>
      <form onSubmit={handleConfirm}>
        <label>
          Nombre
          <input
            type="text"
            value={nombre}
            onChange={({ target }) => setNombre(target.value)}
          />
        </label>

        <label>
          Telefono
          <input
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>

        <div>
          <button type="submit">Crear Orden</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
