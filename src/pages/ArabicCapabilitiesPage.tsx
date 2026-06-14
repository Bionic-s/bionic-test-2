import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, BarChart3, Monitor, GitMerge, Shield, Cloud, Cog, ArrowLeft, Sparkles, Layers, Workflow } from 'lucide-react';

const A = '#00BFFF';
const P = '#A78BFA';
const G = '#34D399';
const W = '#FB923C';

// ─── Pillars with capability cards ───
interface CapCard { icon: React.ReactNode; title: string; desc: string; partners: string; color: string; }
interface PillarSection { id: string; label: string; tag: string; desc: string; color: string; cardColor: string; cards: CapCard[]; }

const pillars: PillarSection[] = [
  {
    id: 'intelligence',
    label: 'الذكاء',
    tag: 'Intelligence',
    desc: 'نحوّل البيانات الخام إلى قرارات ذكية. منصات جاهزة للذكاء الاصطناعي، تحليلات تنفيذية آنية، ومساعدات ذكية تختصر دورة القرار من أسابيع إلى دقائق.',
    color: A, cardColor: A,
    cards: [
      { icon: <Brain className="w-5 h-5" />, title: 'الذكاء الاصطناعي والأتمتة المؤسسية', desc: 'نصمم ونشغّل وكلاء ذكاء اصطناعي ومساعدين افتراضيين وأتمتة ذكية ترفع الكفاءة التشغيلية وتقلّص التكاليف. نشر آمن داخل بيئتك المؤسسية — مع سيادة كاملة على البيانات داخل المملكة.', partners: 'IBM watsonx · Salesforce Einstein · Intel Gaudi', color: A },
      { icon: <BarChart3 className="w-5 h-5" />, title: 'البيانات والتحليلات والذكاء', desc: 'نوحّد بياناتك المتفرقة في مصدر واحد موثوق للحقيقة. لوحات قيادة تنفيذية، مؤشرات أداء رئيسية، وتحليلات متقدمة — ليُبنى كل قرار مؤسسي على بيانات دقيقة، لا على تقديرات.', partners: 'Informatica · Tableau · Google BigQuery', color: A },
    ],
  },
  {
    id: 'automation',
    label: 'الأتمتة',
    tag: 'Automation',
    desc: 'نربط أنظمتك المنعزلة وننسق عملياتك المؤسسية. من أنظمة تخطيط الموارد إلى إدارة العملاء إلى الأنظمة القديمة — لتعمل مؤسستك كمنظومة واحدة متسقة بلا فجوات.',
    color: P, cardColor: P,
    cards: [
      { icon: <Monitor className="w-5 h-5" />, title: 'تطبيقات الأعمال وتجربة العملاء', desc: 'منصة موحدة لإدارة علاقات العملاء ومركز اتصال ذكي وأتمتة تسويقية وتجربة موظف متكاملة. يحصل عملاؤك على تجربة موحدة سلسة — بغض النظر عن تعقيد أنظمتك الداخلية.', partners: 'Salesforce · Tableau · MuleSoft', color: P },
      { icon: <GitMerge className="w-5 h-5" />, title: 'التكامل والعمليات الذكية', desc: 'نربط أنظمتك عبر معمارية تكامل API-led لتتدفق البيانات تلقائياً بين الأقسام. دون إدخال مزدوج للبيانات. دون أخطاء بشرية. دون تأخير في العمليات.', partners: 'MuleSoft Anypoint · Informatica · Apigee', color: P },
    ],
  },
  {
    id: 'trust',
    label: 'الثقة',
    tag: 'Trust',
    desc: 'نصمم أسساً رقمية آمنة ومرنة وذات سيادة وطنية. من الحماية السيبرانية إلى البنية التحتية الحيوية — داخل المملكة، وبما يتوافق مع أعلى المعايير التنظيمية الوطنية.',
    color: G, cardColor: G,
    cards: [
      { icon: <Shield className="w-5 h-5" />, title: 'الأمن السيبراني والمرونة الرقمية', desc: 'مركز عمليات أمنية (SOC) يراقب التهديدات على مدار الساعة. نموذج Zero Trust، حوكمة الهوية الرقمية، ونسخ احتياطي منيع — مؤسستك محمية من اليوم الأول، ومتوافقة مع متطلبات الهيئة الوطنية للأمن السيبراني.', partners: 'IBM QRadar · Guardium · Zero Trust', color: G },
      { icon: <Cloud className="w-5 h-5" />, title: 'البنية التحتية السيادية والسحابة الهجينة', desc: 'نحدّث مراكز بياناتك بأحدث تقنيات البنية التحتية المؤسسية. سحابة خاصة داخل المملكة — سيادة رقمية كاملة، أداء عالٍ، وتكلفة إجمالية أقل مقارنة بالحلول السحابية العامة.', partners: 'Dell PowerEdge · IBM FlashSystem · Red Hat OpenShift', color: G },
    ],
  },
];

