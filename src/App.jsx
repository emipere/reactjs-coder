
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer.jsx";
import AboutUs from "./component/AboutUs/AboutUs.jsx";
import Contact from "./component/Contact/Contact.jsx";
import Layout from "./pages/Layout.jsx";
import Error404 from "./component/Error404/Error404.jsx";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer.jsx";



function App() {
  const title = <h4>{"Bienvenidos a la mejor tienda deportiva"}</h4>;

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer title={title} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer title={title} />}/>
            <Route path="/product/:Id" element={<ItemDetailContainer/>}/> 
            <Route path="/Contact" element={<Contact />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App; 
           
            
          
// llegue hasta el min 1.18.59 de la clase se me rompe o mejor dicho no me cleiquea en el contac o about seguro por un tema de nombre de array category con la categoria de los productos