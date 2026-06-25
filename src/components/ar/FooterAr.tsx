import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, MapPin, ArrowLeft } from 'lucide-react';

export const FooterAr = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-bg-secondary border-t border-white/[0.06] relative z-10" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand + Social */}
          <div className="lg:col-span-2">
            {/* Social */}
            <div className="flex gap-3 mb-5">
              <a
                href="https://www.linkedin.com/company/bionic-solutions-ksa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-bg-primary rounded-full flex items-center justify-center hover:bg-accent-primary hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-text-muted group-hover:text-text-primary" />
              </a>
              <a
                href="https://twitter.com/bionics_Sa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-bg-primary rounded-full flex items-center justify-center hover:bg-accent-primary hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-text-muted group-hover:text-text-primary" />
              </a>
            </div>

            <Link to="/ar" className="inline-block mb-4 hover:opacity-80 transition-opacity">
              <img src="/test-site-2/bionic-full-dark.svg" alt="Bionic Solutions" className="h-10 w-auto"
                style={{ filter: 'brightness(0) saturate(100%) invert(79%) sepia(13%) saturate(2174%) hue-rotate(164deg) brightness(99%) contrast(93%)' }} />
            </Link>
            <p className="text-tiny font-semibold text-text-primary mb-2">مُمكّن التحول المؤسسي بالذكاء الاصطناعي</p>
            <p className="text-tiny text-text-muted leading-relaxed">
              نصمم الذكاء والأتمتة والثقة في صميم الأعمال.
            </p>
          </div>

          {/* القدرات */}
          <div>
            <h4 className="text-small font-semibold text-text-primary mb-4">القدرات</h4>
            <ul className="space-y-2">
              <li><Link to="/ar/capabilities/ai" className="text-tiny text-text-muted hover:text-accent-primary transition-colors">الذكاء الاصطناعي المؤسسي والأتمتة</Link></li>
              <li><Link to="/ar/capabilities/data" className="text-tiny text-text-muted hover:text-accent-primary transition-colors">البيانات والتحليلات والذكاء</Link></li>
              <li><Link to="/ar/capabilities/apps" className="text-tiny text-text-muted hover:text-accent-primary transition-colors">تطبيقات الأعمال وتجربة العملاء</Link></li>
              <li><Link to="/ar/capabilities/integration" className="text-tiny text-text-muted hover:text-accent-primary transition-colors">التكامل والعمليات الذكية</Link></li>
              <li><Link to="/ar/capabilities/cyber" className="text-tiny text-text-muted hover:text-accent-primary transition-colors">الأمن السيبراني والمرونة السيبرانية</Link></li>
              <li><Link to="/ar/capabilities/infra" className="text-tiny text-text-muted hover:text-accent-primary transition-colors">البنية التحتية السيادية والسحابة الهجينة</Link></li>
              <li><Link to="/ar/capabilities/ops" className="text-tiny text-text-muted hover:text-accent-primary transition-colors">عمليات التقنية</Link></li>
            </ul>
          </div>

          {/* القطاعات */}
          <div>
            <h4 className="text-small font-semibold text-text-primary mb-4">القطاعات</h4>
            <ul className="space-y-2">
              <li><Link to="/ar/industries/government" className="text-tiny text-text-muted hover:text-accent-primary transition-colors">القطاع الحكومي</Link></li>
              <li><Link to="/ar/industries/banking" className="text-tiny text-text-muted hover:text-accent-primary transition-colors">الخدمات المالية والمصرفية</Link></li>
              <li><Link to="/ar/industries/oil-gas" className="text-tiny text-text-muted hover:text-accent-primary transition-colors">النفط والغاز</Link></li>
              <li><Link to="/ar/industries/healthcare" className="text-tiny text-text-muted hover:text-accent-primary transition-colors">الرعاية الصحية</Link></li>
              <li><Link to="/ar/industries/enterprise" className="text-tiny text-text-muted hover:text-accent-primary transition-colors">المؤسسات الكبرى</Link></li>
            </ul>
          </div>

          {/* الشركة + تواصل */}
          <div>
            <h4 className="text-small font-semibold text-text-primary mb-4">الشركة</h4>
            <ul className="space-y-2 mb-6">
              <li><Link to="/ar/about" className="text-tiny text-text-muted hover:text-accent-primary transition-colors">من نحن</Link></li>
              <li><Link to="/ar/contact" className="text-tiny text-text-muted hover:text-accent-primary transition-colors">تواصل معنا</Link></li>
              <li><Link to="/ar/value" className="text-tiny text-text-muted hover:text-accent-primary transition-colors">منظومة القيمة المؤسسية</Link></li>
              <li><Link to="/ar/architecture" className="text-tiny text-text-muted hover:text-accent-primary transition-colors">معمارية التحول</Link></li>
            </ul>

            <h4 className="text-small font-semibold text-text-primary mb-3">تواصل معنا</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@bionics.com.sa" className="text-tiny text-text-muted hover:text-accent-primary transition-colors flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  info@bionics.com.sa
                </a>
              </li>
              <li>
                <a href="mailto:sales@Bionics.com.sa" className="text-tiny text-text-muted hover:text-accent-primary transition-colors flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  sales@Bionics.com.sa
                </a>
              </li>
              <li>
                <a href="mailto:support@Bionics.com.sa" className="text-tiny text-text-muted hover:text-accent-primary transition-colors flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  support@Bionics.com.sa
                </a>
              </li>
            </ul>

            <Link
              to="/ar/contact?source=footer&intent=transformation"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-primary/15 text-accent-primary text-tiny font-semibold hover:bg-accent-primary/25 transition-colors"
            >
              استكشف تحولك المؤسسي
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-tiny text-text-muted">
            © {currentYear} شركة بيونك سوليوشنز. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/ar/privacy" className="text-tiny text-text-muted hover:text-accent-primary transition-colors">سياسة الخصوصية</Link>
            <Link to="/ar/terms-of-use" className="text-tiny text-text-muted hover:text-accent-primary transition-colors">شروط الاستخدام</Link>
            <Link to="/ar/cookie-policy" className="text-tiny text-text-muted hover:text-accent-primary transition-colors">ملفات تعريف الارتباط</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAr;
