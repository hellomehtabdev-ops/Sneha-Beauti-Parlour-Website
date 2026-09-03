import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { services, serviceCategories } from "../data/services.js";
import PageHero from "../components/common/PageHero.jsx";
import ServiceGrid from "../components/services/ServiceGrid.jsx";
import FadeIn from "../components/common/FadeIn.jsx";

function Services() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result = services;
    if (activeCategory !== "All") {
      result = result.filter((s) => s.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.shortDescription.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, search]);

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Beauty Services Catalogue"
        subtitle="Explore our full range of professional beauty, hair, makeup, and nail services."
        image="https://images.pexels.com/photos/7750108/pexels-photo-7750108.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <section className="pb-16 sm:pb-20 md:pb-24 bg-ivory-50 dark:bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Search + filters */}
          <FadeIn>
            <div className="flex flex-col gap-6 mb-10">
              {/* Search */}
              <div className="relative max-w-md mx-auto w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400 dark:text-ivory-200/40" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-full border border-ivory-300 dark:border-charcoal-700 bg-white dark:bg-charcoal-900 pl-11 pr-4 py-3 font-body text-sm text-charcoal-900 dark:text-ivory-50 placeholder-charcoal-400 dark:placeholder-ivory-200/40 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 transition-all"
                />
              </div>

              {/* Category filters */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {serviceCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 active:scale-95 ${
                      activeCategory === cat
                        ? "bg-rose-500 text-white shadow-md shadow-rose-500/20"
                        : "bg-white dark:bg-charcoal-900 text-charcoal-700 dark:text-ivory-200 border border-ivory-200 dark:border-charcoal-800 hover:border-rose-300"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Results */}
          {filtered.length > 0 ? (
            <ServiceGrid services={filtered} />
          ) : (
            <div className="text-center py-16">
              <p className="font-body text-base text-charcoal-500 dark:text-ivory-200/50">
                No services found. Try a different search or category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Services;
