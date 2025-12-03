import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Events } from './components/Events';
import { Team } from './components/Team';
import { Sponsors } from './components/Sponsors';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Events />
        <Team />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
