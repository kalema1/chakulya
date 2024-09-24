import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import ContactUs from "./pages/ContactUs";
import CartProvider from "./contexts/CartContext";
import { FilterProvider } from "./contexts/FilterContext";
import Footer from "./ui/Footer";
import PageNav from "./features/pageNavigation/PageNav";
import Cart from "./pages/Cart";

function App() {
  return (
    <FilterProvider>
      <CartProvider>
        <BrowserRouter>
          <PageNav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="menu" element={<Menu />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </FilterProvider>
  );
}

export default App;
