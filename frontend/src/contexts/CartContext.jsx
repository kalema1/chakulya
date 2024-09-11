import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [addToCart, setAddToCart] = useState(0);

  function addItemsToCart() {
    setAddToCart((add) => add + 1);
  }

  function removeItemsFromCart() {
    setAddToCart((remove) => remove - 1);
  }

  return (
    <CartContext.Provider
      value={{ addItemsToCart, removeItemsFromCart, addToCart }}
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
