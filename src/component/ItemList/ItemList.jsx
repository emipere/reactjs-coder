import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = () => {
    return(
        <>
        <div className = "ItemsContainer">
         <div>Catalogo de Productos </div>
         <Item/>
        </div>
        </>
        
        
        );  

};

export default ItemList;