const managedOps: CapCard = {
  icon: <Cog className="w-5 h-5" />,
  title: 'الخدمات التقنية والعمليات المدارة',
  desc: 'فريق تقني متخصص يتولى تشغيل بيئتك ومراقبتها على مدار الساعة. عمليات سحابية، عمليات ذكاء اصطناعي، ودعم فني مستمر — لتركز على أعمالك الأساسية بينما ندير نحن البنية التقنية.',
  partners: '24×7 Monitoring · CloudOps · AIOps · Managed Services',
  color: W,
};

// ─── Spotlight Card ───
function SpotlightCard({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div
      className="relative bg-[#12161C] border border-white/5 rounded-2xl p-6 overflow-hidden group h-full hover:border-white/10 transition-colors"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
      }}
      style={{ ['--mx' as any]: '50%', ['--my' as any]: '50%' }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ background: `radial-gradient(280px circle at var(--mx,50%) var(--my,50%), ${color}12, transparent 60%)` }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

const footerLinks_ar = [
  { label: 'من نحن', to: '/ar/about' },
  { label: 'قدراتنا', to: '/ar/capabilities' },
  { label: 'القطاعات', to: '/ar/industries' },
  { label: 'اتصل بنا', to: '/ar#contact' },
  { label: 'سياسة الخصوصية', to: '/ar/privacy' },
];

