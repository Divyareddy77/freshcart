import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaUserCircle,
  FaSearch,
  FaBars,
  FaTimes,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

import { CartContext } from "../contextapi/CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    `relative font-medium transition duration-300 hover:text-green-600 ${
      isActive ? "text-green-600" : "text-gray-700"
    }`;
    const context = useContext(CartContext);

    const { cart } = context;
    // reading the data from local storage 
  const [loggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser") || "null")
  );


  const logout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  }

  return (
    <>
      <nav className="relative sticky top-4 z-50 w-[96%] max-w-7xl mx-auto bg-gradient-to-r from-green-50 via-white to-lime-50 border border-green-100 rounded-3xl shadow-2xl backdrop-blur-xl">

        <div className="flex items-center justify-between px-8 py-5">

          {/* Logo */}

          <Link to="/" className="flex items-center gap-4">
  <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-2xl shadow-lg">
    🌿
  </div>

  <div>
    <h1 className="text-2xl md:text-3xl font-black">
      FreshCart
    </h1>

    <p className="hidden sm:block text-sm text-gray-500">
      Fresh Everyday
    </p>
  </div>
</Link>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-2">

            <NavLink to="/" className={({ isActive }) => `px-5 py-2 rounded-xl transition-all duration-300 font-semibold 
            ${isActive ? "bg-green-500 text-white shadow-lg" : "text-gray-700 hover:bg-green-100 hover:text-green-700"}`}>
              Home
            </NavLink>

            <NavLink to="/Veg" className={({ isActive }) => `px-5 py-2 rounded-xl transition-all duration-300 font-semibold 
            ${isActive ? "bg-green-500 text-white shadow-lg" : "text-gray-700 hover:bg-green-100 hover:text-green-700"}`}>
              Vegetables
            </NavLink>

            <NavLink to="/Fruits" className={({ isActive }) => `px-5 py-2 rounded-xl transition-all duration-300 font-semibold 
            ${ isActive ? "bg-green-500 text-white shadow-lg" : "text-gray-700 hover:bg-green-100 hover:text-green-700"}`}>
              Fruits
            </NavLink>

            <NavLink to="/Milk" className="px-5 py-3 rounded-xl font-semibold text-gray-700 transition-all duration-300 hover:bg-green-100 hover:text-green-700 hover:scale-105">
              Dairy
            </NavLink>

            <NavLink to="/Groceries" className={({ isActive }) => `px-5 py-2 rounded-xl transition-all duration-300 font-semibold 
            ${ isActive ? "bg-green-500 text-white shadow-lg" : "text-gray-700 hover:bg-green-100 hover:text-green-700"}`}>
              Grocery
            </NavLink>

            <NavLink to="/Nonveg" className={({ isActive }) => `px-5 py-2 rounded-xl transition-all duration-300 font-semibold 
            ${ isActive ? "bg-green-500 text-white shadow-lg" : "text-gray-700 hover:bg-green-100 hover:text-green-700"}` }>
              Non-Veg
            </NavLink>
            <NavLink to="/Orders" className={({ isActive }) => `px-5 py-2 rounded-xl transition-all duration-300 font-semibold 
            ${ isActive ? "bg-green-500 text-white shadow-lg" : "text-gray-700 hover:bg-green-100 hover:text-green-700"}`}>
              Orders
            </NavLink>

          </div>
          <hr className="border-gray-200" />

{loggedInUser ? (
  <>
    <span className="font-semibold">
      Welcome <b>{loggedInUser.name}</b>
    </span>

    <button
      onClick={logout}
      className="bg-red-500 text-white rounded-lg py-2"
    >
      Logout
    </button>
  </>
) : (
  <>
    <NavLink
      to="/Login"
      onClick={() => setMenuOpen(false)}
      className={navLinkStyle}
    >
      <FaSignInAlt className="inline mr-2" />
      Login
    </NavLink>

    <NavLink
      to="/Register"
      onClick={() => setMenuOpen(false)}
      className={navLinkStyle}
    >
      <FaUserPlus className="inline mr-2" />
      Register
    </NavLink>
  </>
)}
          

          {/* Icons */}

          <div className="hidden lg:flex items-center gap-4">

           

            <Link to="/Cart" className=" relative w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center hover:bg-green-500 
            hover:text-white transition-all duration-300 shadow-md">

              <FaShoppingCart />

              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center shadow">
                {cart.length}
              </span>

            </Link>

            
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
  <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-3xl shadow-xl p-6 lg:hidden z-50">

            <div className="flex flex-col gap-5">

              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={navLinkStyle}
              >
                Home
              </NavLink>

              <NavLink
                to="/Veg"
                onClick={() => setMenuOpen(false)}
                className={navLinkStyle}
              >
                Vegetables
              </NavLink>

              <NavLink
                to="/Fruits"
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
                to="/Groceries"
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
              <div className="hidden lg:flex items-center gap-3">
  {loggedInUser ? (
    <>
      <span className="font-semibold">
        Welcome <b>{loggedInUser.name}</b>
      </span>

      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <Link
        to="/Login"
        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-100"
      >
        <FaSignInAlt />
        Login
      </Link>

      <Link
        to="/Register"
        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-100"
      >
        <FaUserPlus />
        Register
      </Link>
    </>
  )}
</div>

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