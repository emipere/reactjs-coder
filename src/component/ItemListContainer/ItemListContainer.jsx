import { useState, useEffect } from "react";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/dbConnection";
import { useCartContext } from "../../context/CartContext";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { Spinner } from "../spinner/Spinner";


  const ItemListContainer = () => {
    const [products, setproducts] = useState([]);
    const { categoryId } = useParams();
    const [loading, setLoading] = useState(true);
    const { titulo } = useCartContext();

    useEffect(() => {
      setLoading(true);
      let productsCollection = collection(db, "productos");

      if (categoryId) {
        productsCollection = query(
          productsCollection,
          where("category", "array-contains", categoryId)
        );
      }
      getDocs(productsCollection)
        .then(({ docs }) => {
          const prodFormDocs = docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setproducts(prodFormDocs);
          setLoading(false);
        })
        .catch((error) => {
          console.error("error getting documents: ", error);
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


