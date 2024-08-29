import { Link } from "react-router-dom";
import styles from "./NavBarRight.module.css";

export default function NavBarRight() {
  return (
    <div className={styles.navBarRightContainer}>
      <div>
        <img src="frontend_assets/search_icon.png" alt="" />
      </div>
      <div>
        <img src="frontend_assets/basket_icon.png" alt="" />
      </div>
      <div>
        <Link className={styles.signIn}>Sign in</Link>
      </div>
    </div>
  );
}
