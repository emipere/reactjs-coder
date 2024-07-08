import CartWidget from "../CartWidget/CartWidget";
const Navbar = ({categories, title })=> {
  return(
    <>
    <div>
      <h1> {title} </h1>
    </div>
    <div>
    <a href="#">{categories[0]}</a>
    <a href="#">{categories[1]}</a>
    <a href="#">{categories[2]}</a>
    <a href="#">{categories[3]}</a>
    <a href="#">{categories[4]}</a>
    </div>
    <CartWidget/>
    </>
  )
}

export default Navbar;