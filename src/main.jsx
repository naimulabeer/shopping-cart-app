import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { CartProvider } from "./Contexts/cart-context.jsx";
import { ProductsProvider } from "./Contexts/product-context.jsx";

import App from "./App.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
