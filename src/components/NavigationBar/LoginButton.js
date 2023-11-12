// LoginButton.js
import React, { useState } from "react";
import Modal from "./LoginModal";

const LoginButton = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <button class="btn btn-outline-dark" type="submit" onClick={openModal}>
        Login
      </button>

      <Modal showModal={showModal} closeModal={closeModal} />
    </>
  );
};

export default LoginButton;
