import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Shield, Globe, Cpu, Users, MapPin, Target, Zap, Layers, CheckCircle } from 'lucide-react';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#2563EB';
const HERO_BG = '/test-site-2/images/enterprise-ai-transformation-hero.avif';
const PATTERN_BG = '/test-site-2/images/geometric_pattern_4.jpg';

const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

const SectionDivider = () => (
  <div className="flex items-center justify-center gap-3 my-16">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
);

export default function ArabicAboutPage() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary" dir="rtl">

      {/* ═══ 1. HERO — مع صورة خلفية ═══ */}
      <section className="relative overflow-hidden">
        {/* صورة الخلفية + تراكب */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_BG}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/95 via-bg-primary/85 to-bg-primary" />
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}
          className="relative z-10 pt-40 pb-32 text-center px-4"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full border mb-10"
              style={{ borderColor: '#2563EB40', backgroundColor: '#2563EB10', backdropFilter: 'blur(8px)' }}>
              <Building2 className="w-4 h-4 ml-2" style={{ color: ACCENT }} />
              <span className="text-tiny font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>بيونك سوليوشنز</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 3.5vw, 3.5rem)', lineHeight: '1.12', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.02em', fontFamily: "'Tajawal', sans-serif" }}>
              <span className="bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-white bg-clip-text text-transparent">
                مُمكّن التحول المؤسسي بالذكاء الاصطناعي
              </span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted font-light max-w-3xl mx-auto leading-relaxed mt-8" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              نُدمج الذكاء الاصطناعي والأتمتة والثقة في صميم أعمالك — ونمكّن المؤسسات من تحويل العمليات وتجارب العملاء
              والبيانات والأمن والبنية التحتية إلى نتائج أعمال قابلة للقياس.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                to="/ar/capabilities/ai"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #2563EB20' }}>
                استكشف قدراتنا
                <ArrowRight className="w-4 h-4 rotate-180" />
              </Link>
              <Link
                to="/ar/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#2563EB40]">
                ابدأ المحادثة
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">

        <SectionDivider />

        {/* ═══ 2. خبرة التحول ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-20">
          <SectionLabel>خبرة التحول</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ fontFamily: "'Tajawal', sans-serif" }}>ما نوع شركة التحول التي تمثلها بيونك؟</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Layers, color: '#2563EB', title: 'الاستراتيجية والمعمارية', desc: 'نرسُم الوضع الراهن، ونُحدد المعمارية المستهدفة، ونبني دراسة الجدوى — انطلاقًا من واقع المؤسسة السعودية.' },
              { icon: Zap, color: '#7C3AED', title: 'التنفيذ والتسليم', desc: 'ننشر المنصات، ونهندس التكامل، ونُمكّن التبني — عبر مورّدين متعددين ومجالات متعددة ومسؤولية موحدة.' },
              { icon: CheckCircle, color: '#059669', title: 'العمليات المُدارة', desc: 'مراقبة على مدار الساعة، وعمليات ذكاء اصطناعي، وتحسين مستمر — نبقى معكم طويلًا بعد التشغيل.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-8 text-center transition-all duration-300 hover:border-[#2563EB15] hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: `${item.color}12` }}>
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="font-bold text-lg mb-3 text-text-primary">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-5 text-text-muted leading-relaxed text-base bg-bg-secondary/50 rounded-xl border border-white/5 p-8" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            <p>
              بيونك سوليوشنز هي مُمكّن التحول المؤسسي بالذكاء الاصطناعي — تأسست في المملكة العربية السعودية وتعمل في أرجائها.
              نعمل مع الجهات الحكومية والبنوك والمشغّلين الصناعيين ومقدمي الرعاية الصحية والمؤسسات الكبرى — وفق البيئة التنظيمية السعودية:
              منصة اعتماد للمشتريات، وضوابط الأمن السيبراني للهيئة الوطنية للأمن السيبراني، وأطر امتثال البنك المركزي السعودي، ونظام حماية البيانات الشخصية.
            </p>
            <p>
              عبر سبعة مجالات متكاملة: الذكاء الاصطناعي المؤسسي، ومنصات البيانات، وتطبيقات الأعمال، والتكامل، والأمن السيبراني،
              والبنية التحتية السيادية، وعمليات التقنية.
            </p>
            <p className="text-sm text-text-muted/60">
              لا ننشر أسماء العملاء ولا تفاصيل المشاريع ولا مقاييس محددة — أعمال التحول بطبيعتها حساسة. يمكن مناقشة خبرتنا
              بالتفصيل خلال جلسة استراتيجية، في إطار سرية تامة.
            </p>
          </div>
        </motion.section>

        <SectionDivider />

        {/* ═══ 3. لماذا بيونك — مع أيقونات ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-20">
          <div className="rounded-2xl p-10 md:p-14 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #2563EB08, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #2563EB1A' }}>
            {/* نمط خلفية خافت */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage: `url(${PATTERN_BG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} />

            <div className="relative z-10">
              <SectionLabel>لماذا بيونك</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ fontFamily: "'Tajawal', sans-serif" }}>الشريك الذي يصمم التحول المؤسسي.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Target, title: 'خبرة التحول المؤسسي', desc: 'لا نبيع منتجات. نصمم النتائج — نوفّق بين الاستراتيجية والتقنية والبيانات والحوكمة في برامج تحول تُقاس بالأداء المؤسسي.' },
                  { icon: Layers, title: 'قيادة منظومة متعددة المورّدين', desc: 'لسنا مقيدين بخارطة طريق أي مورد. نعتمد على أهم منصات التقنية عالميًا — نختار وندمج ما يحقق أقصى قيمة للأعمال.' },
                  { icon: Shield, title: 'مسؤولية كاملة من البداية للنهاية', desc: 'من التقييم إلى المعمارية إلى العمليات والتطوير المستمر — شريك واحد، مسؤولية كاملة عبر دورة حياة التحول.' },
                  { icon: Globe, title: 'المواءمة مع رؤية 2030', desc: 'كل مشاركة تنطلق من أولويات التحول الوطني للمملكة — السيادة والحكومة الرقمية والتحديث الصناعي وتنمية القدرات البشرية.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 bg-bg-primary/40 rounded-xl p-6 border border-white/5 transition-all duration-300 hover:border-[#2563EB20]">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#2563EB12', color: ACCENT }}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base mb-1.5 text-text-primary">{item.title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-tiny text-text-muted mt-8 pt-6 border-t border-white/[0.06] text-center">
                منظومة الشركاء: Salesforce · Google Cloud · IBM · Dell Technologies · Intel · MuleSoft · Informatica · Platform9
              </p>
            </div>
          </div>
        </motion.section>

        {/* ═══ 4. رؤية 2030 — مع عنصر بصري سعودي ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-20">
          <div className="rounded-2xl p-10 md:p-14 border relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #2563EB05, var(--bg-secondary), var(--bg-secondary))', borderColor: '#2563EB15' }}>
            {/* ألوان العلم السعودي — شريط متدرج خافت */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#006C35] via-[#2563EB] to-[#006C35] opacity-60" />

            <div className="relative z-10">
              <SectionLabel>رؤية 2030</SectionLabel>
              <div className="flex items-center gap-4 mb-4">
                <Globe className="w-8 h-8 flex-shrink-0" style={{ color: ACCENT }} />
                <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Tajawal', sans-serif" }}>جذور سعودية. سيادة أولًا. نتائج ملموسة.</h2>
              </div>
              <p className="text-text-muted text-lg mb-10 max-w-3xl leading-relaxed" style={{ fontFamily: "'Tajawal', sans-serif" }}>
                المملكة العربية السعودية ليست مجرد سوق نخدمه، بل هي السياق الاستراتيجي الذي يُحدد معماريتنا
                وأولوياتنا وغايتنا. كل مشاركة لبيونك تُبنى على التزامات حقيقية تجاه تحول المملكة.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  { icon: Cpu, title: 'الذكاء السيادي', desc: 'أنظمة ذكاء اصطناعي تُصمم وتُنشر داخل حدود البيانات السعودية، وفق مبادئ أخلاقيات الذكاء الاصطناعي الصادرة عن سدايا، وبما ينسجم مع الاستراتيجية الوطنية للبيانات والذكاء الاصطناعي.' },
                  { icon: Building2, title: 'الحكومة الرقمية', desc: 'منصات وقدرات تُمكّن خدمات رقمية متمحورة حول المواطن، وتكامل منصة اعتماد، وتبادل البيانات بين الجهات الحكومية.' },
                  { icon: Zap, title: 'التحديث الصناعي', desc: 'بنية تحتية وأتمتة وذكاء يواكب تطور الصناعة السعودية — من التصنيع والطاقة إلى اللوجستيات والرعاية الصحية.' },
                  { icon: Users, title: 'القدرات البشرية', desc: 'نقل المعرفة وتمكين المنصات وتطوير القوى العاملة — لضمان تشغيل الفرق السعودية لبرامج التحول وتطويرها وقيادتها.' },
                  { icon: Shield, title: 'السيادة السيبرانية', desc: 'معماريات أمنية متوافقة مع الضوابط الأساسية للأمن السيبراني للهيئة الوطنية، وإطار المرونة السيبرانية للبنك المركزي السعودي، ومتطلبات نظام حماية البيانات الشخصية.' },
                  { icon: Target, title: 'التحول الوطني', desc: 'كل مشاركة تُسهم في تحقيق أهداف رؤية ٢٠٣٠ نحو اقتصاد سعودي متنوع ورقمي وتنافسي عالميًا.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 bg-bg-primary/50 rounded-xl p-5 border border-white/5 transition-all duration-300 hover:border-[#2563EB20]">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#2563EB10', color: ACCENT }}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base mb-1 text-text-primary">{item.title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══ 5. حضورنا — مع عنصر بصري للخريطة ═══ */}
        <motion.section ref={ref4} {...fadeIn} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-20">
          <SectionLabel>حضورنا</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ fontFamily: "'Tajawal', sans-serif" }}>ثلاثة مكاتب. التزام وطني واحد.</h2>

          {/* مخطط خريطة السعودية — زخرفي خافت */}
          <div className="relative mb-10 max-w-lg mx-auto">
            <div className="aspect-[3/4] max-h-64 mx-auto opacity-[0.04] pointer-events-none">
              <svg viewBox="0 0 300 400" fill="currentColor" className="w-full h-full text-white">
                <path d="M150 20 C170 60, 220 80, 240 130 C260 180, 250 230, 230 280 C210 330, 170 370, 140 380 C110 390, 70 370, 50 340 C30 310, 20 260, 30 220 C40 180, 60 120, 90 80 C120 40, 130 20, 150 20Z" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { city: 'الرياض', region: 'المقر الرئيسي — المنطقة الوسطى', desc: 'نخدم القطاع الحكومي والبنوك والمؤسسات الكبرى في العاصمة والمنطقة الوسطى.' },
              { city: 'جدة', region: 'مكتب المنطقة الغربية', desc: 'نخدم المنطقة الغربية وساحل البحر الأحمر — حيث تأسست الشركة ويدير المركز عملياته.' },
              { city: 'الدمام', region: 'مكتب المنطقة الشرقية', desc: 'نخدم قطاع النفط والغاز والصناعة واللوجستيات في المنطقة الشرقية.' },
            ].map((office, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-8 text-center transition-all duration-300 hover:border-[#2563EB25] hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#2563EB12' }}>
                  <MapPin className="w-7 h-7" style={{ color: ACCENT }} />
                </div>
                <h3 className="font-bold text-xl mb-1 text-text-primary">{office.city}</h3>
                <p className="text-tiny font-medium mb-3" style={{ color: ACCENT }}>{office.region}</p>
                <p className="text-text-muted text-sm leading-relaxed">{office.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-bg-secondary border border-white/5 rounded-xl p-6 text-center max-w-2xl mx-auto">
            <p className="text-body text-text-muted mb-2">
              <a href="mailto:info@bionics.com.sa" className="text-accent-primary hover:underline">info@bionics.com.sa</a>
              {' · '}
              <a href="mailto:sales@bionics.com.sa" className="text-accent-primary hover:underline">sales@bionics.com.sa</a>
            </p>
            <p className="text-tiny text-text-muted">
              مسجلون في منصة اعتماد. مؤهلون للمشتريات الحكومية السعودية.
            </p>
          </div>
        </motion.section>

        {/* ═══ التحويل ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={inView5 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center pb-12"
          ref={ref5}
        >
          <div className="rounded-2xl p-10 md:p-14 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #2563EB0D, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #2563EB1A' }}>
            {/* توهج زخرفي */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, #2563EB08 0%, transparent 70%)' }} />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Tajawal', sans-serif" }}>
                لنصمم معًا<br />
                <span className="bg-gradient-to-r from-[#2563EB] to-[#60A5FA] bg-clip-text text-transparent">ما هو قادم.</span>
              </h2>
              <p className="text-text-muted text-lg mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Tajawal', sans-serif" }}>
                كل رحلة تحول تبدأ بمحادثة حول موقعكم الحالي، وإلى أين تريدون الوصول، وما يتطلبه الطريق.
                ليس عرضًا تجاريًا — بل نقاش معماري.
              </p>
              <Link
                to="/ar/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #2563EB20' }}>
                ابدأ المحادثة
                <ArrowRight className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
