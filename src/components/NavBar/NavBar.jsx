import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = ({ onCategoryChange }) => {
  const handleCategoryClick = (category) => {
    onCategoryChange(category);
  };

  return (
    <nav className="NavBar">
      <ul>
        <li><Link to="/" onClick={() => handleCategoryClick('')}>Inicio</Link></li>
        <li><Link to="/category/electronics" onClick={() => handleCategoryClick('electronics')}>Electronics</Link></li>
        <li><Link to="/category/jewelery" onClick={() => handleCategoryClick('jewelery')}>Jewelery</Link></li>
        <li><Link to="/category/mens-clothing" onClick={() => handleCategoryClick('men\'s clothing')}>Men's Clothing</Link></li>
        <li><Link to="/category/womens-clothing" onClick={() => handleCategoryClick('women\'s clothing')}>Women's Clothing</Link></li>
        <li><CartWidget /></li>
      </ul>
    </nav>
  );
};

export default NavBar;
