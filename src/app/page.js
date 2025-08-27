import Banner2 from "./components/Banner2";
import CategoriesSection from "./components/CategoriesSection";

import Features from "./components/Features";
import Footer from "./components/Footer";
import NewProducts from "./components/NewProducts";

export default function Home() {
  return (
    <section>
      <header>
        <Banner2></Banner2>
      </header>
      <main>
        <Features></Features>
        <CategoriesSection></CategoriesSection>
        <NewProducts></NewProducts>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </section>
  );
}
