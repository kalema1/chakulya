import { menuList } from "../../data/menuList";
import ExploreMenuListItem from "./ExploreMenuListItem";
import styles from "./ExploreMenu.module.css";

export default function ExploreMenu() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={StyleSheet.ExploreMenuContainer}>
          <h2 className={styles.subHeading}>Explore Our Menu</h2>
          <p className={styles.para}>
            Choose from a diverse menu featuring a delectable array of dishes
          </p>
          <div className={styles.menuList}>
            {menuList.map((menuItem, index) => (
              <ExploreMenuListItem menuItem={menuItem} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
