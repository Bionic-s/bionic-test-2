import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackExecutiveBriefingClick, trackCTAClick } from '../../lib/analytics';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useCycleWords } from '../../hooks/useCycleWords';
import { STRATEGIC_PARTNER_COUNT } from '../../data/strategicPartners';

export const HeroAr = () => {
  const heroBg = `${import.meta.env.BASE_URL}images/hero_background_7.png`;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const canonWords = ['الذكاء الاصطناعي', 'الأتمتة', 'الثقة'];
  const animatedWord = useCycleWords(canonWords, 80, 3500, 40);

  // ─── Magnetic buttons ───
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: (e.clientX / window.innerWidth) * 20 - 10, y: (e.clientY / window.innerHeight) * 20 - 10 });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const onMagMove = (e: MouseEvent) => {
      const btn = e.currentTarget as HTMLElement;
      const r = btn.getBoundingClientRect();
      btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.3}px, ${(e.clientY - r.top - r.height / 2) * 0.5}px)`;
    };
    const onMagLeave = (e: MouseEvent) => { (e.currentTarget as HTMLElement).style.transform = ''; };
    setTimeout(() => {
      document.querySelectorAll('[data-magnetic]').forEach((btn) => {
        btn.addEventListener('mousemove', onMagMove as any);
        btn.addEventListener('mouseleave', onMagLeave as any);
      });
    }, 300);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" dir="rtl">
      {/* 1. Background image */}
      <div className="absolute inset-0 gradient-overlay">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          animate={{ x: mousePosition.x, y: mousePosition.y }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        />
      </div>

      {/* 2. Neural Network Pulse Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl top-1/4 left-1/4"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl bottom-1/4 right-1/4"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />
      </div>

      {/* 4. Content */}
      <div className="container mx-auto px-4 lg:px-12 relative z-10" style={{ fontFamily: "'Tajawal', sans-serif" }}>
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              نصمم{' '}
              <span className="gradient-text inline">
                {animatedWord}
                <span className="inline-block w-[2px] h-[0.9em] bg-[#00BFFF] mr-1 align-middle animate-pulse" />
              </span>{' '}
              في صميم أعمالك.
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <p className="text-xl md:text-2xl lg:text-3xl text-text-muted mb-10 max-w-4xl mx-auto">مُمكّن التحول المؤسسي بالذكاء الاصطناعي.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col items-center gap-4 mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/ar/contact?source=hero&intent=architect" onClick={() => trackExecutiveBriefingClick('hero_primary')}
                data-magnetic
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-primary text-white font-semibold rounded-full hover:bg-accent-secondary transition-all shadow-lg">
                احجز جلسة استراتيجية <ArrowRight className="w-5 h-5 rotate-180" />
              </Link>
              <Link to="/ar/blueprints?source=hero&intent=blueprints" onClick={() => trackCTAClick('hero', '/ar/blueprints')}
                data-magnetic
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent-primary text-accent-primary font-semibold rounded-full hover:bg-accent-primary hover:text-white transition-all">
                استكشف معمارية التحول
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12" ref={ref}>
            {[
              { value: STRATEGIC_PARTNER_COUNT, suffix: '', label: 'شركاء تقنيون استراتيجيون', description: 'منظومة عالمية' },
              { value: 7, suffix: '', label: 'خطوط أعمال متكاملة', description: 'من الاستراتيجية إلى العمليات الذكية' },
              { value: 5, suffix: '', label: 'قطاعات استراتيجية', description: 'حكومي · خدمات مالية ومصرفية · نفط وغاز · رعاية صحية · مؤسسات كبرى' },
            ].map((metric, index) => (
              <motion.div key={index} className="text-center group cursor-pointer" whileHover={{ scale: 1.05, y: -5 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <motion.div className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-primary mb-2 group-hover:text-accent-secondary transition-colors duration-300"
                  initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 + index * 0.1, type: 'spring' }}>
                  {inView ? <CountUp start={0} end={metric.value} duration={2.5} delay={1 + index * 0.2} suffix={metric.suffix} useEasing={true} /> : '0'}
                </motion.div>
                <div className="text-sm md:text-base font-medium text-text-primary mb-1">{metric.label}</div>
                <div className="text-xs text-text-muted group-hover:text-accent-primary transition-colors duration-300">{metric.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }} transition={{ duration: 2, delay: 1.5, repeat: Infinity }}>
        <div className="w-6 h-10 border-2 border-accent-primary rounded-full flex items-start justify-center p-2">
          <motion.div className="w-1 h-2 bg-accent-primary rounded-full"
            animate={{ y: [0, 16, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }} />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroAr;
