import { Star } from "lucide-react";
import { testimonials } from "../../data/testimonials.js";
import SectionHeading from "../common/SectionHeading.jsx";
import FadeIn from "../common/FadeIn.jsx";
import { business } from "../../data/business.js";

function Testimonials() {
  const items = testimonials.slice(0, 3);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-ivory-100 dark:bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Our Clients"
          subtitle={`Rated ${business.rating} \u2605 by ${business.reviewCount} customers on Google.`}
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((t, i) => (
            <FadeIn key={t.id} delay={i * 120}>
              <div className="h-full bg-white dark:bg-charcoal-800 rounded-2xl p-6 sm:p-7 border border-ivory-200 dark:border-charcoal-700 card-lift">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="font-serif-body text-lg text-charcoal-700 dark:text-ivory-200/80 leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                {t.isDemo && (
                  <span className="inline-block mt-3 px-2.5 py-0.5 rounded-full bg-ivory-200 dark:bg-charcoal-700 font-body text-[10px] uppercase tracking-wider text-charcoal-500 dark:text-ivory-200/50">
                    Demo Content
                  </span>
                )}
                <div className="mt-5 pt-5 border-t border-ivory-200 dark:border-charcoal-700">
                  <div className="font-display text-base font-semibold text-charcoal-900 dark:text-ivory-50">
                    {t.name}
                  </div>
                  <div className="font-body text-xs text-charcoal-500 dark:text-ivory-200/50">
                    {t.location}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
