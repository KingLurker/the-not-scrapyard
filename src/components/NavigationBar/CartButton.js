// CartButton.js

const CartButton = () => {
  const handleLoginClick = () => {
    console.log("testing...123");
  };

  return (
    <>
      <button
        class="btn btn-outline-dark"
        type="submit"
        onClick={handleLoginClick}
      >
        <i class="bi-cart-fill me-1"></i>
        Cart
        <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
      </button>
    </>
  );
};

export default CartButton;
