import styles from "./NavBarRight.module.css";
import SignIn from "./SignIn";

export default function NavBarRight() {
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
        <div className={styles.cartItems}>5</div>
      </div>
      <div className={styles.signInContainer}>
        <SignIn />
      </div>
    </div>
  );
}
