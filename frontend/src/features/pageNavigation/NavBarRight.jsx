import { Link } from "react-router-dom";
import { useCart } from "../../contexts/useCart";
import styles from "./NavBarRight.module.css";
import SignIn from "./SignIn";

export default function NavBarRight() {
  const { addToCart, calculateTheTotalItemQuantity } = useCart();

  return (
    <div className={styles.navBarRightContainer}>
      <div className={styles.searchBox}>
        <img
          className={styles.image}
          src="frontend_assets/search_icon.png"
          alt=""
        />
      </div>
      <Link to="/cart" className={styles.cartBox}>
        <img
          className={styles.image}
          src="frontend_assets/basket_icon.png"
          alt=""
        />
        {!!calculateTheTotalItemQuantity(addToCart) && (
          <div className={styles.cartItems}>
            {calculateTheTotalItemQuantity(addToCart)}
          </div>
        )}
      </Link>
      <div className={styles.signInContainer}>
        <SignIn />
      </div>
    </div>
  );
}
