import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Search, Compass, MessageSquare } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const stagger = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function NotFoundPage() {
  return (
    <div
       className="min-h-screen bg-bg-primary flex items-center justify-center px-4">
      <Helmet>
        <title>404 — Page Not Found | Bionic Solutions</title>
        <meta name="description" content="The page you are looking for does not exist. Explore Bionic Solutions — Enterprise AI Transformation Integrator." />
      </Helmet>
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,191,255,0.03)_0%,transparent_60%)]" />

      <div className="relative container mx-auto max-w-3xl text-center py-24">
        <motion.div variants={stagger} initial="initial" animate="animate">

          {/* 404 Number */}
          <motion.div variants={fadeUp} className="mb-6">
            <h1
              className="text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter select-none"
              style={{
                background: 'linear-gradient(180deg, #00BFFF 0%, rgba(0,191,255,0.15) 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              404
            </h1>
          </motion.div>

          {/* Message */}
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-accent-primary/30 bg-accent-primary/5 mb-8">
              <Search className="w-4 h-4 text-accent-primary mr-2" />
              <span className="text-tiny text-accent-primary font-semibold tracking-wider uppercase">
                Page Not Found
              </span>
            </div>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            This page doesn't exist.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-body text-text-muted max-w-lg mx-auto mb-10 leading-relaxed">
            The URL you're looking for has been moved, renamed, or was never here.
            But the transformation you're looking for — that does exist.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-primary text-text-primary font-semibold rounded-full hover:bg-accent-secondary transition-all shadow-lg shadow-accent-primary/20"
            >
              <Home className="w-5 h-5" />
              Return Home
            </Link>
            <Link
              to="/blueprints"
              className="inline-flex items-center gap-2 px-8 py-4 bg-bg-secondary border border-white/10 text-text-primary font-semibold rounded-full hover:border-accent-primary/50 transition-all"
            >
              <Compass className="w-5 h-5" />
              Explore Blueprints
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-bg-secondary border border-white/10 text-text-primary font-semibold rounded-full hover:border-accent-primary/50 transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              Contact Us
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <p className="text-tiny text-text-muted uppercase tracking-wider mb-5">
              You might be looking for
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
              <Link
                to="/capabilities/ai"
                className="text-text-muted hover:text-accent-primary transition-colors"
              >
                Enterprise AI
              </Link>
              <Link
                to="/capabilities/cyber"
                className="text-text-muted hover:text-accent-primary transition-colors"
              >
                Cybersecurity
              </Link>
              <Link
                to="/capabilities/infra"
                className="text-text-muted hover:text-accent-primary transition-colors"
              >
                Infrastructure
              </Link>
              <Link
                to="/services"
                className="text-text-muted hover:text-accent-primary transition-colors"
              >
                Services
              </Link>
              <Link
                to="/partners"
                className="text-text-muted hover:text-accent-primary transition-colors"
              >
                Partners
              </Link>
              <Link
                to="/about"
                className="text-text-muted hover:text-accent-primary transition-colors"
              >
                About
              </Link>
            </div>
          </motion.div>

          {/* Subtle brand mark */}
          <motion.p variants={fadeUp} className="mt-20 text-tiny text-text-muted/40">
            Bionic Solutions · Enterprise AI Transformation Integrator
          </motion.p>

        </motion.div>
      </div>
    </div>
  );
}
