import { Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#F9F7F1] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold font-serif text-[#c41e3a] mb-1">LITERATI 26</h3>
            <p className="text-[#6b2a4a] font-mystic text-lg mb-2">Threads of mythology</p>
            <p className="text-stone-600 mb-4 leading-relaxed">IIT Delhi's annual literature and arts festival</p>
            <p className="text-sm text-stone-500">Organized by BSP IIT Delhi</p>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Events', 'Timeline', 'Gallery', 'Register'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-stone-600 hover:text-[#c41e3a] transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#c41e3a] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-stone-600">iitdelhi.literati@gmail.com</p>
                  <p className="text-stone-600">iitdelhi.bsp@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c41e3a] flex-shrink-0 mt-1" />
                <p className="text-stone-600">
                  IIT Delhi, Hauz Khas<br />
                  New Delhi - 110016
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/literati.iitd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#c41e3a] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/Literati.IITD/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#c41e3a] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
            </div>
            <div className="mt-6">
              <h5 className="text-gray-900 font-semibold mb-2 text-sm">Newsletter</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white border border-stone-200 rounded text-stone-800 text-sm focus:outline-none focus:border-[#c41e3a] transition-colors"
                />
                <button className="px-4 py-2 bg-[#c41e3a] text-white rounded hover:bg-[#a01729] transition-colors text-sm font-semibold">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 BSP IIT Delhi. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm items-center">
              <a href="/#/sponsors" className="text-gray-500 hover:text-[#c41e3a] transition-colors">Sponsors</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
