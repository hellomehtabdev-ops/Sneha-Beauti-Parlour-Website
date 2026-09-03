import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${className}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <Sun
        className={`w-5 h-5 absolute transition-all duration-300 ${
          theme === "dark"
            ? "opacity-0 rotate-90 scale-0"
            : "opacity-100 rotate-0 scale-100 text-gold-500"
        }`}
      />
      <Moon
        className={`w-5 h-5 absolute transition-all duration-300 ${
          theme === "dark"
            ? "opacity-100 rotate-0 scale-100 text-gold-400"
            : "opacity-0 -rotate-90 scale-0"
        }`}
      />
    </button>
  );
}

export default ThemeToggle;
