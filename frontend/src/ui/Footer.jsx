import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import Logo from "./Logo";
import Social from "./Social";
import { CURRENT_YEAR } from "../constants/constants";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div>
          <div className={styles.footerBox}>
            <div>
              <div className={styles.logoBox}>
                <Logo />
              </div>
              <p className={styles.para}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
              <Social />
            </div>
            <div>
              <h3 className={styles.heading}>COMPANY</h3>
              <ul className={styles.listBox}>
                <li>
                  <Link className={styles.footerLink}>Home</Link>
                </li>
                <li>
                  <Link className={styles.footerLink}>About Us</Link>
                </li>
                <li>
                  <Link className={styles.footerLink}>Delivery</Link>
                </li>
                <li>
                  <Link className={styles.footerLink}>Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className={styles.heading}>GET IN TOUCH</h3>
              <ul className={styles.listBox}>
                <li>
                  <Link className={styles.footerLink}>+256 773456890</Link>
                </li>
                <li>
                  <Link className={styles.footerLink}>info@chakulya.com</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className={styles.copyright}>
              ©Copyright {CURRENT_YEAR} chakulya.com - All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
