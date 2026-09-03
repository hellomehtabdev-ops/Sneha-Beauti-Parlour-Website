import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "../../data/services.js";
import SectionHeading from "../common/SectionHeading.jsx";
import FadeIn from "../common/FadeIn.jsx";

function FeaturedServices() {
  const featured = services.slice(0, 6);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-ivory-50 dark:bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Beauty Services Designed Around You"
          subtitle="From hair styling to bridal makeup, each service is tailored to enhance your natural beauty."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((service, i) => (
            <FadeIn key={service.id} delay={i * 100}>
              <Link
                to={`/services/${service.slug}`}
                className="group block card-lift bg-white dark:bg-charcoal-900 rounded-2xl overflow-hidden border border-ivory-200 dark:border-charcoal-800 shadow-sm hover:shadow-xl hover:shadow-charcoal-900/5"
              >
                <div className="img-zoom relative h-56 sm:h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-ivory-50/90 dark:bg-charcoal-950/90 backdrop-blur-sm">
                    <span className="font-body text-xs font-medium text-rose-600 dark:text-rose-300">
                      {service.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-xl font-semibold text-charcoal-900 dark:text-ivory-50 group-hover:text-rose-500 transition-colors">
                    {service.name}
                  </h3>
                  <p className="mt-2 font-body text-sm text-charcoal-600 dark:text-ivory-200/60 leading-relaxed line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-body text-sm font-medium text-gold-500">
                      {service.price}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-body text-sm text-rose-500 group-hover:text-rose-600">
                      View Details
                      <ArrowRight className="btn-arrow w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-charcoal-900 dark:bg-ivory-100 text-ivory-50 dark:text-charcoal-900 font-body text-sm font-medium hover:bg-rose-500 dark:hover:bg-rose-500 dark:hover:text-white transition-all duration-300 active:scale-95"
          >
            View All Services
            <ArrowRight className="btn-arrow w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedServices;
