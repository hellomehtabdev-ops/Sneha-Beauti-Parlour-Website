import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ServiceCard from "./ServiceCard.jsx";

function RelatedServices({ services }) {
  if (!services || services.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 bg-ivory-100 dark:bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="font-body text-sm uppercase tracking-[0.25em] text-gold-500 mb-2">
              Related
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-charcoal-900 dark:text-ivory-50">
              You May Also Like
            </h2>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 font-body text-sm font-medium text-rose-500 hover:text-rose-600 transition-colors"
          >
            View All Services
            <ArrowRight className="btn-arrow w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedServices;
