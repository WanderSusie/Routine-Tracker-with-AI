import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-primary text-text-primary font-sans">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
