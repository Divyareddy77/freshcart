import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmazonPay,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white">

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div className="bg-green-600 h-12 w-12 rounded-full flex items-center justify-center text-2xl">

                <FaLeaf />

              </div>

              <h2 className="text-3xl font-black">

                FreshCart

              </h2>

            </div>

            <p className="text-gray-400 mt-6 leading-8">

              Bringing fresh vegetables, fruits, groceries,
              dairy products and daily essentials directly
              to your doorstep with quality and care.

            </p>

            {/* Social */}

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="h-12 w-12 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="h-12 w-12 rounded-full bg-gray-800 hover:bg-pink-500 flex items-center justify-center transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="h-12 w-12 rounded-full bg-gray-800 hover:bg-blue-500 flex items-center justify-center transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="h-12 w-12 rounded-full bg-gray-800 hover:bg-gray-600 flex items-center justify-center transition"
              >
                <FaGithub />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <Link to="/" className="hover:text-green-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/Vegetable" className="hover:text-green-400 transition">
                  Vegetables
                </Link>
              </li>

              <li>
                <Link to="/Fruit" className="hover:text-green-400 transition">
                  Fruits
                </Link>
              </li>

              <li>
                <Link to="/Milk" className="hover:text-green-400 transition">
                  Dairy
                </Link>
              </li>

              <li>
                <Link to="/Grocery" className="hover:text-green-400 transition">
                  Grocery
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact Us
            </h3>

            <div className="space-y-6 text-gray-400">

              <div className="flex gap-4">

                <FaPhoneAlt className="text-green-500 mt-1" />

                <span>+91 98765 43210</span>

              </div>

              <div className="flex gap-4">

                <FaEnvelope className="text-green-500 mt-1" />

                <span>support@freshcart.com</span>

              </div>

              <div className="flex gap-4">

                <FaMapMarkerAlt className="text-green-500 mt-1" />

                <span>
                  Hyderabad,
                  Telangana,
                  India
                </span>

              </div>

            </div>

          </div>

          {/* Opening Hours */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Opening Hours
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>
                Monday - Friday
              </p>

              <p className="font-semibold text-white">
                8:00 AM - 10:00 PM
              </p>

              <p>
                Saturday
              </p>

              <p className="font-semibold text-white">
                9:00 AM - 9:00 PM
              </p>

              <p>
                Sunday
              </p>

              <p className="font-semibold text-white">
                10:00 AM - 8:00 PM
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Payment */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row justify-between items-center gap-6">

          <div>

            <p className="text-gray-400">

              © 2026 FreshCart. All Rights Reserved.

            </p>

          </div>

          <div className="flex gap-5 text-4xl text-gray-300">

            <FaCcVisa />

            <FaCcMastercard />

            <FaCcPaypal />

            <FaCcAmazonPay />

          </div>

          <button
            onClick={scrollTop}
            className="bg-green-600 hover:bg-green-700 h-12 w-12 rounded-full flex items-center justify-center transition"
          >

            <FaArrowUp />

          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;