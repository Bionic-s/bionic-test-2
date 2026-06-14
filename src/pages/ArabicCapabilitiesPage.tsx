import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, BarChart3, Monitor, GitMerge, Shield, Cloud, Cog } from 'lucide-react';

const capabilities = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'الذكاء الاصطناعي والأتمتة المؤسسية',
    desc: 'نصمم ونشغّل وكلاء ذكاء اصطناعي ومساعدين افتراضيين وأتمتة ذكية ترفع الكفاءة التشغيلية وتقلّص التكاليف. نشر آمن داخل بيئتك المؤسسية — مع سيادة كاملة على البيانات داخل المملكة.',
    href: '/capabilities/ai',
    color: '#00BFFF',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'البيانات والتحليلات والذكاء',
    desc: 'نوحّد بياناتك المتفرقة في مصدر واحد موثوق للحقيقة. لوحات قيادة تنفيذية، مؤشرات أداء رئيسية، وتحليلات متقدمة — ليُبنى كل قرار مؤسسي على بيانات دقيقة.',
    href: '/capabilities/data',
    color: '#00BFFF',
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: 'تطبيقات الأعمال وتجربة العملاء',
    desc: 'منصة موحدة لإدارة علاقات العملاء ومركز اتصال ذكي وأتمتة تسويقية وتجربة موظف متكاملة — يحصل عملاؤك على تجربة موحدة سلسة.',
    href: '/capabilities/apps',
    color: '#A78BFA',
  },
  {
    icon: <GitMerge className="w-6 h-6" />,
    title: 'التكامل والعمليات الذكية',
    desc: 'نربط أنظمتك عبر معمارية تكامل API-led لتتدفق البيانات تلقائياً بين الأقسام — دون إدخال مزدوج للبيانات، دون أخطاء بشرية، دون تأخير في العمليات.',
    href: '/capabilities/integration',
    color: '#A78BFA',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'الأمن السيبراني والمرونة الرقمية',
    desc: 'مركز عمليات أمنية يراقب التهديدات على مدار الساعة. نموذج Zero Trust، حوكمة الهوية الرقمية، ونسخ احتياطي منيع — مؤسستك محمية من اليوم الأول.',
    href: '/capabilities/cyber',
    color: '#34D399',
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: 'البنية التحتية السيادية والسحابة الهجينة',
    desc: 'نحدّث مراكز بياناتك بأحدث تقنيات البنية التحتية المؤسسية. سحابة خاصة داخل المملكة — سيادة رقمية كاملة، أداء عالٍ، وتكلفة إجمالية أقل.',
    href: '/capabilities/infra',
    color: '#34D399',
  },
  {
    icon: <Cog className="w-6 h-6" />,
    title: 'الخدمات التقنية والعمليات المدارة',
    desc: 'فريق تقني متخصص يتولى تشغيل بيئتك ومراقبتها على مدار الساعة. عمليات سحابية، عمليات ذكاء اصطناعي، ودعم فني مستمر.',
    href: '/capabilities/ops',
    color: '#FB923C',
  },
];

export default function ArabicCapabilitiesPage() {
  return (
    <div className="min-h-screen bg-[#0B0D10] text-white font-sans" dir="rtl" lang="ar" style={{ fontFamily: "'Tajawal', sans-serif" }}>
      {/* Nav */}
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

      {/* Content */}
      <section className="pt-32 pb-24">
        <div className="max-w-[1180px] mx-auto px-7">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm text-[#00BFFF] font-medium">قدراتنا</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-4">سبعة مجالات. تحول مؤسسي متكامل.</h1>
            <p className="text-[#9AA4AF] text-lg max-w-2xl leading-relaxed">
              كل مجال من المجالات السبعة متاح بشكل مستقل أو ضمن حزمة تحول متكاملة. ننفذ ونشغّل — لا نكتفي بتوريد التراخيص وتسليمها.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                <Link
                  to={cap.href}
                  className="block bg-[#12161C] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all group relative overflow-hidden"
                >
                  <div className="absolute right-0 top-6 bottom-6 w-[3px] rounded-sm" style={{ background: cap.color }} />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${cap.color}15`, color: cap.color }}>
                      {cap.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors text-white">{cap.title}</h3>
                      <p className="text-sm text-[#9AA4AF] leading-relaxed">{cap.desc}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#12161C] border-t border-white/5 py-6 text-center text-xs text-[#5B6470]">
        <div className="max-w-[1180px] mx-auto px-7">
          <Link to="/ar" className="hover:text-[#00BFFF] transition-colors">الرئيسية</Link>
          {' · '}متوائم مع رؤية السعودية 2030
        </div>
      </footer>
    </div>
  );
}
