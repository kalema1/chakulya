import { createContext, useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [addToCart, setAddToCart] = useState({});

  function handleAddItemsToCart(itemId) {
    if (!addToCart[itemId]) {
      setAddToCart((prev) => ({ ...prev, [itemId]: 1 }));
      return;
    }

    setAddToCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  function handleRemoveItemsFromCart(itemId) {
    setAddToCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  return (
    <CartContext.Provider
      value={{ handleAddItemsToCart, handleRemoveItemsFromCart, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
