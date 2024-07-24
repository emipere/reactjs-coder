/* eslint-disable react/prop-types */
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import NavbarLink from "./NavbarLink";
import logo from "../../assets/logo.png";
import { categories } from "../../mock/mockData";
const Navbar = ({ title }) => {
  return (
    <>
      <div>
        <img src={logo} alt="logo de EP-Sport" />
        <h1>{title}</h1>
      </div>
      <nav className="navItems">
        {categories.map((element) => {
          return <NavbarLink key={element} category={element} />;
        })}
        ;
      </nav>

      <CartWidget />
    </>
  );
};

export default Navbar;
