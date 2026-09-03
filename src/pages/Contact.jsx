import PageHero from "../components/common/PageHero.jsx";
import FadeIn from "../components/common/FadeIn.jsx";
import { business } from "../data/business.js";
import { faqs } from "../data/faq.js";
import { Phone, MessageCircle, MapPin, Clock, ChevronDown, ExternalLink } from "lucide-react";
import { buildWhatsAppLink, buildGeneralInquiryMessage } from "../utils/whatsapp.js";
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

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get In Touch"
        subtitle={`Visit us, call us, or send a WhatsApp message. We'd love to hear from you.`}
        image="https://images.pexels.com/photos/7195812/pexels-photo-7195812.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      {/* Contact cards */}
      <section className="py-16 sm:py-20 md:py-24 bg-ivory-50 dark:bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Address */}
            <FadeIn>
              <div className="h-full bg-white dark:bg-charcoal-900 rounded-2xl p-6 sm:p-7 border border-ivory-200 dark:border-charcoal-800 card-lift">
                <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center mb-5">
                  <MapPin className="w-7 h-7 text-rose-500" />
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal-900 dark:text-ivory-50 mb-2">
                  Address
                </h3>
                <p className="font-body text-sm text-charcoal-600 dark:text-ivory-200/60 leading-relaxed">
                  {business.address.line1}<br />
                  {business.address.line2}, {business.address.state}<br />
                  {business.address.pincode}
                </p>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-body text-sm font-medium text-rose-500 hover:text-rose-600 transition-colors"
                >
                  Get Directions
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>

            {/* Phone / WhatsApp */}
            <FadeIn delay={100}>
              <div className="h-full bg-white dark:bg-charcoal-900 rounded-2xl p-6 sm:p-7 border border-ivory-200 dark:border-charcoal-800 card-lift">
                <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center mb-5">
                  <Phone className="w-7 h-7 text-rose-500" />
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal-900 dark:text-ivory-50 mb-2">
                  Phone & WhatsApp
                </h3>
                <p className="font-body text-sm text-charcoal-600 dark:text-ivory-200/60 leading-relaxed">
                  {business.phone}
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href={`tel:${business.phoneRaw}`}
                    className="inline-flex items-center gap-2 font-body text-sm font-medium text-rose-500 hover:text-rose-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <a
                    href={buildWhatsAppLink(buildGeneralInquiryMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Hours */}
            <FadeIn delay={200}>
              <div className="h-full bg-white dark:bg-charcoal-900 rounded-2xl p-6 sm:p-7 border border-ivory-200 dark:border-charcoal-800 card-lift">
                <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center mb-5">
                  <Clock className="w-7 h-7 text-rose-500" />
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal-900 dark:text-ivory-50 mb-2">
                  Opening Hours
                </h3>
                <ul className="space-y-1.5">
                  {business.hours.map((h) => (
                    <li key={h.day} className="flex justify-between font-body text-xs sm:text-sm text-charcoal-600 dark:text-ivory-200/60">
                      <span>{h.day}</span>
                      <span className="text-charcoal-500 dark:text-ivory-200/50">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 font-body text-xs text-charcoal-400 dark:text-ivory-200/40 italic">
                  {business.hoursNote}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Map */}
          <FadeIn className="mt-10">
            <div className="rounded-2xl overflow-hidden border border-ivory-200 dark:border-charcoal-800 shadow-lg">
              <iframe
                src={business.googleMapsEmbed}
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Salon location on Google Maps"
                allowFullScreen
              />
            </div>
          </FadeIn>

          {/* FAQ */}
          <FadeIn className="mt-16">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <div className="font-body text-sm uppercase tracking-[0.25em] text-gold-500 mb-2">
                  FAQ
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal-900 dark:text-ivory-50">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="bg-white dark:bg-charcoal-900 rounded-2xl p-6 sm:p-8 border border-ivory-200 dark:border-charcoal-800">
                {faqs.map((faq) => (
                  <FAQAccordion key={faq.id} faq={faq} />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

export default Contact;
