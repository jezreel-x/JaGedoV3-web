// CartContext.jsx
import { createContext, useState } from "react";

const CartContext = createContext();

import PropTypes from "prop-types";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
        const existing = prev.find((i) => i.id === item.id);
        if (existing) {
          return prev.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
          );
        }
        return [...prev, item];
      });
    };

  const getCartCount = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

// export const useCart = () => useContext(CartContext);

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
