import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24" dir="rtl">
      <div className="container mx-auto px-4 lg:px-12 max-w-4xl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">المنتجات</h1>
          <p className="text-xl text-text-muted mb-4">4 ألسنة · 10 فئات · +50 منتج</p>
          <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">منظومة الذكاء الاصطناعي الكاملة — من المحمول إلى السحابة. نوفر منظومة مؤسسية متكاملة من المنتجات والحلول التقنية عبر ثلاث ركائز: الذكاء، الأتمتة، والثقة.</p>
        </motion.div>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">الذكاء</h2>
          <p className="text-text-muted leading-relaxed">الذكاء الاصطناعي المؤسسي وتعلم الآلة (watsonx, Vertex AI, Agentforce)، البيانات والتحليلات (Tableau, Informatica, BigQuery)، محطات عمل وأجهزة الذكاء الاصطناعي (Precision, ThinkPad P-Series, Core Ultra).</p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">الأتمتة</h2>
          <p className="text-text-muted leading-relaxed">إدارة علاقات العملاء وتجربة العميل (Sales, Service, Marketing Cloud)، التكامل والأتمتة (MuleSoft, Ansible, API Management)، الاستشارات والاستراتيجية (جاهزية الذكاء الاصطناعي، المعمارية، خارطة الطريق).</p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">الثقة</h2>
          <p className="text-text-muted leading-relaxed">الخوادم والتخزين (PowerEdge, ThinkSystem, FlashSystem)، مسرعات ومعالجات الذكاء الاصطناعي (Gaudi 3, NVIDIA H100, Intel GPU Max)، الأمن السيبراني (QRadar, Guardium, Cyber Recovery)، السحابة والبنية فائقة التقارب (VxRail, ThinkAgile, APEX, OpenShift).</p>
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
