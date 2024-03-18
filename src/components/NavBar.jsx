import { Link } from "react-router-dom";

function NavBar ({cartCount}) {

return (
<div>
   
   <Link to="/cart" className="cartLabel">Cart | {cartCount} items</Link><br/>
	 <Link to="/">Home</Link>
</div>
)}

export default NavBar;

