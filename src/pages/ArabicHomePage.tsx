import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

// ─── Design tokens ───
const A = '#00BFFF';
const P = '#A78BFA';
const G = '#34D399';
const W = '#FB923C';

// ─── Data ───
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

// ─── Business Lines ───
interface ServiceLine { title: string; desc: string; partners: string; color: string; icon: string; }
interface PillarGroup { id: string; name: string; color: string; tag: string; desc: string; lines: ServiceLine[]; }

const pillarsData: PillarGroup[] = [
  {
    id: 'pillar-intelligence',
    name: 'الذكاء', color: A, tag: 'Intelligence',
    desc: 'نحوّل البيانات الخام إلى قرارات ذكية. منصات جاهزة للذكاء الاصطناعي، تحليلات تنفيذية آنية، ومساعدات ذكية تختصر دورة القرار من أسابيع إلى دقائق.',
    lines: [
      { title: 'الذكاء الاصطناعي والأتمتة المؤسسية', desc: 'نصمم ونشغّل وكلاء ذكاء اصطناعي ومساعدين افتراضيين وأتمتة ذكية ترفع الكفاءة التشغيلية وتقلّص التكاليف. نشر آمن داخل بيئتك المؤسسية - مع سيادة كاملة على البيانات داخل المملكة.', partners: 'IBM watsonx · Salesforce Einstein · Intel Gaudi', color: A, icon: '🧠' },
      { title: 'البيانات والتحليلات والذكاء', desc: 'نوحّد بياناتك المتفرقة في مصدر واحد موثوق للحقيقة. لوحات قيادة تنفيذية، مؤشرات أداء رئيسية، وتحليلات متقدمة - ليُبنى كل قرار مؤسسي على بيانات دقيقة، لا على تقديرات.', partners: 'Informatica · Tableau · Google BigQuery', color: A, icon: '📊' },
    ],
  },
  {
    id: 'pillar-automation',
    name: 'الأتمتة', color: P, tag: 'Automation',
    desc: 'نربط أنظمتك المنعزلة وننسق عملياتك المؤسسية. من أنظمة تخطيط الموارد إلى إدارة العملاء إلى الأنظمة القديمة - لتعمل مؤسستك كمنظومة واحدة متسقة بلا فجوات.',
    lines: [
      { title: 'تطبيقات الأعمال وتجربة العملاء', desc: 'منصة موحدة لإدارة علاقات العملاء ومركز اتصال ذكي وأتمتة تسويقية وتجربة موظف متكاملة. يحصل عملاؤك على تجربة موحدة سلسة - بغض النظر عن تعقيد أنظمتك الداخلية.', partners: 'Salesforce · Tableau · MuleSoft', color: P, icon: '💼' },
      { title: 'التكامل والعمليات الذكية', desc: 'نربط أنظمتك عبر معمارية تكامل API-led لتتدفق البيانات تلقائياً بين الأقسام. دون إدخال مزدوج للبيانات. دون أخطاء بشرية. دون تأخير في العمليات.', partners: 'MuleSoft Anypoint · Informatica · Apigee', color: P, icon: '🔗' },
    ],
  },
  {
    id: 'pillar-trust',
    name: 'الثقة', color: G, tag: 'Trust',
    desc: 'نصمم أسساً رقمية آمنة ومرنة وذات سيادة وطنية. من الحماية السيبرانية إلى البنية التحتية الحيوية - داخل المملكة، وبما يتوافق مع أعلى المعايير التنظيمية الوطنية.',
    lines: [
      { title: 'الأمن السيبراني والمرونة الرقمية', desc: 'مركز عمليات أمنية (SOC) يراقب التهديدات على مدار الساعة. نموذج Zero Trust، حوكمة الهوية الرقمية، ونسخ احتياطي منيع - مؤسستك محمية من اليوم الأول، ومتوافقة مع متطلبات الهيئة الوطنية للأمن السيبراني.', partners: 'IBM QRadar · Guardium · Zero Trust', color: G, icon: '🛡️' },
      { title: 'البنية التحتية السيادية والسحابة الهجينة', desc: 'نحدّث مراكز بياناتك بأحدث تقنيات البنية التحتية المؤسسية. سحابة خاصة داخل المملكة - سيادة رقمية كاملة، أداء عالٍ، وتكلفة إجمالية أقل مقارنة بالحلول السحابية العامة.', partners: 'Dell PowerEdge · IBM FlashSystem · Red Hat OpenShift', color: G, icon: '🏗️' },
    ],
  },
];

