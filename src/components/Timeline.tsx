export default function Timeline() {

  return (
    <section id="timeline" className="py-24 bg-gradient-to-b from-[#F0E6D2] to-[#F9F7F1] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#c41e3a] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#8b0000] rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-4">
            Event <span className="text-[#c41e3a]">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-[#c41e3a] mx-auto mb-8"></div>
          <p className="text-stone-600 text-lg">
            Three days of literary celebration and cultural excellence
          </p>
        </div>

        <div className="space-y-12 text-center py-20">
          <div className="mx-auto max-w-xl">
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">Coming Soon</h3>
            <p className="text-stone-600">Event schedule will be published shortly. Stay tuned.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-stone-500">* Schedule subject to change. Stay updated with our social media channels</p>
        </div>
      </div>
    </section>
  );
}
