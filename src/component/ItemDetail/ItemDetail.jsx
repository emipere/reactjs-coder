/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const { id, nombre, precio, img, stock } = product;
  const {addToCart} = useCartContext();
  
  const handleOnBuy = (qty) => {
        console.log(`Se agregaron ${qty} productos al carrito`);
        const item = {id, nombre, precio}
        addToCart(item, qty);
  }

  return (
    <div className="imagenx">
    <Card className="text-center">
      <Card.Header>{nombre}</Card.Header>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>${precio}</Card.Title>
        <Card.Text>No contiene detalle interno.</Card.Text>
        <ItemCount stock={stock} initial={1} handleOnBuy={handleOnBuy}/>
        </Card.Body>
      <Card.Footer className="text-muted">
        Solo nos quedan{stock} unidades. Apurate!!
      </Card.Footer>
    </Card>
    </div>
  );
};

export default ItemDetail;
