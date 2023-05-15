import { getDocs, collection, query, where, Timestamp, writeBatch, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import CheckoutForm from '../CheckoutForm/CheckoutForm.jsx';
import './Checkout.css';


const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, getTotalPrice, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        try {
        const objOrder = {
            buyer: {
            name,
            phone,
            email
            },
            items: cart,
            date: Timestamp.fromDate(new Date())
        };

        const batch = writeBatch(db);

        const outOfStock = [];

        const ids = cart.map(prod => prod.id);

        const productsRef = collection(db, 'productos');

        const productsAddedFromFirestore = await getDocs(query(productsRef, where('id', 'in', ids)));

        const { docs } = productsAddedFromFirestore;

        docs.forEach(doc => {
            const dataDoc = doc.data();
            const stockDb = dataDoc.stock;

            const productAddedToCart = cart.find(prod => prod.id === doc.id);
            const prodQuantity = productAddedToCart?.quantity;

            if (stockDb >= prodQuantity) {
            batch.update(doc.ref, { stock: stockDb - prodQuantity });
            } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
            }
        });

        if (outOfStock.length === 0) {
            await batch.commit();

            const totalPrice = getTotalPrice(); // Obtiene el precio total usando la función getTotalPrice

            if (typeof totalPrice !== 'undefined') {
            objOrder.total = totalPrice;

            const orderRef = collection(db, 'orders');
            const orderAdded = await addDoc(orderRef, objOrder);

            setOrderId(orderAdded.id);
            clearCart();
            } else {
            console.error('El valor del precio total es indefinido');
            }
        } else {
            console.error('Hay productos que están fuera de stock');
        }
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    };

    if (loading) {
        return <h1>Se está generando su orden...</h1>;
    }

    if (orderId) {
        return (
        <div className="order-confirmation">
            <h1>El id de su orden es: {orderId}</h1>
            <p className="order-thanks">Gracias por su compra, nos estaremos contactando a través del id de la compra.</p>
        </div>
        );
    }

    return (
        <div>
        <h1>Checkout</h1>
        <CheckoutForm onConfirm={createOrder} />
        </div>
    );
};

export default Checkout;