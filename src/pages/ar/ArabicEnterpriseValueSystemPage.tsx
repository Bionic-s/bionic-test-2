import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
      <div className="container mx-auto px-4 lg:px-12 max-w-4xl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">نظام القيمة المؤسسية</h1>
          <p className="text-xl text-text-muted mb-4">كيف تتراكم القيمة عبر آفاق التحول</p>
          <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">نظام القيمة المؤسسية من بيونك يحدد كيفية تراكم القيمة عبر ثلاث آفاق زمنية — من المكاسب السريعة إلى التحول طويل الأمد. كل أفق يبني على سابقه، مما يخلق أثرًا مركبًا للقيمة المؤسسية.</p>
        </motion.div>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">الأفق الأول: الكفاءة التشغيلية</h2>
          <p className="text-text-muted leading-relaxed">تحقيق قيمة سريعة من خلال أتمتة العمليات، تحسين التكاليف، ورفع الإنتاجية. نتائج قابلة للقياس خلال 3–6 أشهر.</p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">الأفق الثاني: التميز التنافسي</h2>
          <p className="text-text-muted leading-relaxed">بناء قدرات متمايزة من خلال الذكاء الاصطناعي المتقدم، تحليلات البيانات، وتحسين تجربة العملاء. قيمة مستدامة خلال 6–18 شهرًا.</p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">الأفق الثالث: الريادة التحولية</h2>
          <p className="text-text-muted leading-relaxed">تحقيق الريادة في القطاع من خلال نماذج أعمال جديدة، منظومات ذكاء مبتكرة، وموقع تنافسي دائم. قيمة استراتيجية على المدى الطويل.</p>
        </section>
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <Link to="/ar/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent-primary text-white font-semibold rounded-full hover:bg-accent-secondary transition-all">
            تواصل معنا
            <ArrowRight className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
