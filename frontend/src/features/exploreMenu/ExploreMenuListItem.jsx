export default function ExploreMenuListItem({ menuItem }) {
  return (
    <div>
      <img src={menuItem.menuImage} alt="" />
      <p>{menuItem.menuName}</p>
    </div>
  );
}
