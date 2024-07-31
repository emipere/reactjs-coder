import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { getProducts } from "../../utils/fetchData";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

// nota de clase 3 16-7-24
// este componente tiene la logica de traer los productos del backend, por el momento solo los importamos de nuestro mock

const ItemListContainer = ({ title }) => {
  const [products, setproducts] = useState([]);
  // const [cat, setCat] = useState("gorra");
  const {categoryId} = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("se monto el compo");
    setLoading(true);
    getProducts(categoryId)
      .then((res) => {
        console.log("se res la promesa");
        setproducts(res);
        console.log("se act los productos");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("finalizo la promesa");
        setLoading(false)
      });
  }, [categoryId]);

  return (
    
    <main>
      {/* <button onClick={() => setCat("campera")}> Set Cat = campera </button>
      <button onClick={() => setCat("remera")}> Set Cat = remera </button>
      <button onClick={() => setCat("short")}> Set Cat = short </button>
      <button onClick={() => setCat("medias")}> Set Cat = medias </button> */}

      <div className="container">
        <div>{title}</div>
       {loading ? <Spinner/> : 
        <ItemList products={products} />}
        {/* <Itemcount stock= {10} initial = {1}/> */}
      </div>
    </main>
  );
};

export default ItemListContainer;
