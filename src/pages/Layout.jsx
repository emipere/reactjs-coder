import Footer from "../component/Footer/Footer.jsx";
import Navbar from "../component/Navbar/Navbar.jsx";


const Layout = ({ children }) => {
return (
    <>
    <Navbar/>
    {children}
    <Footer/>
   </>
);
};
 
export default Layout;