import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ArabicConsultingAdvisoryPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
      <div className="container mx-auto px-4 lg:px-12 max-w-4xl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#00BFFF]/30 bg-[#00BFFF]/5 mb-6">
            <span className="text-small" style={{color:'#00BFFF'}}></span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">الاستشارات والتخطيط</h1>
          <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">الأساس الذي يسبق كل تحول ناجح.</p>
        </motion.div>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">تقييم الجاهزية للذكاء الاصطناعي</h2>
          <p className="text-text-muted leading-relaxed mb-4">تقييم شامل لقدرات مؤسستكم الحالية واستعدادها لتبني الذكاء الاصطناعي المؤسسي.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">استشارات الامتثال والحوكمة</h2>
          <p className="text-text-muted leading-relaxed mb-4">مواءمة استراتيجية التحول مع متطلبات NCA و SAMA و PDPL.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">المعمارية المؤسسية</h2>
          <p className="text-text-muted leading-relaxed mb-4">تصميم معمارية التحول المؤسسي من 10 طبقات ضمن إطار متكامل.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">استراتيجية التحول المؤسسي</h2>
          <p className="text-text-muted leading-relaxed mb-4">تطوير خارطة طريق تحول شاملة لمدة 12-36 شهرًا.</p>
        </section>
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <Link to="/ar/contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-full transition-all shadow-lg"
            style={{ backgroundColor: '#00BFFF', boxShadow: '0 8px 24px #00BFFF20' }}>
            ابدأ المحادثة
            <ArrowRight className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
