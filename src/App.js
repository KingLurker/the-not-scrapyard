// App.js

import React, { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import { getProducts } from "./api"; // This is where you would import the API call function

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
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          imageUrl={product.imageUrl}
        />
      ))}
    </>
  );
};

export default App;
