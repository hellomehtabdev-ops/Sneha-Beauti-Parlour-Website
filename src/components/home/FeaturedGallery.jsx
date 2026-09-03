import { galleryItems } from "../../data/gallery.js";
import SectionHeading from "../common/SectionHeading.jsx";
import FadeIn from "../common/FadeIn.jsx";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function FeaturedGallery() {
  const items = galleryItems.slice(0, 6);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-ivory-50 dark:bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="A Glimpse of Our Work"
          subtitle="Beautiful moments crafted with skill and care."
        />

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {items.map((item, i) => (
            <FadeIn
              key={item.id}
              delay={i * 80}
              className={i === 0 ? "col-span-2 md:col-span-1 row-span-2" : ""}
            >
              <div className="img-zoom relative h-full min-h-[180px] sm:min-h-[220px] rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="font-body text-xs text-ivory-50 bg-charcoal-950/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-charcoal-300 dark:border-ivory-200/30 text-charcoal-900 dark:text-ivory-50 font-body text-sm font-medium hover:bg-charcoal-900 hover:text-ivory-50 dark:hover:bg-ivory-100 dark:hover:text-charcoal-900 transition-all duration-300 active:scale-95"
          >
            View Full Gallery
            <ArrowRight className="btn-arrow w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedGallery;
