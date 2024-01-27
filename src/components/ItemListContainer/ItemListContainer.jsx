import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { db } from '../../firebase/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const category = location.pathname.split('/').pop();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsCollection = collection(db, 'products');
        const q = category ? query(productsCollection, where('category', '==', category)) : productsCollection;
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="ItemListContainer">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        products.length === 0 ? (
          <p>No hay productos disponibles en esta categoría.</p>
        ) : (
          <ProductCard products={products} />
        )
      )}
    </div>
  );
};

export default ItemListContainer;
