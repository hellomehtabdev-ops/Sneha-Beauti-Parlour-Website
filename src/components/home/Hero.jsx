import { Link } from "react-router-dom";
import { Star, CalendarHeart, Sparkles } from "lucide-react";
import { business } from "../../data/business.js";

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/7750114/pexels-photo-7750114.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Elegant salon interior"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory-50/70 via-ivory-50/50 to-ivory-50 dark:from-charcoal-950/75 dark:via-charcoal-950/60 dark:to-charcoal-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory-50/60 to-transparent dark:from-charcoal-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-down">
            <div className="h-px w-10 bg-gold-500" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-gold-500">
              {business.businessName}
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-charcoal-900 dark:text-ivory-50 leading-[1.05] animate-fade-up">
            Your Beauty,
            <br />
            <span className="text-rose-500">Our Art.</span>
          </h1>

          <p className="mt-6 font-body text-base sm:text-lg md:text-xl text-charcoal-700/80 dark:text-ivory-200/80 leading-relaxed max-w-xl animate-fade-up delay-200">
            {business.shortDescription}
          </p>

          {/* Rating */}
          <div className="mt-6 flex items-center gap-3 animate-fade-up delay-300">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="font-body text-sm text-charcoal-700 dark:text-ivory-200">
              <span className="font-semibold">{business.rating}</span> · {business.reviewCount} Reviews
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
            <Link
              to="/appointment"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-rose-500 text-white font-body text-sm font-medium hover:bg-rose-600 transition-all duration-300 active:scale-95 shadow-lg shadow-rose-500/25"
            >
              <CalendarHeart className="w-5 h-5" />
              Book Appointment
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-charcoal-300 dark:border-ivory-200/30 text-charcoal-900 dark:text-ivory-50 font-body text-sm font-medium hover:bg-charcoal-900 hover:text-ivory-50 dark:hover:bg-ivory-100 dark:hover:text-charcoal-900 transition-all duration-300 active:scale-95"
            >
              <Sparkles className="w-5 h-5" />
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 animate-fade-in delay-700">
        <span className="font-body text-xs uppercase tracking-[0.2em] text-charcoal-500 dark:text-ivory-200/50">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-gold-400 to-transparent" />
      </div>
    </section>
  );
}

export default Hero;
