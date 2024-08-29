import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Logo from "../../ui/Logo";
import NavBarRight from "./NavBarRight";
import styles from "./PageNav.module.css";

export default function PageNav() {
  return (
    <header className={styles.header}>
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
          <div className={styles.mobileMenuContainer}>
            <FaBars className={styles.mobileMenu} />
          </div>
        </div>
      </div>
    </header>
  );
}
