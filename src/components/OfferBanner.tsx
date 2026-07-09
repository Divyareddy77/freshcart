import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaClock,
  FaGift,
  FaLeaf,
} from "react-icons/fa";

import OfferImage from "../assets/offer.avif";

function OfferBanner() {
  return (
    <section className="py-24 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 shadow-2xl">

          {/* Decorative Circles */}

          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10"></div>

          <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-yellow-300/20"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center p-10 lg:p-20">

            {/* Left */}

            <div className="text-white relative z-10">

              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg rounded-full px-5 py-2">

                <FaGift />

                Weekend Mega Sale

              </div>

              <h2 className="text-5xl lg:text-6xl font-black mt-8 leading-tight">

                Fresh Deals

                <br />

                Up To

                <span className="text-yellow-300">
                  {" "}40% OFF
                </span>

              </h2>

              <p className="mt-8 text-lg leading-8 text-green-100 max-w-xl">

                Enjoy amazing discounts on fresh vegetables,
                fruits, dairy products and groceries.

                Limited-time offer.

              </p>

              {/* Features */}

              <div className="flex flex-wrap gap-5 mt-10">

                <div className="bg-white/20 rounded-full px-5 py-3 flex items-center gap-2">

                  <FaLeaf />

                  100% Organic

                </div>

                <div className="bg-white/20 rounded-full px-5 py-3 flex items-center gap-2">

                  <FaClock />

                  Offer Ends Soon

                </div>

              </div>

              <Link
                to="/Grocery"
                className="inline-flex mt-10 bg-white text-green-700 px-8 py-4 rounded-full font-bold items-center gap-3 hover:scale-105 transition"
              >

                Shop Offers

                <FaArrowRight />

              </Link>

            </div>

            {/* Right */}

            <div className="relative flex justify-center">

              <img
                src={OfferImage}
                alt="Special Offer"
                className="w-full max-w-lg drop-shadow-2xl"
              />

              {/* Discount Badge */}

              <div className="absolute top-10 right-5 bg-yellow-400 h-32 w-32 rounded-full flex flex-col justify-center items-center shadow-2xl animate-bounce">

                <span className="text-4xl font-black">

                  40%

                </span>

                <span className="font-bold">

                  OFF

                </span>

              </div>

              {/* Floating Card */}

              <div className="absolute bottom-5 left-0 bg-white rounded-3xl shadow-xl p-5">

                <p className="text-gray-500">

                  Fresh Products

                </p>

                <h3 className="text-3xl font-black text-green-600">

                  500+

                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default OfferBanner;