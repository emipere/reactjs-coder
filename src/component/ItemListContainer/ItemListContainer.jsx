/* eslint-disable react/prop-types */
import Itemcount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({title}) => {
    return(
    <>
     <div className ="container">
        <div>{title}</div>
     <ItemList/>
      <Itemcount stock= {10} initial = {1}/>
     </div>
    </>    
    );  
};

export default ItemListContainer