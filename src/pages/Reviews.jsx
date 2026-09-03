import PageHero from "../components/common/PageHero.jsx";
import FadeIn from "../components/common/FadeIn.jsx";
import Button from "../components/common/Button.jsx";
import { testimonials } from "../data/testimonials.js";
import { business } from "../data/business.js";
import { Star, ExternalLink, MessageSquare } from "lucide-react";
import { buildWhatsAppLink, buildGeneralInquiryMessage } from "../utils/whatsapp.js";

function Reviews() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Trusted by Our Clients"
        subtitle={`Rated ${business.rating} \u2605 by ${business.reviewCount} customers.`}
        image="https://images.pexels.com/photos/17200372/pexels-photo-17200372.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      {/* Rating summary */}
      <section className="py-12 sm:py-16 bg-ivory-100 dark:bg-charcoal-900">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <div className="font-display text-5xl sm:text-6xl font-semibold text-charcoal-900 dark:text-ivory-50">
              {business.rating}
            </div>
            <p className="mt-2 font-body text-base text-charcoal-600 dark:text-ivory-200/60">
              {business.reviewCount} Google Reviews
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-rose-500 text-white font-body text-sm font-medium hover:bg-rose-600 transition-all active:scale-95 shadow-md shadow-rose-500/20"
              >
                <ExternalLink className="w-4 h-4" />
                View Google Reviews
              </a>
              <a
                href={buildWhatsAppLink(buildGeneralInquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-gold-400 text-charcoal-900 dark:text-ivory-100 font-body text-sm font-medium hover:bg-gold-50 dark:hover:bg-gold-950/30 transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                Share Your Experience
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-16 sm:py-20 md:py-24 bg-ivory-50 dark:bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={t.id} delay={i * 80}>
                <div className="h-full bg-white dark:bg-charcoal-900 rounded-2xl p-6 sm:p-7 border border-ivory-200 dark:border-charcoal-800 card-lift">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <p className="font-serif-body text-lg text-charcoal-700 dark:text-ivory-200/80 leading-relaxed italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  {t.isDemo && (
                    <span className="inline-block mt-3 px-2.5 py-0.5 rounded-full bg-ivory-200 dark:bg-charcoal-800 font-body text-[10px] uppercase tracking-wider text-charcoal-500 dark:text-ivory-200/50">
                      Demo Content
                    </span>
                  )}
                  <div className="mt-5 pt-5 border-t border-ivory-200 dark:border-charcoal-800">
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

          <FadeIn className="mt-12 text-center">
            <p className="font-body text-sm text-charcoal-500 dark:text-ivory-200/50 max-w-lg mx-auto">
              Real client testimonials will replace the demo content above once approved. We value every client's feedback.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

export default Reviews;
