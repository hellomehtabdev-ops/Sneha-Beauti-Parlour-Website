import { Link } from "react-router-dom";
import { Phone, MessageCircle, CalendarHeart } from "lucide-react";
import { business } from "../../data/business.js";
import { buildWhatsAppLink, buildGeneralInquiryMessage } from "../../utils/whatsapp.js";

function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="glass bg-ivory-50/90 dark:bg-charcoal-950/90 border-t border-ivory-200 dark:border-charcoal-800 px-2 py-2 flex items-center justify-around safe-area-pb">
        <a
          href={`tel:${business.phoneRaw}`}
          className="flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-lg text-charcoal-700 dark:text-ivory-200 active:scale-95 transition-transform"
          aria-label="Call salon"
        >
          <Phone className="w-5 h-5 text-rose-500" />
          <span className="font-body text-[10px] font-medium">Call</span>
        </a>
        <a
          href={buildWhatsAppLink(buildGeneralInquiryMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-lg text-charcoal-700 dark:text-ivory-200 active:scale-95 transition-transform"
          aria-label="WhatsApp salon"
        >
          <MessageCircle className="w-5 h-5 text-green-600" />
          <span className="font-body text-[10px] font-medium">WhatsApp</span>
        </a>
        <Link
          to="/appointment"
          className="flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-lg text-white bg-rose-500 active:scale-95 transition-transform"
          aria-label="Book appointment"
        >
          <CalendarHeart className="w-5 h-5" />
          <span className="font-body text-[10px] font-medium">Book</span>
        </Link>
      </div>
    </div>
  );
}

export default MobileBottomBar;
