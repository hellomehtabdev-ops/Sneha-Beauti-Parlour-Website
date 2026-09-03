import { business } from "../data/business.js";

export function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${business.whatsapp}?text=${encoded}`;
}

export function buildAppointmentMessage(data) {
  return `Hello ${business.businessName},

I would like to book an appointment.

Name: ${data.name || ""}
Phone: ${data.phone || ""}
Service: ${data.service || ""}
Preferred Date: ${data.date || ""}
Preferred Time: ${data.time || ""}
Message: ${data.message || ""}

Thank you.`;
}

export function buildServiceInquiryMessage(serviceName) {
  return `Hello ${business.businessName},

I would like to know more about the ${serviceName} service and book an appointment.

Thank you.`;
}

export function buildGeneralInquiryMessage() {
  return `Hello ${business.businessName}, I would like to inquire about your services. Thank you.`;
}

export default buildWhatsAppLink;
