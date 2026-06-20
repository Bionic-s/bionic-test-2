import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
      <div className="container mx-auto px-4 lg:px-12 max-w-4xl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">سياسة ملفات تعريف الارتباط</h1>
          <p className="text-xl text-text-muted mb-4">كيف نستخدم ملفات تعريف الارتباط</p>
          <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل أداء الموقع.</p>
        </motion.div>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">أنواع ملفات تعريف الارتباط</h2>
          <p className="text-text-muted leading-relaxed">نستخدم ملفات تعريف ارتباط أساسية لتشغيل الموقع، وملفات تحليلية لفهم كيفية استخدام الزوار لموقعنا.</p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">التحكم</h2>
          <p className="text-text-muted leading-relaxed">يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات متصفحك. قد يؤثر تعطيلها على وظائف معينة في الموقع.</p>
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
