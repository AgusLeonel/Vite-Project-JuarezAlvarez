import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = (props) => {
    return (
        <div className="ItemListContainer">
            <h2> {props.greeting} </h2>
        </div>
    )
}

export default ItemListContainer