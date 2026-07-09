import {
  FaStar,
  FaQuoteLeft,
  FaCheckCircle,
} from "react-icons/fa";

import Customer1 from "../assets/customer1.jpg";
import Customer2 from "../assets/customer2.jpg";
import Customer3 from "../assets/customer3.jpg";

function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      city: "Hyderabad",
      image: Customer1,
      review:
        "FreshCart always delivers fresh vegetables and fruits on time. The quality is amazing and prices are affordable.",
    },
    {
      name: "Priya Reddy",
      city: "Bangalore",
      image: Customer2,
      review:
        "I love ordering groceries from FreshCart. Everything is neatly packed and customer support is excellent.",
    },
    {
      name: "Arjun Kumar",
      city: "Chennai",
      image: Customer3,
      review:
        "The 30-minute delivery service is fantastic. FreshCart has become my favorite grocery shopping app.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-widest text-green-600 font-semibold">
            Testimonials
          </span>

          <h2 className="text-5xl font-black text-gray-900 mt-4">
            What Our Customers Say
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-lg">
            Thousands of happy customers trust FreshCart for their daily grocery shopping.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {reviews.map((review) => (

            <div
              key={review.name}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 hover:-translate-y-3 relative"
            >

              {/* Quote Icon */}

              <div className="absolute top-6 right-6 text-green-100 text-5xl">

                <FaQuoteLeft />

              </div>

              {/* Customer */}

              <div className="flex items-center gap-4">

                <img
                  src={review.image}
                  alt={review.name}
                  className="h-20 w-20 rounded-full object-cover border-4 border-green-100"
                />

                <div>

                  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">

                    {review.name}

                    <FaCheckCircle className="text-green-500 text-sm" />

                  </h3>

                  <p className="text-gray-500">
                    {review.city}
                  </p>

                </div>

              </div>

              {/* Rating */}

              <div className="flex gap-1 text-yellow-400 mt-6">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              {/* Review */}

              <p className="text-gray-600 mt-6 leading-8">
                "{review.review}"
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;