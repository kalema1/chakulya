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

  function calculateTheTotalItemQuantity(obj) {
    // Get the values of the object
    const values = Object.values(obj);

    // Calculate the sum of the values
    const sum = values.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    return sum;
  }

  function handleRemoveItemsFromCart(itemId) {
    setAddToCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  return (
    <CartContext.Provider
      value={{
        handleAddItemsToCart,
        handleRemoveItemsFromCart,
        addToCart,
        calculateTheTotalItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
