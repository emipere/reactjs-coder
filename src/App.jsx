
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./component/AboutUs/AboutUs.jsx";
import Contact from "./component/Contact/Contact.jsx";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer.jsx";
import Layout from "./pages/Layout.jsx";

function App() {
  const title = <h4>{"Bienvenidos a la mejor tienda deportiva"}</h4>;

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path= "/" element = {<ItemListContainer title={title} />}/>
            <Route path= "/about" element= {<AboutUs />}/>
             <Route path= "/contact" element={<Contact />}/>
           </Routes>
        </Layout>
      </BrowserRouter>
      {/* <Navbar categories={categories} title = "EP-Sport"/> */}
    </>
  );
}

export default App; 
           
            
          
// llegue hasta el min 1.18.59 de la clase se me rompe o mejor dicho no me cleiquea en el contac o about seguro por un tema de nombre de array category con la categoria de los productos