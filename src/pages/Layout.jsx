import Navbar from "../component/Navbar/Navbar.jsx";
import Footer from "../component/Footer/Footer.jsx";
const Layout = ({children}) => {
return (
    <>
    <Navbar/>
    {children}
    <Footer/>
   </>
);
};
 
export default Layout;