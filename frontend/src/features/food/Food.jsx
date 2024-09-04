import styles from "./Food.module.css";
import { foodList } from "../../data/foodList";
import FoodItem from "./FoodItem";

export default function Food() {
  return (
    <section className={styles.foodSection}>
      <div className="container">
        <div className={styles.foodContainer}>
          <h2 className={styles.subHeading}>Top dishes near you</h2>
          <div className={styles.foodList}>
            {foodList.map((foodItem) => (
              <FoodItem foodItem={foodItem} key={foodItem._id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
