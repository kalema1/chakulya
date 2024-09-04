export default function FoodItem({ foodItem }) {
  const { name, image, description, price } = foodItem;
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <div>
          <p>{name}</p>
          <img src="frontend_assets/rating_starts.png" />
        </div>
        <p>{description}</p>
        <p>{`UGX ${price}`}</p>
      </div>
    </div>
  );
}
