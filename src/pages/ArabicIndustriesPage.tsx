import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, Landmark, Factory, Heart, Building } from 'lucide-react';

const industries = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'القطاع الحكومي',
    desc: 'نمكن الجهات الحكومية من بناء منصات رقمية سيادية، مراكز عمليات أمنية متكاملة، ومنصات بيانات موحدة بين الجهات — متوافقة مع أعلى المعايير التنظيمية.',
    tags: ['سيادة رقمية', 'حوكمة', 'NCA', 'اعتماد'],
  },
  {
    icon: <Landmark className="w-6 h-6" />,
    title: 'البنوك والخدمات المالية',
    desc: 'نساعد المؤسسات المالية على بناء منصة موحدة لرؤية العملاء 360 درجة، أتمتة ذكية للامتثال، وبنية تحتية آمنة تحمي بيانات العملاء.',
    tags: ['Open Banking', 'مكافحة الاحتيال', 'امتثال'],
  },
  {
    icon: <Factory className="w-6 h-6" />,
    title: 'النفط والغاز والطاقة',
    desc: 'نطور حلول الصيانة التنبؤية، تحديث البنية التحتية لتقنية المعلومات والتشغيل، وتحليلات متقدمة لسلاسل الإمداد في قطاع الطاقة.',
    tags: ['صيانة تنبؤية', 'OT/IT', 'سلاسل إمداد'],
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'الرعاية الصحية',
    desc: 'نصمم منصات بيانات سريرية موحدة، أنظمة ذكاء اصطناعي للتشخيص المساعد، وبنية تحتية آمنة تحمي بيانات المرضى.',
    tags: ['بيانات سريرية', 'HIPAA', 'ذكاء تشخيصي'],
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: 'المؤسسات الكبرى',
    desc: 'نقدم حلول تحول مؤسسي متكاملة للشركات الكبرى: من أتمتة العمليات إلى تحديث الأنظمة القديمة إلى بناء قدرات الذكاء الاصطناعي الداخلية.',
    tags: ['تحول مؤسسي', 'ERP', 'أتمتة'],
  },
];

const footerLinks_ar = [
  { label: 'من نحن', to: '/ar/about' },
  { label: 'قدراتنا', to: '/ar/capabilities' },
  { label: 'القطاعات', to: '/ar/industries' },
  { label: 'اتصل بنا', to: '/ar#contact' },
  { label: 'سياسة الخصوصية', to: '/ar/privacy' },
];

export default function ArabicIndustriesPage() {
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
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-14">
            <span className="text-sm text-[#00BFFF] font-medium">القطاعات</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-4">خبرة قطاعية عميقة في السوق السعودي</h1>
            <p className="text-[#9AA4AF] text-lg max-w-2xl leading-relaxed">
              نخدم خمسة قطاعات رئيسية في المملكة. لكل قطاع فريق متخصص يفهم تنظيمه وتحدياته ومتطلبات امتثاله.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="block bg-[#12161C] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all h-full"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#00BFFF10] text-[#00BFFF]">
                    {ind.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{ind.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-[#9AA4AF] leading-relaxed mb-4">{ind.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {ind.tags.map((tag, j) => (
                    <span key={j} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-[#9AA4AF]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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
