import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

import Tomato from "../assets/tomato.jpg";
import Broccoli from "../assets/broccoli.jpg";
import Mango from "../assets/mango.png";
import Paneer from "../assets/paneer.jpg";

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Fresh Tomato",
      image: Tomato,
      price: 45,
      oldPrice: 60,
      rating: 4.8,
      badge: "20% OFF",
      color: "bg-red-500",
    },
    {
      id: 2,
      name: "Organic Broccoli",
      image: Broccoli,
      price: 75,
      oldPrice: 90,
      rating: 4.9,
      badge: "Best Seller",
      color: "bg-green-600",
    },
    {
      id: 3,
      name: "Alphonso Mango",
      image: Mango,
      price: 180,
      oldPrice: 220,
      rating: 5.0,
      badge: "Premium",
      color: "bg-yellow-500",
    },
    {
      id: 4,
      name: "Fresh Paneer",
      image: Paneer,
      price: 120,
      oldPrice: 140,
      rating: 4.7,
      badge: "New",
      color: "bg-blue-500",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-green-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="flex justify-between items-end flex-wrap gap-6">

          <div>

            <p className="text-green-600 font-semibold uppercase tracking-widest">
              Popular Products
            </p>

           <h2 className="text-3xl md:text-5xl font-black">
              Featured Products
            </h2>

            <p className="text-gray-500 mt-4 max-w-xl">
              Hand-picked products loved by thousands of customers.
            </p>

          </div>

          <button className="flex items-center gap-2 text-green-600 font-semibold hover:gap-4 transition-all">
            View All
            <FaArrowRight />
          </button>

        </div>

        {/* Products */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (

            <div
              key={product.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3"
            >

              {/* Badge */}

              <div className="relative bg-gradient-to-b from-green-50 to-white">

                <span
                  className={`${product.color} absolute top-5 left-5 text-white px-4 py-1 rounded-full text-xs font-bold`}
                >
                  {product.badge}
                </span>

                <button className="absolute top-5 right-5 bg-white shadow-lg rounded-full p-3 hover:bg-red-500 hover:text-white transition">

                  <FaHeart />

                </button>

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-52 mx-auto object-contain transition duration-500 group-hover:scale-110"
                />

              </div>

              {/* Details */}

              <div className="p-6">

                <div className="flex items-center gap-2 text-yellow-500">

                  <FaStar />

                  <span className="font-semibold">
                    {product.rating}
                  </span>

                </div>

                <h3 className="text-2xl font-bold mt-3 text-gray-800">
                  {product.name}
                </h3>

                <div className="flex items-center gap-3 mt-4">

                  <span className="text-3xl font-black text-green-600">
                    ₹{product.price}
                  </span>

                  <span className="line-through text-gray-400">
                    ₹{product.oldPrice}
                  </span>

                </div>

                <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 flex justify-center items-center gap-3 font-semibold transition">

                  <FaShoppingCart />

                  Add to Cart

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProducts;