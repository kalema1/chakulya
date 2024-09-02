import styles from "./ExploreMenuListItem.module.css";

export default function ExploreMenuListItem({ menuItem }) {
  return (
    <div className={styles.itemContainer}>
      <img src={menuItem.menuImage} alt="" className={styles.img} />
      <p className={styles.para}>{menuItem.menuName}</p>
    </div>
  );
}
