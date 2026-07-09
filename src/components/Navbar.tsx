import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaUserCircle,
  FaSearch,
  FaBars,
  FaTimes,
  FaLeaf,
} from "react-icons/fa";
import Cart from "../Cart";
import { CartContext } from "../contextapi/CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    `relative font-medium transition duration-300 hover:text-green-600 ${
      isActive ? "text-green-600" : "text-gray-700"
    }`;
    const context = useContext(CartContext);

    const { cart } = context;

  return (
    <>
      <nav className="sticky top-4 z-50 w-[95%] mx-auto">

        <div className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-xl rounded-full px-8 py-4 flex justify-between items-center">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-extrabold"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-3 rounded-full shadow-lg">
              <FaLeaf />
            </div>

            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              FreshCart
            </span>
          </Link>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-8">

            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>

            <NavLink to="/Veg" className={navLinkStyle}>
              Vegetables
            </NavLink>

            <NavLink to="/Fruit" className={navLinkStyle}>
              Fruits
            </NavLink>

            <NavLink to="/Milk" className={navLinkStyle}>
              Dairy
            </NavLink>

            <NavLink to="/Groceries" className={navLinkStyle}>
              Grocery
            </NavLink>

            <NavLink to="/Nonveg" className={navLinkStyle}>
              Non-Veg
            </NavLink>

          </div>

          {/* Search */}

          {/* <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-72">

            <FaSearch className="text-gray-400" />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none px-3 w-full"
            />

          </div> */}

          {/* Icons */}

          <div className="hidden lg:flex items-center gap-5">

           {/*  <button className="relative hover:text-red-500 transition text-xl">

              <FaHeart />

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>

            </button> */}

            <Link
              to="/Cart"
              className="relative hover:text-green-600 transition text-xl"
            >

              <FaShoppingCart />

              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>

            </Link>

            <button className="text-3xl hover:text-green-600 transition">

              <FaUserCircle />

            </button>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-3xl shadow-xl p-6">

            <div className="flex flex-col gap-5">

              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={navLinkStyle}
              >
                Home
              </NavLink>

              <NavLink
                to="/Vegetable"
                onClick={() => setMenuOpen(false)}
                className={navLinkStyle}
              >
                Vegetables
              </NavLink>

              <NavLink
                to="/Fruit"
                onClick={() => setMenuOpen(false)}
                className={navLinkStyle}
              >
                Fruits
              </NavLink>

              <NavLink
                to="/Milk"
                onClick={() => setMenuOpen(false)}
                className={navLinkStyle}
              >
                Dairy
              </NavLink>

              <NavLink
                to="/Grocery"
                onClick={() => setMenuOpen(false)}
                className={navLinkStyle}
              >
                Grocery
              </NavLink>

              <NavLink
                to="/Nonveg"
                onClick={() => setMenuOpen(false)}
                className={navLinkStyle}
              >
                Non-Veg
              </NavLink>

              <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 mt-3">

                <FaSearch className="text-gray-400" />

                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none px-3 w-full"
                />

              </div>

              <div className="flex justify-around mt-4 text-2xl">

                <FaHeart />

                <Link to="/Cart">
                  <FaShoppingCart />
                </Link>

                <FaUserCircle />

              </div>

            </div>

          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;