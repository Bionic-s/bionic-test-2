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

      {/* 3. Value — 3 ركائز × ٧ خطوط أعمال */}
      <ServicePillarsAr />

      {/* 4. Proof — بطاقات القدرات السعودية */}
      <CapabilityShowAr />

      {/* 5. Convert */}
      <ContactAr />

    </>
  );
}
