import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sponsors from './components/Sponsors';

function getCurrentRoute() {
  if (typeof window === 'undefined') return '/';
  const hash = window.location.hash || '';
  const path = window.location.pathname || '/';
  if (hash.startsWith('#/')) return hash.slice(1); // '#/sponsors' -> '/sponsors'
  return path;
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [route, setRoute] = useState<string>(getCurrentRoute());

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // update route on hashchange and popstate so UI reacts to anchors and history
    function onRouteChange() {
      setRoute(getCurrentRoute());
    }

    window.addEventListener('hashchange', onRouteChange);
    window.addEventListener('popstate', onRouteChange);

    return () => {
      window.removeEventListener('hashchange', onRouteChange);
      window.removeEventListener('popstate', onRouteChange);
    };
  }, []);

  // If route is /sponsors (either pathname or hash), render Sponsors
  if (route.startsWith('/sponsors')) {
    return <Sponsors />;
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
}

export default App;
