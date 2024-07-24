import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <>
      <div className="ItemsContainer">
        <div>
          <h5>Catalogo de Productos</h5>{" "}
        </div>
        {products.map((product) => {
          return <Item key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
