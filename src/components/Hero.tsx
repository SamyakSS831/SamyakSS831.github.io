import { useEffect, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import GalleryCarousel from './GalleryCarousel';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start animation after a longer delay for visibility
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #F9F7F1 0%, #F0E6D2 50%, #F9F7F1 100%)'
      }}></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#c41e3a]/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        {/* Top Section: Literati 2026 Logo */}
        <div className={`transition-all duration-[1500ms] cubic-bezier(0.7, 0, 0.3, 1) ${isVisible
          ? 'flex justify-center mb-4 pt-4 translate-y-0 scale-100'
          : 'fixed inset-0 flex items-center justify-center z-50 scale-[3]'
          }`}>
          <div className="transform transition-all duration-[1500ms]">
            <img
              src={`${import.meta.env.BASE_URL}literati_2026_logo_png.png`}
              alt="Literati 2026"
              className="h-32 object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Center Section: Gallery Carousel */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-8">
            <GalleryCarousel />
          </div>
        </div>

        {/* Bottom Section: Date, Location, CTA */}
        <div className={`transform transition-all duration-1000 delay-[1200ms] text-center ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-8 font-serif tracking-wider">
            <div className="flex items-center gap-2 text-stone-800">
              <Calendar size={20} className="text-[#c41e3a]" />
              <span className="text-xl">6–8 February 2026</span>
            </div>
            <div className="hidden sm:block text-[#c41e3a]">•</div>
            <div className="flex items-center gap-2 text-stone-800">
              <MapPin size={20} className="text-[#c41e3a]" />
              <span className="text-xl">IIT Delhi</span>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <a
              href="http://linktr.ee/literati.iitd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#c41e3a] text-white font-semibold rounded-lg hover:bg-[#a01729] transition-all duration-300 shadow-lg hover:shadow-[#c41e3a]/50 hover:scale-105"
            >
              View Events
            </a>
          </div>
        </div>


      </div>
    </section>
  );
}
