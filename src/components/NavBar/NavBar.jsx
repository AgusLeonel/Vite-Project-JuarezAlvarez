import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/Electronica">Electronica</Link></li>
        <li><Link to="/category/Hombre">Hombre</Link></li>
        <li><Link to="/category/Mujer">Mujer</Link></li>
        <li><CartWidget /></li>
      </ul>
    </nav>
  );
};

export default NavBar;