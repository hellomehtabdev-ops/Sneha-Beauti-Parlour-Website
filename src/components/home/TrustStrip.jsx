import { Star, Users, Scissors, MapPin } from "lucide-react";
import { business } from "../../data/business.js";

function TrustStrip() {
  const items = [
    {
      icon: Star,
      value: `${business.rating}\u2605`,
      label: "Google Rating",
    },
    {
      icon: Users,
      value: business.reviewCount,
      label: "Customer Reviews",
    },
    {
      icon: Scissors,
      value: "Professional",
      label: "Beauty Services",
    },
    {
      icon: MapPin,
      value: "Khuskibagh",
      label: "Purnea, Bihar",
    },
  ];

  return (
    <section className="py-10 sm:py-12 bg-ivory-100 dark:bg-charcoal-900 border-b border-ivory-200 dark:border-charcoal-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-rose-500" />
                </div>
                <div>
                  <div className="font-display text-lg sm:text-xl font-semibold text-charcoal-900 dark:text-ivory-50">
                    {item.value}
                  </div>
                  <div className="font-body text-xs sm:text-sm text-charcoal-600 dark:text-ivory-200/60">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustStrip;
