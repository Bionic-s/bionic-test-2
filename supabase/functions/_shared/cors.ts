// _shared/cors.ts — Single source of truth for CORS origins
// Edit this ONE file when domains change. Deploy all functions after.

export const ALLOWED_ORIGINS = [
  // Production domains
  'https://www.bionic-solutions.com.sa',
  'https://bionic-solutions.com.sa',
  'https://app.bionics.sa',
  'https://bionics.sa',
  'https://www.bionics.com.sa',
  'https://bionics.com.sa',
  // Vercel preview deployments
  'https://saudi-bionic-solutions-website-*.vercel.app',
  // Dev
  'http://localhost:5173',
  'http://localhost:4173',
];

export function allowOrigin(req: Request): string {
  const origin = req.headers.get('origin') ?? '';

  // Quick check against the static list
  if (ALLOWED_ORIGINS.includes(origin)) return origin;

  // Wildcard: Vercel preview deployments
  if (origin.endsWith('.vercel.app')) {
    const host = origin.replace('https://', '').replace('http://', '');
    if (host.startsWith('saudi-bionic-solutions-website-')) return origin;
  }

  // Fallback to production domain
  return 'https://www.bionic-solutions.com.sa';
}
