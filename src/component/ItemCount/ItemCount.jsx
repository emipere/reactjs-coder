import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Itemcount = ({ stock, initial, handleOnBuy }) => {
  const navigate = useNavigate();
  const [qty, setQty] = useState(initial);
  const [itemAdded, setItemAdded] = useState(false);

  const handleClick = (op) => {
    op === "-" ? clickMenos() : clickMas();
  };

  const clickMenos = () => {
    if (qty === 1) {
      alert("Minimo un producto");
      return;
    }
    setQty(qty - 1);
  };

  const clickMas = () => {
    if (qty === stock) {
      alert("Sold Out");
      return;
    }
    setQty(qty + 1);
  };

  const handleAddToCart = () => {
    handleOnBuy(qty);
    setItemAdded(true);
  };

  const handleGoToCheckout = () => {
    setItemAdded(false);
    navigate("/cart");
  };
  return (
    <>
      {itemAdded ? (
        <Button variant="primary" onClick={handleGoToCheckout}>
          Checkout
        </Button>
      ) : (
        <>
          <div>
            <button onClick={() => handleClick("-")}>-</button>
            <span>{qty}</span>
            <button onClick={() => handleClick("+")}>+</button>
          </div>

          <Button variant="primary" onClick={handleAddToCart}>
            Mandar al Carro
          </Button>
        </>
      )}
    </>
  );
};

export default Itemcount;
