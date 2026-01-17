export default function Events() {
  const events = [
    {
      title: 'Book Fair',
      image: '/events/book-fair.png',
    },
    {
      title: 'Panel Discussions',
      image: '/events/panel-discussions.png',
    },
    {
      title: 'Keynote Sessions',
      image: '/events/keynote-sessions.png',
    },
    {
      title: 'Workshops',
      image: '/events/workshops.png',
    },
    {
      title: 'Theatre Performance',
      image: '/events/theatre-performance.png',
    },
    {
      title: 'Quizzes',
      image: '/events/quizzes.png',
    },
    {
      title: 'Creative Writing and Spoken Word Competitions',
      image: '/events/creative-writing.png',
    },
    {
      title: 'Art Competitions',
      image: '/events/art-competitions.png',
    }
  ];

  return (
    <section id="events" className="py-16 bg-[#F9F7F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-4">
            Literati <span className="text-[#c41e3a]">Events</span>
          </h2>
          <div className="w-24 h-1 bg-[#c41e3a] mx-auto mb-8"></div>
          <p className="text-stone-600 text-lg max-w-3xl mx-auto">
            Immerse yourself in our flagship events
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white border border-stone-200 hover:border-[#c41e3a] transition-all duration-300 hover:transform hover:scale-105 shadow-sm hover:shadow-lg"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-900">
                <img
                  src={`${import.meta.env.BASE_URL}events/${event.image.split('/').pop()}`}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-[#c41e3a]/20 border-2 border-[#c41e3a] flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#c41e3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#c41e3a] transition-colors duration-300">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c41e3a] via-[#d4af37] to-[#c41e3a] tracking-wide">
            and many more ...
          </p>
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-[#c41e3a] to-[#8b0000] text-white font-semibold rounded-lg hover:from-[#a01729] hover:to-[#6b0000] transition-all duration-300 shadow-lg hover:shadow-[#c41e3a]/50 hover:scale-105">
            View Complete Schedule
          </button>
        </div>
      </div>
    </section>
  );
}
