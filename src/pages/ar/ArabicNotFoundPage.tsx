import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';

export default function ArabicNotFoundPage() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center pt-20" dir="rtl">
      <div className="text-center px-4" style={{ fontFamily: "'Tajawal', sans-serif" }}>
        <h1 className="text-7xl md:text-9xl font-bold text-accent-primary/20 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">الصفحة غير موجودة</h2>
        <p className="text-text-muted max-w-md mx-auto mb-8">عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/ar" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-white font-semibold rounded-full hover:bg-accent-secondary transition-all">
            <Home className="w-5 h-5" />
            الصفحة الرئيسية
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-text-primary font-medium rounded-full hover:border-accent-primary/30 transition-all">
            English
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
