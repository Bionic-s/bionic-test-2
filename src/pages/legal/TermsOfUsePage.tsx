import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';

export default function TermsOfUsePage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
       className="min-h-screen bg-bg-primary pt-32 pb-24">
      <Helmet>
        <title>Terms of Use | Bionic Solutions</title>
        <meta name="description" content="Terms of use for the Bionic Solutions website and services. By accessing this site, you agree to these terms." />
      </Helmet>
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
            <h1 className="text-h1 md:text-5xl font-bold mb-4">Terms of Use</h1>
            <p className="text-h4 text-text-muted">
              Bionic Solutions &nbsp;·&nbsp; Last updated: June 2026
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-10 text-text-muted leading-relaxed">
            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">Agreement</h2>
              <p className="text-body">
                By using bionics.com.sa, you agree to these terms.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">Who We Are</h2>
              <p className="text-body">
                Bionic Solutions Company<br />
                Saudi Arabia
              </p>
              <p className="text-body mt-2">
                <a href="mailto:info@bionics.com.sa" className="text-accent-primary hover:underline">info@bionics.com.sa</a><br />
                <a href="mailto:sales@bionics.com.sa" className="text-accent-primary hover:underline">sales@bionics.com.sa</a>
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">What This Website Is</h2>
              <p className="text-body">
                Our website provides information about our enterprise AI and technology transformation services. It is intended for information and business inquiries only.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">Intellectual Property</h2>
              <p className="text-body">
                The content on this website — including text, design, images, transformation blueprints, frameworks, and service descriptions — belongs to Bionic Solutions.
              </p>
              <p className="text-body mt-2">
                Do not copy, reproduce, or distribute our content without our written permission.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">Using This Website</h2>
              <p className="text-body mb-2">Please:</p>
              <ul className="list-disc pl-6 space-y-1 text-body">
                <li>Use the site for lawful purposes</li>
                <li>Do not attempt to disrupt or compromise the site</li>
                <li>Do not scrape or extract content automatically</li>
                <li>Provide accurate information when you contact us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">Not Professional Advice</h2>
              <p className="text-body">
                The information on this website is general in nature. It is not legal, financial, or technical advice. Consult a qualified professional for advice specific to your needs.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">Third-Party Links</h2>
              <p className="text-body">
                We may link to external websites. We are not responsible for their content or practices.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">Liability</h2>
              <p className="text-body">
                To the extent permitted by Saudi law, Bionic Solutions is not liable for indirect damages from your use of this website. The website is provided "as is."
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">Governing Law</h2>
              <p className="text-body">
                These terms are governed by the laws of the Kingdom of Saudi Arabia.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">Updates</h2>
              <p className="text-body">
                We may update these terms. Changes take effect when posted. Continued use means you accept the updated terms.
              </p>
            </section>

            <div className="border-t border-white/10 pt-10 mt-16">
              <p className="text-small text-text-muted italic">
                Note: These terms were prepared in good faith as a practical V1 framework. Legal counsel review is recommended.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
