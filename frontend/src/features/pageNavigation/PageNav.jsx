import { NavLink } from "react-router-dom";
import Logo from "../../ui/Logo";
import NavBarRight from "./NavBarRight";
import styles from "./PageNav.module.css";

export default function PageNav() {
  return (
    <header>
      <div className="container">
        <div className={styles.navContainer}>
          <div>
            <Logo />
          </div>
          <div>
            <ul className={styles.navList}>
              <li>
                <NavLink className={styles.navListItem}>Home</NavLink>
              </li>
              <li>
                <NavLink className={styles.navListItem}>Menu</NavLink>
              </li>
              <li>
                <NavLink className={styles.navListItem}>Contact us</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <NavBarRight />
          </div>
        </div>
      </div>
    </header>
  );
}
