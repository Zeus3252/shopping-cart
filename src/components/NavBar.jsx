import { Link } from "react-router-dom";

function NavBar ({cartCount}) {

return (
<div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 px-6 shadow-md flex items-center justify-between">
    <Link to="/" className="text-lg font-semibold hover:text-gray-200 px-4 py-2">Home</Link>
    <Link to="/cart" className="text-lg font-semibold hover:text-gray-200 px-4 py-2">Cart | {cartCount} items</Link>
</div>
)}

export default NavBar;
