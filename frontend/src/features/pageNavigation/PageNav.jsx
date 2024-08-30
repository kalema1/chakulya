import { NavLink } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import Logo from "../../ui/Logo";
import NavBarRight from "./NavBarRight";
import styles from "./PageNav.module.css";
import { usePageNav } from "./usePageNav";
import SignIn from "./SignIn";

export default function PageNav() {
  const { openMobileNav, showMobileNav } = usePageNav();

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
              <li className={styles.signInItem}>
                <SignIn />
              </li>
            </ul>
          </nav>
          <div>
            <NavBarRight />
          </div>
          <div className={styles.mobileMenuContainer} onClick={openMobileNav}>
            {showMobileNav ? (
              <IoIosClose className={styles.mobileMenu} />
            ) : (
              <IoIosMenu className={styles.mobileMenu} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
