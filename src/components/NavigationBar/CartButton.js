// CartButton.js
import { Modal, Button } from 'react-bootstrap'
import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import CartProducts from './CartProducts';

const CartButton = () => {

  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <>
      <button class="btn btn-outline-dark" type="submit"
        onClick={handleShow}>Cart ({productCount} Items)
        
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          {productCount > 0 ?
          <>
            <p>Items in your cart: </p>
            {cart.items.map((currentProduct, idx) => (
              <h1>{currentProduct.id}</h1>
            ))}
          
            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
          
              <Button variant="success">
                Purchase items!
              </Button>
          </>  
        :
              <h1>There are no items in your cart</h1>
        }
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CartButton;
