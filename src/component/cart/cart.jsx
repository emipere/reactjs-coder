import { useCartContext } from "../../context/CartContext";
import { Table } from "react-bootstrap";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/dbConnection";
import Button from 'react-bootstrap/Button';

const Cart = () => {
  const { cart, total, removeItem, clearCart } = useCartContext();
  const [formData, setFormData] = useState({ name: "", tel: "", email: "" });
  const handleRemoveItem = (id, precio, qty) => {
    removeItem(id, precio, qty);
  };
  const handleClearCart = () => {
    clearCart();
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveCart = () => {
    console.log("savin in Database")
    console.log("formData", formData)
    console.log("cart", cart)

  const ordersCollection = collection(db, "orders")
  const newOrder = {
    buyer: formData,
    items: cart,
    date: new Date(),
    total: total
  }  

  addDoc(ordersCollection, newOrder)
  .then((doc)=>{
    alert("Su numero de orden es: " + doc.id + ", por favor ingreselo en la plataforma de pago. ")
    console.log ("Se guardo la orden numero: " + doc.id)
    clearCart();
    setFormData({name:"", tel:"", email:""})
  })
  .catch ((error)=>{
    console.error("error Adding document:", error)
  })

  }

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map(({ id, nombre, precio, qty }, index) => {
            return (
              <tr key={index}>
                <td>{id}</td>
                <td>{nombre}</td>
                <td>{precio}</td>
                <td>{qty}</td>
                <td>
                  <Button variant="warning" onClick={() => handleRemoveItem(id, precio, qty)}>
                    Eliminar del Carrito
                  </Button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={4}>Precio Total</td>
            <td>${total}</td>
          </tr>
        </tbody>
      </Table>
     
      <Button variant="danger" onClick={handleClearCart}>Vaciar Carrito</Button>
      
      <input
        type="text"
        name="name"
        id="name"
        placeholder="  Ingrese su Nombre"
        onChange={(e) => handleOnChange(e)}
      />
      
      <input
        type="number"
        name="tel"
        id="tel"
        placeholder="  Ingrese su Telefono"
        onChange={(e) => handleOnChange(e)}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="  Ingrese su Email"
        onChange={(e) => handleOnChange(e)}
      />
      
      <Button variant="success" onClick={handleSaveCart}>Finaliza tu Compra</Button>
    </>
  );
};

export default Cart;

