import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { business } from "../../data/business.js";
import FadeIn from "../common/FadeIn.jsx";
import ImageReveal from "../common/ImageReveal.jsx";

function AboutPreview() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-ivory-100 dark:bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <FadeIn className="order-2 lg:order-1">
            <div className="relative">
              <ImageReveal
                src="https://images.pexels.com/photos/7195809/pexels-photo-7195809.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Salon interior"
                className="rounded-2xl h-[400px] sm:h-[480px] shadow-xl"
              />
              <div className="absolute -bottom-6 -right-4 sm:-right-6 w-40 h-40 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-4 border-ivory-50 dark:border-charcoal-900 shadow-lg hidden sm:block">
                <img
                  src="https://images.pexels.com/photos/3993320/pexels-photo-3993320.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Hair colour service"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn className="order-1 lg:order-2" delay={150}>
            <div>
              <div className="font-body text-sm uppercase tracking-[0.25em] text-gold-500 mb-3">
                About Us
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal-900 dark:text-ivory-50 leading-tight">
                Where Beauty Meets Care
              </h2>
              <p className="mt-5 font-body text-base text-charcoal-700/80 dark:text-ivory-200/70 leading-relaxed">
                {business.businessName} is a local beauty destination in {business.address.line2}, offering professional beauty, hair, makeup, and bridal services. We believe every client deserves personalized attention and a look that feels authentically their own.
              </p>
              <p className="mt-4 font-body text-base text-charcoal-700/80 dark:text-ivory-200/70 leading-relaxed">
                From everyday grooming to bridal transformations, our services are designed to make you feel confident and radiant.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {business.categories.slice(0, 4).map((cat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-rose-400" />
                    <span className="font-body text-sm text-charcoal-700 dark:text-ivory-200/80">
                      {cat}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-2 font-body text-sm font-medium text-rose-500 hover:text-rose-600 transition-colors"
              >
                Read Our Story
                <ArrowRight className="btn-arrow w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
