// ProductCard.js

import React from "react";
import { CartContext } from './NavigationBar/CartContext';
import { useContext } from 'react';

const ProductCard = ({ name, price, imageUrl, quantity }) => {
  const defaultImage = "https://dummyimage.com/450x300/dee2e6/6c757d.jpg";
  imageUrl = imageUrl || defaultImage;

  const cart = useContext(CartContext);

  return (
    <div className="col-md-6 mb-4"> {/* Adjusted column width to col-md-4 */}
      <div className="card h-100">
        <img className="card-img-top" src={imageUrl} alt={name} />
        <div className="card-body p-0"> {/* Adjusted padding to p-3 for a bit more spacing */}
          <div className="text-center">
            <h5 className="fw-bolder">{name}</h5>
            ${price.toFixed(2)}
            {quantity > 0 ? (
              <p className="card-text">In stock: {quantity}</p>
            ) : (
              <p className="text-danger">Out of stock</p>
            )}
          </div>
        </div>
        <div className="card-footer p-6 pt-0 border-top-0 bg-transparent"> {/* Adjusted padding to p-3 for consistency */}
          <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href="!#">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

