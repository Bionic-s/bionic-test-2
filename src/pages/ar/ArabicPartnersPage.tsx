import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
      <div className="container mx-auto px-4 lg:px-12 max-w-4xl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">منظومة الشركاء</h1>
          <p className="text-xl text-text-muted mb-4">11 شريكًا تقنيًا عالميًا. علاقة واحدة.</p>
          <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">نجمع أفضل التقنيات العالمية تحت مظلة واحدة — لتحصل على أفضل ما في كل منصة دون التعقيد. شراكاتنا مع Salesforce، IBM، Dell، Intel، Google، MuleSoft، Informatica، Tableau، Red Hat، Platform9، و Lenovo تمكننا من تصميم الحل الأمثل لكل تحدي.</p>
        </motion.div>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">شراكات استراتيجية</h2>
          <p className="text-text-muted leading-relaxed">نحن لسنا بائعين. نحن معماريون نختار التقنيات المناسبة لكل حالة استخدام — مدفوعين بالملاءمة المعمارية، وليس بحوافز إعادة البيع. كل شريك يمر عبر تقييم صارم للقدرات والأمن والتوافق مع المتطلبات السعودية.</p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">حوكمة متعددة المزودين</h2>
          <p className="text-text-muted leading-relaxed">نموذج الحوكمة الموحد لدينا يضمن المساءلة عبر جميع المزودين — نقطة اتصال واحدة، عقد واحد، مسؤولية واحدة عن النتائج.</p>
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
