import { useContext } from "react";

import "./shop.styles.scss";

import { ProductsContext } from "../../Contexts/product-context";
import ProductCard from "../../Components/ProductCard/ProductCard";

function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="shop-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Shop;
