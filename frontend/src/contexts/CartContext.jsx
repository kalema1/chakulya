import { createContext, useState } from "react";

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

export { CartProvider };
