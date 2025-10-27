import React from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Pricing />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
