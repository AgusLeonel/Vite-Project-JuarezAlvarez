import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProductDetail from './components/ProductDetail/ProductDetail';
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header title="XURU" />
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer defaultCategory="" />} />
          <Route path="/category/electronics" element={<ItemListContainer defaultCategory="electronics" />} />
          <Route path="/category/jewelery" element={<ItemListContainer defaultCategory="jewelery" />} />
          <Route path="/category/mens-clothing" element={<ItemListContainer defaultCategory="men's clothing" />} />
          <Route path="/category/womens-clothing" element={<ItemListContainer defaultCategory="women's clothing" />} />
          <Route path="/item/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;