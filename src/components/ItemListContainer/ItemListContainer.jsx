import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { fetchProducts, filterProductsByCategory } from '../api/API'
import './ItemListContainer.css';

const ItemListContainer = ({ defaultCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(defaultCategory);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        console.log('All Products:', data);
        const filteredProducts = filterProductsByCategory(data, category);
        console.log('Filtered Products:', filteredProducts);
        setProducts(filteredProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [category, defaultCategory]);

  useEffect(() => {
    setCategory(defaultCategory);
  }, [defaultCategory]);

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
