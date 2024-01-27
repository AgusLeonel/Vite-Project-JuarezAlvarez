import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ProductDetail/ProductDetail';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import { CartProvider } from './components/CartContext/CartContext';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Header title="XURU" />
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer defaultCategory="" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </CartProvider>
      <Footer />
    </Router>
  );
};

export default App;
