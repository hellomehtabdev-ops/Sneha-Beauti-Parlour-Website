import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import MobileBottomBar from "./components/layout/MobileBottomBar.jsx";
import WhatsAppBookingButton from "./components/booking/WhatsAppBookingButton.jsx";
import LoadingScreen from "./components/common/LoadingScreen.jsx";

import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import ServiceDetails from "./pages/ServiceDetails.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
import Reviews from "./pages/Reviews.jsx";
import Contact from "./pages/Contact.jsx";
import Appointment from "./pages/Appointment.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <LoadingScreen />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileBottomBar />
      <WhatsAppBookingButton />
    </BrowserRouter>
  );
}

export default App;
