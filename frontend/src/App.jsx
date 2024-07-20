import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import shopCategory from "./pages/ShopCategory";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/makeup" element={<shopCategory category="makeup" />} />
          <Route
            path="/skincare"
            element={<shopCategory category="skincare" />}
          />
          <Route
            path="/bath&body"
            element={<shopCategory category="bath&body" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          {/* <Route path="/cart" element={<Cart />} /> */}
          {/* <Route path="/login" element={<LoginSignup />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
