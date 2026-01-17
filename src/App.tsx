import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
}

export default App;
