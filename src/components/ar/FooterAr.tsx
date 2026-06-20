import { Link } from 'react-router-dom';
import { Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
  'من نحن': [
    { label: 'عن الشركة', path: '/ar/about' },
    { label: 'معمارية التحول', path: '/ar/architecture' },
    { label: 'نظام القيمة المؤسسية', path: '/ar/value' },
    { label: 'المخططات المرجعية', path: '/ar/blueprints' },
    { label: 'شركاؤنا', path: '/ar/partners' },
  ],
  'خطوط الأعمال': [
    { label: 'المنتجات', path: '/ar/products' },
    { label: 'القدرات', path: '/ar/capabilities/ai' },
    { label: 'القطاعات', path: '/ar/industries/government' },
  ],
  'الخدمات': [
    { label: 'الاستشارات والتوجيه', path: '/ar/services/advisory' },
    { label: 'التنفيذ والتسليم', path: '/ar/services/implementation' },
    { label: 'العمليات المدارة', path: '/ar/services/operations' },
  ],
};

export const FooterAr = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-bg-secondary border-t border-white/[0.06] relative z-10" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            {/* Social */}
            <div className="flex gap-3 mb-6">
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
            <Link to="/ar" className="inline-block mb-4 footer-logo-link">
              <img src="/test-site-2/bionic-full-dark.svg" alt="Bionic Solutions" className="h-10 w-auto footer-logo"
                style={{ filter: 'brightness(0) saturate(100%) invert(79%) sepia(13%) saturate(2174%) hue-rotate(164deg) brightness(99%) contrast(93%)' }} />
            </Link>
            <p className="text-tiny text-text-muted leading-relaxed mt-4">
              نصمم الذكاء الاصطناعي والأتمتة والثقة في الأعمال.
            </p>
            <p className="text-tiny text-text-muted mt-3">
              الرياض · جدة · الدمام<br />
              المملكة العربية السعودية
            </p>
          </div>
          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-small font-semibold text-text-primary mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.path} className="text-tiny text-text-muted hover:text-accent-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-tiny text-text-muted">
            © {currentYear} Bionic Solutions Company. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/ar/privacy-policy" className="text-tiny text-text-muted hover:text-accent-primary transition-colors">سياسة الخصوصية</Link>
            <Link to="/ar/terms-of-use" className="text-tiny text-text-muted hover:text-accent-primary transition-colors">شروط الاستخدام</Link>
            <Link to="/ar/cookie-policy" className="text-tiny text-text-muted hover:text-accent-primary transition-colors">ملفات تعريف الارتباط</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAr;
