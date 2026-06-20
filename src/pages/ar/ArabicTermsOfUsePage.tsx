import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
      <div className="container mx-auto px-4 lg:px-12 max-w-4xl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">شروط الاستخدام</h1>
          <p className="text-xl text-text-muted mb-4">الشروط والأحكام</p>
          <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">باستخدامك لموقع بيونك سوليوشنز، فإنك توافق على شروط الاستخدام التالية.</p>
        </motion.div>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">الملكية الفكرية</h2>
          <p className="text-text-muted leading-relaxed">جميع المحتويات والعلامات التجارية والمواد المنشورة على هذا الموقع هي ملكية حصرية لشركة بيونك سوليوشنز.</p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">حدود المسؤولية</h2>
          <p className="text-text-muted leading-relaxed">نحن نبذل قصارى جهدنا لضمان دقة المعلومات، ولكننا لا نضمن اكتمالها أو حداثتها للاستخدام في اتخاذ القرارات.</p>
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
