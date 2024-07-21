/* eslint-disable react/prop-types */
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css"
import NavbarLink from "./NavbarLink";

const Navbar = ({categories, title} ) => {

  return(
    <>
    <div>
      <h1>{title}</h1>
      </div>
    <nav className="navItems">
      {categories.map ((element) => {
  return <NavbarLink key={element} category={element}/>;
  })};

    </nav>
  
    
    <CartWidget/> 
    </>
  )
}

export default Navbar;