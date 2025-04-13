import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";

function Navbar() {
  const { cart } = useSelector((store) => store.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.amount, 0);

  return (
    <nav className="bg-fuchsia-700 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold tracking-wide">
          <Link to="/">MyShop</Link>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-300 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-300 transition duration-200"
          >
            Contact
          </Link>
        </div>

        <Link to="/cart" className="relative">
          <ShoppingCart className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-300 text-fuchsia-800 text-xs font-bold px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
