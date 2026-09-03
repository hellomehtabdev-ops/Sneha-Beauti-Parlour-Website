import { useEffect, useState } from "react";

function LoadingScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 800);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-ivory-50 dark:bg-charcoal-950 transition-opacity duration-500">
      <div className="text-center">
        <div className="font-display text-2xl text-charcoal-900 dark:text-ivory-50 mb-4">
          Sneha Pro
        </div>
        <div className="flex justify-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse-soft" />
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-soft delay-200" />
          <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse-soft delay-400" />
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
