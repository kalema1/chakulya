import { useState } from "react";

export function useFoodItem() {
  const [addToCart, setAddToCart] = useState(0);

  function addItemsToCart() {
    setAddToCart((add) => add + 1);
  }

  function removeItemsFromCart() {
    setAddToCart((remove) => remove - 1);
  }

  return { addToCart, addItemsToCart, removeItemsFromCart };
}
