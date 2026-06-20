import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Shield, X } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'bionic_cookie_consent';

type ConsentChoice = 'accepted' | 'rejected' | null;

const t = {
  en: {
    title: 'Cookie Preferences',
    body: 'We use essential cookies for site functionality and analytics cookies to understand how you interact with our website. By accepting, you help us improve your experience. No personal data is sold or shared.',
    accept: 'Accept',
    reject: 'Essential Only',
  },
  ar: {
    title: 'تفضيلات ملفات تعريف الارتباط',
    body: 'نستخدم ملفات تعريف ارتباط ضرورية لتشغيل الموقع وملفات تحليلية لفهم كيفية تفاعلكم مع موقعنا. بموافقتكم، تساعدوننا في تحسين تجربتكم. لا نبيع البيانات الشخصية ولا نشاركها.',
    accept: 'موافق',
    reject: 'الأساسية فقط',
  },
};

export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const location = useLocation();
  const lang = location.pathname.startsWith('/ar') ? 'ar' : 'en';
  const texts = t[lang];

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
    setChoice(stored as ConsentChoice);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setChoice('accepted');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
    setChoice('rejected');
    setVisible(false);
  };

  if (choice) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
          className={`fixed bottom-6 z-[200] ${lang === 'ar' ? 'right-6 left-6 md:left-auto md:right-6' : 'left-6 right-6 md:left-auto md:right-6'} md:max-w-md`}
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
        >
          <div className="bg-bg-secondary border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="flex items-start gap-3 mb-4">
              <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#059669' }} />
              <div>
                <h3 className={`font-semibold text-sm text-text-primary mb-1 ${lang === 'ar' ? "font-[Tajawal]" : ''}`}>{texts.title}</h3>
                <p className={`text-tiny text-text-muted leading-relaxed ${lang === 'ar' ? "font-[Tajawal]" : ''}`}>
                  {texts.body}
                </p>
              </div>
              <button onClick={reject} className="p-1 text-text-muted hover:text-text-primary transition-colors flex-shrink-0" aria-label="إغلاق">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-3">
              <button
                onClick={accept}
                className={`flex-1 px-4 py-2.5 bg-[#059669] text-white text-sm font-semibold rounded-lg hover:bg-[#047857] transition-all ${lang === 'ar' ? "font-[Tajawal]" : ''}`}
              >
                {texts.accept}
              </button>
              <button
                onClick={reject}
                className={`flex-1 px-4 py-2.5 border border-white/10 text-text-muted text-sm font-medium rounded-lg hover:border-white/20 transition-all ${lang === 'ar' ? "font-[Tajawal]" : ''}`}
              >
                {texts.reject}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
