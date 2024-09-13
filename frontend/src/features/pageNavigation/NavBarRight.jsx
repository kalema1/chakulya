//import { useCart } from "../../contexts/CartContext";
import styles from "./NavBarRight.module.css";
import SignIn from "./SignIn";

export default function NavBarRight() {
  //const { addToCart } = useCart();

  return (
    <div className={styles.navBarRightContainer}>
      <div className={styles.searchBox}>
        <img
          className={styles.image}
          src="frontend_assets/search_icon.png"
          alt=""
        />
      </div>
      <div className={styles.cartBox}>
        <img
          className={styles.image}
          src="frontend_assets/basket_icon.png"
          alt=""
        />
        <div className={styles.cartItems}>0{/* {addToCart} */}</div>
      </div>
      <div className={styles.signInContainer}>
        <SignIn />
      </div>
    </div>
  );
}
