import { menuList } from "../../data/menuList";
import ExploreMenuListItem from "./ExploreMenuListItem";
export default function ExploreMenu() {
  return (
    <section>
      <div className="container">
        <div className={StyleSheet.ExploreMenuContainer}>
          <h2>Explore Our Menu</h2>
          <p>
            Choose from a diverse menu featuring a delectable array of dishes
          </p>
          <div>
            {menuList.map((menuItem, index) => (
              <ExploreMenuListItem menuItem={menuItem} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
