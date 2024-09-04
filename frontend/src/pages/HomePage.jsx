import ExploreMenu from "../features/exploreMenu/ExploreMenu";
import Food from "../features/food/Food";
import Hero from "../features/hero/Hero";
import PageNav from "../features/pageNavigation/PageNav";

export default function HomePage() {
  return (
    <div>
      <PageNav />
      <Hero />
      <ExploreMenu />
      <Food />
    </div>
  );
}
