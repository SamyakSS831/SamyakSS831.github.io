import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sponsors from './components/Sponsors';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    (() => {
      if (typeof window !== 'undefined') {
        const path = window.location.pathname || '/';
        const hash = window.location.hash || '';

        // support both direct pathname (/sponsors) and hash route (/#/sponsors)
        if (path.startsWith('/sponsors') || hash.startsWith('#/sponsors')) {
          return <Sponsors />;
        }
      }

      return (
        <div className={`min-h-screen bg-[#F9F7F1] text-gray-900 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="noise"></div>
          <Navbar />
          <Hero />
          <About />
          <Events />
          <Timeline />
          <Footer />
        </div>
      );
    })()
  );
}

export default App;
