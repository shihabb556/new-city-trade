import React, { Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy loading below-the-fold components for better initial load performance
const About = React.lazy(() => import('./components/About'));
const MissionVision = React.lazy(() => import('./components/MissionVision'));
const Services = React.lazy(() => import('./components/Services'));
const Products = React.lazy(() => import('./components/Products'));
const Leadership = React.lazy(() => import('./components/Leadership'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-on-tertiary-container selection:text-white">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="py-24 text-center">Loading...</div>}>
          <About />
          <MissionVision />
          <Services />
          <Products />
          <Leadership />
          <Testimonials />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="py-12 bg-[#f0f3ff] text-center">Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
