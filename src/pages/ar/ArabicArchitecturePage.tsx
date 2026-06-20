import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
      <div className="container mx-auto px-4 lg:px-12 max-w-4xl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">معمارية التحول المؤسسي</h1>
          <p className="text-xl text-text-muted mb-4">10 طبقات. منظومة واحدة متكاملة.</p>
          <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">معمارية التحول المؤسسي من بيونك هي إطار متكامل من 10 طبقات يربط بين استراتيجية الأعمال والتنفيذ التقني. من الحوكمة والاستراتيجية إلى البنية التحتية والعمليات — كل طبقة مصممة للتكامل مع الطبقات الأخرى ضمن رؤية موحدة للتحول المؤسسي.</p>
        </motion.div>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">طبقات المعمارية</h2>
          <p className="text-text-muted leading-relaxed">تشمل معماريتنا: الحوكمة المؤسسية، استراتيجية التحول، الذكاء الاصطناعي والأتمتة، البيانات والتحليلات، تطبيقات الأعمال، التكامل المؤسسي، الأمن السيبراني، البنية التحتية السيادية، العمليات المدارة، والتحسين المستمر.</p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">منهجية متكاملة</h2>
          <p className="text-text-muted leading-relaxed">خلافًا للمناهج التقليدية المنعزلة، تربط معماريتنا جميع الطبقات ضمن إطار حوكمة واحد — مما يضمن توافق كل مكون مع الاستراتيجية المؤسسية والأهداف الوطنية.</p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">مصممة للسعودية</h2>
          <p className="text-text-muted leading-relaxed">كل طبقة مصممة لتتوافق مع متطلبات الهيئة الوطنية للأمن السيبراني (NCA)، ونظام حماية البيانات الشخصية (PDPL)، ورؤية 2030 — السيادة والأمن والامتثال مدمجة في المعمارية من اليوم الأول.</p>
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
