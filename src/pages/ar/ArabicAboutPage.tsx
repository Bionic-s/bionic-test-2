import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Shield, Globe, Cpu, Users, MapPin, Target, Zap, Layers, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const HERO_BG = '/images/hero/ai-enterprise.avif';
const PATTERN_BG = '/images/optimized/geometric_pattern_4.webp';

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
    <div
       className="min-h-screen bg-bg-primary" dir="rtl">
      <Helmet>
        <title>من نحن | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي</title>
        <meta name="description" content="بيونك سوليوشنز هي مُمكّن التحول المؤسسي بالذكاء الاصطناعي في المملكة العربية السعودية — نوحّد الاستراتيجية والتقنية والبيانات والحوكمة لتحقيق نتائج أعمال ملموسة." />
      </Helmet>

      {/* ═══ 1. HERO — مع صورة خلفية ═══ */}
      <section className="relative overflow-hidden">
        {/* صورة الخلفية + تراكب */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_BG}
            alt=""
            className="w-full h-full object-cover"
            fetchPriority="high" decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/95 via-bg-primary/85 to-bg-primary" />
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}
          className="relative z-10 pt-40 pb-32 text-center px-4"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full border mb-10"
              style={{ borderColor: '#00BFFF40', backgroundColor: '#00BFFF10', backdropFilter: 'blur(8px)' }}>
              <Building2 className="w-4 h-4 ml-2" style={{ color: ACCENT }} />
              <span className="text-tiny font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>بيونك سوليوشنز</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 3.5vw, 3.5rem)', lineHeight: '1.12', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.02em', fontFamily: "'Tajawal', sans-serif" }}>
              <span className="bg-gradient-to-r from-[#00BFFF] via-[#60A5FA] to-white bg-clip-text text-transparent">
                مُمكّن التحول المؤسسي بالذكاء الاصطناعي
              </span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted font-light max-w-3xl mx-auto leading-relaxed mt-8" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              نصمم الذكاء والأتمتة والثقة في صميم الأعمال — ونقود المؤسسات عبر دورة التحول الكاملة:
              من الاستراتيجية والمعمارية إلى التنفيذ والتشغيل والتحسين المستمر، وصولاً إلى نتائج أعمال قابلة للقياس.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                to="/ar/capabilities/ai"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}>
                استكشف قدراتنا
                <ArrowRight className="w-4 h-4 rotate-180" />
              </Link>
              <Link
                to="/ar/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#00BFFF40]">
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
          <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ fontFamily: "'Tajawal', sans-serif" }}>ما الذي تمثله بيونك في مشهد التحول المؤسسي؟</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Layers, color: '#00BFFF', title: 'الاستراتيجية والمعمارية', desc: 'نُشخّص الفجوات، ونُحدد المعمارية المستهدفة، ونبني خارطة طريق متكاملة — انطلاقاً من واقع المؤسسة وبيئتها التنظيمية.' },
              { icon: Zap, color: '#00BFFF', title: 'التنفيذ والتسليم', desc: 'ننشر المنصات، ونهندس التكامل، ونقود التبني المؤسسي — عبر موردين متعددين ومسؤولية موحدة.' },
              { icon: CheckCircle, color: '#00BFFF', title: 'العمليات المُدارة', desc: 'تشغيل على مدار الساعة، وAIOps، وتحسين مستمر — نبقى معكم طويلاً بعد التشغيل لتراكم القيمة ربعاً بعد ربع.' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-8 text-center transition-all duration-300 hover:border-[#00BFFF15] hover:-translate-y-1">
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
              نعمل مع الجهات الحكومية والبنوك والمشغّلين الصناعيين ومقدمي الرعاية الصحية والمؤسسات الكبرى، وندير التحول وفق البيئة التنظيمية السعودية:
              منصة اعتماد للمشتريات الحكومية، وضوابط الهيئة الوطنية للأمن السيبراني، وأطر امتثال البنك المركزي السعودي، ونظام حماية البيانات الشخصية.
            </p>
            <p>
              عبر سبعة مجالات متكاملة: الذكاء الاصطناعي المؤسسي، ومنصات البيانات، وتطبيقات الأعمال، والتكامل، والأمن السيبراني،
              والبنية التحتية السيادية، وعمليات التقنية.
            </p>
            <p className="text-sm text-text-muted/60">
              نعمل ضمن أطر سرية تامة مع الجهات الحكومية والمالية — أعمال التحول بطبيعتها حساسة. نناقش خبرتنا
              بالتفصيل خلال جلسة استراتيجية، في بيئة آمنة ومحكومة.
            </p>
          </div>
        </motion.section>

        <SectionDivider />

        {/* ═══ 3. لماذا بيونك — مع أيقونات ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-20">
          <div className="rounded-2xl p-10 md:p-14 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #00BFFF08, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #00BFFF1A' }}>
            {/* نمط خلفية خافت */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage: `url(${PATTERN_BG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} />

            <div className="relative z-10">
              <SectionLabel>لماذا بيونك</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ fontFamily: "'Tajawal', sans-serif" }}>شريك التحول — من الاستراتيجية إلى النتائج.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Target, title: 'خبرة التحول المؤسسي', desc: 'لا نبيع منتجات — نبني قدرات مؤسسية. نوفّق بين الاستراتيجية والتقنية والبيانات والحوكمة في برامج تحول تُقاس بالأثر الفعلي على الأداء المؤسسي.' },
                  { icon: Layers, title: 'قيادة منظومة متعددة الموردين', desc: 'لسنا مقيدين بخارطة طريق أي مورد. نعتمد على أهم منصات التقنية عالمياً — نختار ما يحقق أقصى قيمة للأعمال وندمجه في نسيج مؤسسي واحد.' },
                  { icon: Shield, title: 'مسؤولية واحدة من البداية إلى النهاية', desc: 'من التقييم إلى المعمارية إلى النشر والتشغيل والتحسين المستمر — شريك واحد، مسؤولية كاملة عبر دورة حياة التحول.' },
                  { icon: Globe, title: 'المواءمة مع رؤية ٢٠٣٠', desc: 'كل مشروع ينطلق من أولويات التحول الوطني — السيادة الرقمية والحكومة الإلكترونية والتحديث الصناعي وتنمية القدرات البشرية.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 bg-bg-primary/40 rounded-xl p-6 border border-white/5 transition-all duration-300 hover:border-[#00BFFF20]">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#00BFFF12', color: ACCENT }}>
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
                منظومة الشركاء: IBM · Google Cloud · Dell Technologies · Intel · Platform9 · Lenovo · Red Hat · منظومة Salesforce (تشمل MuleSoft وTableau وInformatica)
              </p>
            </div>
          </div>
        </motion.section>

        {/* ═══ 4. رؤية ٢٠٣٠ — مع عنصر بصري سعودي ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-20">
          <div className="rounded-2xl p-10 md:p-14 border relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #00BFFF05, var(--bg-secondary), var(--bg-secondary))', borderColor: '#00BFFF15' }}>
            {/* ألوان العلم السعودي — شريط متدرج خافت */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#006C35] via-[#00BFFF] to-[#006C35] opacity-60" />

            <div className="relative z-10">
              <SectionLabel>رؤية ٢٠٣٠</SectionLabel>
              <div className="flex items-center gap-4 mb-4">
                <Globe className="w-8 h-8 flex-shrink-0" style={{ color: ACCENT }} />
                <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Tajawal', sans-serif" }}>جذور سعودية. سيادة أولًا. نتائج ملموسة.</h2>
              </div>
              <p className="text-text-muted text-lg mb-10 max-w-3xl leading-relaxed" style={{ fontFamily: "'Tajawal', sans-serif" }}>
                المملكة ليست مجرد سوق نخدمه — هي السياق الاستراتيجي الذي يُحدد معماريتنا وأولوياتنا وغايتنا.
                كل مشروع لبيونك يُصمم انطلاقاً من التزامات حقيقية تجاه التحول الوطني.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  { icon: Cpu, title: 'الذكاء السيادي', desc: 'أنظمة ذكاء اصطناعي تُصمم وتُنشر داخل حدود البيانات السعودية، وفق مبادئ أخلاقيات الذكاء الاصطناعي الصادرة عن سدايا، وبما ينسجم مع الاستراتيجية الوطنية للبيانات والذكاء الاصطناعي.' },
                  { icon: Building2, title: 'الحكومة الرقمية', desc: 'منصات وقدرات تُمكّن خدمات رقمية متمحورة حول المواطن، وتكامل مع منصة اعتماد، وتبادل البيانات بين الجهات الحكومية.' },
                  { icon: Zap, title: 'التحديث الصناعي', desc: 'بنية تحتية وأتمتة وذكاء يواكب تطور الصناعة السعودية — من التصنيع والطاقة إلى اللوجستيات وسلاسل الإمداد.' },
                  { icon: Users, title: 'تنمية القدرات البشرية', desc: 'نقل المعرفة وتمكين المنصات وتطوير القوى العاملة — لضمان تشغيل الكوادر الوطنية لبرامج التحول وتطويرها وقيادتها.' },
                  { icon: Shield, title: 'السيادة السيبرانية', desc: 'معماريات أمنية متوافقة مع الضوابط الأساسية للهيئة الوطنية للأمن السيبراني، وإطار المرونة السيبرانية للبنك المركزي السعودي، ونظام حماية البيانات الشخصية.' },
                  { icon: Target, title: 'التحول الوطني', desc: 'كل مشروع يُسهم مباشرة في تحقيق مستهدفات رؤية ٢٠٣٠: اقتصاد سعودي متنوع ورقمي وتنافسي عالمياً.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 bg-bg-primary/50 rounded-xl p-5 border border-white/5 transition-all duration-300 hover:border-[#00BFFF20]">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#00BFFF10', color: ACCENT }}>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ fontFamily: "'Tajawal', sans-serif" }}>ثلاثة مكاتب. حضور وطني واحد.</h2>

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
              { city: 'جدة', region: 'طريق الملك عبدالعزيز، جدة ٢١٤٩٩', desc: 'نخدم المنطقة الغربية وساحل البحر الأحمر — حيث تأسست الشركة.' },
              { city: 'الرياض', region: 'المقر الرئيسي — أبراج العليا', desc: 'الدور ٢٩، برج B، أبراج العليا. نخدم الجهات الحكومية والبنوك والمؤسسات الكبرى في العاصمة والمنطقة الوسطى.', isHQ: true },
              { city: 'الخبر', region: 'طريق الملك فهد، الخبر ٣١٩٥٢', desc: 'نخدم قطاع النفط والغاز والصناعة وسلاسل الإمداد في المنطقة الشرقية وساحل الخليج.' },
            ].map((office, i) => (
              <div key={i} className={`bg-bg-secondary border rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-1 ${office.isHQ ? 'border-[#00BFFF40]' : 'border-white/5 hover:border-[#00BFFF25]'}`}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#00BFFF12' }}>
                  <MapPin className="w-7 h-7" style={{ color: ACCENT }} />
                </div>
                {office.isHQ && (
                  <span className="inline-block px-2.5 py-0.5 bg-accent-primary/15 rounded-full text-tiny font-semibold text-accent-primary mb-1">المقر الرئيسي</span>
                )}
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
              مسجلون في منصة اعتماد. مؤهلون للمشتريات الحكومية.
            </p>
          </div>
        </motion.section>

        {/* ═══ التحويل ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={inView5 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center pb-20 md:pb-28 lg:pb-32"
          ref={ref5}
        >
          <div className="rounded-2xl p-10 md:p-14 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #00BFFF0D, var(--bg-secondary), var(--bg-secondary))', border: '1px solid #00BFFF1A' }}>
            {/* توهج زخرفي */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, #00BFFF08  %, transparent  %)' }} />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Tajawal', sans-serif" }}>
                لنصمم معاً<br />
                <span className="bg-gradient-to-r from-[#00BFFF] to-[#60A5FA] bg-clip-text text-transparent">ما هو قادم.</span>
              </h2>
              <p className="text-text-muted text-lg mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Tajawal', sans-serif" }}>
                كل رحلة تحول تبدأ بجلسة حول موقعكم الحالي، وإلى أين تريدون الوصول، وما يتطلبه المسار.
                ليس عرضاً تجارياً — بل نقاش معماري حول فجواتكم وفرصكم.
              </p>
              <Link
                to="/ar/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}>
                احجز جلسة استراتيجية
                <ArrowRight className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
