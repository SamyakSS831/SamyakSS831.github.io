import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    year: i < 6 ? '2025' : '2024',
    num: (i % 6) + 1,
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const current = images[currentIndex];

  return (
    <div className="relative w-full px-4 md:px-0">
      {/* External Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute -left-12 top-1/2 transform -translate-y-1/2 z-20 text-stone-800 hover:text-[#c41e3a] transition-all duration-300 hover:scale-110"
        aria-label="Previous image"
      >
        <ChevronLeft size={32} strokeWidth={1.5} />
      </button>

      <button
        onClick={goToNext}
        className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-20 text-stone-800 hover:text-[#c41e3a] transition-all duration-300 hover:scale-110"
        aria-label="Next image"
      >
        <ChevronRight size={32} strokeWidth={1.5} />
      </button>

      <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-2xl bg-black">
        <div className="relative aspect-[1280/731] w-full">
          <img
            src={`${import.meta.env.BASE_URL}gallery/${current.year}-${current.num}.png`}
            alt="Gallery"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221200%22 height=%22675%22%3E%3Crect fill=%22%232a2a2a%22 width=%221200%22 height=%22675%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%23999%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EImage not found%3C/text%3E%3C/svg%3E';
            }}
          />
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#c41e3a] w-8' : 'bg-stone-300 w-2 hover:bg-stone-400'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
