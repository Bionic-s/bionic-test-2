import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Eye, MapPin, Building2, ShieldCheck } from 'lucide-react';

const footerLinks_ar = [
  { label: 'من نحن', to: '/ar/about' },
  { label: 'قدراتنا', to: '/ar/capabilities' },
  { label: 'القطاعات', to: '/ar/industries' },
  { label: 'اتصل بنا', to: '/ar#contact' },
  { label: 'سياسة الخصوصية', to: '/ar/privacy' },
];

export default function ArabicAboutPage() {
  const y = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-[#0B0D10] text-white font-sans" dir="rtl" lang="ar" style={{ fontFamily: "'Tajawal', sans-serif" }}>
      <nav className="fixed top-0 inset-x-0 z-[100] backdrop-blur-[10px] bg-[#0B0D1088] border-b border-white/5">
        <div className="max-w-[1180px] mx-auto px-7 flex items-center justify-between h-[68px]">
          <Link to="/ar" className="flex items-center">
            <img src="/test-site-2/bionic-full-white.svg" alt="Bionic Solutions" className="h-8 w-auto" />
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/ar" className="flex items-center gap-1.5 text-sm text-[#9AA4AF] hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              العودة إلى الرئيسية
            </Link>
            <Link to="/" className="group relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-white/10 hover:border-[#00BFFF40] bg-white/[0.02] hover:bg-[#00BFFF08] transition-all duration-300" aria-label="English version"><span className="text-xs opacity-50 group-hover:opacity-100 transition-opacity">🇬🇧</span><span className="text-[11px] font-medium text-[#5B6470] group-hover:text-white transition-colors tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>EN</span></Link>
          </div>
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
            <h2 className="text-2xl font-bold mb-6">روحنا المؤسسية</h2>
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

      {/* Footer */}
      <footer className="bg-[#12161C] border-t border-white/5" style={{ fontFamily: "'Tajawal', sans-serif" }}>
        <div className="max-w-[1180px] mx-auto px-7 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src="/test-site-2/bionic-full-white.svg" alt="Bionic Solutions" className="h-7 w-auto opacity-70" />
              <span className="text-xs text-[#5B6470]">شريك التحول المؤسسي للذكاء الاصطناعي</span>
            </div>
            <div className="flex items-center gap-5 text-sm text-[#9AA4AF]">
              {footerLinks_ar.map((l, i) => (
                <Link key={i} to={l.to} className="hover:text-[#00BFFF] transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>
          <div className="border-t border-white/5 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#5B6470]">
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-[10px] tracking-wider">🇸🇦 متوائم مع رؤية السعودية 2030</span>
            <div className="flex items-center gap-4">
              <a href="mailto:info@bionics.com.sa" className="hover:text-[#00BFFF] transition-colors">info@bionics.com.sa</a>
              <span className="text-white/10">|</span>
              <span>© {y} Bionic Solutions</span>
              <span className="text-white/10">|</span>
              <Link to="/" className="hover:text-[#00BFFF] transition-colors">English</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
