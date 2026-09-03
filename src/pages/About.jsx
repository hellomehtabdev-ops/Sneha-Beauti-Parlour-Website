import PageHero from "../components/common/PageHero.jsx";
import FadeIn from "../components/common/FadeIn.jsx";
import ImageReveal from "../components/common/ImageReveal.jsx";
import Button from "../components/common/Button.jsx";
import { Heart, Sparkles, Crown, Smile, Scissors, Star } from "lucide-react";
import { business } from "../data/business.js";

function About() {
  const sections = [
    {
      icon: Heart,
      title: "Our Story",
      body: `${business.businessName} is a local beauty salon in ${business.address.line2}, ${business.city}, offering a range of professional beauty services. This section will be updated with the salon's story and journey. The content below is editable placeholder text designed to be replaced with the real story.`,
    },
    {
      icon: Sparkles,
      title: "Our Philosophy",
      body: "We believe beauty is personal. Every client who visits us deserves attention, care, and a look that feels authentically their own. Our philosophy is simple: listen first, then create.",
    },
    {
      icon: Scissors,
      title: "Our Approach",
      body: "We take time to understand your preferences, your features, and your occasion before recommending a service. Every appointment is a collaboration between you and our team.",
    },
    {
      icon: Smile,
      title: "Beauty With Care",
      body: "Quality products, professional techniques, and a comfortable environment are the foundation of every service we offer. Your experience matters as much as the result.",
    },
  ];

  const differentiators = [
    "Personalized consultations for every client",
    "Professional beauty, hair, and makeup services",
    "Bridal and party makeup expertise",
    "Convenient location in Khuskibagh, Purnea",
    "Customer-focused, comfortable experience",
    "Quality products and professional tools",
  ];

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our Story"
        subtitle={`Learn about ${business.businessName} and our approach to beauty.`}
        image="https://images.pexels.com/photos/7750137/pexels-photo-7750137.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      {/* Story sections */}
      <section className="py-16 sm:py-20 md:py-24 bg-ivory-50 dark:bg-charcoal-950">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {sections.map((s, i) => {
              const Icon = s.icon;
              return (
                <FadeIn key={i} delay={i * 100}>
                  <div className="bg-white dark:bg-charcoal-900 rounded-2xl p-6 sm:p-8 border border-ivory-200 dark:border-charcoal-800 card-lift h-full">
                    <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-rose-500" />
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-charcoal-900 dark:text-ivory-50 mb-3">
                      {s.title}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-charcoal-700/80 dark:text-ivory-200/70 leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image section */}
      <section className="py-16 sm:py-20 bg-ivory-100 dark:bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn>
              <ImageReveal
                src="https://images.pexels.com/photos/7750108/pexels-photo-7750108.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Salon styling area"
                className="rounded-2xl h-[400px] shadow-xl"
              />
            </FadeIn>
            <FadeIn delay={150}>
              <div>
                <div className="font-body text-sm uppercase tracking-[0.25em] text-gold-500 mb-3">
                  What Makes Us Different
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal-900 dark:text-ivory-50 leading-tight">
                  A Salon That Puts You First
                </h2>
                <ul className="mt-6 space-y-3">
                  {differentiators.map((d, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-gold-400 fill-gold-400 shrink-0 mt-0.5" />
                      <span className="font-body text-sm sm:text-base text-charcoal-700 dark:text-ivory-200/70 leading-relaxed">
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Salon Experience CTA */}
      <section className="py-16 sm:py-20 md:py-24 bg-ivory-50 dark:bg-charcoal-950">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <Crown className="w-12 h-12 text-gold-400 mx-auto mb-5" />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal-900 dark:text-ivory-50">
              Salon Experience
            </h2>
            <p className="mt-4 font-body text-base text-charcoal-700/80 dark:text-ivory-200/70 leading-relaxed">
              From the moment you walk in, we want you to feel comfortable, cared for, and confident. Every detail of our salon is designed to give you a relaxing, premium experience.
            </p>
            <div className="mt-8">
              <Button to="/appointment" variant="primary" size="lg" showArrow>
                Experience Sneha Pro Beauty Salon
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

export default About;
