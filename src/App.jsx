
import './App.css'
import Navbar from './component/Navbar/Navbar.jsx'
import ItemListContainer from './component/ItemListContainer/ItemListContainer.jsx'; 
import { categories } from "./mock/mockData.js";

function App() {
  const title = <h4>{"Bienvenidos a la mejor tienda deportiva"}</h4>
  

  return (
  <>
  <Navbar categories={categories} title ="EP-Sport"/>
  <ItemListContainer title={title}/>
  
  </>
  )
}

export default App
