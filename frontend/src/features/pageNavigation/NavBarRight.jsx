import styles from "./NavBarRight.module.css";
import SignIn from "./SignIn";

export default function NavBarRight() {
  return (
    <div className={styles.navBarRightContainer}>
      <div>
        <img src="frontend_assets/search_icon.png" alt="" />
      </div>
      <div>
        <img src="frontend_assets/basket_icon.png" alt="" />
      </div>
      <div className={styles.signInContainer}>
        <SignIn />
      </div>
    </div>
  );
}
