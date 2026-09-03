import { buildWhatsAppLink, buildGeneralInquiryMessage } from "../../utils/whatsapp.js";
import { MessageCircle } from "lucide-react";

function WhatsAppBookingButton() {
  return (
    <a
      href={buildWhatsAppLink(buildGeneralInquiryMessage())}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
    </a>
  );
}

export default WhatsAppBookingButton;
