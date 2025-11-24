import HeroSection from "./HeroSection";
import BestRoutes from "./BestRoutes";
import ChooseUs from "./ChooseUs";
import TravelAgencies from "./TravelAgencies";
import CustomerReview from "./CustomerReview";
import Info from "./Info";
import Contact from "./Contact";

function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Our Bus Route */}
      <BestRoutes />

      {/* Why Choose Us */}
      <ChooseUs />

      {/* Trusted Travel Agency */}
      <TravelAgencies />
      {/* What Our Customer Says */}
      <CustomerReview />
      {/* Sub-Footer */}
      <Info />

      {/* Contact Us
      <Contact /> */}
    </>
  );
}

export default HomePage;
