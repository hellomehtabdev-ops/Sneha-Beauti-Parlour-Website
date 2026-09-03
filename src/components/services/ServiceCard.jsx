import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function ServiceCard({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group block card-lift bg-white dark:bg-charcoal-900 rounded-2xl overflow-hidden border border-ivory-200 dark:border-charcoal-800 shadow-sm hover:shadow-xl hover:shadow-charcoal-900/5"
    >
      <div className="img-zoom relative h-52 sm:h-56 overflow-hidden">
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
  );
}

export default ServiceCard;
