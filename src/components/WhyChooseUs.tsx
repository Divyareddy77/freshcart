import {
  FaLeaf,
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

import WhyChooseImage from "../assets/whychoose.avif";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaLeaf />,
      title: "Farm Fresh",
      description:
        "Fresh fruits and vegetables sourced directly from trusted local farms.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      description:
        "Receive your groceries within 30 minutes with our quick delivery.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: <FaShieldAlt />,
      title: "Quality Assured",
      description:
        "Every product is carefully inspected to ensure premium quality.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description:
        "Our customer support team is always ready to help you.",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div className="relative flex justify-center">

            {/* Background Circle */}

            <div className="absolute h-[450px] w-[450px] rounded-full bg-gradient-to-r from-green-200 to-lime-100 blur-2xl opacity-60"></div>

            <img
              src={WhyChooseImage}
              alt="Why Choose FreshCart"
              className="relative z-10 w-full max-w-md drop-shadow-2xl"
            />

            {/* Floating Badge */}

            <div className="absolute bottom-6 right-0 bg-white rounded-3xl shadow-xl px-6 py-4 z-20">

              <p className="text-gray-500 text-sm">
                Happy Customers
              </p>

              <h3 className="text-3xl font-black text-green-600">
                15K+
              </h3>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <span className="uppercase tracking-widest text-green-600 font-semibold">
              Why FreshCart
            </span>

            <h2 className="text-5xl font-black mt-4 text-gray-900 leading-tight">

              Fresh Food,
              <br />
              Better Living

            </h2>

            <p className="text-gray-500 mt-6 leading-8 text-lg">

              We believe healthy living begins with fresh food.
              That's why we bring carefully selected products
              straight to your doorstep.

            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-6 mt-12">

              {features.map((feature) => (

                <div
                  key={feature.title}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 hover:-translate-y-2"
                >

                  <div
                    className={`h-16 w-16 rounded-2xl flex items-center justify-center text-3xl ${feature.color}`}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-bold mt-5">
                    {feature.title}
                  </h3>

                  <p className="text-gray-500 mt-3 leading-7">
                    {feature.description}
                  </p>

                </div>

              ))}

            </div>

            {/* Button */}

            <button className="mt-12 bg-green-600 hover:bg-green-700 transition text-white px-8 py-4 rounded-full flex items-center gap-3 font-semibold shadow-lg">

              Learn More

              <FaArrowRight />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;