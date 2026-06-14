import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// ─── Design tokens ───
const A = '#00BFFF'; // accent — Intelligence
const P = '#A78BFA'; // purple — Automation
const G = '#34D399'; // green  — Trust
const W = '#FB923C'; // warm   — Experience
const DIM = '#5B6470';

// ─── Type helpers ───
interface CounterProps { target: number; suffix?: string; label: string; sub?: string; started: boolean; }
interface StatData { num: number; suffix?: string; lbl: string; sml: string; }

// ─── Cycling word data ───
const cycles = [
  { word: 'الذكاء', color: A },
  { word: 'الأتمتة', color: P },
  { word: 'الثقة', color: G },
];

const partnersList = [
  { name: 'Salesforce', file: 'salesforce-partner.png' },
  { name: 'Google Cloud', file: 'google-partner.svg' },
  { name: 'IBM', file: 'ibm-partner.svg' },
  { name: 'Dell Technologies', file: 'dell-partner.png' },
  { name: 'Intel', file: 'intel-partner.png' },
  { name: 'Platform9', file: 'platform9-partner.png' },
  { name: 'Red Hat', file: 'redhat-partner.svg' },
  { name: 'Informatica', file: 'informatica-partner.svg' },
  { name: 'MuleSoft', file: 'mulesoft-partner.png' },
  { name: 'Tableau', file: 'tableau-partner.png' },
  { name: 'Lenovo', file: 'lenovo-partner.svg' },
];

// ─── sub components ───

function AnimatedCounter({ target, suffix = '', label, sub, started }: CounterProps) {
  const val = useMotionValue(0);
  const rounded = useTransform(val, (v) => Math.round(v));
  const display = useTransform(rounded, (v) => `${v}${suffix}`);

  useEffect(() => {
    if (!started) return;
    const controls = import('framer-motion').then(() => {
      // Use spring animation
    });
    const unsubscribe = val.on('change', () => {});
    // Simple approach: animate with spring
    val.set(0);
    const spring = { stiffness: 45, damping: 18 };
    // We'll use direct animation
    let raf: number;
    const start = performance.now();
    const duration = 1600;
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      val.set(eased * target);
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); };
  }, [started]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.div className="font-bold leading-none text-white" style={{ fontSize: 'clamp(48px,7vw,84px)', fontFamily: "'Tajawal', sans-serif" }}>
        {display}
      </motion.div>
      <div className="text-[#9AA4AF] text-sm mt-2">{label}</div>
      {sub && <div className="text-[#5B6470] text-xs mt-1">{sub}</div>}
    </motion.div>
  );
}

// ─── Main page ───

