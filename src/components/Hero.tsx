import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { trackExecutiveBriefingClick, trackCTAClick } from '../lib/analytics';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useCycleWords } from '../hooks/useCycleWords';

export const Hero = () => {
  const heroBg = `${import.meta.env.BASE_URL}images/hero_background_7.png`;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const canonWords = ['Intelligence', 'Automation', 'Trust'];
  const animatedWord = useCycleWords(canonWords, 80, 3500, 40);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 grid-pattern">
      {/* Animated Background with Neural Network Effect */}
      <div className="absolute inset-0 gradient-overlay">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        />
      </div>

      {/* Neural Network Pulse Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl top-1/4 left-1/4"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl bottom-1/4 right-1/4"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Headline with Animated Text */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              We design{' '}
              <span className="gradient-text inline">
                {animatedWord}
                <span className="inline-block w-[2px] h-[0.9em] bg-[#00BFFF] ml-1 align-middle animate-pulse" />
              </span>{' '}
              into business.
            </h1>
          </motion.div>

          {/* Enhanced Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-text-muted mb-10 max-w-4xl mx-auto">
              Enterprise AI Transformation Integrator.
            </p>
          </motion.div>

          {/* CTA Buttons — 2-row layout: two on top, one centered below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col items-center gap-4 mb-16"
          >
            {/* Row 1: two primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact?source=hero&intent=executive-briefing"
                onClick={() => trackExecutiveBriefingClick('hero_primary')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-primary text-white font-semibold rounded-full hover:bg-accent-secondary transition-all shadow-lg"
              >
                Request Executive Briefing
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/blueprints?source=hero&intent=blueprints"
                onClick={() => trackCTAClick('hero', '/blueprints')}
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-text-primary font-medium rounded-full hover:border-white/30 transition-all"
              >
                Explore Transformation Blueprints
              </Link>
            </div>
            {/* Row 2: one CTA centered */}
            <Link
              to="/book-discovery-call?source=hero&intent=ibm-experts"
              onClick={() => trackCTAClick('hero', '/book-discovery-call?source=hero&intent=ibm-experts')}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-text-muted font-medium rounded-full hover:border-accent-primary/30 hover:text-text-primary transition-all"
            >
              Speak to a Senior Architect
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Verified Credibility Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12"
          >
            {[
              { 
                value: 8,
                suffix: '',
                label: 'Strategic Technology Partners',
                description: 'Global ecosystem'
              },
              { 
                value: 7,
                suffix: '',
                label: 'Business Lines',
                description: 'Full transformation stack'
              },
              { 
                value: 4,
                suffix: '',
                label: 'Top Sectors',
                description: 'Banking · Government · Oil & Gas · Manufacturing'
              },
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                ref={ref}
              >
                <motion.div
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-primary mb-2 group-hover:text-accent-secondary transition-colors duration-300"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1, type: 'spring' }}
                >
                  {inView && (
                    <CountUp
                      start={0}
                      end={metric.value}
                      duration={2.5}
                      delay={1 + index * 0.2}
                      suffix={metric.suffix}
                      useEasing={true}
                    />
                  )}
                </motion.div>
                <div className="text-sm md:text-base font-medium text-text-primary mb-1">{metric.label}</div>
                <div className="text-xs text-text-muted group-hover:text-accent-primary transition-colors duration-300">{metric.description}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator with Pulse */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-accent-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-accent-primary rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};