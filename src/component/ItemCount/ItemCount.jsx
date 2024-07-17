import {useState} from "react";

const Itemcount = ({stock, initial}) => {

  const [qty, setQty] = useState (initial)


  const handleClick = (op) => {
    op === "-" ? clickMenos () : clickMas () ;
  };

  const clickMenos = () => {
    if (qty===1){
      alert ("Minimo un producto");
      return;
    }
    setQty (qty -1);
  };
  
   const clickMas = () => {
    if (qty===stock){
      alert ("Sold Out");
      return;
    }
    setQty (qty +1);
   };


  return(
  <div>
    <button onClick={() => handleClick ("-")}>-</button>
    <span>{qty}</span>
    <button onClick={() => handleClick ("+")}>+</button>
  </div>
  );
};

export default Itemcount;