import { useFilter } from "../../contexts/useFilter";
import styles from "./ExploreMenuListItem.module.css";

export default function ExploreMenuListItem({ menuItem }) {
  const { handleFilterCategory } = useFilter();
  return (
    <div
      className={styles.itemContainer}
      onClick={() => handleFilterCategory(menuItem.menuName)}
    >
      <img src={menuItem.menuImage} alt="" className={styles.img} />
      <p className={styles.para}>{menuItem.menuName}</p>
    </div>
  );
}
