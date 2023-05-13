import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        const collectionRef = categoryId
            ? query(collection(db, 'productos'), where('category', '==', categoryId))
            : collection(db, 'productos');

        setLoading(true);

        getDocs(collectionRef)
            .then((response) => {
                const productsAdapted = response.docs.map((doc) => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProducts(productsAdapted);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
