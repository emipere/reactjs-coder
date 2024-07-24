import {Link, NavLink} from "react-router-dom"

const NavbarLink = ({category}) =>{
    return(
        <Link to={`/${category}`} className="navItem">{category}</Link>

    )
}

export default NavbarLink;
