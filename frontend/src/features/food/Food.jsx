import styles from "./Food.module.css";

export default function Food() {
  return (
    <section>
      <div className="container">
        <div className={styles.foodContainer}>
          <h1>Top dishes near you</h1>
          <div></div>
        </div>
      </div>
    </section>
  );
}
