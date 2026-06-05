import { Hero } from '../components/Hero';
import { Partners } from '../components/Partners';
import { ServicePillars } from '../components/ServicePillars';
import { CapabilityShow } from '../components/CapabilityShow';
import { Contact } from '../components/Contact';

export default function HomePage() {
  return (
    <>
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
