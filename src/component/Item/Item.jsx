/* eslint-disable react/prop-types */


const Item = ({product}) =>{
    return (
    <div> 
        <div>{product.nombre}</div>
        <div>{product.precio}</div>
        <div>{product.img}</div>
        {/* no puedo renderizar las imagenes , ver rutas o que estaria fallando */}
    </div>
    );
};

export default Item

