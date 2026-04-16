import React from 'react';
import Hero from './sections/Hero';
import CredibilityStrip from './sections/CredibilityStrip';
import FeaturedProject from './sections/FeaturedProject';
import Projects from './sections/Projects';
import About from './sections/About';
import BookingForm from './sections/BookingForm';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="portfolio">
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
