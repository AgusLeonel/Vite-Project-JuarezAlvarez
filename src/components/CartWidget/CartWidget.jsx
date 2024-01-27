import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useCart } from '../CartContext/CartContext';

const CartWidget = () => {
  const { state } = useCart();
  const totalItems = state.cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Link to="/checkout">
        <ShoppingBasketIcon />
        {totalItems > 0 && <span>{totalItems}</span>}
      </Link>
    </div>
  );
};

export default CartWidget;
