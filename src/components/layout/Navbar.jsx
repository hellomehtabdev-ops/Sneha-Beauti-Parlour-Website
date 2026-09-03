import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, CalendarHeart } from "lucide-react";
import { navigationLinks } from "../../data/navigation.js";
import { business } from "../../data/business.js";
import ThemeToggle from "../theme/ThemeToggle.jsx";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass bg-ivory-50/85 dark:bg-charcoal-950/85 shadow-sm shadow-charcoal-900/5"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group" aria-label="Home">
              <span className="font-display text-lg sm:text-xl font-semibold text-charcoal-900 dark:text-ivory-50 tracking-tight transition-colors group-hover:text-rose-500">
                Sneha Pro
              </span>
              <span className="hidden sm:inline font-body text-xs uppercase tracking-[0.2em] text-gold-500 border-l border-gold-400/40 pl-2">
                Beauty Salon
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `relative px-4 py-2 font-body text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-rose-500"
                        : "text-charcoal-700 dark:text-ivory-200 hover:text-rose-500"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-rose-400 rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle />
              <Link
                to="/appointment"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-rose-500 text-white font-body text-sm font-medium hover:bg-rose-600 transition-all duration-300 active:scale-95 shadow-md shadow-rose-500/20"
              >
                <CalendarHeart className="w-4 h-4" />
                Book Appointment
              </Link>
              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-charcoal-900 dark:text-ivory-50"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal-950/40 animate-fade-in"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-ivory-50 dark:bg-charcoal-900 shadow-2xl animate-slide-in-left flex flex-col">
            <div className="flex items-center justify-between h-16 px-5 border-b border-ivory-200 dark:border-charcoal-800">
              <span className="font-display text-lg font-semibold text-charcoal-900 dark:text-ivory-50">
                Menu
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-charcoal-900 dark:text-ivory-50"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-6">
              <nav className="flex flex-col gap-1">
                {navigationLinks.map((link, i) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === "/"}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3.5 rounded-lg font-body text-base font-medium transition-all duration-200 animate-fade-up ${
                        isActive
                          ? "bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-300"
                          : "text-charcoal-800 dark:text-ivory-100 hover:bg-ivory-100 dark:hover:bg-charcoal-800"
                      }`
                    }
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>
            <div className="px-5 py-6 border-t border-ivory-200 dark:border-charcoal-800 space-y-3">
              <Link
                to="/appointment"
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-lg bg-rose-500 text-white font-body text-sm font-medium hover:bg-rose-600 transition-all active:scale-95"
              >
                <CalendarHeart className="w-4 h-4" />
                Book Appointment
              </Link>
              <a
                href={`tel:${business.phoneRaw}`}
                className="flex items-center justify-center w-full px-5 py-3.5 rounded-lg border border-gold-400 text-charcoal-900 dark:text-ivory-100 font-body text-sm font-medium hover:bg-gold-50 dark:hover:bg-gold-950/30 transition-all"
              >
                Call {business.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
