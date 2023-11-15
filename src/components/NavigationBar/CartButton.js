// CartButton.js
import { Modal } from 'react-bootstrap'
import React, { useState } from "react";
//import Modal from "./CartModal";

const CartButton = () => {
  //const handleLoginClick = () => {
  //console.log("testing...123");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <button class="btn btn-outline-dark" type="submit"
        onClick={handleShow}
      >
        <i class="bi-cart-fill me-1"></i>
        Cart
        <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <h1>Product information will go here</h1>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CartButton;
