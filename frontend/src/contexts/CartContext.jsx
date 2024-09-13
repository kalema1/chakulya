import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [addToCart, setAddToCart] = useState({});

  function handleAddItemsToCart(itemId) {
    if (!addToCart[itemId]) {
      setAddToCart((prev) => ({ ...prev, [itemId]: 1 }));
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

function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("Context used outSide the scope");
  }

  return context;
}

export { CartProvider, useCart };
