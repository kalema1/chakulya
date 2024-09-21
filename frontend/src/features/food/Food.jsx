import styles from "./Food.module.css";
import FoodItem from "./FoodItem";
import { useFilter } from "../../contexts/useFilter";

export default function Food() {
  const { filteredFood } = useFilter();

  return (
    <section className={styles.foodSection}>
      <div className="container">
        <div className={styles.foodContainer}>
          <h2 className={styles.subHeading}>Top dishes near you</h2>
          <div className={styles.foodList}>
            {filteredFood.map((foodItem) => (
              <FoodItem foodItem={foodItem} key={foodItem._id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
