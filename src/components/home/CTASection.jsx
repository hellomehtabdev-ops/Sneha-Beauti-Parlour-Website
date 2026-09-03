import { Link } from "react-router-dom";
import { CalendarHeart, ArrowRight } from "lucide-react";
import FadeIn from "../common/FadeIn.jsx";

function CTASection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/13068377/pexels-photo-13068377.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal-950/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="font-body text-sm uppercase tracking-[0.25em] text-gold-400 mb-4">
            Ready to Begin?
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory-50 leading-tight">
            Book Your Appointment Today
          </h2>
          <p className="mt-5 font-body text-base sm:text-lg text-ivory-200/80 leading-relaxed">
            Experience professional beauty care tailored to you. Reach out via WhatsApp or book online in just a few clicks.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-rose-500 text-white font-body text-sm font-medium hover:bg-rose-600 transition-all duration-300 active:scale-95 shadow-lg shadow-rose-500/30"
            >
              <CalendarHeart className="w-5 h-5" />
              Book Appointment
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-ivory-200/30 text-ivory-50 font-body text-sm font-medium hover:bg-ivory-50 hover:text-charcoal-900 transition-all duration-300 active:scale-95"
            >
              Contact Us
              <ArrowRight className="btn-arrow w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default CTASection;
