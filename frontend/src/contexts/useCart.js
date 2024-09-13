import { useContext } from "react";
import { CartContext } from "./CartContext";

export function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("Context used outSide the scope");
  }

  return context;
}
