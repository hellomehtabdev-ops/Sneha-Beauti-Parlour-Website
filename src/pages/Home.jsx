import Hero from "../components/home/Hero.jsx";
import TrustStrip from "../components/home/TrustStrip.jsx";
import MarqueeBanner from "../components/home/MarqueeBanner.jsx";
import FeaturedServices from "../components/home/FeaturedServices.jsx";
import AboutPreview from "../components/home/AboutPreview.jsx";
import FeaturedGallery from "../components/home/FeaturedGallery.jsx";
import WhyChooseUs from "../components/home/WhyChooseUs.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import CTASection from "../components/home/CTASection.jsx";

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <MarqueeBanner />
      <FeaturedServices />
      <AboutPreview />
      <FeaturedGallery />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}

export default Home;
