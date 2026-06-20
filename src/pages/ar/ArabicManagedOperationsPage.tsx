import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ArabicManagedOperationsPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
      <div className="container mx-auto px-4 lg:px-12 max-w-4xl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/5 mb-6">
            <span className="text-small" style={{color:'#7C3AED'}}></span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">العمليات المدارة</h1>
          <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">عمليات منصات 24×7، AIOps، SRE، FinOps — ثلاثة مستويات: أساسي، متقدم، نخبوي.</p>
        </motion.div>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">عمليات التقنية 24×7</h2>
          <p className="text-text-muted leading-relaxed mb-4">تشغيل وإدارة المنصات على مدار الساعة مع مراقبة استباقية واستجابة للحوادث.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">مركز العمليات الأمنية كخدمة</h2>
          <p className="text-text-muted leading-relaxed mb-4">حماية سيبرانية مستمرة مع كشف تهديدات وصيد تهديدات واستجابة للحوادث.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">حوكمة FinOps</h2>
          <p className="text-text-muted leading-relaxed mb-4">إدارة وتحسين التكاليف عبر البيئات السحابية والمحلية.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">هندسة المنصات</h2>
          <p className="text-text-muted leading-relaxed mb-4">تطوير وتشغيل منصات المطورين الداخلية للخدمة الذاتية.</p>
        </section>
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <Link to="/ar/contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-full transition-all shadow-lg"
            style={{ backgroundColor: '#7C3AED', boxShadow: '0 8px 24px #7C3AED20' }}>
            تواصل معنا
            <ArrowRight className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
