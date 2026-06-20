import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
      <div className="container mx-auto px-4 lg:px-12 max-w-4xl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">المخططات المرجعية</h1>
          <p className="text-xl text-text-muted mb-4">معماريات مرجعية مثبتة للتحول المؤسسي</p>
          <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">المخططات المرجعية من بيونك هي معماريات تحولية موثقة تشمل الحكومة والبنوك والطاقة والرعاية الصحية والمؤسسات الكبرى. كل مخطط يوثق التحدي، الحل، والنتائج المحققة.</p>
        </motion.div>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">حكومي</h2>
          <p className="text-text-muted leading-relaxed">منصة الذكاء السيادي، نسيج البيانات بين الوزارات، مركز العمليات السيبرانية الوطني — معماريات مثبتة للتحول الحكومي.</p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">بنوك</h2>
          <p className="text-text-muted leading-relaxed">كشف الاحتيال الفوري، منصة Customer 360، بنية تحتية مصرفية متوافقة مع البنك المركزي السعودي.</p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">طاقة</h2>
          <p className="text-text-muted leading-relaxed">الذكاء الصناعي والعمليات التنبؤية، تكامل OT/IT والعمليات الآمنة.</p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">رعاية صحية</h2>
          <p className="text-text-muted leading-relaxed">تجربة المريض الذكية، الذكاء السريري والذكاء الاصطناعي الطبي.</p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">مؤسسات كبرى</h2>
          <p className="text-text-muted leading-relaxed">تحول القوى العاملة الوكيلة، Zero Trust المؤسسي، Customer 360 والمشاركة الذكية.</p>
        </section>
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <Link to="/ar/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent-primary text-white font-semibold rounded-full hover:bg-accent-secondary transition-all">
            ابدأ المحادثة
            <ArrowRight className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
