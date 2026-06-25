import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicyPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
       className="min-h-screen bg-bg-primary pt-32 pb-24">
      <Helmet>
        <title>Privacy Policy | Bionic Solutions</title>
        <meta name="description" content="Bionic Solutions privacy policy — how we collect, use, and protect personal data in compliance with Saudi PDPL and international standards." />
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
            <h1 className="text-h1 md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-h4 text-text-muted">
              Bionic Solutions &nbsp;·&nbsp; Last updated: June 2026
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-10 text-text-muted leading-relaxed">
            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">What This Covers</h2>
              <p className="text-body">
                This page explains what information we collect when you visit bionics.com.sa, why we collect it, and what we do with it.
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
              <h2 className="text-h3 font-semibold text-text-primary mb-4">What We Collect</h2>
              <p className="text-body mb-2">When you contact us or use our website, we may collect:</p>
              <ul className="list-disc pl-6 space-y-1 text-body">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your phone number (optional)</li>
                <li>Your company name and industry</li>
                <li>Your message or inquiry</li>
              </ul>
              <p className="text-body mt-4">
                We also collect standard technical information that websites collect automatically — browser type, device type, and IP address.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">How We Collect It</h2>
              <ul className="list-disc pl-6 space-y-1 text-body">
                <li>When you submit the "Talk to an Architect" form</li>
                <li>When you complete our multi-step assessment</li>
                <li>Through cookies and analytics tools</li>
                <li>Through standard server logging</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">Why We Collect It</h2>
              <ul className="list-disc pl-6 space-y-1 text-body">
                <li>To respond to your inquiry</li>
                <li>To understand your organization's needs</li>
                <li>To send you relevant information about our services</li>
                <li>To improve our website</li>
              </ul>
              <p className="text-body mt-4">We do not use your data for anything else.</p>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">Consent</h2>
              <p className="text-body">
                Under Saudi Arabia's Personal Data Protection Law (PDPL), we collect your data based on your consent.
              </p>
              <p className="text-body mt-2">
                You give consent by checking the consent box on our forms and choosing to submit your information.
              </p>
              <p className="text-body mt-2">
                You can withdraw consent at any time. Contact us at{' '}
                <a href="mailto:info@bionics.com.sa" className="text-accent-primary hover:underline">info@bionics.com.sa</a>{' '}
                and we will review and process your request in accordance with applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">How We Protect Your Data</h2>
              <p className="text-body mb-2">Your information is stored on secure cloud infrastructure. We keep it only as long as needed to serve your request.</p>
              <p className="text-body mb-2">We do not sell, rent, or trade your personal data.</p>
              <p className="text-body">
                We share data only with the services we use to run our website — our cloud provider (Supabase), our email system (Microsoft 365), and our analytics platform (Google Analytics).
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">Your Rights</h2>
              <p className="text-body mb-2">Under Saudi law, you can:</p>
              <ul className="list-disc pl-6 space-y-1 text-body">
                <li>Ask what data we hold about you</li>
                <li>Ask us to correct or update it</li>
                <li>Ask us to request deletion</li>
                <li>Withdraw your consent</li>
                <li>Contact SDAIA (Saudi Data &amp; AI Authority) with any concerns</li>
              </ul>
              <p className="text-body mt-4">
                To exercise any of these rights, email{' '}
                <a href="mailto:info@bionics.com.sa" className="text-accent-primary hover:underline">info@bionics.com.sa</a>.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">Cookies</h2>
              <p className="text-body">
                We use cookies for site functionality and for Google Analytics to understand how visitors use our site.
              </p>
              <p className="text-body mt-2">You can manage cookies through your browser settings.</p>
              <p className="text-body mt-2">See our Cookie Policy for full details.</p>
            </section>

            <section>
              <h2 className="text-h3 font-semibold text-text-primary mb-4">Changes to This Policy</h2>
              <p className="text-body">We may update this policy. Updates will be posted on this page.</p>
              <p className="text-body mt-2">
                If you have questions, contact us at{' '}
                <a href="mailto:info@bionics.com.sa" className="text-accent-primary hover:underline">info@bionics.com.sa</a>{' '}
                or{' '}
                <a href="mailto:sales@bionics.com.sa" className="text-accent-primary hover:underline">sales@bionics.com.sa</a>.
              </p>
            </section>

            <div className="border-t border-white/10 pt-10 mt-16">
              <p className="text-small text-text-muted italic">
                Note: This policy was prepared in good faith. We recommend independent legal review for your specific circumstances.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
