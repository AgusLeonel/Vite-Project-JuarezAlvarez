import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/xuru-vic-kids.png";
import './Header.css'

const Header = (props) => {
  return (
    <div className="Header">
      <Link to="/">
        <img src={logo} alt="logo xuru" />
      </Link>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;