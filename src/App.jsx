
import './App.css'
import Navbar from './component/Navbar/Navbar.jsx'
import ItemListContainer from './component/ItemListContainer/ItemListContainer.jsx'; 
import { categories } from "./mock/mockData.js";

function App() {
  const title = "Curso de React js coder"
  

  return (
  <>
  <Navbar categories={categories} title = "Logo"/>
  <ItemListContainer title={title}/>
  
  </>
  )
}

export default App
 