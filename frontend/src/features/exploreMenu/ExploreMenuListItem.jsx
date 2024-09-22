import { useFilter } from "../../contexts/useFilter";
import styles from "./ExploreMenuListItem.module.css";

export default function ExploreMenuListItem({ menuItem }) {
  const { handleFilterCategory, selectedCategory } = useFilter();

  const isSelected = selectedCategory === menuItem.menuName;

  return (
    <div
      className={styles.itemContainer}
      onClick={() => handleFilterCategory(menuItem.menuName)}
    >
      <img
        src={menuItem.menuImage}
        alt=""
        className={`${styles.img} ${isSelected ? styles["categorySet"] : ""}`}
      />
      <p className={styles.para}>{menuItem.menuName}</p>
    </div>
  );
}
