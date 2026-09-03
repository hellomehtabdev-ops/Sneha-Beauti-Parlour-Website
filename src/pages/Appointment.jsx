import PageHero from "../components/common/PageHero.jsx";
import FadeIn from "../components/common/FadeIn.jsx";
import AppointmentForm from "../components/booking/AppointmentForm.jsx";
import { Phone, MessageCircle, Clock } from "lucide-react";
import { business } from "../data/business.js";
import { buildWhatsAppLink, buildGeneralInquiryMessage } from "../utils/whatsapp.js";

function Appointment() {
  return (
    <>
      <PageHero
        eyebrow="Booking"
        title="Book an Appointment"
        subtitle="Fill in the form below and we'll receive your booking request via WhatsApp."
        image="https://images.pexels.com/photos/10317456/pexels-photo-10317456.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <section className="py-16 sm:py-20 md:py-24 bg-ivory-50 dark:bg-charcoal-950">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form */}
            <FadeIn className="lg:col-span-3">
              <div className="bg-white dark:bg-charcoal-900 rounded-2xl p-6 sm:p-8 border border-ivory-200 dark:border-charcoal-800 shadow-sm">
                <h2 className="font-display text-2xl font-semibold text-charcoal-900 dark:text-ivory-50 mb-6">
                  Appointment Details
                </h2>
                <AppointmentForm />
              </div>
            </FadeIn>

            {/* Sidebar */}
            <FadeIn delay={150} className="lg:col-span-2">
              <div className="space-y-6">
                {/* Quick contact */}
                <div className="bg-gradient-to-br from-rose-50 to-ivory-100 dark:from-charcoal-800 dark:to-charcoal-900 rounded-2xl p-6 border border-ivory-200 dark:border-charcoal-800">
                  <h3 className="font-display text-xl font-semibold text-charcoal-900 dark:text-ivory-50 mb-4">
                    Prefer to Contact Directly?
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={`tel:${business.phoneRaw}`}
                      className="flex items-center gap-3 font-body text-sm text-charcoal-700 dark:text-ivory-200/70 hover:text-rose-500 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center">
                        <Phone className="w-4 h-4 text-rose-500" />
                      </div>
                      Call {business.phone}
                    </a>
                    <a
                      href={buildWhatsAppLink(buildGeneralInquiryMessage())}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 font-body text-sm text-charcoal-700 dark:text-ivory-200/70 hover:text-green-600 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-950/30 flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-green-600" />
                      </div>
                      WhatsApp Us
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-white dark:bg-charcoal-900 rounded-2xl p-6 border border-ivory-200 dark:border-charcoal-800">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-rose-500" />
                    <h3 className="font-display text-lg font-semibold text-charcoal-900 dark:text-ivory-50">
                      Opening Hours
                    </h3>
                  </div>
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

                {/* Location */}
                <div className="bg-white dark:bg-charcoal-900 rounded-2xl p-6 border border-ivory-200 dark:border-charcoal-800">
                  <h3 className="font-display text-lg font-semibold text-charcoal-900 dark:text-ivory-50 mb-2">
                    Location
                  </h3>
                  <p className="font-body text-sm text-charcoal-600 dark:text-ivory-200/60 leading-relaxed">
                    {business.address.full}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

export default Appointment;
