import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ArabicServicesHub() {
  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
      <div className="container mx-auto px-4 lg:px-12 max-w-4xl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#00BFFF]/30 bg-[#00BFFF]/5 mb-6">
            <span className="text-small" style={{color:'#00BFFF'}}></span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">خدماتنا</h1>
          <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">ثلاثة نماذج تنفيذ تغطي دورة حياة التحول المؤسسي الكاملة.</p>
        </motion.div>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">الاستشارات والتخطيط</h2>
          <p className="text-text-muted leading-relaxed mb-4">الاستراتيجية، المعمارية، تقييم الجاهزية للذكاء الاصطناعي، وخرائط طريق الامتثال.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            <div className="bg-bg-secondary border border-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-1 text-text-primary">تقييم الجاهزية للذكاء الاصطناعي</h3>
              <p className="text-tiny text-text-muted leading-relaxed">تقييم شامل لقدرات مؤسستكم واستعدادها لتبني الذكاء الاصطناعي المؤسسي.</p>
            </div>
            <div className="bg-bg-secondary border border-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-1 text-text-primary">استشارات الامتثال والحوكمة</h3>
              <p className="text-tiny text-text-muted leading-relaxed">مواءمة استراتيجيتكم مع متطلبات NCA و SAMA و PDPL.</p>
            </div>
            <div className="bg-bg-secondary border border-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-1 text-text-primary">المعمارية المؤسسية</h3>
              <p className="text-tiny text-text-muted leading-relaxed">تصميم معمارية التحول المؤسسي من 10 طبقات.</p>
            </div>
            <div className="bg-bg-secondary border border-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-1 text-text-primary">استراتيجية التحول المؤسسي</h3>
              <p className="text-tiny text-text-muted leading-relaxed">خارطة طريق تحول شاملة مرتبطة بأهداف الأعمال.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">التنفيذ والتسليم</h2>
          <p className="text-text-muted leading-relaxed mb-4">نشر المنصات، التكامل، التبني، والحوكمة — تحويل الاستراتيجية إلى واقع تشغيلي.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            <div className="bg-bg-secondary border border-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-1 text-text-primary">نشر الذكاء الاصطناعي والأتمتة</h3>
              <p className="text-tiny text-text-muted leading-relaxed">نشر وإطلاق أنظمة الذكاء والأتمتة على مستوى الإنتاج.</p>
            </div>
            <div className="bg-bg-secondary border border-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-1 text-text-primary">تسليم المنصات والتطبيقات</h3>
              <p className="text-tiny text-text-muted leading-relaxed">بناء ونشر منصات الأعمال والتطبيقات المؤسسية.</p>
            </div>
            <div className="bg-bg-secondary border border-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-1 text-text-primary">بناء منصة البيانات</h3>
              <p className="text-tiny text-text-muted leading-relaxed">إنشاء منصات بيانات جاهزة للذكاء الاصطناعي مع حوكمة متكاملة.</p>
            </div>
            <div className="bg-bg-secondary border border-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-1 text-text-primary">تطبيق نموذج Zero Trust</h3>
              <p className="text-tiny text-text-muted leading-relaxed">تنفيذ معمارية Zero Trust على مستوى المؤسسة.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">العمليات المدارة</h2>
          <p className="text-text-muted leading-relaxed mb-4">عمليات منصات 24×7، AIOps، SRE، FinOps — التحسين المستمر.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            <div className="bg-bg-secondary border border-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-1 text-text-primary">عمليات التقنية 24×7</h3>
              <p className="text-tiny text-text-muted leading-relaxed">تشغيل وإدارة المنصات على مدار الساعة مع مراقبة استباقية.</p>
            </div>
            <div className="bg-bg-secondary border border-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-1 text-text-primary">مركز العمليات الأمنية كخدمة</h3>
              <p className="text-tiny text-text-muted leading-relaxed">حماية سيبرانية مستمرة مع كشف تهديدات واستجابة.</p>
            </div>
            <div className="bg-bg-secondary border border-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-1 text-text-primary">حوكمة FinOps</h3>
              <p className="text-tiny text-text-muted leading-relaxed">إدارة وتحسين التكاليف عبر البيئات السحابية والمحلية.</p>
            </div>
            <div className="bg-bg-secondary border border-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-1 text-text-primary">هندسة المنصات</h3>
              <p className="text-tiny text-text-muted leading-relaxed">تطوير وتشغيل منصات المطورين الداخلية للخدمة الذاتية.</p>
            </div>
          </div>
        </section>
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <Link to="/ar/contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-full transition-all shadow-lg"
            style={{ backgroundColor: '#00BFFF', boxShadow: '0 8px 24px #00BFFF20' }}>
            تواصل معنا
            <ArrowRight className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
