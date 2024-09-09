import { useState } from "react";

export function useFoodItem() {
  const [addToCart, setAddToCart] = useState(0);

  function addItemsTOCart() {
    setAddToCart((add) => add + 1);
  }

  return { addToCart, addItemsTOCart };
}
