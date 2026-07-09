import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaLeaf,
  FaTruck,
  FaShieldAlt,
  FaSearch,
} from "react-icons/fa";

import HeroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-lime-100">

      {/* Decorative Background */}
      <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-green-300 opacity-20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-300 opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}

          <div>

            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold shadow">

              <FaLeaf />

              Fresh • Organic • Healthy

            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight text-gray-900">

              Eat Fresh.

              <br />

              Live

              <span className="text-green-600"> Better.</span>

            </h1>

            <p className="mt-8 text-gray-600 text-lg leading-8 max-w-xl">

              FreshCart delivers farm-fresh vegetables,
              fruits, groceries, dairy products and daily essentials
              directly to your doorstep with lightning-fast delivery.

            </p>

            {/* Search */}

            <div className="mt-10 bg-white rounded-full shadow-xl flex items-center p-2 max-w-xl">

              <div className="px-4 text-gray-400">

                <FaSearch />

              </div>

              <input
                type="text"
                placeholder="Search fresh vegetables, fruits..."
                className="flex-1 outline-none py-3"
              />

              <button className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-full">

                Search

              </button>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/Vegetable"
                className="bg-green-600 hover:bg-green-700 transition text-white px-8 py-4 rounded-full flex items-center gap-3 font-semibold shadow-lg hover:scale-105"
              >
                Shop Now

                <FaArrowRight />

              </Link>

              <Link
                to="/Grocery"
                className="border-2 border-green-600 hover:bg-green-600 hover:text-white transition text-green-700 px-8 py-4 rounded-full font-semibold"
              >
                Explore Products
              </Link>

            </div>

            {/* Features */}

            <div className="grid grid-cols-3 gap-6 mt-14">

              <div className="text-center">

                <div className="bg-white shadow-lg rounded-full h-16 w-16 flex items-center justify-center mx-auto text-green-600 text-2xl">

                  <FaTruck />

                </div>

                <p className="font-semibold mt-4">
                  Fast Delivery
                </p>

              </div>

              <div className="text-center">

                <div className="bg-white shadow-lg rounded-full h-16 w-16 flex items-center justify-center mx-auto text-green-600 text-2xl">

                  <FaLeaf />

                </div>

                <p className="font-semibold mt-4">
                  Farm Fresh
                </p>

              </div>

              <div className="text-center">

                <div className="bg-white shadow-lg rounded-full h-16 w-16 flex items-center justify-center mx-auto text-green-600 text-2xl">

                  <FaShieldAlt />

                </div>

                <p className="font-semibold mt-4">
                  Secure Payment
                </p>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="relative flex justify-center">

            <img
              src={HeroImage}
              alt="Fresh Grocery"
              className="w-full max-w-xl drop-shadow-2xl"
            />

            {/* Floating Card */}

            <div className="absolute top-10 -left-4 bg-white rounded-3xl shadow-xl p-5">

              <h3 className="text-lg font-bold text-green-600">

                Today's Offer

              </h3>

              <p className="text-gray-600 mt-2">

                🥦 Fresh Vegetables

              </p>

              <p className="text-2xl font-black text-green-700 mt-2">

                20% OFF

              </p>

            </div>

            {/* Floating Card */}

            <div className="absolute bottom-8 right-0 bg-white rounded-3xl shadow-xl p-5">

              <p className="text-sm text-gray-500">

                Happy Customers

              </p>

              <h2 className="text-3xl font-black text-green-600">

                12K+

              </h2>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;