import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Zap, Shield, BarChart3, RefreshCw, Target, Layers, Brain } from 'lucide-react';
import { trackValueSystemView } from '../../lib/analytics';
import { Helmet } from 'react-helmet-async';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#00BFFF';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

export default function ArabicEnterpriseValueSystemPage() {

  useEffect(() => { trackValueSystemView(); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
       className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
      <Helmet>
        <title>منظومة القيمة | بيونك سوليوشنز — مُمكّن التحول المؤسسي بالذكاء الاصطناعي</title>
        <meta name="description" content="كيف تتراكم القيمة عبر الآفاق الزمنية — من المكاسب التشغيلية الفورية إلى بناء القدرات المؤسسية على مدى سنوات." />
      </Helmet>
      <div className="container mx-auto px-4 lg:px-12 max-w-6xl" style={{ fontFamily: "'Tajawal', sans-serif" }}>

        {/* ═══ 1. HERO ═══ */}
        <motion.section className="mb-28" {...fadeIn} transition={{ duration: 0.5 }}>
          <SectionLabel>منظومة القيمة المؤسسية</SectionLabel>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7">
            القيمة المؤسسية لا تأتي<br />
            <span style={{ color: ACCENT }}>من التقنية، بل من القدرات.</span>
          </h1>
          <p className="text-text-muted text-lg max-w-[720px] leading-relaxed">
            أربعة آفاق للقيمة. تراكم واحد متصل. من تحسين التكاليف إلى الريادة السوقية —
            هكذا نقيس ونحقق ونراكم القيمة المؤسسية عبر كل مشروع.
            لسنا ناشرين للتقنية — بل بناة للقدرات المؤسسية التي تتراكم.
          </p>
        </motion.section>

        {/* ═══ 2. سؤال المدير المالي + سؤال الرئيس التنفيذي ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>الأسئلة الجوهرية</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* المدير المالي */}
            <div className="bg-bg-secondary border border-white/5 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#00BFFF15', color: ACCENT }}>
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">سؤال المدير المالي</h2>
                  <p className="text-tiny text-text-muted">تخصيص رأس المال، القياس، التراكم</p>
                </div>
              </div>
              <p className="text-text-muted text-sm leading-relaxed mb-5">
                المدير المالي يطرح ثلاثة أسئلة حول كل استثمار تحولي.
                إجابتنا ليست دراسة جدوى — بل نظام تشغيل لتحقيق القيمة واستدامتها.
              </p>
              <div className="space-y-3">
                {[
                  { q: 'أين القيمة؟', a: 'أربعة آفاق — النمو، الكفاءة، المرونة، القدرات. كل مشروع يرتبط بواحد منها على الأقل.' },
                  { q: 'كيف تُقاس؟', a: 'لوحة مؤشرات أداء تنفيذية عبر الآفاق الأربعة. خط أساس، مستهدف، قياس ربع سنوي — وليس مراجعة سنوية.' },
                  { q: 'كيف تتراكم؟', a: 'بيانات أفضل ← قرارات أذكى ← عمليات أسرع ← ثقة أقوى ← قيمة مؤسسية. كل دورة تعزز كل نقطة.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: ACCENT }} />
                    <div>
                      <p className="text-sm font-medium text-text-primary">{item.q}</p>
                      <p className="text-tiny text-text-muted">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* الرئيس التنفيذي */}
            <div className="bg-bg-secondary border border-white/5 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#00BFFF15', color: ACCENT }}>
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">سؤال الرئيس التنفيذي</h2>
                  <p className="text-tiny text-text-muted">الميزة التنافسية، السرعة، القدرات الجديدة</p>
                </div>
              </div>
              <p className="text-text-muted text-sm leading-relaxed mb-5">
                الرئيس التنفيذي لا يسأل عن التقنية، بل عن الموقع التنافسي والقدرات الجديدة.
                إجابتنا ليست خطة مشروع — بل منصة قدرات مؤسسية تتراكم عبر الزمن.
              </p>
              <div className="space-y-3">
                {[
                  { q: 'كيف يخلق التحول ميزة تنافسية؟', a: 'ببناء قدرات لا يمكن للمنافسين تقليدها في أشهر — عمليات مدمجة بالذكاء الاصطناعي، منصات بيانات سيادية، وضع ثقة Zero Trust.' },
                  { q: 'كيف نتحرك أسرع من المنافسين؟', a: 'فرق العمل المعززة بالذكاء الاصطناعي تقلّص دورات العمل من أسابيع إلى ساعات. القرارات المدعومة بالذكاء الاصطناعي تقضي على شلل التحليل. هندسة المنصات تُسرّع التسليم.' },
                  { q: 'كيف نبني قدرات جديدة؟', a: 'بناء القدرات، وليس تسليم المشاريع. كل مشروع يترك المؤسسة أقوى — بمنصات وبيانات ومهارات تتراكم.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: ACCENT }} />
                    <div>
                      <p className="text-sm font-medium text-text-primary">{item.q}</p>
                      <p className="text-tiny text-text-muted">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══ 3. أربعة آفاق للقيمة ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>أربعة آفاق للقيمة</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">القيمة لا تتحقق في ربع واحد، بل تتراكم عبر أربعة آفاق زمنية متصلة.</h2>
          <p className="text-text-muted text-lg mb-10 max-w-[720px] leading-relaxed">
            كل أفق مدعوم بواحدة أو أكثر من ركائز الذكاء والأتمتة والثقة.
            معاً تشكل محرك خلق القيمة المؤسسية.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                horizon: 'النمو',
                timeline: '١٢–٣٦ شهرًا',
                desc: 'الإيرادات، الحصة السوقية، قيمة العميل.',
                iat: 'الذكاء + الأتمتة',
                color: '#00BFFF',
                items: ['البيع المتقاطع المدعوم بالذكاء الاصطناعي', 'قنوات رقمية جديدة', 'وقت وصول أسرع للسوق', 'تحول تجربة العميل'],
              },
              {
                horizon: 'الكفاءة',
                timeline: '٠–١٢ شهرًا',
                desc: 'التكلفة، الإنتاجية، معدل التدفق.',
                iat: 'الأتمتة',
                color: '#00BFFF',
                items: ['أتمتة العمليات', 'إعادة توزيع الكوادر', 'ترشيد البنية التحتية', 'خفض التذاكر'],
              },
              {
                horizon: 'المرونة',
                timeline: '٦–١٨ شهرًا',
                desc: 'المخاطر، الامتثال، الاستمرارية.',
                iat: 'الثقة',
                color: '#00BFFF',
                items: ['معمارية Zero Trust', 'الامتثال التنظيمي', 'الحماية من برامج الفدية', 'قدرة التعافي السيبراني'],
              },
              {
                horizon: 'القدرات',
                timeline: '٢٤–٦٠ شهرًا',
                desc: 'منصات سيادية، بنية تحتية وطنية.',
                iat: 'الذكاء + الأتمتة + الثقة',
                color: '#00BFFF',
                items: ['منصات ذكاء سيادية', 'أنسجة بيانات وطنية', 'خدمات حكومة رقمية', 'تحول القوى العاملة'],
              },
            ].map((h, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: h.color }} />
                  <h3 className="font-bold text-base">{h.horizon}</h3>
                </div>
                <p className="text-tiny text-text-muted mb-1">{h.timeline}</p>
                <p className="text-sm text-text-primary font-medium mb-3">{h.desc}</p>
                <p className="text-tiny font-semibold mb-2" style={{ color: ACCENT }}>مدعوم بـ: {h.iat}</p>
                <ul className="space-y-1.5">
                  {h.items.map((item, j) => (
                    <li key={j} className="text-tiny text-text-muted flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: h.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 4. منطق القيمة — الذكاء والأتمتة والثقة ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>منطق القيمة — الذكاء والأتمتة والثقة</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">ثلاث ركائز. ثلاث آليات للقيمة. نظام متراكم واحد.</h2>
          <p className="text-text-muted text-lg mb-10 max-w-[720px] leading-relaxed">
            ركائز بيونك الثلاث للتحول تخلق القيمة عبر آليات متميزة — وتتراكم عند تطبيقها معًا.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              {
                pillar: 'الذكاء',
                mechanism: 'سرعة القرار، رفع الذكاء، جودة الرؤى',
                outcome: 'قرارات أسرع وأفضل على كل المستويات',
                example: 'تقييم الائتمان بالذكاء الاصطناعي يقلّص وقت القرار من أيام إلى دقائق — ويُحسّن الدقة.',
                color: '#00BFFF',
                icon: Brain,
              },
              {
                pillar: 'الأتمتة',
                mechanism: 'الإنتاجية، تكلفة الخدمة، وقت الوصول للسوق',
                outcome: 'مخرجات أكثر بتكلفة أقل وأخطاء أقل',
                example: 'فرق العمل المعززة بالذكاء الاصطناعي تؤتمت المهام المتكررة — ويُعاد توزيع الكوادر على أعمال عالية القيمة.',
                color: '#00BFFF',
                icon: Zap,
              },
              {
                pillar: 'الثقة',
                mechanism: 'المرونة، السيادة، وضع التدقيق',
                outcome: 'ثقة تمكّن النمو',
                example: 'معمارية Zero Trust تمكّن التوسع الرقمي الآمن — فيصبح الامتثال عامل تمكين لا عائقًا.',
                color: '#00BFFF',
                icon: Shield,
              },
            ].map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${p.color}15`, color: p.color }}>
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base" style={{ color: p.color }}>{p.pillar}</h3>
                </div>
                <p className="text-sm font-medium text-text-primary mb-1">{p.mechanism}</p>
                <p className="text-tiny text-text-muted mb-3">{p.outcome}</p>
                <div className="border-t border-white/5 pt-3">
                  <p className="text-tiny text-text-muted italic">{p.example}</p>
                </div>
              </div>
            ))}
          </div>

          {/* الأثر المتراكم */}
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-6 md:p-8">
            <h3 className="font-bold text-lg mb-3">الأثر المتراكم</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { issue: 'ذكاء بدون أتمتة', result: 'رؤى لا تُنفَّذ.' },
                { issue: 'أتمتة بدون ذكاء', result: 'كفاءة بلا اتجاه.' },
                { issue: 'ثقة بدون الاثنين', result: 'أمن يعيق التقدم.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: ACCENT }} />
                  <div>
                    <p className="text-sm font-medium text-text-primary">{item.issue}</p>
                    <p className="text-tiny text-text-muted">{item.result}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-sm leading-relaxed mt-5 pt-5 border-t border-white/5">
              حين تُطبَّق معًا: الذكاء يوجّه الأتمتة، والأتمتة تنفّذ الذكاء، والثقة تمكّنهما من العمل على نطاق واسع.
              <strong className="text-text-primary"> الركائز الثلاث تتراكم.</strong>
            </p>
          </div>
        </motion.section>

        {/* ═══ 5. دورة حياة تحقيق القيمة ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>دورة حياة تحقيق القيمة</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">القيمة تتحقق عبر دورة حياة التحول الكاملة — وليس عند التشغيل فقط، بل بعده.</h2>
          <p className="text-text-muted text-lg mb-10 max-w-[720px] leading-relaxed">
            معظم الشركات تتوقف عند البناء — فتتآكل القيمة. بيونك تتحمل المسؤولية عبر التشغيل والتطور — وهنا تتراكم القيمة ربعاً بعد ربع.
          </p>
          <div className="space-y-3">
            {[
              { phase: 'التواصل الأولي', color: '#00BFFF', icon: Target, what: 'الاستكشاف، الجاهزية، دراسة الجدوى', value: 'وضوح حول ما ينبغي تحويله، ولماذا، وما القيمة المتوقعة' },
              { phase: 'التصميم', color: '#00BFFF', icon: Layers, what: 'المعمارية، خارطة الطريق، الحوكمة', value: 'خطة تحول بأهداف قابلة للقياس وجداول زمنية محددة' },
              { phase: 'البناء', color: '#00BFFF', icon: Zap, what: 'النشر، التكامل، التبني', value: 'منصات تشغيلية، مستخدمون منضمون، سير عمل حي' },
              { phase: 'التشغيل', color: '#00BFFF', icon: RefreshCw, what: 'التشغيل، المراقبة، التحسين', value: 'منصات عاملة، مشكلات محلولة، مقاييس متتبعة — تمكين مستمر للتحول' },
              { phase: 'التطوّر', color: '#00BFFF', icon: TrendingUp, what: 'الابتكار، التوسع، النطاق', value: 'قدرات جديدة مُضافة، نطاق موسع، قيمة متراكمة ربعًا بعد ربع' },
            ].map((phase, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-white/10 transition-all duration-300 flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${phase.color}15`, color: phase.color }}>
                  <phase.icon className="w-6 h-6" />
                </div>
                <div className="flex-shrink-0 w-24">
                  <p className="text-sm font-bold" style={{ color: phase.color }}>{phase.phase}</p>
                  <p className="text-tiny text-text-muted">{phase.what}</p>
                </div>
                <div className="hidden md:block w-6 text-center text-text-muted text-lg">←</div>
                <div className="flex-1">
                  <p className="text-sm text-text-primary">{phase.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 6. لوحة مؤشرات الأداء التنفيذية ═══ */}
        <motion.section ref={ref4} {...fadeIn} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>لوحة مؤشرات الأداء التنفيذية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">كل مشروع محكوم بمؤشرات أداء قابلة للقياس عبر الآفاق الأربعة للقيمة.</h2>
          <p className="text-text-muted text-lg mb-10 max-w-[720px] leading-relaxed">
            فيما يلي إطار القياس — الفئات التي نتتبعها ونقيسها ونحكمها عبر كل مشروع.
            لا أرقام ملفقة ولا ادعاءات مبالغ فيها — النظام الذي يحكم تحقيق القيمة.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                horizon: 'النمو',
                color: '#00BFFF',
                icon: TrendingUp,
                kpis: ['نمو الإيرادات', 'توسع العملاء', 'خدمات رقمية جديدة', 'استجابة السوق', 'أداء القنوات'],
              },
              {
                horizon: 'الكفاءة',
                color: '#00BFFF',
                icon: Zap,
                kpis: ['وقت الوصول للسوق', 'تكلفة الخدمة', 'إنتاجية العمليات', 'تغطية الأتمتة', 'استغلال الموارد'],
              },
              {
                horizon: 'المرونة',
                color: '#00BFFF',
                icon: Shield,
                kpis: ['جاهزية التعافي', 'الوضع الأمني', 'نضج الامتثال', 'ثقة التدقيق', 'وقت الاستجابة للتهديدات'],
              },
              {
                horizon: 'القدرات',
                color: '#00BFFF',
                icon: Brain,
                kpis: ['تبني الذكاء الاصطناعي', 'تغطية الأتمتة', 'نضج البيانات', 'استغلال المنصات', 'قدرات القوى العاملة'],
              },
            ].map((h, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${h.color}15`, color: h.color }}>
                    <h.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm" style={{ color: h.color }}>{h.horizon}</h3>
                </div>
                <ul className="space-y-2">
                  {h.kpis.map((kpi, j) => (
                    <li key={j} className="flex items-center gap-2 text-tiny text-text-muted">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: h.color }} />
                      {kpi}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 7. تراكم القيمة المؤسسية ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-28"
        >
          <SectionLabel>تراكم القيمة المؤسسية</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            لسنا شركة مشاريع، ولسنا شركة منتجات.<br />
            <span style={{ color: ACCENT }}>نحن شركة تراكم القدرات.</span>
          </h2>

          {/* الدورة */}
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12 mb-8">
            <div className="space-y-6">
              {[
                { step: 'بيانات أفضل', leads: 'قرارات أفضل', desc: 'بيانات موحدة ومحكومة ومهيأة للذكاء الاصطناعي — كل مشروع يُحسّن جودة البيانات عبر المؤسسة. البيانات النظيفة تغذي القرارات السليمة.' },
                { step: 'قرارات أفضل', leads: 'إجراءات أفضل', desc: 'رؤى مدعومة بالذكاء الاصطناعي على المستويات الاستراتيجية والتشغيلية والتكتيكية. قرارات أسرع وأدق وأكثر اتساقًا.' },
                { step: 'إجراءات أفضل', leads: 'نتائج أفضل', desc: 'تنفيذ آلي، دورات عمل مختصرة، أخطاء أقل. الذكاء يتدفق إلى العمليات — لا يبقى حبيس لوحات المعلومات.' },
                { step: 'نتائج أفضل', leads: 'قدرة استثمارية أكبر', desc: 'نمو الإيرادات، توسع الهوامش، خفض المخاطر. نتائج قابلة للقياس تموّل الدورة التالية من التحول.' },
                { step: 'قدرة استثمارية أكبر', leads: 'قدرات مؤسسية أقوى', desc: 'إعادة استثمار في المنصات والبيانات والذكاء الاصطناعي والكفاءات. المؤسسة تصبح أقوى مع كل دورة — وليس فقط أكثر كفاءة.' },
                { step: 'قدرات مؤسسية أقوى', leads: 'بيانات أفضل', desc: 'المنصات الأقوى تجمع بيانات أغنى. البيانات الأغنى تمكّن ذكاءً أعمق. الذكاء الأعمق يقود قرارات أسرع. الدورة تتسارع.', restart: true },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0" style={{ backgroundColor: ACCENT }}>
                      {item.restart ? '↻' : i + 1}
                    </div>
                    {i < 5 && <div className="w-0.5 h-10 mt-1" style={{ backgroundColor: '#00BFFF30' }} />}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <h3 className="font-bold text-base text-text-primary">{item.step}</h3>
                      <span className="text-sm" style={{ color: ACCENT }}>→ {item.leads}</span>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed mt-1.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* بيان ختامي */}
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-6 md:p-8 text-center">
            <p className="text-text-primary font-semibold text-lg mb-2">
              هذا هو جوهر ما نقدمه.
            </p>
            <p className="text-text-muted leading-relaxed max-w-[640px] mx-auto">
              كل مشروع يبني قدرات مؤسسية تتراكم — وليس عمليات نشر لمرة واحدة تتآكل.
              بيانات أفضل تمكّن قرارات أفضل. قرارات أفضل تقود إجراءات أفضل. إجراءات أفضل تنتج نتائج أفضل.
              نتائج أفضل تموّل استثمارات أكبر. استثمارات أكبر تبني قدرات أقوى.
              قدرات أقوى تجمع بيانات أفضل.
              <strong className="text-text-primary"> الدورة تتسارع.</strong>
            </p>
          </div>
        </motion.section>

        {/* ═══ 8. دعوة للعمل + تنقل متبادل ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12 text-center mb-12">
            <SectionLabel>الخطوة التالية</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              هل أنتم مستعدون لرؤية كيف تنطبق منظومة القيمة المؤسسية على مؤسستكم؟
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">
              دعونا نناقش كيف تتوافق هذه الآفاق الأربعة ومنطق القيمة المتراكمة مع سياقكم المؤسسي المحدد.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/ar/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #00BFFF20' }}
              >
                احجز جلسة استراتيجية
                <ArrowRight className="w-4 h-4 rotate-180" />
              </Link>
              <Link
                to="/ar/architecture"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#00BFFF]/30"
              >
                استكشف معمارية التحول المؤسسي
              </Link>
            </div>
          </div>

          {/* تنقل متبادل */}
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-5 text-text-muted">ماذا تود استكشافه بعد ذلك؟</h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { label: 'المعمارية', path: '/ar/architecture' },
                { label: 'القدرات', path: '/ar/capabilities/ai' },
                { label: 'القطاعات', path: '/ar/industries/government' },
                { label: 'المخططات', path: '/ar/blueprints' },
              ].map((link) => (
                <Link key={link.label} to={link.path}
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-white/10 rounded-full text-sm font-medium text-text-primary hover:border-[#00BFFF]/30 transition-all hover:-translate-y-0.5">
                  {link.label} <ArrowRight className="w-3.5 h-3.5 rotate-180" style={{ color: ACCENT }} />
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
