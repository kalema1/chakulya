import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Menu from "./pages/Menu";
import ContactUs from "./pages/ContactUs";
import CartProvider from "./contexts/CartContext";
import { FilterProvider } from "./contexts/FilterContext";
import Footer from "./ui/Footer";

function App() {
  return (
    <FilterProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="menu" element={<Menu />} />
            <Route path="contact-us" element={<ContactUs />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </FilterProvider>
  );
}

export default App;
