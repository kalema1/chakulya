import styles from "./FoodItem.module.css";
import { useFoodItem } from "./useFoodItem";

export default function FoodItem({ foodItem }) {
  const { addToCart, addItemsToCart, removeItemsFromCart } = useFoodItem();
  const { name, image, description, price } = foodItem;

  return (
    <div className={styles.itemConatiner}>
      <div>
        <img className={styles.image} src={image} alt="" />
        {!addToCart ? (
          <div onClick={addItemsToCart}>
            <img
              className={styles.addToCart}
              src="frontend_assets/add_icon_white.png"
              alt=""
            />
          </div>
        ) : (
          <div>
            <img
              onClick={addItemsToCart}
              src="frontend_assets/add_icon_green.png"
              alt=""
            />
            <p>{addToCart}</p>
            <img
              onClick={removeItemsFromCart}
              src="frontend_assets/remove_icon_red.png"
              alt=""
            />
          </div>
        )}
      </div>
      <div className={styles.itemdetailsContainer}>
        <div className={styles.itemContainer}>
          <p className={styles.name}>{name}</p>
          <img
            className={styles.ratingImg}
            src="frontend_assets/rating_starts.png"
          />
        </div>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{`UGX ${price}`}</p>
      </div>
    </div>
  );
}
