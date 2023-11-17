// App.js

import React, { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import { getProducts } from "./api";
import CartProvider from "./components/NavigationBar/CartContext";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <CartProvider>
      <div className="conatainer">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
