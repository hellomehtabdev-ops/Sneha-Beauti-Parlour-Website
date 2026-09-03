import { useState } from "react";
import { services } from "../../data/services.js";
import { business } from "../../data/business.js";
import { buildWhatsAppLink, buildAppointmentMessage } from "../../utils/whatsapp.js";
import { CalendarHeart, User, Phone, Scissors, Calendar, Clock, MessageSquare } from "lucide-react";

function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = buildAppointmentMessage(form);
    const link = buildWhatsAppLink(message);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full rounded-lg border border-ivory-300 dark:border-charcoal-700 bg-white dark:bg-charcoal-800 px-4 py-3 pl-11 font-body text-sm text-charcoal-900 dark:text-ivory-50 placeholder-charcoal-400 dark:placeholder-ivory-200/40 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 transition-all";

  const labelClass =
    "block font-body text-sm font-medium text-charcoal-700 dark:text-ivory-200/80 mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400 dark:text-ivory-200/40" />
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={inputClass}
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400 dark:text-ivory-200/40" />
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className={labelClass}>
          Select Service
        </label>
        <div className="relative">
          <Scissors className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400 dark:text-ivory-200/40 pointer-events-none" />
          <select
            id="service"
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            className={inputClass + " appearance-none cursor-pointer"}
          >
            <option value="">Choose a service</option>
            {services.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name} ({s.category})
              </option>
            ))}
            <option value="Other / Not Sure">Other / Not Sure</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Date */}
        <div>
          <label htmlFor="date" className={labelClass}>
            Preferred Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400 dark:text-ivory-200/40 pointer-events-none" />
            <input
              id="date"
              name="date"
              type="date"
              required
              value={form.date}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time" className={labelClass}>
            Preferred Time
          </label>
          <div className="relative">
            <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400 dark:text-ivory-200/40 pointer-events-none" />
            <input
              id="time"
              name="time"
              type="time"
              required
              value={form.time}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3.5 top-4 w-4 h-4 text-charcoal-400 dark:text-ivory-200/40" />
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Any special requests or questions?"
            className={inputClass + " resize-none pt-3"}
          />
        </div>
      </div>

      <button
        type="submit"
        className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-green-500 hover:bg-green-600 text-white font-body text-sm font-medium transition-all duration-300 active:scale-95 shadow-lg shadow-green-500/25"
      >
        <CalendarHeart className="w-5 h-5" />
        Book Appointment on WhatsApp
      </button>

      <p className="text-center font-body text-xs text-charcoal-500 dark:text-ivory-200/50">
        Your details will be sent via WhatsApp to {business.businessName}. No data is stored on this website.
      </p>
    </form>
  );
}

export default AppointmentForm;
