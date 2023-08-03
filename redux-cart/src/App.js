import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarPage from "./Components/Navbar";
import Product from "./Components/product";
import store from "./redux/store";
import { Provider } from "react-redux";
import CartPage from "./Components/cart";
import HomePage from "./Components/Home";
import ProductsCard from "./Components/ProductCards";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <NavbarPage />
          <Routes>
            <Route path="/" element={<HomePage />} className="homepage" />
            <Route path="/Product" element={<Product />} className="homepage"/>
            <Route path="/cart" element={<CartPage />} className="cartpage"/>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
