import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Product from "./pages/Product";

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            cart={cart}
            wishlist={wishlist}
          />
        }
      />

      <Route
        path="/cart"
        element={<Cart cart={cart} />}
      />

      <Route
        path="/wishlist"
        element={<Wishlist wishlist={wishlist} />}
      />

      <Route
        path="/product/:id"
        element={<Product />}
      />
    </Routes>
  );
}

export default App;