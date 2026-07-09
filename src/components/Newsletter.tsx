import { useState } from "react";
import {
  FaEnvelope,
  FaPaperPlane,
  FaGift,
  FaBell,
  FaCheckCircle,
} from "react-icons/fa";

import NewsletterImage from "../assets/newsletter.avif";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim() === "") {
      alert("Please enter your email.");
      return;
    }

    alert("🎉 Thank you for subscribing!");

    setEmail("");
  };

  return (
    <section className="py-24 bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div className="relative flex justify-center">

            <div className="absolute h-80 w-80 rounded-full bg-white/20 blur-3xl"></div>

            <img
              src={NewsletterImage}
              alt="Newsletter"
              className="relative z-10 w-full max-w-md"
            />

          </div>

          {/* Right */}

          <div>

            <span className="uppercase tracking-widest text-green-100 font-semibold">

              Stay Connected

            </span>

            <h2 className="text-5xl font-black text-white mt-5 leading-tight">

              Never Miss

              <br />

              Fresh Offers

            </h2>

            <p className="text-green-100 mt-8 text-lg leading-8">

              Subscribe to our newsletter and receive
              exclusive discounts, fresh arrivals,
              healthy recipes and seasonal offers.

            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="flex items-center gap-3 bg-white/15 backdrop-blur-xl rounded-2xl p-4">

                <FaGift className="text-yellow-300 text-2xl" />

                <span className="text-white">

                  Weekly Discounts

                </span>

              </div>

              <div className="flex items-center gap-3 bg-white/15 backdrop-blur-xl rounded-2xl p-4">

                <FaBell className="text-yellow-300 text-2xl" />

                <span className="text-white">

                  Instant Updates

                </span>

              </div>

              <div className="flex items-center gap-3 bg-white/15 backdrop-blur-xl rounded-2xl p-4">

                <FaCheckCircle className="text-yellow-300 text-2xl" />

                <span className="text-white">

                  Healthy Tips

                </span>

              </div>

              <div className="flex items-center gap-3 bg-white/15 backdrop-blur-xl rounded-2xl p-4">

                <FaEnvelope className="text-yellow-300 text-2xl" />

                <span className="text-white">

                  No Spam Emails

                </span>

              </div>

            </div>

            {/* Subscribe */}

            <div className="mt-10 bg-white rounded-full p-2 flex shadow-2xl">

              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 outline-none rounded-full"
              />

              <button
                onClick={handleSubscribe}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full flex items-center gap-3 transition"
              >

                Subscribe

                <FaPaperPlane />

              </button>

            </div>

            <p className="text-green-100 mt-5 text-sm">

              Join over

              <span className="font-bold text-white">

                {" "}15,000+

              </span>

              {" "}subscribers receiving our weekly grocery updates.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;