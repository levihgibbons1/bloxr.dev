import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Marketplace from './components/Marketplace';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Waitlist from './components/Waitlist';

function LandingPage() {
  return (
    <main>
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Marketplace />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/waitlist" element={<Waitlist />} />
      </Routes>
    </BrowserRouter>
  );
}
