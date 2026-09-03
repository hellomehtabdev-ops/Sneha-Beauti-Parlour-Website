import { useEffect, useRef, useState } from "react";

function ImageReveal({ src, alt, className = "", imgClassName = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-105"
        } ${imgClassName}`}
      />
      <div
        className={`absolute inset-0 bg-gold-400 transition-transform duration-700 ease-out ${
          visible ? "translate-y-full" : "translate-y-0"
        }`}
        style={{ zIndex: 1 }}
      />
    </div>
  );
}

export default ImageReveal;
