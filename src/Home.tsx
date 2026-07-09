import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import OfferBanner from "./components/OfferBanner";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";


function Home() {
  return (
    <div className="bg-white overflow-x-hidden">

      {/* Navigation */}
      

      {/* Hero Section */}
      <Hero />

      {/* Shop Categories */}
      <Categories />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Special Offer */}
      <OfferBanner />

      {/* Why Choose FreshCart */}
      {/* <WhyChooseUs /> */}

      {/* Statistics */}
      {/* <Statistics />
 */}
      {/* Customer Reviews */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Home;