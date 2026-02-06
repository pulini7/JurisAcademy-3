import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import NeuralDrafting from './components/NeuralDrafting';
import Features from './components/Features';
import TransformationPath from './components/TransformationPath';
import RoiCalculator from './components/RoiCalculator';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Fundamentals from './components/Fundamentals';
import Comparison from './components/Comparison';
import Instructors from './components/Instructors';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Hero />
      <Stats />
      <Fundamentals />
      <Features />
      <TransformationPath />
      <NeuralDrafting />
      <RoiCalculator />
      <Testimonials />
      <Comparison />
      <Pricing />
      <FAQ />
      <Instructors />
      <Footer />
    </div>
  );
};

export default App;