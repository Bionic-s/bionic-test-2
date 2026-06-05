import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CookiePolicyPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-12 max-w-3xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-accent-primary/30 bg-accent-primary/5 mb-6">
              <span className="text-small text-accent-primary font-semibold tracking-wider uppercase">
                Legal
              </span>
            </div>
            <h1 className="text-h1 md:text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-h4 text-text-muted">
              Bionic Solutions &nbsp;·&nbsp; Last updated: June 2026
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-10 text-text-muted leading-relaxed">
            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">What Are Cookies</h2>
              <p className="text-body">
                Cookies are small files that websites place on your device. They help sites work and tell us how visitors use our pages.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">Cookies We Use</h2>

              <h3 className="text-h4 font-semibold text-text-primary mt-6 mb-2">Essential</h3>
              <ul className="list-disc pl-6 space-y-1 text-body">
                <li>Keep your session active while you browse</li>
                <li>Remember your preferences</li>
              </ul>

              <h3 className="text-h4 font-semibold text-text-primary mt-6 mb-2">Analytics</h3>
              <ul className="list-disc pl-6 space-y-1 text-body">
                <li>Google Analytics — tells us which pages are visited and how visitors find us</li>
                <li>All data is anonymous — no personal identification</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">Third-Party Cookies</h2>
              <p className="text-body mb-2">These services may place cookies:</p>
              <div className="space-y-2 text-body">
                <p><span className="text-text-primary font-medium">Google Analytics</span> — Website analytics</p>
                <p><span className="text-text-primary font-medium">Google Tag Manager</span> — Tag management</p>
                <p><span className="text-text-primary font-medium">Google Fonts</span> — Font display</p>
              </div>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">How Long Cookies Stay</h2>
              <p className="text-body">
                Session cookies are deleted when you close your browser. Other cookies remain until they expire or you delete them.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">Controlling Cookies</h2>
              <p className="text-body mb-2">You can manage cookies through your browser:</p>
              <ul className="list-disc pl-6 space-y-1 text-body">
                <li>Block cookies</li>
                <li>Delete stored cookies</li>
                <li>Set preferences per website</li>
              </ul>
              <p className="text-body mt-4">Blocking essential cookies may affect how the site works.</p>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">Opting Out of Google Analytics</h2>
              <p className="text-body">
                Install the Google Analytics Opt-out Browser Add-on:{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" className="text-accent-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  tools.google.com/dlpage/gaoptout
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">Changes</h2>
              <p className="text-body">We may update this policy. Updates will be posted here.</p>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">Contact</h2>
              <p className="text-body">
                Questions:{' '}
                <a href="mailto:info@bionics.com.sa" className="text-accent-primary hover:underline">info@bionics.com.sa</a>
              </p>
            </section>

            <div className="border-t border-white/10 pt-10 mt-16">
              <p className="text-small text-text-muted italic">
                Note: Cookie compliance requirements vary by jurisdiction. Legal review is recommended.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
