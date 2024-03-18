import { Link } from "react-router-dom";

function NavBar ({cartCount}) {

return (
<div className="header">
   
   <Link to="/cart" className="cartLabel">Cart | {cartCount} items</Link>
	 <Link to="/"className="homeLabel">Home</Link>
</div>
)}

export default NavBar;

