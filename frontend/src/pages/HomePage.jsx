import ExploreMenu from "../features/exploreMenu/ExploreMenu";
import Hero from "../features/hero/Hero";
import PageNav from "../features/pageNavigation/PageNav";

export default function HomePage() {
  return (
    <div>
      <PageNav />
      <Hero />
      <ExploreMenu />
    </div>
  );
}
