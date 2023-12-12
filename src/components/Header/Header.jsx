import React from 'react'
import "./Header.css"

import logo from "../../assets/xuru-vic-kids.png"

const Header = (props) => {
    return (
        <div className="Header">
            <img src={logo} alt="logo xuru" />
            <h1> {props.title} </h1>
        </div>
    )
}

export default Header