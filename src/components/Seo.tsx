import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE = 'https://app.bionics.sa/test-site-2';

const organizationSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Bionic Solutions',
  alternateName: 'حلول بايونيك',
  url: `${SITE}/`,
  logo: `${SITE}/icon-512.png`,
  description:
    'Enterprise AI Transformation Integrator serving Saudi Arabia and the GCC. We design intelligence, automation, and trust into business.',
  areaServed: 'SA',
  sameAs: [
    'https://www.linkedin.com/company/bionic-solutions-ksa/',
    'https://twitter.com/bionics_Sa',
  ],
});

/**
 * Central per-route SEO tags: canonical URL, EN<->AR hreflang alternates,
 * and the Organization JSON-LD. Page titles/descriptions stay in each
 * page's own Helmet.
 */
export function Seo() {
  const { pathname } = useLocation();
  const isArabic = pathname === '/ar' || pathname.startsWith('/ar/');

  const enPath = isArabic ? (pathname === '/ar' ? '/' : pathname.slice(3) || '/') : pathname;
  const arPath = enPath === '/' ? '/ar' : `/ar${enPath}`;

  const toUrl = (p: string) => (p === '/' ? `${SITE}/` : `${SITE}${p}`);

  return (
    <Helmet>
      <link rel="canonical" href={toUrl(pathname)} />
      <link rel="alternate" hrefLang="en" href={toUrl(enPath)} />
      <link rel="alternate" hrefLang="ar" href={toUrl(arPath)} />
      <link rel="alternate" hrefLang="x-default" href={toUrl(enPath)} />
      <meta property="og:url" content={toUrl(pathname)} />
      <meta property="og:locale" content={isArabic ? 'ar_SA' : 'en_SA'} />
      <script type="application/ld+json">{organizationSchema}</script>
    </Helmet>
  );
}