const managedOpsLine: ServiceLine = {
  title: 'الخدمات التقنية والعمليات المدارة',
  desc: 'فريق تقني متخصص يتولى تشغيل بيئتك ومراقبتها على مدار الساعة. عمليات سحابية، عمليات ذكاء اصطناعي، ودعم فني مستمر - لتركز على أعمالك الأساسية بينما ندير نحن البنية التقنية.',
  partners: '24×7 Monitoring · CloudOps · AIOps · Managed Services',
  color: W,
  icon: '⚙️',
};

interface StatData { num: number; suffix?: string; lbl: string; }

// ─── Animated Counter ───
function AnimatedCounter({ target, suffix = '', label, started }: { target: number; suffix?: string; label: string; started: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!started) return;
    let raf: number;
    const start = performance.now();
    const duration = 1600;
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target]);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
      <div className="font-bold leading-none text-white" style={{ fontSize: 'clamp(48px,7vw,84px)', fontFamily: "'Tajawal', sans-serif" }}>
        {display}{suffix}
      </div>
      <div className="text-[#9AA4AF] text-sm mt-2">{label}</div>
    </motion.div>
  );
}

// ─── Spotlight Card ───
function SpotlightCard({ children, color, className = '' }: { children: React.ReactNode; color: string; className?: string }) {
  return (
    <div
      className={`relative bg-[#12161C] border border-white/5 rounded-2xl p-6 overflow-hidden group cursor-pointer ${className}`}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
      }}
      style={{ ['--mx' as any]: '50%', ['--my' as any]: '50%' }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ background: `radial-gradient(240px circle at var(--mx,50%) var(--my,50%), ${color}15, transparent 60%)` }}
      />
      <div className="absolute right-0 top-5 bottom-5 w-[3px] rounded-sm" style={{ background: color }} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// ─── Page ───

