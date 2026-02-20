/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Marketplace from './components/Marketplace';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Features />
      <Marketplace />
      <Pricing />
      <Footer />
    </main>
  );
}
