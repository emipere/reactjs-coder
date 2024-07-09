/* eslint-disable react/prop-types */
import Itemcount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({title}) => {
    return(
    <>
     <div>{title}</div>
     <ItemList/>
     <Itemcount stock= {10} initial = {1}/>
    </>
    
    
    );  
};

export default ItemListContainer