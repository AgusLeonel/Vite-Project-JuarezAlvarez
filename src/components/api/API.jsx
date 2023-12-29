export const fetchProductById = async (productId) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching product with ID ${productId}:`, error);
    throw error;
  }
};

export const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=9');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const filterProductsByCategory = (products, category) => {
  return category ? products.filter(product => product.category === category) : products;
};