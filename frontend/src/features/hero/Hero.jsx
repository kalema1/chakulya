import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroContainer}>
          <div className={styles.heroContentBox}>
            <h1 className={styles.heroHeading}>
              Order your favourite food here
            </h1>
            <p className={styles.heroPara}>
              Choose from a diverse menu featuring a delectable array of dishes
              crafted with the finest ingredients and culinary expertise. Our
              mission is to satisfy your cravings and elevate your dinning
              experience, one delicious meal at a time.
            </p>
            <Link className={styles.viewMenu}>View Menu</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
