import { Link } from "react-router-dom";
import { Home } from "lucide-react";

function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-5 pt-20">
      <div className="text-center max-w-md">
        <div className="font-display text-8xl sm:text-9xl font-semibold text-rose-500">
          404
        </div>
        <h1 className="mt-4 font-display text-3xl font-semibold text-charcoal-900 dark:text-ivory-50">
          Page Not Found
        </h1>
        <p className="mt-3 font-body text-sm text-charcoal-600 dark:text-ivory-200/60">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-rose-500 text-white font-body text-sm font-medium hover:bg-rose-600 transition-all active:scale-95 shadow-md shadow-rose-500/20"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
