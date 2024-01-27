import React, { createContext, useContext, useReducer } from 'react';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };

    case 'REMOVE_FROM_CART':
      const updatedCart = state.cart.filter(item => item.id !== action.payload.id);
      return { ...state, cart: updatedCart };

    case 'CLEAR_CART':
      return { ...state, cart: [] };

    case 'CHECKOUT':
      return { ...state, cart: [], orderPlaced: true };

    default:
      return state;
  }
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = { cart: [], orderPlaced: false };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