export default function ArabicCapabilitiesPage() {
  const y = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-[#0B0D10] text-white font-sans" dir="rtl" lang="ar" style={{ fontFamily: "'Tajawal', sans-serif" }}>
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-[100] backdrop-blur-[10px] bg-[#0B0D1088] border-b border-white/5">
        <div className="max-w-[1180px] mx-auto px-7 flex items-center justify-between h-[68px]">
          <Link to="/ar" className="flex items-center">
            <img src="/test-site-2/bionic-full-white.svg" alt="Bionic Solutions" className="h-8 w-auto" />
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/ar" className="flex items-center gap-1.5 text-sm text-[#9AA4AF] hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              العودة إلى الرئيسية
            </Link>
            <Link to="/" className="group relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-white/10 hover:border-[#00BFFF40] bg-white/[0.02] hover:bg-[#00BFFF08] transition-all duration-300" aria-label="English version"><span className="text-xs opacity-50 group-hover:opacity-100 transition-opacity">🇬🇧</span><span className="text-[11px] font-medium text-[#5B6470] group-hover:text-white transition-colors tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>EN</span></Link>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(600px 350px at 80% 10%, rgba(0,191,255,.06), transparent 60%), radial-gradient(500px 300px at 15% 70%, rgba(167,139,250,.05), transparent 60%)` }} />
        <div className="max-w-[1180px] mx-auto px-7 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00BFFF10] border border-[#00BFFF20] text-xs text-[#00BFFF] font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              قدراتنا
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              ٣ ركائز. ٧ خطوط أعمال.
              <br />
              <span className="text-[#9AA4AF]">تحول مؤسسي متكامل.</span>
            </h1>
            <p className="text-[#9AA4AF] text-lg max-w-2xl leading-relaxed">
              كل خط أعمال متاح بشكل مستقل أو ضمن حزمة تحول مؤسسي متكاملة. ننفذ ونشغّل — لا نكتفي بتوريد التراخيص وتسليمها.
            </p>
          </motion.div>

          {/* Architecture overview */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { icon: <Brain className="w-4 h-4" />, label: 'الذكاء', lines: 'الذكاء الاصطناعي · البيانات', color: A },
              { icon: <Workflow className="w-4 h-4" />, label: 'الأتمتة', lines: 'التطبيقات · التكامل', color: P },
              { icon: <Shield className="w-4 h-4" />, label: 'الثقة', lines: 'الأمن · البنية التحتية', color: G },
            ].map((p, i) => (
              <div key={i} className="bg-[#12161C] border border-white/5 rounded-xl p-5 text-center">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ background: `${p.color}15`, color: p.color }}>{p.icon}</div>
                <div className="font-bold text-sm mb-1">{p.label}</div>
                <div className="text-xs text-[#5B6470]">{p.lines}</div>
              </div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="text-center mt-2">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FB923C10] border border-[#FB923C20] text-xs text-[#FB923C] mt-3">
              <Layers className="w-3.5 h-3.5" />
              يغطي جميع الركائز: الخدمات التقنية والعمليات المدارة
            </span>
          </motion.div>
        </div>
      </section>

      {/* ═══ PILLAR SECTIONS ═══ */}
      {pillars.map((pillar, pi) => (
        <section key={pillar.id} className="py-16 border-t border-white/5 first:border-0">
          <div className="max-w-[1180px] mx-auto px-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: `${pillar.color}18`, color: pillar.color }}>{pi + 1}</div>
                <span className="text-xs text-[#5B6470] tracking-wider uppercase">{pillar.tag}</span>
                <div className="flex-1 h-px bg-white/5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: pillar.color }}>{pillar.label}</h2>
              <p className="text-[#9AA4AF] text-base max-w-3xl leading-relaxed">{pillar.desc}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pillar.cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <SpotlightCard color={card.color}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${card.color}15`, color: card.color }}>{card.icon}</div>
                      <div>
                        <h3 className="text-base font-semibold mb-2 text-white">{card.title}</h3>
                        <p className="text-sm text-[#9AA4AF] leading-relaxed mb-4">{card.desc}</p>
                        <div className="flex items-center gap-2 pt-3 border-t border-white/5">
                          <span className="text-[10px] text-[#5B6470] tracking-wider">المنظومة التقنية</span>
                          <span className="text-xs text-[#9AA4AF]">{card.partners}</span>
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ═══ MANAGED OPS ═══ */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-[1180px] mx-auto px-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FB923C10] border border-[#FB923C20] text-xs text-[#FB923C] font-medium mb-6">
              <Layers className="w-3.5 h-3.5" />
              المجال السابع — يغطي جميع الركائز
            </span>
            <SpotlightCard color={W}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `${W}15`, color: W }}>{managedOps.icon}</div>
              <h3 className="text-xl font-bold mb-3">{managedOps.title}</h3>
              <p className="text-sm text-[#9AA4AF] leading-relaxed mb-4">{managedOps.desc}</p>
              <span className="text-xs text-[#5B6470] tracking-wider">{managedOps.partners}</span>
            </SpotlightCard>
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-[1180px] mx-auto px-7 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">كل تحول مؤسسي يبدأ بحوار.</h2>
            <p className="text-[#9AA4AF] mb-8 max-w-xl mx-auto">ناقش أولوياتك مع فريق استشاري متخصص. دون التزام. دون عرض مبيعات.</p>
            <Link to="/ar#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm text-[#04141c] transition-shadow hover:shadow-[0_8px_30px_rgba(0,191,255,.35)]"
              style={{ background: A }}>
              تحدث إلى مستشار ←
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#12161C] border-t border-white/5" style={{ fontFamily: "'Tajawal', sans-serif" }}>
        <div className="max-w-[1180px] mx-auto px-7 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src="/test-site-2/bionic-full-white.svg" alt="Bionic Solutions" className="h-7 w-auto opacity-70" />
              <span className="text-xs text-[#5B6470]">شريك التحول المؤسسي للذكاء الاصطناعي</span>
            </div>
            <div className="flex items-center gap-5 text-sm text-[#9AA4AF]">
              {footerLinks_ar.map((l, i) => (
                <Link key={i} to={l.to} className="hover:text-[#00BFFF] transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>
          <div className="border-t border-white/5 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#5B6470]">
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-[10px] tracking-wider">🇸🇦 متوائم مع رؤية السعودية 2030</span>
            <div className="flex items-center gap-4">
              <a href="mailto:info@bionics.com.sa" className="hover:text-[#00BFFF] transition-colors">info@bionics.com.sa</a>
              <span className="text-white/10">|</span>
              <span>© {y} Bionic Solutions</span>
              <span className="text-white/10">|</span>
              <Link to="/" className="hover:text-[#00BFFF] transition-colors">English</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
