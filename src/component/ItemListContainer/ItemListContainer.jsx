import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { getProducts } from "../../utils/fetchData";
import { useParams } from "react-router-dom";
import { Spinner } from "../spinner/Spinner";

const ItemListContainer = ({ title }) => {
  const [products, setproducts] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then((res) => {
        setproducts(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <main>
      <div className="container">
        <div>{title}</div>

        {loading ? <Spinner /> : <ItemList products={products} />}
      </div>
    </main>
  );
};

export default ItemListContainer;
