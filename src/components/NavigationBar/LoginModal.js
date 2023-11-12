// Modal.js

const LoginModal = ({ showModal, closeModal }) => {
  if (!showModal) return null;

  return (
    <div className=".modal">
      <div className=".modal-content">
        <button className="btn btn-outline-dark" onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
