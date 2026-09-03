function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`${alignment} max-w-2xl ${className}`}>
      {eyebrow && (
        <div
          className={`font-body text-sm uppercase tracking-[0.25em] mb-3 ${
            light ? "text-gold-400" : "text-gold-500"
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight ${
          light ? "text-ivory-50" : "text-charcoal-900 dark:text-ivory-50"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 font-body text-base sm:text-lg leading-relaxed ${
            light ? "text-ivory-200/80" : "text-charcoal-700/70 dark:text-ivory-200/70"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 h-px w-16 ${
          align === "center" ? "mx-auto" : ""
        } bg-gradient-to-r from-transparent via-gold-500 to-transparent`}
      />
    </div>
  );
}

export default SectionHeading;
