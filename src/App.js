// App.js

import React, { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import { getProducts } from "./api"; // This is where you would import the API call function
import CartProvider from "./components/NavigationBar/CartContext";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the product data when the component mounts
    getProducts()
      .then((data) => {
        // Assuming the response data is in the format we want
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <>
      <CartProvider>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          imageUrl={product.imageUrl}
        />
      ))}
      </CartProvider>
    </>
  );
};

export default App;
