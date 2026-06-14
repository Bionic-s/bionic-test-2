import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Eye, MapPin, Building2, ShieldCheck } from 'lucide-react';

export default function ArabicAboutPage() {
  return (
    <div className="min-h-screen bg-[#0B0D10] text-white font-sans" dir="rtl" lang="ar" style={{ fontFamily: "'Tajawal', sans-serif" }}>
      <nav className="fixed top-0 inset-x-0 z-[100] backdrop-blur-[10px] bg-[#0B0D1088] border-b border-white/5">
        <div className="max-w-[1180px] mx-auto px-7 flex items-center justify-between h-[68px]">
          <Link to="/ar" className="flex items-center">
            <img src="/test-site-2/bionic-full-white.svg" alt="Bionic Solutions" className="h-8 w-auto" />
          </Link>
          <Link to="/ar" className="flex items-center gap-1.5 text-sm text-[#9AA4AF] hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            العودة للرئيسية
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-24">
        <div className="max-w-[1180px] mx-auto px-7">
          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20">
            <span className="text-sm text-[#00BFFF] font-medium">من نحن</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-4">شريك التحول المؤسسي للذكاء الاصطناعي</h1>
            <p className="text-[#9AA4AF] text-lg max-w-3xl leading-relaxed">
              Bionic Solutions شركة استشارية وتقنية سعودية متخصصة في تمكين المؤسسات من تصميم وبناء وتشغيل مستقبلها الرقمي. نعمل عند تقاطع الذكاء الاصطناعي والأتمتة المؤسسية والأمن السيبراني — داخل المملكة، وللمملكة.
            </p>
          </motion.div>

          {/* 3 Value cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
            {[
              { icon: <Target className="w-5 h-5" />, title: 'رسالتنا', desc: 'تمكين المؤسسات السعودية من التحول الرقمي الذكي عبر تصميم وتنفيذ وتشغيل حلول متكاملة تجمع بين الذكاء والأتمتة والثقة.', color: '#00BFFF' },
              { icon: <Eye className="w-5 h-5" />, title: 'رؤيتنا', desc: 'أن نكون شريك التحول المؤسسي الأول للذكاء الاصطناعي في المملكة العربية السعودية — نصنع المعيار الذي يُقاس به.', color: '#A78BFA' },
              { icon: <ShieldCheck className="w-5 h-5" />, title: 'قيمنا', desc: 'السيادة الرقمية. التنفيذ المتقن. الشفافية. الالتزام بالنتائج — لا بالوعود.', color: '#34D399' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-[#12161C] border border-white/5 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${item.color}15`, color: item.color }}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[#9AA4AF] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* DNA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gradient-to-l from-[#12161C] to-[#1A1F28] border border-white/5 rounded-2xl p-8 md:p-12 mb-20">
            <h2 className="text-2xl font-bold mb-6">حمضنا النووي</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#9AA4AF] leading-relaxed">
              <div>
                <div className="text-[#00BFFF] font-bold text-lg mb-2">ننفذ</div>
                <p>لغة أعمالنا هي التسليم — وليس العروض التقديمية. نصمم، نبني، ونشغّل. كل خط من خطوط أعمالنا السبعة يقوده فريق تنفيذي، لا فريق مبيعات.</p>
              </div>
              <div>
                <div className="text-[#A78BFA] font-bold text-lg mb-2">نلتزم</div>
                <p>نعمل داخل المملكة، بفريق سعودي، وبشراكات عالمية. سيادة بياناتك وأمنها خط أحمر — لا نتنازل عنه، ولا نلف حوله.</p>
              </div>
              <div>
                <div className="text-[#34D399] font-bold text-lg mb-2">نضمن</div>
                <p>لا نسلّم ونمشي. نشغّل ونضمن. عقودنا تمتد لما بعد التنفيذ — لأن القيمة الحقيقية تظهر في العمليات المستمرة، وليس في حفلات التسليم.</p>
              </div>
            </div>
          </motion.div>

          {/* Locations */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4 text-[#00BFFF]">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium">مكاتبنا</span>
            </div>
            <div className="flex items-center justify-center gap-8 text-[#9AA4AF] text-sm">
              <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4" /> جدة</span>
              <span className="text-[#5B6470]">·</span>
              <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4" /> الرياض</span>
              <span className="text-[#5B6470]">·</span>
              <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4" /> الدمام</span>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#12161C] border-t border-white/5 py-6 text-center text-xs text-[#5B6470]">
        <div className="max-w-[1180px] mx-auto px-7">
          <Link to="/ar" className="hover:text-[#00BFFF] transition-colors">الرئيسية</Link>
          {' · '}متوائم مع رؤية السعودية 2030
        </div>
      </footer>
    </div>
  );
}
