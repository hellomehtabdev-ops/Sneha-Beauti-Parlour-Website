import { useState, useMemo, useCallback } from "react";
import { galleryItems, galleryCategories } from "../data/gallery.js";
import PageHero from "../components/common/PageHero.jsx";
import FadeIn from "../components/common/FadeIn.jsx";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filtered.length));
  }, [filtered.length]);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + filtered.length) % filtered.length
    );
  }, [filtered.length]);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our Gallery"
        subtitle="A showcase of beautiful moments and professional artistry."
        image="https://images.pexels.com/photos/13068358/pexels-photo-13068358.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <section className="pb-16 sm:pb-20 md:pb-24 bg-ivory-50 dark:bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Category filters */}
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
              {galleryCategories.map((cat) => (
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
          </FadeIn>

          {/* Masonry grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 lg:gap-5 space-y-3 sm:space-y-4 lg:space-y-5">
            {filtered.map((item, i) => (
              <FadeIn key={item.id} delay={i * 50}>
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="img-zoom relative w-full rounded-xl overflow-hidden group block"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="font-body text-xs text-ivory-50 bg-charcoal-950/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] lightbox-overlay bg-charcoal-950/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-ivory-50/10 hover:bg-ivory-50/20 flex items-center justify-center text-ivory-50 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-3 sm:left-5 w-12 h-12 rounded-full bg-ivory-50/10 hover:bg-ivory-50/20 flex items-center justify-center text-ivory-50 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[85vh] lightbox-img" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightboxIndex].image}
              alt={filtered[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <p className="mt-4 text-center font-body text-sm text-ivory-200/70">
              {filtered[lightboxIndex].alt} · {filtered[lightboxIndex].category}
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-3 sm:right-5 w-12 h-12 rounded-full bg-ivory-50/10 hover:bg-ivory-50/20 flex items-center justify-center text-ivory-50 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
}

export default Gallery;