export default function ArabicHomePage() {
  const [cycIdx, setCycIdx] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [ringGrow, setRingGrow] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const nodesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number }>>([]);
  const mouseRef = useRef({ x: -999, y: -999 });
  const reducedMotion = useRef(false);

  // ─── Reduced motion check ───
  useEffect(() => {
    reducedMotion.current = matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // ─── Cycling word ───
  useEffect(() => {
    if (reducedMotion.current) return;
    const id = setInterval(() => {
      setCycIdx((prev) => (prev + 1) % cycles.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  // ─── Custom cursor ───
  useEffect(() => {
    if (reducedMotion.current) return;
    const touch = matchMedia('(hover: none)').matches;
    if (touch) return;

    let rx = -100, ry = -100;
    const onMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      rx += (e.clientX - rx) * 0.18;
      ry += (e.clientY - ry) * 0.18;
      setRingPos({ x: rx, y: ry });
    };

    const enter = () => setRingGrow(true);
    const leave = () => { setRingGrow(false); };
    const attach = () => {
      document.querySelectorAll('a,button,[data-magnetic]').forEach((el) => {
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
      });
    };
    const onMagMove = (e: MouseEvent) => {
      const btn = e.currentTarget as HTMLElement;
      const r = btn.getBoundingClientRect();
      btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.3}px, ${(e.clientY - r.top - r.height / 2) * 0.5}px)`;
    };
    const onMagLeave = (e: MouseEvent) => {
      (e.currentTarget as HTMLElement).style.transform = '';
    };
    const attachMag = () => {
      document.querySelectorAll('[data-magnetic]').forEach((btn) => {
        btn.addEventListener('mousemove', onMagMove as any);
        btn.addEventListener('mouseleave', onMagLeave as any);
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    setTimeout(attach, 300);
    setTimeout(attachMag, 300);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.querySelectorAll('a,button,[data-magnetic]').forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
        el.removeEventListener('mousemove', onMagMove as any);
        el.removeEventListener('mouseleave', onMagLeave as any);
      });
    };
  }, []);

  // ─── Canvas particle network ───
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv || reducedMotion.current) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    const resize = () => {
      const parent = cv.parentElement!;
      w = parent.clientWidth;
      h = parent.clientHeight;
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(Math.round((w * h) / 14000), 90);
      nodesRef.current = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      }));
    };
    resize();
    window.addEventListener('resize', resize);

    const parent = cv.parentElement!;
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -999, y: -999 };
    };
    parent.addEventListener('mousemove', onMouseMove, { passive: true });
    parent.addEventListener('mouseleave', onMouseLeave);

    function frame() {
      const nodes = nodesRef.current;
      ctx!.clearRect(0, 0, w, h);
      const mx = mouseRef.current.x, my = mouseRef.current.y;

      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];
        const dx = mx - p.x, dy = my - p.y;
        const d = Math.hypot(dx, dy);
        if (d < 160 && d > 0) {
          p.vx -= (dx / d) * 0.06;
          p.vy -= (dy / d) * 0.06;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;
        p.vy *= 0.99;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1.6, 0, 7);
        ctx!.fillStyle = 'rgba(0,191,255,0.7)';
        ctx!.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const q = nodes[j];
          const dd = Math.hypot(p.x - q.x, p.y - q.y);
          if (dd < 120) {
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(q.x, q.y);
            ctx!.strokeStyle = `rgba(0,191,255,${0.12 * (1 - dd / 120)})`;
            ctx!.lineWidth = 1;
            ctx!.stroke();
          }
        }
      }
      if (!reducedMotion.current) rafRef.current = requestAnimationFrame(frame);
    }
    frame();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      parent.removeEventListener('mousemove', onMouseMove);
      parent.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  // ─── Scroll-tracking refs ───
  const heroSubRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: pillarsProgress } = useScroll({
    target: pillarsRef,
    offset: ['start start', 'end end'],
  });

  // Pillar opacities mapped to scroll progress
  const p1Opacity = useTransform(pillarsProgress, [0, 0.12, 0.28, 0.33], [1, 1, 0, 0]);
  const p2Opacity = useTransform(pillarsProgress, [0.28, 0.33, 0.48, 0.61, 0.66], [0, 1, 1, 1, 0]);
  const p3Opacity = useTransform(pillarsProgress, [0.61, 0.66, 0.82, 1], [0, 1, 1, 1]);
  const p1Y = useTransform(pillarsProgress, [0, 0.15, 0.33], [0, -30, -70]);
  const p2Y = useTransform(pillarsProgress, [0.28, 0.33, 0.5, 0.66], [70, 0, 0, -70]);
  const p3Y = useTransform(pillarsProgress, [0.61, 0.66, 0.85], [70, 0, 0]);

  // Timeline progress
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.75', 'end 0.75'] as const,
  });
  const tlScaleX = useTransform(timelineProgress, [0, 1], [0, 1]);

  // ─── Card spotlight hooks ───
  const handleCardMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, []);

  // ─── Counter triggers ───
  const [counterStarted, setCounterStarted] = useState(false);
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  useEffect(() => { if (statsInView) setCounterStarted(true); }, [statsInView]);

  const stats: StatData[] = [
    { num: 6, lbl: 'شركاء تقنيون استراتيجيون', sml: 'منظومة عالمية معتمدة' },
    { num: 7, lbl: 'خطوط أعمال', sml: 'منصة تحول متكاملة' },
    { num: 4, lbl: 'قطاعات ذات أولوية', sml: 'حكومة · بنوك · طاقة · رعاية صحية' },
  ];

  const proofStats = [
    { num: 40, suffix: '%', lbl: 'انخفاض في عبء الامتثال اليدوي' },
    { num: 5, suffix: '×', lbl: 'دورات قرار أسرع' },
    { num: 50, suffix: '%', lbl: 'انقطاعات أقل مع الصيانة التنبؤية' },
  ];

  return (
    <div className="min-h-screen bg-[#0B0D10] text-white font-sans overflow-x-hidden" dir="rtl" lang="ar">
      {/* ═══ Custom cursor ═══ */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full mix-blend-screen hidden md:block"
        style={{ top: 0, left: 0, width: 7, height: 7, background: A, transform: `translate(${cursorPos.x - 3.5}px, ${cursorPos.y - 3.5}px)` }}
      />
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full mix-blend-screen hidden md:block transition-[width,height,border-color,background] duration-250 border ${ringGrow ? 'w-[62px] h-[62px] border-[#00BFFF] bg-[#00BFFF10]' : 'w-9 h-9 border-[#00BFFF80]'}`}
        style={{ top: 0, left: 0, transform: `translate(${ringPos.x - (ringGrow ? 31 : 18)}px, ${ringPos.y - (ringGrow ? 31 : 18)}px)`, borderWidth: ringGrow ? 0 : '1.5px' }}
      />

      {/* ═══ NAV ═══ */}
      <nav className="fixed top-0 inset-x-0 z-[100] backdrop-blur-[10px] bg-[#0B0D1088] border-b border-white/5">
        <div className="max-w-[1180px] mx-auto px-7 flex items-center justify-between h-[68px]">
          <div className="flex items-center gap-2.5 font-bold text-lg" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            <span className="w-[22px] h-[22px] rounded-md" style={{ background: `conic-gradient(from 0deg, ${A}, ${P}, ${A})` }} />
            BIONIC SOLUTIONS
          </div>
          <div className="hidden md:flex gap-7 text-sm text-[#9AA4AF]" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            <Link to="/ar" className="hover:text-white transition-colors">الرئيسية</Link>
            <Link to="/about" className="hover:text-white transition-colors">من نحن</Link>
            <Link to="/capabilities/ai" className="hover:text-white transition-colors">القدرات</Link>
            <Link to="/industries/government" className="hover:text-white transition-colors">القطاعات</Link>
            <Link to="/partners" className="hover:text-white transition-colors">المنظومة</Link>
            <Link to="/contact" className="hover:text-white transition-colors">اتصل بنا</Link>
          </div>
          <Link to="/" className="text-sm text-[#9AA4AF] hover:text-white transition-colors" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            English <ArrowLeft className="inline w-3 h-3" />
          </Link>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <header className="relative min-h-screen flex items-center pt-[68px] overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(900px 520px at 72% 18%, rgba(0,191,255,.10), transparent 60%),
                         radial-gradient(700px 420px at 20% 90%, rgba(167,139,250,.08), transparent 60%)`,
          }}
        />
        <div className="relative z-10 max-w-[1180px] mx-auto px-7 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-sm tracking-wider text-[#00BFFF] font-medium mb-5" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              مكامل التحول المؤسسي بالذكاء الاصطناعي
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
            className="font-bold max-w-[14ch] leading-tight"
            style={{ fontSize: 'clamp(40px,7vw,86px)', fontFamily: "'Tajawal', sans-serif" }}
          >
            نصمم{' '}
            <AnimatePresence mode="wait">
              <motion.span
                key={cycIdx}
                initial={{ opacity: 0, filter: 'blur(8px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(8px)' }}
                transition={{ duration: 0.25 }}
                style={{ color: cycles[cycIdx].color, display: 'inline-block' }}
              >
                {cycles[cycIdx].word}
              </motion.span>
            </AnimatePresence>
            <br />في صميم الأعمال.
          </motion.h1>

          <motion.p
            ref={heroSubRef}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#9AA4AF] mt-6 font-normal"
            style={{ fontSize: 'clamp(18px,2.4vw,26px)', fontFamily: "'Tajawal', sans-serif" }}
          >
            ذكاء، أتمتة، وثقة — في منصة واحدة.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-[#5B6470] text-sm mt-4"
            style={{ fontFamily: "'Tajawal', sans-serif" }}
          >
            6 شركاء عالميين · متوافق مع رؤية 2030 · جدة · الرياض · الدمام
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex items-center gap-6 mt-10 flex-wrap"
          >
            <Link
              to="/contact"
              data-magnetic
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-[#04141c] transition-shadow hover:shadow-[0_8px_30px_rgba(0,191,255,.35)]"
              style={{ background: A, fontFamily: "'Tajawal', sans-serif" }}
            >
              تحدث إلى مستشار ←
            </Link>
            <Link
              to="/blueprints"
              className="text-sm text-[#9AA4AF] border-b border-transparent hover:text-white hover:border-[#00BFFF] transition-colors"
              style={{ fontFamily: "'Tajawal', sans-serif" }}
            >
              استعرض مخططات التحول
            </Link>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 text-[#5B6470] text-xs text-center" style={{ fontFamily: "'Tajawal', sans-serif" }}>
          اسحب
          <span className="block w-px h-[34px] mx-auto mt-2 animate-[drop_1.8s_infinite]" style={{ background: `linear-gradient(${A}, transparent)` }} />
        </div>
      </header>

      {/* ═══ STATS ═══ */}
      <section className="border-y border-white/5 py-14 px-0" ref={statsRef}>
        <div className="max-w-[1180px] mx-auto px-7">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <AnimatedCounter key={i} target={s.num} label={s.lbl} sub={s.sml} started={counterStarted} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BENTO ═══ */}
      <section className="py-28">
        <div className="max-w-[1180px] mx-auto px-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-[#00BFFF] font-medium mb-4"
            style={{ fontFamily: "'Tajawal', sans-serif" }}
          >
            ما نقدمه
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-medium mb-10"
            style={{ fontSize: 'clamp(30px,5vw,52px)', fontFamily: "'Tajawal', sans-serif" }}
          >
            نتائج، وليس إنفاق تقني.
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Intelligence card — wide */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onMouseMove={handleCardMove}
              className="relative bg-[#12161C] border border-white/5 rounded-[18px] p-7 overflow-hidden sm:col-span-3 group cursor-pointer"
              style={{ ['--mx' as any]: '50%', ['--my' as any]: '50%' }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `radial-gradient(280px circle at var(--mx,50%) var(--my,50%), rgba(0,191,255,.14), transparent 60%)` }}
              />
              <div className="absolute right-0 top-6 bottom-6 w-[3px] rounded-sm" style={{ background: A }} />
              <span className="text-xs text-[#5B6470]" style={{ fontFamily: "'Tajawal', sans-serif" }}>الذكاء</span>
              <h3 className="text-[22px] font-medium mt-3 mb-2.5" style={{ fontFamily: "'Tajawal', sans-serif" }}>قرارات في دقائق، لا أسابيع.</h3>
              <p className="text-sm text-[#9AA4AF]" style={{ fontFamily: "'Tajawal', sans-serif" }}>بيانات جاهزة للذكاء الاصطناعي، ومساعدات ذكية، ورؤى تنفيذية يعتمد عليها قادتك.</p>
            </motion.div>

            {/* Trust card — wide */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              onMouseMove={handleCardMove}
              className="relative bg-[#12161C] border border-white/5 rounded-[18px] p-7 overflow-hidden sm:col-span-3 group cursor-pointer"
              style={{ ['--mx' as any]: '50%', ['--my' as any]: '50%' }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `radial-gradient(280px circle at var(--mx,50%) var(--my,50%), rgba(52,211,153,.14), transparent 60%)` }}
              />
              <div className="absolute right-0 top-6 bottom-6 w-[3px] rounded-sm" style={{ background: G }} />
              <span className="text-xs text-[#5B6470]" style={{ fontFamily: "'Tajawal', sans-serif" }}>الثقة</span>
              <h3 className="text-[22px] font-medium mt-3 mb-2.5" style={{ fontFamily: "'Tajawal', sans-serif" }}>أساس يمكنك الدفاع عنه.</h3>
              <p className="text-sm text-[#9AA4AF]" style={{ fontFamily: "'Tajawal', sans-serif" }}>ثقة معدومة، استعادة ثابتة، وبنية تحتية ذات سيادة مبنية للواقع التنظيمي السعودي.</p>
            </motion.div>

            {/* Automation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              onMouseMove={handleCardMove}
              className="relative bg-[#12161C] border border-white/5 rounded-[18px] p-7 overflow-hidden sm:col-span-2 group cursor-pointer"
              style={{ ['--mx' as any]: '50%', ['--my' as any]: '50%' }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `radial-gradient(280px circle at var(--mx,50%) var(--my,50%), rgba(167,139,250,.14), transparent 60%)` }}
              />
              <div className="absolute right-0 top-6 bottom-6 w-[3px] rounded-sm" style={{ background: P }} />
              <span className="text-xs text-[#5B6470]" style={{ fontFamily: "'Tajawal', sans-serif" }}>الأتمتة</span>
              <h3 className="text-[22px] font-medium mt-3 mb-2.5" style={{ fontFamily: "'Tajawal', sans-serif" }}>أنظمة تتحرك كوحدة واحدة.</h3>
              <p className="text-sm text-[#9AA4AF]" style={{ fontFamily: "'Tajawal', sans-serif" }}>تكامل وتنسيق عبر المؤسسة بأكملها.</p>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onMouseMove={handleCardMove}
              className="relative bg-[#12161C] border border-white/5 rounded-[18px] p-7 overflow-hidden sm:col-span-2 group cursor-pointer"
              style={{ ['--mx' as any]: '50%', ['--my' as any]: '50%' }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `radial-gradient(280px circle at var(--mx,50%) var(--my,50%), rgba(0,191,255,.14), transparent 60%)` }}
              />
              <div className="absolute right-0 top-6 bottom-6 w-[3px] rounded-sm" style={{ background: A }} />
              <span className="text-xs text-[#5B6470]" style={{ fontFamily: "'Tajawal', sans-serif" }}>التجربة</span>
              <h3 className="text-[22px] font-medium mt-3 mb-2.5" style={{ fontFamily: "'Tajawal', sans-serif" }}>عملاء يستمرون.</h3>
              <p className="text-sm text-[#9AA4AF]" style={{ fontFamily: "'Tajawal', sans-serif" }}>تفاعل متصل على منصة Salesforce.</p>
            </motion.div>

            {/* Operations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              onMouseMove={handleCardMove}
              className="relative bg-[#12161C] border border-white/5 rounded-[18px] p-7 overflow-hidden sm:col-span-2 group cursor-pointer"
              style={{ ['--mx' as any]: '50%', ['--my' as any]: '50%' }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `radial-gradient(280px circle at var(--mx,50%) var(--my,50%), rgba(251,146,60,.14), transparent 60%)` }}
              />
              <div className="absolute right-0 top-6 bottom-6 w-[3px] rounded-sm" style={{ background: W }} />
              <span className="text-xs text-[#5B6470]" style={{ fontFamily: "'Tajawal', sans-serif" }}>العمليات</span>
              <h3 className="text-[22px] font-medium mt-3 mb-2.5" style={{ fontFamily: "'Tajawal', sans-serif" }}>قيمة تتراكم.</h3>
              <p className="text-sm text-[#9AA4AF]" style={{ fontFamily: "'Tajawal', sans-serif" }}>عمليات مُدارة على مدار الساعة.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PILLARS — Pinned Scrollytelling ═══ */}
      <section ref={pillarsRef} className="relative bg-gradient-to-b from-[#0B0D10] to-[#080a0d]" style={{ height: '360vh' }}>
        <div className="sticky top-0 h-screen flex items-center max-w-[1180px] mx-auto px-7 overflow-hidden">
          <div className="relative w-full">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-[#00BFFF] font-medium mb-8"
              style={{ fontFamily: "'Tajawal', sans-serif" }}
            >
              المعمارية
            </motion.p>

            <div className="relative h-[62vh]">
              {/* Pillar 1 — Intelligence */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-center"
                style={{ opacity: p1Opacity, y: p1Y }}
              >
                <span className="text-sm text-[#5B6470]" style={{ fontFamily: "'Tajawal', sans-serif" }}>01 — الذكاء</span>
                <div className="font-bold" style={{ fontSize: 'clamp(40px,8vw,96px)', color: A, fontFamily: "'Tajawal', sans-serif" }}>الذكاء.</div>
                <p className="text-[#9AA4AF] mt-4 max-w-[34ch]" style={{ fontSize: 'clamp(16px,2vw,22px)', fontFamily: "'Tajawal', sans-serif" }}>
                  تحويل بيانات المؤسسة إلى إجراءات ذكية.
                </p>
              </motion.div>

              {/* Pillar 2 — Automation */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-center"
                style={{ opacity: p2Opacity, y: p2Y }}
              >
                <span className="text-sm text-[#5B6470]" style={{ fontFamily: "'Tajawal', sans-serif" }}>02 — الأتمتة</span>
                <div className="font-bold" style={{ fontSize: 'clamp(40px,8vw,96px)', color: P, fontFamily: "'Tajawal', sans-serif" }}>الأتمتة.</div>
                <p className="text-[#9AA4AF] mt-4 max-w-[34ch]" style={{ fontSize: 'clamp(16px,2vw,22px)', fontFamily: "'Tajawal', sans-serif" }}>
                  ربط الأنظمة وتنسيق العمليات بذكاء.
                </p>
              </motion.div>

              {/* Pillar 3 — Trust */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-center"
                style={{ opacity: p3Opacity, y: p3Y }}
              >
                <span className="text-sm text-[#5B6470]" style={{ fontFamily: "'Tajawal', sans-serif" }}>03 — الثقة</span>
                <div className="font-bold" style={{ fontSize: 'clamp(40px,8vw,96px)', color: G, fontFamily: "'Tajawal', sans-serif" }}>الثقة.</div>
                <p className="text-[#9AA4AF] mt-4 max-w-[34ch]" style={{ fontSize: 'clamp(16px,2vw,22px)', fontFamily: "'Tajawal', sans-serif" }}>
                  بناء أسس رقمية آمنة ومرنة وذات سيادة.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROOF ═══ */}
      <section className="py-28">
        <div className="max-w-[1180px] mx-auto px-7 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-[#00BFFF] font-medium mb-10"
            style={{ fontFamily: "'Tajawal', sans-serif" }}
          >
            إنجازات مثبتة في المملكة
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {proofStats.map((ps, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div
                  className="font-bold bg-clip-text text-transparent bg-gradient-to-l from-[#00BFFF] to-[#A78BFA]"
                  style={{ fontSize: 'clamp(44px,6vw,72px)', fontFamily: "'Tajawal', sans-serif" }}
                >
                  {ps.num}{ps.suffix}
                </div>
                <p className="text-sm text-[#9AA4AF] mt-3" style={{ fontFamily: "'Tajawal', sans-serif" }}>{ps.lbl}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs text-[#5B6470] mt-8"
            style={{ fontFamily: "'Tajawal', sans-serif" }}
          >
            النطاقات تعكس بحوث القطاع. النتائج الخاصة بالعميل تُحدد خلال مرحلة الاكتشاف والتقييم.
          </motion.p>
        </div>
      </section>

      {/* ═══ MARQUEE — Partner images ═══ */}
      <section className="py-16">
        <div className="max-w-[1180px] mx-auto px-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-[#00BFFF] font-medium mb-8 text-center"
            style={{ fontFamily: "'Tajawal', sans-serif" }}
          >
            شركاؤنا التقنيون
          </motion.p>
        </div>
        <div className="overflow-hidden" style={{ maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)' }}>
          <div className="flex gap-5 w-max animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
            {[...partnersList, ...partnersList].map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-xl px-6 py-3 flex items-center justify-center h-[60px] min-w-[140px]"
              >
                <img
                  src={`/test-site-2/images/partners/${p.file}`}
                  alt={p.name}
                  className="max-h-[36px] max-w-[120px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section ref={timelineRef} className="py-28">
        <div className="max-w-[1180px] mx-auto px-7 relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-[#00BFFF] font-medium mb-3"
            style={{ fontFamily: "'Tajawal', sans-serif" }}
          >
            كيف نعمل معاً
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-medium mb-16"
            style={{ fontSize: 'clamp(28px,4vw,44px)', fontFamily: "'Tajawal', sans-serif" }}
          >
            كل تحول يبدأ بمحادثة.
          </motion.h2>

          {/* Line + Progress */}
          <div className="absolute left-0 right-0" style={{ top: '108px', height: 2, background: 'rgba(255,255,255,.08)' }}>
            <motion.div
              className="absolute inset-y-0"
              style={{
                background: A,
                right: 0,
                width: '100%',
                transformOrigin: 'right center',
                scaleX: tlScaleX,
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {[
              { time: '45 دقيقة', title: 'الإحاطة التنفيذية', desc: 'أولوياتك. ليس عرضاً.' },
              { time: '1–2 أسبوع', title: 'الاكتشاف', desc: 'المعمارية والأهداف.' },
              { time: '2–4 أسابيع', title: 'المخطط', desc: 'خريطة طريق وجدوى الأعمال.' },
              { time: '8–16 أسبوع', title: 'التنفيذ', desc: 'نشر، دمج، تبني.' },
              { time: 'مستمر', title: 'العمليات المدارة', desc: 'تحسين وتطوير.' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-[#1A1F28] border-2 border-[#00BFFF] mb-8" />
                <span className="text-sm text-[#5B6470]" style={{ fontFamily: "'Tajawal', sans-serif" }}>{step.time}</span>
                <h4 className="text-base font-medium mt-1.5" style={{ fontFamily: "'Tajawal', sans-serif" }}>{step.title}</h4>
                <p className="text-sm text-[#9AA4AF] mt-1.5" style={{ fontFamily: "'Tajawal', sans-serif" }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-28 text-center">
        <div className="max-w-[1180px] mx-auto px-7">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold"
            style={{ fontSize: 'clamp(34px,6vw,64px)', fontFamily: "'Tajawal', sans-serif" }}
          >
            لنصمم الذكاء<br />في مؤسستك.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-9"
          >
            <Link
              to="/contact"
              data-magnetic
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-[#04141c] transition-shadow hover:shadow-[0_8px_30px_rgba(0,191,255,.35)]"
              style={{ background: A, fontFamily: "'Tajawal', sans-serif" }}
            >
              تحدث إلى مستشار ←
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-12 border-t border-white/5 text-center text-sm text-[#5B6470]" style={{ fontFamily: "'Tajawal', sans-serif" }}>
        <div className="max-w-[1180px] mx-auto px-7">
          <p>نصمم الذكاء والأتمتة والثقة في صميم الأعمال.</p>
          <p className="mt-2">
            <a href="mailto:info@bionics.com.sa" className="hover:text-[#00BFFF] transition-colors">info@bionics.com.sa</a>
            {' · '}
            <Link to="/" className="hover:text-[#00BFFF] transition-colors">English</Link>
            {' · '}
            متوافق مع رؤية السعودية 2030
          </p>
        </div>
      </footer>

      {/* ═══ Marquee keyframes ═══ */}
      <style>{`
        @keyframes scroll {
          to { transform: translateX(50%); }
        }
        @keyframes drop {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </div>
  );
}
