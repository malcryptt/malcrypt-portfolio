import React, { useState, useEffect } from 'react';
import Hero from './sections/Hero';
import CredibilityStrip from './sections/CredibilityStrip';
import FeaturedProject from './sections/FeaturedProject';
import Projects from './sections/Projects';
import About from './sections/About';
import BookingForm from './sections/BookingForm';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import BootSequence from './components/BootSequence';

function App() {
  const [booting, setBooting] = useState(true);

  if (booting) {
    return <BootSequence onComplete={() => setBooting(false)} />;
  }

  return (
    <div className="portfolio fade-in">
      <Hero />
      <CredibilityStrip />
      <main>
        <FeaturedProject />
        <Projects />
        <About />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
