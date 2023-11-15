// ProductCard.js

import React from "react";
import { CartContext } from './NavigationBar/CartContext';
import { useContext } from 'react';

const ProductCard = ({ name, price, imageUrl, quantity }) => {
  // We'll use a placeholder image if none is provided
  const defaultImage = "https://dummyimage.com/450x300/dee2e6/6c757d.jpg";
  imageUrl = imageUrl || defaultImage; // Fallback to default if no image URL is provided

  const cart = useContext(CartContext);
  //const productQuantity = cart.getProductQuantity(product.id);

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={imageUrl} alt={name} />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{name}</h5>${price.toFixed(2)}
            {quantity > 0 ? (
              <p className="card-text">In stock: {quantity}</p>
            ) : (
              <p className="text-danger">Out of stock</p>
            )}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href="!#">
              Add to cart?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
