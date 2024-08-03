/* eslint-disable react/prop-types */
import CartWidget from "../CartWidget/CartWidget.jsx";
import "./Navbar.css";
import NavbarLink from "./NavbarLink.jsx";
import logo from "../../assets/logo.png";
import { categories } from "../../mock/mockData.js";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <>
      <nav>
        <div>
          <Link to="/">
            <img src={logo} alt="logo de EP-Sport" />
          </Link>

          <h1>{title}</h1>
        </div>
        <div className="navItems">
          {categories.map((element) => {
            return <NavbarLink key={element} category={element} />;
          })}
          ;
        </div>

        <CartWidget />
      </nav>
    </>
  );
};

export default Navbar;
