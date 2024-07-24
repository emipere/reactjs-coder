
import './App.css'
import ItemListContainer from './component/ItemListContainer/ItemListContainer.jsx'; 
import Layout from './pages/Layout.jsx';

function App() {
  const title = <h4>{"Bienvenidos a la mejor tienda deportiva"}</h4>
  

  return (
  <>
  <Layout>
  <ItemListContainer title={title}/>
  </Layout>

  {/* <Navbar categories={categories} title = "EP-Sport"/> */}
  </>
  )
}

export default App
