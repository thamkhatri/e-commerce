import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import ShopCategory from "./pages/ShopCategory";
import Footer from "./Components/Footer/Footer";
import makeup_banner from "./Components/Assets/banner1.jpg.webp";
import skincare_banner from "./Components/Assets/banner2.png.webp";
import bath_banner from "./Components/Assets/banner3.jpg.webp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/makeup"
            element={<ShopCategory banner={makeup_banner} category="makeup" />}
          />
          <Route
            path="/skincare"
            element={
              <ShopCategory banner={skincare_banner} category="skincare" />
            }
          />
          <Route
            path="/bath&body"
            element={<ShopCategory banner={bath_banner} category="bath&body" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
