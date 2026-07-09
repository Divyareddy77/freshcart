import {
  FaUsers,
  FaShoppingBasket,
  FaTruck,
  FaAward,
} from "react-icons/fa";

function Statistics() {
  const stats = [
    {
      icon: <FaUsers />,
      value: "15K+",
      title: "Happy Customers",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: <FaShoppingBasket />,
      value: "500+",
      title: "Fresh Products",
      color: "from-orange-400 to-red-500",
    },
    {
      icon: <FaTruck />,
      value: "30 Min",
      title: "Fast Delivery",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: <FaAward />,
      value: "99%",
      title: "Customer Satisfaction",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 relative overflow-hidden">

      {/* Background Decorations */}

      <div className="absolute -top-24 -left-24 h-72 w-72 bg-white/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-80 w-80 bg-yellow-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-widest text-green-100 font-semibold">
            Our Achievements
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            Trusted by Thousands
          </h2>

          <p className="text-green-100 mt-5 text-lg max-w-2xl mx-auto">
            FreshCart proudly serves thousands of happy families with
            quality groceries and fast delivery every single day.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (

            <div
              key={item.title}
              className="group bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:-translate-y-3"
            >

              {/* Icon */}

              <div
                className={`bg-gradient-to-r ${item.color} h-20 w-20 rounded-full flex items-center justify-center mx-auto text-white text-3xl shadow-xl group-hover:scale-110 transition`}
              >
                {item.icon}
              </div>

              {/* Number */}

              <h3 className="text-5xl font-black text-white mt-8">
                {item.value}
              </h3>

              {/* Title */}

              <p className="text-green-100 text-lg mt-4">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Statistics;