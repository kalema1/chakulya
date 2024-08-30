import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Logo from "../../ui/Logo";
import NavBarRight from "./NavBarRight";
import styles from "./PageNav.module.css";
import { openMobileNav, showMobileNav } from "./usePageNav";

export default function PageNav() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div
          className={`${styles.navContainer} ${
            showMobileNav ? styles["navOpen"] : ""
          }`}
        >
          <div>
            <Logo />
          </div>
          <nav className={styles.navListContainer}>
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
          </nav>
          <div>
            <NavBarRight />
          </div>
          <div className={styles.mobileMenuContainer} onClick={openMobileNav}>
            <FaBars className={styles.mobileMenu} />
          </div>
        </div>
      </div>
    </header>
  );
}
