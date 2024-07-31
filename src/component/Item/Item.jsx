/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({product}) =>{
    return (
         <Card style={{ width: '12rem' }} className= 'm-3'>
      <Card.Img variant="top" src={product.img}/>
      <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        {/* <Card.Text>Poner decripcion del producto</Card.Text> */}
        <Card.Text>${product.precio}</Card.Text>
        <Button variant="primary">Detalle</Button>
      </Card.Body>
    </Card>
    // <div> 
    //     <div></div>
    //     <div></div>
    //     <div></div>
       
    // </div>
    );
};

export default Item

