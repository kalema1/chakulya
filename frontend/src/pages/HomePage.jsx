import ExploreMenu from "../features/exploreMenu/ExploreMenu";
import Food from "../features/food/Food";
import Hero from "../features/hero/Hero";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ExploreMenu />
      <Food />
    </div>
  );
}
