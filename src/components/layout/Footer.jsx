import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, CalendarHeart, Star } from "lucide-react";
import { business } from "../../data/business.js";
import { navigationLinks, footerServiceLinks } from "../../data/navigation.js";
import { buildWhatsAppLink, buildGeneralInquiryMessage } from "../../utils/whatsapp.js";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal-900 dark:bg-charcoal-950 text-ivory-100 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-display text-2xl font-semibold text-ivory-50">
              Sneha Pro
            </h3>
            <p className="mt-1 font-body text-xs uppercase tracking-[0.2em] text-gold-400">
              Beauty Salon
            </p>
            <p className="mt-4 font-body text-sm text-ivory-200/70 leading-relaxed max-w-xs">
              {business.shortDescription}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
              <span className="font-body text-sm text-ivory-200/80">
                {business.rating} Rating · {business.reviewCount} Reviews
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium text-ivory-50 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-ivory-200/70 hover:text-rose-300 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-medium text-ivory-50 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerServiceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-ivory-200/70 hover:text-rose-300 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-medium text-ivory-50 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="flex items-start gap-2.5 font-body text-sm text-ivory-200/70 hover:text-rose-300 transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-gold-400" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppLink(buildGeneralInquiryMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 font-body text-sm text-ivory-200/70 hover:text-rose-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mt-0.5 shrink-0 text-gold-400" />
                  WhatsApp Available
                </a>
              </li>
              <li>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 font-body text-sm text-ivory-200/70 hover:text-rose-300 transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold-400" />
                  {business.address.line1}, {business.address.line2}, {business.address.state} {business.address.pincode}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-ivory-200/60">
            &copy; {year} {business.businessName}. All rights reserved.
          </p>
          <Link
            to="/appointment"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-rose-500 text-white font-body text-sm font-medium hover:bg-rose-600 transition-all active:scale-95"
          >
            <CalendarHeart className="w-4 h-4" />
            Book Your Appointment
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
