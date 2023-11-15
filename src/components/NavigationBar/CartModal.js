//CartModal.js
//Keeping for now, might not need since importing from react-bootstrap
const CartModal = ({ showModal, closeModal }) => {
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

export default CartModal;