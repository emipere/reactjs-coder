/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({product}) =>{
    const {id,nombre,precio,img,stock} = product;

    return(
        <Card className="text-center">
        <Card.Header>{nombre}</Card.Header>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>${precio}</Card.Title>
          <Card.Text>
            No contiene detalle interno.
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Solo nos quedan{stock} unidades. Apurate!!</Card.Footer>
      </Card>
    )
}

export default ItemDetail;

// no me renderiza el detalle de cada products lpm min 1.5.00 clase 5