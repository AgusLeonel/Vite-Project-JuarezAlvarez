import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useCart } from '../CartContext/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productDoc = doc(db, 'products', id);
        const productSnapshot = await getDoc(productDoc);

        if (productSnapshot.exists()) {
          const data = { ...productSnapshot.data(), id: productSnapshot.id };
          setProduct(data);
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
  };

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="ProductDetail">
      <h2>{product.title}</h2>
      {product.img && <img src={product.img} />}
      <p>{product.category}</p>
      <p>{product.description}</p>
      <p>${product.price}</p>


      <div>
        <button onClick={handleAddToCart}>Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default ProductDetail;
