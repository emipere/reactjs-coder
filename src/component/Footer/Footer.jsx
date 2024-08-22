import {items} from "../../mock/mockData";
import { db } from "../../firebase/dbConnection";
import { collection, addDoc } from "firebase/firestore";


 const Footer = () => {

  const addProducts = ()=>{
    const productsCollection = collection(db, "productos");

    items.forEach((item)=>{
      addDoc(productsCollection, item)
      .then(doc => {
        console.log("producto agregados con ID", doc.id)
      })
      .catch (error => {
        console.error ("error al agregar el producto:" , error)
      })
    })

  }
   return (
     <div>
       <h6> @2024 EmiPere ,todos los derechos reservados</h6>
      
       {/* <button onClick={addProducts}>Agregar Productos a Base de Datos</button> */}
     </div>
   );
 };

 export default Footer;