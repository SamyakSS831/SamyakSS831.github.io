import { BookOpen, Feather, Users, Sparkles } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: BookOpen,
      title: 'Literary Excellence',
      description: 'Celebrating the written word through diverse genres and perspectives from across cultures and eras'
    },
    {
      icon: Feather,
      title: 'Creative Expression',
      description: 'Platform for poets, writers, and storytellers to share their craft and connect with audiences'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Bringing together literature enthusiasts, renowned authors, and emerging voices'
    },
    {
      icon: Sparkles,
      title: 'Cultural Heritage',
      description: 'Exploring mythological narratives that have shaped civilizations across time'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#F9F7F1] to-[#F0E6D2] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(30deg, #c41e3a 12%, transparent 12.5%, transparent 87%, #c41e3a 87.5%, #c41e3a), linear-gradient(150deg, #c41e3a 12%, transparent 12.5%, transparent 87%, #c41e3a 87.5%, #c41e3a)`,
        backgroundSize: '20px 35px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-4">
            About <span className="text-[#c41e3a]">Literati</span>
          </h2>
          <div className="w-24 h-1 bg-[#c41e3a] mx-auto mb-8"></div>
          <p className="text-stone-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Literati is the annual literature and arts festival of IIT Delhi, organized by the Board for Student Publications (BSP).
            This year's theme, <span className="text-[#d4af37] font-semibold">Threads of Mythology</span>, weaves together ancient narratives
            with contemporary storytelling, exploring how mythological threads continue to influence modern literature and culture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-lg border border-stone-200 hover:border-[#c41e3a] transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#c41e3a]/10"
            >
              <div className="mb-4">
                <feature.icon className="w-12 h-12 text-[#c41e3a] group-hover:text-[#d4af37] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/50 border border-[#c41e3a]/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Organized by BSP IIT Delhi</h3>
          <p className="text-stone-600 max-w-2xl mx-auto">
            The Board for Student Publications is the official literary body of IIT Delhi, dedicated to promoting
            literary culture and creative expression on campus through publications, events, and festivals.
          </p>
        </div>
      </div>
    </section>
  );
}