export default function ArabicHomePage() {
  const [cycIdx, setCycIdx] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [ringGrow, setRingGrow] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const nodesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number }>>([]);
  const mouseRef = useRef({ x: -999, y: -999 });
  const reducedMotion = useRef(false);

  // ─── Contact form ───
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', message: '' });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormError(null);
    try {
      if (!formData.name || !formData.email) throw new Error('الاسم والبريد الإلكتروني مطلوبان');
      if (!consent) throw new Error('يرجى الموافقة على سياسة الخصوصية');
      if (formData.phone && !/^[\d\s\+\-\(\)]{10,}$/.test(formData.phone)) throw new Error('يرجى إدخال رقم هاتف صحيح');
      const { supabase } = await import('../lib/supabase');
      const { error: sbError } = await supabase.functions.invoke('contact-form', {
        body: { name: formData.name, email: formData.email, company: formData.company, phone: formData.phone || null, message: formData.message || 'بدون رسالة' },
      });
      if (sbError) throw new Error(sbError.message || 'تعذر إرسال النموذج');
      setFormSuccess(true);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      setConsent(false);
      setTimeout(() => setFormSuccess(false), 5000);
    } catch (err: any) {
      setFormError(err.message || 'حدث خطأ. يرجى المحاولة مرة أخرى.');
    } finally {
      setFormSubmitting(false);
    }
  };

  // Section refs for scroll navigation
  const whatRef = useRef<HTMLElement>(null);
  const howRef = useRef<HTMLElement>(null);
  const partnersRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // ─── Reduced motion ───
  useEffect(() => { reducedMotion.current = matchMedia('(prefers-reduced-motion: reduce)').matches; }, []);

  // ─── Cycling word ───
  useEffect(() => {
    if (reducedMotion.current) return;
    const id = setInterval(() => setCycIdx((prev) => (prev + 1) % cycles.length), 2400);
    return () => clearInterval(id);
  }, []);

  // ─── Custom cursor ───
  useEffect(() => {
    if (reducedMotion.current || matchMedia('(hover: none)').matches) return;
    let rx = -100, ry = -100;
    const onMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      rx += (e.clientX - rx) * 0.18;
      ry += (e.clientY - ry) * 0.18;
      setRingPos({ x: rx, y: ry });
    };
    const enter = () => setRingGrow(true);
    const leave = () => setRingGrow(false);
    const onMagMove = (e: MouseEvent) => {
      const btn = e.currentTarget as HTMLElement;
      const r = btn.getBoundingClientRect();
      btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.3}px, ${(e.clientY - r.top - r.height / 2) * 0.5}px)`;
    };
    const onMagLeave = (e: MouseEvent) => { (e.currentTarget as HTMLElement).style.transform = ''; };

    window.addEventListener('mousemove', onMove, { passive: true });
    setTimeout(() => {
      document.querySelectorAll('a,button,[data-magnetic]').forEach((el) => { el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave); });
      document.querySelectorAll('[data-magnetic]').forEach((btn) => { btn.addEventListener('mousemove', onMagMove as any); btn.addEventListener('mouseleave', onMagLeave as any); });
    }, 300);

    return () => {
      window.removeEventListener('mousemove', onMove);
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
      w = parent.clientWidth; h = parent.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(Math.round((w * h) / 14000), 90);
      nodesRef.current = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 }));
    };
    resize();
    window.addEventListener('resize', resize);
    const parent = cv.parentElement!;
    const onMove = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    parent.addEventListener('mousemove', onMove, { passive: true });
    parent.addEventListener('mouseleave', () => { mouseRef.current = { x: -999, y: -999 }; });

    function frame() {
      const nodes = nodesRef.current;
      ctx!.clearRect(0, 0, w, h);
      const mx = mouseRef.current.x, my = mouseRef.current.y;
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];
        const dx = mx - p.x, dy = my - p.y, d = Math.hypot(dx, dy);
        if (d < 160 && d > 0) { p.vx -= (dx / d) * 0.06; p.vy -= (dy / d) * 0.06; }
        p.x += p.vx; p.y += p.vy; p.vx *= 0.99; p.vy *= 0.99;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx!.beginPath(); ctx!.arc(p.x, p.y, 1.6, 0, 7); ctx!.fillStyle = 'rgba(0,191,255,0.7)'; ctx!.fill();
        for (let j = i + 1; j < nodes.length; j++) {
          const q = nodes[j], dd = Math.hypot(p.x - q.x, p.y - q.y);
          if (dd < 120) { ctx!.beginPath(); ctx!.moveTo(p.x, p.y); ctx!.lineTo(q.x, q.y); ctx!.strokeStyle = `rgba(0,191,255,${0.12 * (1 - dd / 120)})`; ctx!.lineWidth = 1; ctx!.stroke(); }
        }
      }
      if (!reducedMotion.current) rafRef.current = requestAnimationFrame(frame);
    }
    frame();
    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener('resize', resize); };
  }, []);

  // ─── Scroll to section ───
  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // ─── Timeline scroll progress ───
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: tlProgress } = useScroll({ target: timelineRef, offset: ['start 0.75', 'end 0.75'] as const });
  const tlScaleX = useTransform(tlProgress, [0, 1], [0, 1]);

  // ─── Counters ───
  const [countersStarted, setCountersStarted] = useState(false);
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  useEffect(() => { if (statsInView) setCountersStarted(true); }, [statsInView]);

  // ─── Proof counters ───
  const [proofStarted, setProofStarted] = useState(false);
  const { ref: proofRef, inView: proofInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  useEffect(() => { if (proofInView) setProofStarted(true); }, [proofInView]);

  return (
    <div className="min-h-screen bg-[#0B0D10] text-white font-sans overflow-x-hidden" dir="rtl" lang="ar">
      {/* ═══ Custom cursor ═══ */}
      <div className="fixed pointer-events-none z-[9999] rounded-full mix-blend-screen hidden md:block" style={{ top: 0, left: 0, width: 7, height: 7, background: A, transform: `translate(${cursorPos.x - 3.5}px, ${cursorPos.y - 3.5}px)` }} />
      <div className={`fixed pointer-events-none z-[9999] rounded-full mix-blend-screen hidden md:block transition-[width,height,border-color,background] duration-250 ${ringGrow ? 'w-[62px] h-[62px] border-[#00BFFF] bg-[#00BFFF10]' : 'w-9 h-9 border-[#00BFFF80]'}`} style={{ top: 0, left: 0, transform: `translate(${ringPos.x - (ringGrow ? 31 : 18)}px, ${ringPos.y - (ringGrow ? 31 : 18)}px)`, borderWidth: ringGrow ? 0 : '1.5px' }} />

      {/* ═══ NAV ═══ */}
      <nav className="fixed top-0 inset-x-0 z-[100] backdrop-blur-[10px] bg-[#0B0D1088] border-b border-white/5">
        <div className="max-w-[1180px] mx-auto px-7 flex items-center justify-between h-[68px]">
          <Link to="/ar" className="flex items-center">
            <img src="/test-site-2/bionic-full-white.svg" alt="Bionic Solutions" className="h-8 w-auto" />
          </Link>
          <div className="hidden md:flex gap-7 text-sm text-[#9AA4AF]" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            <button onClick={() => scrollTo(whatRef)} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">قدراتنا</button>
            <button onClick={() => scrollTo(howRef)} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">كيف نعمل</button>
            <button onClick={() => scrollTo(partnersRef)} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">شركاؤنا</button>
            <button onClick={() => scrollTo(contactRef)} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">اتصل بنا</button>
          </div>
          <Link to="/" className="text-sm text-[#9AA4AF] hover:text-white transition-colors" style={{ fontFamily: "'Tajawal', sans-serif" }}>English</Link>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <header className="relative min-h-screen flex items-center pt-[68px] overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(900px 520px at 72% 18%, rgba(0,191,255,.10), transparent 60%), radial-gradient(700px 420px at 20% 90%, rgba(167,139,250,.08), transparent 60%)` }} />
        <div className="relative z-10 max-w-[1180px] mx-auto px-7 w-full">
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-sm tracking-wider text-[#00BFFF] font-medium mb-5" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            شريك التحول المؤسسي للذكاء الاصطناعي - المملكة العربية السعودية
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
            className="font-bold max-w-[16ch] leading-tight" style={{ fontSize: 'clamp(40px,7vw,80px)', fontFamily: "'Tajawal', sans-serif" }}>
            نصمم الذكاء المؤسسي. لا نكتفي بتوفير التقنية. <AnimatePresence mode="wait"><motion.span key={cycIdx} initial={{ opacity: 0, filter: 'blur(8px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} exit={{ opacity: 0, filter: 'blur(8px)' }} transition={{ duration: 0.25 }} style={{ color: cycles[cycIdx].color, display: 'inline-block' }}>{cycles[cycIdx].word}</motion.span></AnimatePresence>
            <br />- ليس مجرد تقنية.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#9AA4AF] mt-6 font-normal max-w-2xl leading-relaxed" style={{ fontSize: 'clamp(18px,2.4vw,24px)', fontFamily: "'Tajawal', sans-serif" }}>
            نبني الجاهزية المؤسسية للمستقبل: ذكاء اصطناعي منتِج، أنظمة متكاملة، وبنية تحتية محصَّنة - جميعها داخل حدود المملكة.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
            className="text-[#5B6470] text-sm mt-4" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            6 شركاء تقنيين عالميين · 7 مجالات أعمال · متوائم مع رؤية السعودية 2030 · جدة · الرياض · الدمام
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}
            className="flex items-center gap-6 mt-10 flex-wrap">
            <button data-magnetic onClick={() => scrollTo(whatRef)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-[#04141c] transition-shadow hover:shadow-[0_8px_30px_rgba(0,191,255,.35)] bg-transparent border-none cursor-pointer"
              style={{ background: A, fontFamily: "'Tajawal', sans-serif" }}>
              استعرض خدماتنا ←
            </button>
            <button onClick={() => scrollTo(howRef)}
              className="text-sm text-[#9AA4AF] border-b border-transparent hover:text-white hover:border-[#00BFFF] transition-colors bg-transparent border-none cursor-pointer"
              style={{ fontFamily: "'Tajawal', sans-serif" }}>
              منهجية العمل
            </button>
          </motion.div>
        </div>
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 text-[#5B6470] text-xs text-center" style={{ fontFamily: "'Tajawal', sans-serif" }}>
          اسحب للأسفل
          <span className="block w-px h-[34px] mx-auto mt-2 animate-[drop_1.8s_infinite]" style={{ background: `linear-gradient(${A}, transparent)` }} />
        </div>
      </header>

      {/* ═══ STATS ═══ */}
      <section className="border-y border-white/5 py-14 px-0" ref={statsRef}>
        <div className="max-w-[1180px] mx-auto px-7">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <AnimatedCounter target={6} label="شركاء تقنيون استراتيجيون" started={countersStarted} />
            <AnimatedCounter target={7} label="خطوط أعمال متكاملة" started={countersStarted} />
            <AnimatedCounter target={5} label="قطاعات ذات أولوية" started={countersStarted} />
          </div>
        </div>
      </section>

      {/* ═══ WHAT WE DELIVER - 3 Pillars → 7 Lines ═══ */}
      <section ref={whatRef} className="py-28 scroll-mt-20" id="what-we-deliver">
        <div className="max-w-[1180px] mx-auto px-7">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sm text-[#00BFFF] font-medium mb-4" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            قدراتنا
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-bold mb-6" style={{ fontSize: 'clamp(30px,5vw,52px)', fontFamily: "'Tajawal', sans-serif" }}>
            ثلاث ركائز. سبعة مجالات. تحول مؤسسي متكامل.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="text-[#9AA4AF] text-lg mb-16 max-w-3xl leading-relaxed" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            كل مجال من المجالات السبعة متاح بشكل مستقل أو ضمن حزمة تحول متكاملة. ننفذ ونشغّل - لا نكتفي بتوريد التراخيص وتسليمها.
          </motion.p>

          {pillarsData.map((pillar, pi) => (
            <motion.div key={pillar.id} id={pillar.id} className="mb-20 scroll-mt-20"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: pi * 0.1 }}>
              {/* Pillar header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ background: `${pillar.color}18`, color: pillar.color }}>{pi + 1}</div>
                <div>
                  <span className="text-xs text-[#5B6470] tracking-wider uppercase" style={{ fontFamily: "'Tajawal', sans-serif" }}>{pillar.tag}</span>
                  <h3 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Tajawal', sans-serif", color: pillar.color }}>{pillar.name}</h3>
                </div>
              </div>
              <p className="text-[#9AA4AF] text-base mb-8 max-w-3xl leading-relaxed" style={{ fontFamily: "'Tajawal', sans-serif" }}>{pillar.desc}</p>

              {/* Service lines */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pillar.lines.map((line, i) => (
                  <SpotlightCard key={i} color={line.color}>
                    <div className="text-2xl mb-3">{line.icon}</div>
                    <h4 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Tajawal', sans-serif" }}>{line.title}</h4>
                    <p className="text-sm text-[#9AA4AF] mb-3 leading-relaxed" style={{ fontFamily: "'Tajawal', sans-serif" }}>{line.desc}</p>
                    <span className="text-xs text-[#5B6470] tracking-wider" style={{ fontFamily: "'Tajawal', sans-serif" }}>{line.partners}</span>
                  </SpotlightCard>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Line 7 - Managed Operations (cross-cutting) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-xs text-[#5B6470] mb-4" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              المجال السابع - يغطي جميع الركائز
            </span>
            <SpotlightCard color={managedOpsLine.color} className="text-center max-w-2xl mx-auto">
              <div className="text-2xl mb-3">{managedOpsLine.icon}</div>
              <h4 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Tajawal', sans-serif" }}>{managedOpsLine.title}</h4>
              <p className="text-sm text-[#9AA4AF] mb-3 leading-relaxed" style={{ fontFamily: "'Tajawal', sans-serif" }}>{managedOpsLine.desc}</p>
              <span className="text-xs text-[#5B6470] tracking-wider" style={{ fontFamily: "'Tajawal', sans-serif" }}>{managedOpsLine.partners}</span>
            </SpotlightCard>
          </motion.div>
        </div>
      </section>

      {/* ═══ PROOF ═══ */}
      <section ref={proofRef} className="py-24 bg-gradient-to-b from-[#0B0D10] to-[#080a0d]">
        <div className="max-w-[1180px] mx-auto px-7 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sm text-[#00BFFF] font-medium mb-10" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            نتائج موثقة في السوق السعودي
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            {[
              { num: 40, suffix: '%', lbl: 'انخفاض أعباء الامتثال اليدوي' },
              { num: 5, suffix: '×', lbl: 'دورات قرار أسرع مع بيانات مهيأة للذكاء الاصطناعي' },
              { num: 50, suffix: '%', lbl: 'انقطاعات تشغيلية أقل مع الصيانة التنبؤية' },
            ].map((ps, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <AnimatedCounter target={ps.num} suffix={ps.suffix} label={ps.lbl} started={proofStarted} />
              </motion.div>
            ))}
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-xs text-[#5B6470]" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            النطاقات المذكورة مستندة إلى بحوث القطاع. النتائج الخاصة بكل عميل تُحدَّد خلال مرحلة الاكتشاف والتقييم.
          </motion.p>
        </div>
      </section>

      {/* ═══ PARTNERS MARQUEE ═══ */}
      <section ref={partnersRef} className="py-20 scroll-mt-20" id="partners">
        <div className="max-w-[1180px] mx-auto px-7">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sm text-[#00BFFF] font-medium mb-4 text-center" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            شركاؤنا التقنيون
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-8" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            لا نكتفي بتوريد منتجاتهم — نوظفها لبناء حلول مؤسسية متكاملة.
          </motion.h2>
        </div>
        <div className="overflow-hidden" style={{ maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)' }}>
          <div className="flex gap-5 w-max animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
            {[...partnersList, ...partnersList].map((p, i) => (
              <div key={i} className="bg-[#1A1F2888] border border-white/5 rounded-xl px-6 py-3 flex items-center justify-center h-[68px] min-w-[150px] hover:border-[#00BFFF40] transition-colors">
                <img src={`/test-site-2/images/partners/${p.file}`} alt={p.name} className="max-h-[38px] max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-opacity" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE - How we engage ═══ */}
      <section ref={howRef} className="py-28 scroll-mt-20" id="how-we-engage">
        <div className="max-w-[1180px] mx-auto px-7 relative" ref={timelineRef}>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sm text-[#00BFFF] font-medium mb-3" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            كيف نعمل معاً
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-bold mb-16" style={{ fontSize: 'clamp(28px,4vw,44px)', fontFamily: "'Tajawal', sans-serif" }}>
            كل تحول مؤسسي يبدأ بحوار.
          </motion.h2>

          {/* Line + Progress */}
          <div className="absolute left-0 right-0 hidden sm:block" style={{ top: '108px', height: 2, background: 'rgba(255,255,255,.08)' }}>
            <motion.div className="absolute inset-y-0" style={{ background: A, right: 0, width: '100%', transformOrigin: 'right center', scaleX: tlScaleX }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {[
              { time: '45 دقيقة', title: 'الإحاطة التنفيذية', desc: 'أولوياتك. ليس عرض مبيعات.' },
              { time: '1–2 أسبوع', title: 'الاكتشاف والتقييم', desc: 'نرسم المعمارية المستهدفة والأهداف المؤسسية.' },
              { time: '2–4 أسابيع', title: 'المخطط التفصيلي', desc: 'خريطة طريق تنفيذية ودراسة جدوى تفصيلية.' },
              { time: '8–16 أسبوع', title: 'التنفيذ', desc: 'نشر، دمج، وتمكين التبني المؤسسي.' },
              { time: 'مستمر', title: 'العمليات المدارة', desc: 'تحسين مستمر وتطوير متواصل.' },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
                <div className="w-3.5 h-3.5 rounded-full bg-[#1A1F28] border-2 border-[#00BFFF] mb-8" />
                <span className="text-sm text-[#5B6470]" style={{ fontFamily: "'Tajawal', sans-serif" }}>{step.time}</span>
                <h4 className="text-base font-medium mt-1.5" style={{ fontFamily: "'Tajawal', sans-serif" }}>{step.title}</h4>
                <p className="text-sm text-[#9AA4AF] mt-1.5" style={{ fontFamily: "'Tajawal', sans-serif" }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT FORM ═══ */}
      <section ref={contactRef} className="py-28 scroll-mt-20" id="contact">
        <div className="max-w-3xl mx-auto px-7">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-sm text-[#00BFFF] font-medium mb-4" style={{ fontFamily: "'Tajawal', sans-serif" }}>اتصل بنا</p>
            <h2 className="font-bold mb-4" style={{ fontSize: 'clamp(28px,5vw,48px)', fontFamily: "'Tajawal', sans-serif" }}>
              تحدث إلى مستشار.
            </h2>
            <p className="text-[#9AA4AF] text-lg max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              يرد فريقنا خلال ٢٤ ساعة لمناقشة أولويات التحول المؤسسي لديكم. دون التزام. دون عرض مبيعات.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="bg-[#12161C] border border-white/5 rounded-2xl p-8 md:p-12">

            {formSuccess ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-[#00D4AA20] flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Tajawal', sans-serif" }}>تم استلام طلبكم.</h3>
                <p className="text-[#9AA4AF]" style={{ fontFamily: "'Tajawal', sans-serif" }}>سيتواصل معكم فريقنا خلال ٢٤ ساعة. شكراً لتواصلكم معنا.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                {formError && (
                  <div className="bg-[#FF444420] border border-[#FF444440] rounded-lg p-4 text-sm text-[#FF4444] text-center" style={{ fontFamily: "'Tajawal', sans-serif" }}>{formError}</div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-[#9AA4AF] mb-2" style={{ fontFamily: "'Tajawal', sans-serif" }}>الاسم *</label>
                    <input type="text" name="name" value={formData.name} onChange={e => { setFormData(p => ({ ...p, name: e.target.value })); if (formError) setFormError(null); }}
                      className="w-full bg-[#0B0D10] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-[#00BFFF] focus:outline-none transition-colors"
                      placeholder="الاسم الكامل" style={{ fontFamily: "'Tajawal', sans-serif" }} required />
                  </div>
                  <div>
                    <label className="block text-sm text-[#9AA4AF] mb-2" style={{ fontFamily: "'Tajawal', sans-serif" }}>البريد الإلكتروني *</label>
                    <input type="email" name="email" value={formData.email} onChange={e => { setFormData(p => ({ ...p, email: e.target.value })); if (formError) setFormError(null); }}
                      className="w-full bg-[#0B0D10] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-[#00BFFF] focus:outline-none transition-colors"
                      placeholder="example@company.com" dir="ltr" required />
                  </div>
                  <div>
                    <label className="block text-sm text-[#9AA4AF] mb-2" style={{ fontFamily: "'Tajawal', sans-serif" }}>الشركة</label>
                    <input type="text" name="company" value={formData.company} onChange={e => { setFormData(p => ({ ...p, company: e.target.value })); if (formError) setFormError(null); }}
                      className="w-full bg-[#0B0D10] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-[#00BFFF] focus:outline-none transition-colors"
                      placeholder="اسم الشركة" style={{ fontFamily: "'Tajawal', sans-serif" }} />
                  </div>
                  <div>
                    <label className="block text-sm text-[#9AA4AF] mb-2" style={{ fontFamily: "'Tajawal', sans-serif" }}>رقم الهاتف</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={e => { setFormData(p => ({ ...p, phone: e.target.value })); if (formError) setFormError(null); }}
                      className="w-full bg-[#0B0D10] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-[#00BFFF] focus:outline-none transition-colors"
                      placeholder="+966 5X XXX XXXX" dir="ltr" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-[#9AA4AF] mb-2" style={{ fontFamily: "'Tajawal', sans-serif" }}>رسالتك</label>
                  <textarea name="message" value={formData.message} onChange={e => { setFormData(p => ({ ...p, message: e.target.value })); if (formError) setFormError(null); }}
                    rows={4} maxLength={1000}
                    className="w-full bg-[#0B0D10] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-[#00BFFF] focus:outline-none transition-colors resize-none"
                    placeholder="أخبرنا عن أولويات التحول المؤسسي لديكم..." style={{ fontFamily: "'Tajawal', sans-serif" }} />
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" checked={consent} onChange={e => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-white/20 bg-[#0B0D10] text-[#00BFFF] focus:ring-[#00BFFF]" />
                  <label htmlFor="consent" className="text-sm text-[#9AA4AF] leading-relaxed" style={{ fontFamily: "'Tajawal', sans-serif" }}>
                    أوافق على <Link to="/privacy-policy" className="text-[#00BFFF] hover:underline">سياسة الخصوصية</Link> وعلى جمع بياناتي لغرض التواصل.
                  </label>
                </div>
                <button type="submit" disabled={formSubmitting} data-magnetic
                  className="w-full py-4 rounded-full font-semibold text-sm text-[#04141c] transition-shadow hover:shadow-[0_8px_30px_rgba(0,191,255,.35)] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: A, fontFamily: "'Tajawal', sans-serif" }}>
                  {formSubmitting ? 'جارٍ الإرسال...' : 'إرسال الطلب ←'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-[#12161C] border-t border-white/5" style={{ fontFamily: "'Tajawal', sans-serif" }}>
        <div className="max-w-[1180px] mx-auto px-7 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Logo + Tagline */}
            <div className="lg:col-span-2">
              <img src="/test-site-2/bionic-full-white.svg" alt="Bionic Solutions" className="h-9 w-auto mb-5" />
              <p className="text-[#9AA4AF] text-sm leading-relaxed mb-4 max-w-xs">
                شريك التحول المؤسسي للذكاء الاصطناعي في المملكة العربية السعودية.
              </p>
              <p className="text-[#5B6470] text-xs leading-relaxed">
                نصمم الذكاء والأتمتة والثقة في صميم الأعمال المؤسسية.
              </p>
              <div className="flex items-center gap-3 mt-5">
                <a href="https://www.linkedin.com/company/bionic-solutions-ksa/" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-[#0B0D10] rounded-full flex items-center justify-center hover:bg-[#00BFFF] hover:-translate-y-0.5 transition-all duration-300 group">
                  <svg className="w-4 h-4 text-[#9AA4AF] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://twitter.com/bionics_Sa" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-[#0B0D10] rounded-full flex items-center justify-center hover:bg-[#00BFFF] hover:-translate-y-0.5 transition-all duration-300 group">
                  <svg className="w-4 h-4 text-[#9AA4AF] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>

            {/* قدراتنا */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4">قدراتنا</h3>
              <ul className="space-y-2.5">
                {['الذكاء الاصطناعي والأتمتة', 'البيانات والتحليلات', 'تطبيقات الأعمال', 'التكامل والعمليات', 'الأمن السيبراني', 'البنية التحتية', 'العمليات المدارة'].map((item, i) => (
                  <li key={i}>
                    <Link to="/ar/capabilities" className="text-sm text-[#9AA4AF] hover:text-[#00BFFF] transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* القطاعات */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4">القطاعات</h3>
              <ul className="space-y-2.5">
                {['القطاع الحكومي', 'البنوك والخدمات المالية', 'النفط والغاز والطاقة', 'الرعاية الصحية', 'المؤسسات الكبرى'].map((item, i) => (
                  <li key={i}>
                    <Link to="/ar/industries" className="text-sm text-[#9AA4AF] hover:text-[#00BFFF] transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* عن الشركة */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4">عن الشركة</h3>
              <ul className="space-y-2.5">
                <li><Link to="/ar/about" className="text-sm text-[#9AA4AF] hover:text-[#00BFFF] transition-colors">من نحن</Link></li>
                <li><Link to="/ar/capabilities" className="text-sm text-[#9AA4AF] hover:text-[#00BFFF] transition-colors">قدراتنا</Link></li>
                <li><Link to="/ar/industries" className="text-sm text-[#9AA4AF] hover:text-[#00BFFF] transition-colors">القطاعات</Link></li>
                <li><Link to="/ar#contact" className="text-sm text-[#9AA4AF] hover:text-[#00BFFF] transition-colors">اتصل بنا</Link></li>
                <li><Link to="/privacy-policy" className="text-sm text-[#9AA4AF] hover:text-[#00BFFF] transition-colors">سياسة الخصوصية</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#5B6470]">
            <div className="flex items-center gap-2">
              <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-[10px] tracking-wider">
                🇸🇦 متوائم مع رؤية السعودية 2030
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:info@bionics.com.sa" className="hover:text-[#00BFFF] transition-colors">info@bionics.com.sa</a>
              <span className="text-white/10">|</span>
              <span>© {new Date().getFullYear()} Bionic Solutions</span>
              <span className="text-white/10">|</span>
              <Link to="/" className="hover:text-[#00BFFF] transition-colors">English</Link>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes scroll { to { transform: translateX(50%); } }
        @keyframes drop { 0% { transform: scaleY(0); transform-origin: top; } 50% { transform: scaleY(1); transform-origin: top; } 51% { transform-origin: bottom; } 100% { transform: scaleY(0); transform-origin: bottom; } }
      `}</style>
    </div>
  );
}
