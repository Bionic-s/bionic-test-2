import { Hero } from '../components/Hero';
import { Partners } from '../components/Partners';
import { ServicePillars } from '../components/ServicePillars';
import { CapabilityShow } from '../components/CapabilityShow';
import { Contact } from '../components/Contact';
import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | Bionic Solutions — Enterprise AI Transformation Integrator</title>
        <meta name="description" content="Bionic Solutions — Enterprise AI Transformation Integrator. We design intelligence, automation, and trust into business. Serving Saudi Arabia and the GCC." />
      </Helmet>
      {/* 1. Hook */}
      <Hero />

      {/* 2. Trust */}
      <Partners />

      {/* 3. Value — 3 Pillars × 7 Service Lines */}
      <ServicePillars />

      {/* 4. Proof — Saudi capability cards */}
      <CapabilityShow />

      {/* 5. Convert */}
      <Contact />

    </>
  );
}
