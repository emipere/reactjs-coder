/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";

const NavbarLink = ({ category }) => {
  return (
    <NavLink to={`/category/${category}`} className="navItem">
      {category}
    </NavLink>
  );
};

export default NavbarLink;
