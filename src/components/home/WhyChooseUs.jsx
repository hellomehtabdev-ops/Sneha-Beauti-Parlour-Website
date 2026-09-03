import { Sparkles, Heart, Scissors, Crown, MapPin, Smile } from "lucide-react";
import SectionHeading from "../common/SectionHeading.jsx";
import FadeIn from "../common/FadeIn.jsx";

function WhyChooseUs() {
  const reasons = [
    {
      icon: Heart,
      title: "Personalized Service",
      desc: "Every appointment is tailored to your unique style, preferences, and features.",
    },
    {
      icon: Sparkles,
      title: "Professional Beauty Care",
      desc: "Quality products and professional techniques for results you can see and feel.",
    },
    {
      icon: Scissors,
      title: "Hair & Makeup Services",
      desc: "A full range of hair styling, cuts, colour, and makeup services under one roof.",
    },
    {
      icon: Crown,
      title: "Bridal & Party Looks",
      desc: "Specialized bridal packages and party makeup for your most important moments.",
    },
    {
      icon: MapPin,
      title: "Convenient Local Location",
      desc: "Easy to find in Khuskibagh, Purnea, with accessible local directions.",
    },
    {
      icon: Smile,
      title: "Customer-Focused Experience",
      desc: "Your comfort and satisfaction are at the heart of everything we do.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-ivory-50 dark:bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose Sneha Pro Beauty Salon?"
          subtitle="We combine professional skill with genuine care for every client who walks through our doors."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <FadeIn key={i} delay={i * 80}>
                <div className="group h-full bg-white dark:bg-charcoal-900 rounded-2xl p-6 sm:p-7 border border-ivory-200 dark:border-charcoal-800 card-lift hover:shadow-lg hover:shadow-charcoal-900/5">
                  <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center mb-5 group-hover:bg-rose-100 dark:group-hover:bg-rose-950/50 transition-colors">
                    <Icon className="w-7 h-7 text-rose-500" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-charcoal-900 dark:text-ivory-50 mb-2">
                    {reason.title}
                  </h3>
                  <p className="font-body text-sm text-charcoal-600 dark:text-ivory-200/60 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
