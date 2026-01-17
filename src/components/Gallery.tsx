import { useState } from 'react';

export default function Gallery() {
  const [activeYear, setActiveYear] = useState('2025');

  const years = ['2025', '2024'];



  return (
    <section id="gallery" className="py-24 bg-[#F9F7F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-4">
            Past <span className="text-[#c41e3a]">Editions</span>
          </h2>
          <div className="w-24 h-1 bg-[#c41e3a] mx-auto mb-8"></div>
          <p className="text-stone-600 text-lg">
            Relive the magic of previous Literati festivals
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeYear === year
                ? 'bg-[#c41e3a] text-white shadow-lg shadow-[#c41e3a]/50'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-white border border-stone-200 hover:border-[#c41e3a] transition-all duration-300 hover:scale-105 shadow-sm"
            >
              <img
                src={`${import.meta.env.BASE_URL}gallery/${activeYear}-${item}.png`}
                alt={`Literati ${activeYear} - Image ${item}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c41e3a]/20 border-2 border-[#c41e3a] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#c41e3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm">Gallery Image {item}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-semibold">Literati {activeYear}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Festival Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-[#c41e3a] rounded-full mt-2"></div>
                <p className="text-gray-300">{highlight}</p>
              </div>
            ))}
          </div>
        </div> */}

        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-[#c41e3a] to-[#8b0000] text-white font-semibold rounded-lg hover:from-[#a01729] hover:to-[#6b0000] transition-all duration-300 shadow-lg hover:shadow-[#c41e3a]/50 hover:scale-105">
            View Complete Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
