import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
      <div className="container mx-auto px-4 lg:px-12 max-w-4xl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">من نحن</h1>
          <p className="text-xl text-text-muted mb-4">قصة بيونك سوليوشنز</p>
          <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">نحن شركة سعودية متخصصة في تكامل التحول المؤسسي للذكاء الاصطناعي. ندمج الذكاء والأتمتة والثقة في صميم الأعمال السعودية، من القطاع الحكومي إلى المؤسسات الكبرى. فريقنا من المهندسين المعماريين وخبراء الذكاء الاصطناعي والمتخصصين في الأمن السيبراني يعملون معًا لتصميم وتنفيذ وإدارة منصات التحول المؤسسي.</p>
        </motion.div>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">رؤيتنا</h2>
          <p className="text-text-muted leading-relaxed">أن نكون المكامل الرائد للتحول المؤسسي في المملكة العربية السعودية — نربط بين الذكاء الاصطناعي والأتمتة والثقة لدفع عجلة رؤية 2030.</p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">مهمتنا</h2>
          <p className="text-text-muted leading-relaxed">تصميم ونشر وإدارة تحول الذكاء الاصطناعي المؤسسي الذي يحقق قيمة قابلة للقياس للمؤسسات السعودية — من الاستراتيجية إلى العمليات.</p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">قيمنا</h2>
          <p className="text-text-muted leading-relaxed">التميز المعماري. النزاهة المؤسسية. التركيز على العميل. الابتكار المتواصل. الالتزام بالسيادة الرقمية.</p>
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
