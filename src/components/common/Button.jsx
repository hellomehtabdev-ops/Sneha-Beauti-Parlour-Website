import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const variants = {
  primary:
    "bg-rose-500 text-white hover:bg-rose-600 shadow-md shadow-rose-500/20",
  gold:
    "bg-gold-500 text-charcoal-900 hover:bg-gold-400 shadow-md shadow-gold-500/20",
  outline:
    "border border-rose-400 text-rose-600 hover:bg-rose-50 dark:text-rose-300 dark:hover:bg-rose-950/40 dark:border-rose-500",
  dark:
    "bg-charcoal-900 text-ivory-50 hover:bg-charcoal-800 dark:bg-ivory-100 dark:text-charcoal-900 dark:hover:bg-ivory-200",
  ghost:
    "text-charcoal-800 hover:bg-ivory-200 dark:text-ivory-100 dark:hover:bg-charcoal-800",
};

const sizes = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  onClick,
  type = "button",
  className = "",
  showArrow = false,
  ariaLabel,
  ...rest
}) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-lg font-body font-medium tracking-wide transition-all duration-300 ease-out active:scale-95 ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="btn-arrow w-4 h-4" strokeWidth={2} />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} onClick={onClick} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel} {...rest}>
      {content}
    </button>
  );
}

export default Button;
