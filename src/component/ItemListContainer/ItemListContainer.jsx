import { useState, useEffect } from "react";
import { useCartContext } from "../../context/CartContext";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { getProducts } from "../../utils/fetchData";
import { useParams } from "react-router-dom";
import { Spinner } from "../spinner/Spinner";


  const ItemListContainer = () => {
  const [products, setproducts] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  const {titulo} = useCartContext();

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
        <div>{titulo}</div>

        {loading ? <Spinner /> : <ItemList products={products} />}
      </div>
    </main>
  );
};

export default ItemListContainer;
