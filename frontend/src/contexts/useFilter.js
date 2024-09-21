import { useContext } from "react";
import { FilterContext } from "./FilterContext";

export function useFilter() {
  const context = useContext(FilterContext);

  if (context === undefined) {
    throw new Error("Context used outSide the scope");
  }

  return context;
}
