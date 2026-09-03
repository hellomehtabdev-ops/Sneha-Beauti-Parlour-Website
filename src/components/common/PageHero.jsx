function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28">
      {image && (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover opacity-15 dark:opacity-10"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ivory-50/80 via-ivory-50/60 to-ivory-50 dark:from-charcoal-950/80 dark:via-charcoal-950/70 dark:to-charcoal-950" />
        </div>
      )}
      <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
        {eyebrow && (
          <div className="font-body text-sm uppercase tracking-[0.25em] text-gold-500 mb-3 animate-fade-down">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-charcoal-900 dark:text-ivory-50 leading-tight animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 font-body text-base sm:text-lg text-charcoal-700/70 dark:text-ivory-200/70 leading-relaxed max-w-xl mx-auto animate-fade-up delay-200">
            {subtitle}
          </p>
        )}
        <div className="mt-6 mx-auto h-px w-20 bg-gradient-to-r from-transparent via-gold-500 to-transparent animate-scale-in delay-300" />
      </div>
    </section>
  );
}

export default PageHero;
