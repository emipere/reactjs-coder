
import spinner from './load.gif';

export const Spinner =() => {
  return (
    <div>
      <img
      src= {spinner}
      alt="gif de loading"
      style= {{width:"400px", margin:"auto" , display:"blokc"}}/>
      <p><h5>Buscando articulo...</h5> </p>
      
    </div>
  );
};

