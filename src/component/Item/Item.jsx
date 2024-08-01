/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({product}) =>{
    return (
         <Card style={{ width: '12rem' }} className= 'm-3'>
      <Card.Img variant="top" src={product.img}/>
      <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>${product.precio}</Card.Text>
        <Link to= {`/product/${product.id}`}>
        <Button variant="primary">Detalle</Button>
        </Link>
      </Card.Body>
    </Card>
    
    );
};

export default Item

