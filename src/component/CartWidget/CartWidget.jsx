import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const {qtyItems } = useCartContext();
  return <div>🛒Tu carro tiene {qtyItems} productos</div>;
};

export default CartWidget;
