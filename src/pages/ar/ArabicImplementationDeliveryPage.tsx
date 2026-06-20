import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ArabicImplementationDeliveryPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
      <div className="container mx-auto px-4 lg:px-12 max-w-4xl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/5 mb-6">
            <span className="text-small" style={{color:'#F59E0B'}}></span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">التنفيذ والتسليم</h1>
          <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">تحويل الاستراتيجية إلى واقع تشغيلي.</p>
        </motion.div>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">نشر الذكاء الاصطناعي والأتمتة</h2>
          <p className="text-text-muted leading-relaxed mb-4">نشر وإطلاق أنظمة الذكاء الاصطناعي والأتمتة على مستوى الإنتاج.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">تسليم المنصات والتطبيقات</h2>
          <p className="text-text-muted leading-relaxed mb-4">بناء ونشر منصات الأعمال والتطبيقات المؤسسية.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">بناء منصة البيانات</h2>
          <p className="text-text-muted leading-relaxed mb-4">إنشاء منصات بيانات جاهزة للذكاء الاصطناعي مع خطوط أنابيب آلية.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">تطبيق نموذج Zero Trust</h2>
          <p className="text-text-muted leading-relaxed mb-4">تنفيذ معمارية Zero Trust على مستوى المؤسسة.</p>
        </section>
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <Link to="/ar/contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-full transition-all shadow-lg"
            style={{ backgroundColor: '#F59E0B', boxShadow: '0 8px 24px #F59E0B20' }}>
            ابدأ المحادثة
            <ArrowRight className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
