import { useCart } from "../../contexts/CartContext";
import styles from "./FoodItem.module.css";

export default function FoodItem({ foodItem }) {
  const { addToCart, addItemsToCart, removeItemsFromCart } = useCart();
  const { name, image, description, price } = foodItem;

  return (
    <div className={styles.itemConatiner}>
      <div className={styles.imgContainer}>
        <img className={styles.image} src={image} alt="" />
        {!addToCart ? (
          <div className={styles.addToCartContainer} onClick={addItemsToCart}>
            <img
              className={styles.addToCartImg}
              src="frontend_assets/add_icon_white.png"
              alt=""
            />
          </div>
        ) : (
          <div className={styles.removeFromCartContainer}>
            <img
              className={styles.addToCartImg}
              onClick={removeItemsFromCart}
              src="frontend_assets/remove_icon_red.png"
              alt=""
            />
            <p className={styles.addToCartPara}>{addToCart}</p>
            <img
              className={styles.addToCartImg}
              onClick={addItemsToCart}
              src="frontend_assets/add_icon_green.png"
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
