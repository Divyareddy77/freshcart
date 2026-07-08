import { useContext } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Veg from './Veg';
import Nonveg from './Nonveg';
import Milk from './Milk';
import Groceries from './Groceries';

import Home from './Home';

import './App.css';

import { FcHome } from 'react-icons/fc';
import { FaFish, FaLeaf } from 'react-icons/fa';
//import Register from './components/Register';
import { CartContext } from './contextapi/CartContext';
import Cart from './Cart';
import Checkout from './apis/Checkout';

//import Login from './components/Login';

function App() {
  const { cart } = useContext(CartContext);
  return (
    
      <BrowserRouter>

        <nav className="navbar flex justify-center items-center flex-wrap gap-5 px-6 py-4 shadow-lg">
          <Link
            to="/"
            className="nav-link flex items-center gap-2 text-lg font-semibold"
          >
            <FcHome size={22} />
            Home
          </Link>

          <Link
            to="/Veg"
            className="nav-link flex items-center gap-2 text-lg font-semibold"
          >
            <FaLeaf size={20} />
            Veg Items
          </Link>

          <Link
            to="/Nonveg"
            className="nav-link flex items-center gap-2 text-lg font-semibold"
          >
            <FaFish size={20} />
            NonVeg Items
          </Link>

          <Link
            to="/Milk"
            className="nav-link text-lg font-semibold"
          >
            🥛 Milk Items
          </Link>

          <Link
            to="/Groceries"
            className="nav-link text-lg font-semibold"
          >
            🛒 Grocery Items
          </Link>

          <Link
            to="/Cart"
            className="nav-link text-lg font-semibold"
          >
            🛍 Cart{cart.length}
          </Link>
          {/* <Link to="/Register"
          className="inline-block rounded-lg bg-blue-600 px-6 py-2.5 text-white font-semibold shadow-md transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Register
            </Link>
          <Link to="/Login" className="inline-block rounded-lg bg-green-600 px-6 py-2 text-white"
          >
            Login
          </Link> */}
        </nav>

        <div className="container max-w-7xl mx-auto p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Veg" element={<Veg />} />
            <Route path="/Nonveg" element={<Nonveg />} />
            <Route path="/Milk" element={<Milk />} />
            <Route path="/Groceries" element={<Groceries />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path='/Checkout' element={<Checkout/>}/>
            {/* <Route path="/Register" element ={<Register/>}/>
            <Route path="/Login" element={<Login />}/> */}
          </Routes>

        </div>

      </BrowserRouter>
    
  );
}

export default App;