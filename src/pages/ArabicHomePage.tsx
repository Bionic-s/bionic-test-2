import { HeroAr } from '../components/ar/HeroAr';
import { Partners } from '../components/Partners';
import { ServicePillarsAr } from '../components/ar/ServicePillarsAr';
import { CapabilityShowAr } from '../components/ar/CapabilityShowAr';
import { ContactAr } from '../components/ar/ContactAr';

export default function ArabicHomePage() {
  return (
    <>
      {/* 1. Hook */}
      <HeroAr />

      {/* 2. Trust */}
      <Partners />

      {/* 3. Value — 3 Pillars × 7 Service Lines */}
      <ServicePillarsAr />

      {/* 4. Proof — Saudi capability cards */}
      <CapabilityShowAr />

      {/* 5. Convert */}
      <ContactAr />

    </>
  );
}
