const marqueeItems = [
  "SNEHA PRO BEAUTY SALON",
  "BEAUTY \u2022 HAIR \u2022 MAKEUP \u2022 NAILS",
  "BRIDAL \u2022 PARTY \u2022 HAIR CARE",
];

function MarqueeBanner() {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="relative overflow-hidden bg-charcoal-900 dark:bg-charcoal-950 py-3 border-y border-gold-500/20">
      <div className="marquee-track animate-marquee">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-display text-sm sm:text-base font-medium text-ivory-100 px-6 whitespace-nowrap tracking-wide">
              {item}
            </span>
            <span className="text-gold-400 text-sm">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default MarqueeBanner;
