import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Components/Pages/Product.jsx";
import Shop from "./Components/Pages/Shop";
import Cart from "./Components/Pages/Cart";
import LoginSignup from "./Components/Pages/LoginSignup";
import ShopCategory from "./Components/Pages/ShopCategory";
import mk_banner from "./Components/Assets/banner1.jpg.webp";
import sk_banner from "./Components/Assets/banner5.jpg";
import bk_banner from "./Components/Assets/banner2.png.webp";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/makeup"
            element={<ShopCategory banner={mk_banner} category="makeup" />}
          />
          <Route
            path="/skincare"
            element={<ShopCategory banner={sk_banner} category="skincare" />}
          />
          <Route
            path="/bodycare"
            element={<ShopCategory banner={bk_banner} category="bodycare" />}
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
