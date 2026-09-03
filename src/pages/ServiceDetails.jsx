import { useParams, Link, useNavigate } from "react-router-dom";
import { services } from "../data/services.js";
import { business } from "../data/business.js";
import { getServiceBySlug, getRelatedServices } from "../utils/helpers.js";
import { buildWhatsAppLink, buildServiceInquiryMessage } from "../utils/whatsapp.js";
import PageHero from "../components/common/PageHero.jsx";
import FadeIn from "../components/common/FadeIn.jsx";
import RelatedServices from "../components/services/RelatedServices.jsx";
import Button from "../components/common/Button.jsx";
import { Check, Phone, MessageCircle, CalendarHeart, ChevronDown, ArrowLeft, Sparkles, Clock, Heart } from "lucide-react";
import { useState } from "react";

function FAQAccordion({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-ivory-200 dark:border-charcoal-800">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-body text-sm sm:text-base font-medium text-charcoal-900 dark:text-ivory-50">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-rose-500 shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 pb-4" : "max-h-0"
        }`}
      >
        <p className="font-body text-sm text-charcoal-600 dark:text-ivory-200/60 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

function ServiceDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(services, slug);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-5 pt-20">
        <div className="text-center">
          <h1 className="font-display text-3xl font-semibold text-charcoal-900 dark:text-ivory-50">
            Service Not Found
          </h1>
          <p className="mt-3 font-body text-sm text-charcoal-600 dark:text-ivory-200/60">
            The service you are looking for does not exist.
          </p>
          <Button to="/services" variant="primary" className="mt-6" showArrow>
            View All Services
          </Button>
        </div>
      </div>
    );
  }

  const related = getRelatedServices(services, service, 3);
  const whatsappLink = buildWhatsAppLink(buildServiceInquiryMessage(service.name));

  return (
    <>
      <PageHero
        eyebrow={service.category}
        title={service.name}
        subtitle={service.shortDescription}
        image={service.image}
      />

      <section className="pb-16 sm:pb-20 md:pb-24 bg-ivory-50 dark:bg-charcoal-950">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Back link */}
          <FadeIn>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 font-body text-sm text-charcoal-600 dark:text-ivory-200/60 hover:text-rose-500 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Image */}
            <FadeIn>
              <div className="img-zoom rounded-2xl overflow-hidden h-[320px] sm:h-[420px] shadow-lg">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>

            {/* Info */}
            <FadeIn delay={150}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/30 font-body text-xs font-medium text-rose-600 dark:text-rose-300">
                    {service.category}
                  </span>
                  <span className="font-body text-sm font-medium text-gold-500">
                    {service.price}
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-charcoal-900 dark:text-ivory-50">
                  About This Service
                </h2>
                <p className="mt-3 font-body text-sm sm:text-base text-charcoal-700/80 dark:text-ivory-200/70 leading-relaxed">
                  {service.description}
                </p>

                {/* CTAs */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/appointment"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-rose-500 text-white font-body text-sm font-medium hover:bg-rose-600 transition-all active:scale-95 shadow-md shadow-rose-500/20"
                  >
                    <CalendarHeart className="w-4 h-4" />
                    Book This Service
                  </Link>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-green-500 text-white font-body text-sm font-medium hover:bg-green-600 transition-all active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${business.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-gold-400 text-charcoal-900 dark:text-ivory-100 font-body text-sm font-medium hover:bg-gold-50 dark:hover:bg-gold-950/30 transition-all active:scale-95"
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Includes + Process */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-white dark:bg-charcoal-900 rounded-2xl p-6 sm:p-7 border border-ivory-200 dark:border-charcoal-800">
                <div className="flex items-center gap-2 mb-5">
                  <Sparkles className="w-5 h-5 text-rose-500" />
                  <h3 className="font-display text-xl font-semibold text-charcoal-900 dark:text-ivory-50">
                    What This Service Includes
                  </h3>
                </div>
                <ul className="space-y-3">
                  {service.process.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="font-body text-xs font-semibold text-rose-500">
                          {i + 1}
                        </span>
                      </div>
                      <span className="font-body text-sm text-charcoal-700 dark:text-ivory-200/70 leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="bg-white dark:bg-charcoal-900 rounded-2xl p-6 sm:p-7 border border-ivory-200 dark:border-charcoal-800">
                <div className="flex items-center gap-2 mb-5">
                  <Heart className="w-5 h-5 text-rose-500" />
                  <h3 className="font-display text-xl font-semibold text-charcoal-900 dark:text-ivory-50">
                    Why Choose This Service
                  </h3>
                </div>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-charcoal-700 dark:text-ivory-200/70 leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Occasions */}
          <FadeIn className="mt-8">
            <div className="bg-white dark:bg-charcoal-900 rounded-2xl p-6 sm:p-7 border border-ivory-200 dark:border-charcoal-800">
              <div className="flex items-center gap-2 mb-5">
                <Clock className="w-5 h-5 text-rose-500" />
                <h3 className="font-display text-xl font-semibold text-charcoal-900 dark:text-ivory-50">
                  Suitable Occasions
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {service.occasions.map((occ, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-ivory-100 dark:bg-charcoal-800 font-body text-sm text-charcoal-700 dark:text-ivory-200/70"
                  >
                    {occ}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* FAQs */}
          <FadeIn className="mt-8">
            <div className="bg-white dark:bg-charcoal-900 rounded-2xl p-6 sm:p-7 border border-ivory-200 dark:border-charcoal-800">
              <h3 className="font-display text-xl font-semibold text-charcoal-900 dark:text-ivory-50 mb-4">
                Frequently Asked Questions
              </h3>
              <div>
                {service.faqs.map((faq) => (
                  <FAQAccordion key={faq.question} faq={faq} />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Bottom CTA */}
          <FadeIn className="mt-10">
            <div className="text-center bg-gradient-to-br from-rose-50 to-ivory-100 dark:from-charcoal-800 dark:to-charcoal-900 rounded-2xl p-8 sm:p-10 border border-ivory-200 dark:border-charcoal-800">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-charcoal-900 dark:text-ivory-50">
                Ready to Book?
              </h3>
              <p className="mt-3 font-body text-sm text-charcoal-600 dark:text-ivory-200/60">
                Book your {service.name.toLowerCase()} appointment today.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/appointment"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-rose-500 text-white font-body text-sm font-medium hover:bg-rose-600 transition-all active:scale-95 shadow-md shadow-rose-500/20"
                >
                  <CalendarHeart className="w-4 h-4" />
                  Book Appointment
                </Link>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-green-500 text-white font-body text-sm font-medium hover:bg-green-600 transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {related.length > 0 && <RelatedServices services={related} />}
    </>
  );
}

export default ServiceDetails;
