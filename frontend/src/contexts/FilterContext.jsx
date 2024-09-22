import { createContext, useState } from "react";
import { foodList } from "../data/foodList";

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [filteredFood, setFilteredFood] = useState(foodList);
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleFilterCategory(category) {
    if (selectedCategory === category) {
      setFilteredFood(foodList);
      setSelectedCategory(null);
    } else {
      setFilteredFood(foodList.filter((food) => food.category === category));
      setSelectedCategory(category);
    }
  }

  return (
    <FilterContext.Provider
      value={{ filteredFood, handleFilterCategory, selectedCategory }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export { FilterProvider, FilterContext };
