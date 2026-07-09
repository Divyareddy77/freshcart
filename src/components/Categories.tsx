import { Link } from "react-router-dom";
import Vegetables from "../assets/vegetables.avif";
import Fruits from "../assets/fruits.avif";
import Milk from "../assets/milk.jpg";
import Grocery from "../assets/grocery.avif";
import NonVeg from "../assets/nonveg.avif";


import {
  FaArrowRight,
  FaLeaf,
  FaAppleAlt,
  FaShoppingBasket,
} from "react-icons/fa";
import { GiMilkCarton, GiMeat } from "react-icons/gi";

function Categories() {
  const categories = [
    {
      title: "Fresh Vegetables",
      image: Vegetables,
      icon: <FaLeaf />,
      color: "from-green-400 to-emerald-600",
      route: "/vegetables",
      description: "Farm fresh vegetables delivered daily.",
    },
    {
      title: "Seasonal Fruits",
      image: Fruits,
      icon: <FaAppleAlt />,
      color: "from-orange-400 to-red-500",
      route: "/Fruit",
      description: "Sweet and juicy fruits full of vitamins.",
    },
    {
      title: "Dairy Products",
      image: Milk,
      icon: <GiMilkCarton />,
      color: "from-sky-400 to-blue-500",
      route: "/Milk",
      description: "Milk, butter, cheese and more.",
    },
    {
      title: "Groceries",
      image: Grocery,
      icon: <FaShoppingBasket />,
      color: "from-yellow-400 to-orange-500",
      route: "/Grocery",
      description: "Daily essentials for your kitchen.",
    },
    {
      title: "Fresh Non-Veg",
      image: NonVeg,
      icon: <GiMeat />,
      color: "from-pink-500 to-red-600",
      route: "/Nonveg",
      description: "Fresh chicken, fish and meat.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="text-green-600 font-semibold tracking-widest uppercase">
            Categories
          </span>

          <h2 className="text-5xl font-black mt-3 text-gray-900">
            Shop by Category
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            Explore fresh products carefully selected for your everyday needs.
          </p>

        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-16">

          {categories.map((item) => (

            <Link
              key={item.title}
              to={item.route}
              className="group"
            >

              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">

                {/* Top */}

                <div
                  className={`bg-gradient-to-r ${item.color} h-28 flex justify-center items-center relative`}
                >

                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white rounded-full p-3 text-xl">

                    {item.icon}

                  </div>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-24 object-contain group-hover:scale-110 transition duration-500"
                  />

                </div>

                {/* Bottom */}

                <div className="p-6">

                  <h3 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-3 leading-6">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between mt-6">

                    <span className="text-green-600 font-semibold">
                      Explore
                    </span>

                    <div className="bg-green-100 rounded-full h-10 w-10 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition">

                      <FaArrowRight />

                    </div>

                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;