import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ArabicPrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0B0D10] text-white font-sans" dir="rtl" lang="ar" style={{ fontFamily: "'Tajawal', sans-serif" }}>
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-[100] backdrop-blur-[10px] bg-[#0B0D1088] border-b border-white/5">
        <div className="max-w-[1180px] mx-auto px-7 flex items-center justify-between h-[68px]">
          <Link to="/ar" className="flex items-center">
            <img src="/test-site-2/bionic-full-white.svg" alt="Bionic Solutions" className="h-8 w-auto" />
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/ar" className="flex items-center gap-1.5 text-sm text-[#9AA4AF] hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
              العودة إلى الرئيسية
            </Link>
            <Link to="/" className="text-sm text-[#9AA4AF] hover:text-white transition-colors">English</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-7">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full border border-[#00BFFF30] bg-[#00BFFF08] text-xs text-[#00BFFF] font-medium mb-6 tracking-wider">
                قانوني
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">سياسة الخصوصية</h1>
              <p className="text-lg text-[#9AA4AF]">
                شركة Bionic Solutions &nbsp;·&nbsp; آخر تحديث: يونيو ٢٠٢٦
              </p>
            </div>

            <div className="space-y-10 text-[#9AA4AF] leading-relaxed">
              {/* 1. Scope */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">نطاق هذه السياسة</h2>
                <p>توضح هذه الصفحة المعلومات التي نجمعها عند زيارتك لموقع bionics.com.sa، والغرض من جمعها، وكيفية استخدامها.</p>
              </section>

              {/* 2. Who We Are */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">من نحن</h2>
                <p>شركة Bionic Solutions</p>
                <p>المملكة العربية السعودية</p>
                <p className="mt-2">
                  <a href="mailto:info@bionics.com.sa" className="text-[#00BFFF] hover:underline">info@bionics.com.sa</a><br />
                  <a href="mailto:sales@bionics.com.sa" className="text-[#00BFFF] hover:underline">sales@bionics.com.sa</a>
                </p>
              </section>

              {/* 3. What We Collect */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">ما الذي نجمعه</h2>
                <p className="mb-2">عند تواصلكم معنا أو استخدامكم لموقعنا الإلكتروني، قد نجمع:</p>
                <ul className="list-disc pr-6 space-y-1">
                  <li>الاسم الكامل</li>
                  <li>البريد الإلكتروني</li>
                  <li>رقم الهاتف (اختياري)</li>
                  <li>اسم الشركة وقطاعها</li>
                  <li>الرسالة أو الاستفسار</li>
                </ul>
                <p className="mt-4">
                  كما نجمع معلومات تقنية قياسية تجمعها المواقع الإلكترونية تلقائياً — تشمل نوع المتصفح ونوع الجهاز وعنوان IP.
                </p>
              </section>

              {/* 4. How We Collect */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">كيف نجمعها</h2>
                <ul className="list-disc pr-6 space-y-1">
                  <li>عند تقديمكم نموذج "تحدث إلى مستشار"</li>
                  <li>عند إكمالكم التقييم متعدد المراحل</li>
                  <li>عبر ملفات تعريف الارتباط وأدوات التحليلات</li>
                  <li>عبر سجلات الخادم القياسية</li>
                </ul>
              </section>

              {/* 5. Why We Collect */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">الغرض من الجمع</h2>
                <ul className="list-disc pr-6 space-y-1">
                  <li>للرد على استفساركم</li>
                  <li>لفهم احتياجات مؤسستكم</li>
                  <li>لإرسال معلومات ذات صلة بخدماتنا</li>
                  <li>لتحسين موقعنا الإلكتروني</li>
                </ul>
                <p className="mt-4">لا نستخدم بياناتكم لأي غرض آخر.</p>
              </section>

              {/* 6. Consent */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">الموافقة</h2>
                <p>
                  بموجب نظام حماية البيانات الشخصية في المملكة العربية السعودية (PDPL)، نقوم بجمع بياناتكم بناءً على موافقتكم الصريحة.
                </p>
                <p className="mt-2">
                  تمنحون الموافقة من خلال تحديد مربع الموافقة في نماذجنا واختيار إرسال معلوماتكم.
                </p>
                <p className="mt-2">
                  يمكنكم سحب الموافقة في أي وقت. تواصلوا معنا عبر{' '}
                  <a href="mailto:info@bionics.com.sa" className="text-[#00BFFF] hover:underline">info@bionics.com.sa</a>{' '}
                  وسنقوم بمراجعة طلبكم ومعالجته وفقاً للأنظمة المعمول بها.
                </p>
              </section>

              {/* 7. Data Protection */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">كيف نحمي بياناتكم</h2>
                <p className="mb-2">تُخزَّن معلوماتكم على بنية تحتية سحابية آمنة، ونحتفظ بها فقط للمدة اللازمة لخدمة طلبكم.</p>
                <p className="mb-2">لا نبيع بياناتكم الشخصية، ولا نؤجرها، ولا نتاجر بها.</p>
                <p>
                  نشارك البيانات فقط مع مزودي الخدمات الذين نعتمدهم لتشغيل موقعنا الإلكتروني — مزود الخدمة السحابية (Supabase)، نظام البريد الإلكتروني (Microsoft 365)، ومنصة التحليلات (Google Analytics).
                </p>
              </section>

              {/* 8. Your Rights */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">حقوقكم</h2>
                <p className="mb-2">بموجب النظام السعودي، يحق لكم:</p>
                <ul className="list-disc pr-6 space-y-1">
                  <li>معرفة البيانات التي نحتفظ بها عنكم</li>
                  <li>طلب تصحيح البيانات أو تحديثها</li>
                  <li>طلب حذف البيانات</li>
                  <li>سحب الموافقة</li>
                  <li>التواصل مع الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا) بشأن أي استفسارات</li>
                </ul>
                <p className="mt-4">
                  لممارسة أي من هذه الحقوق، راسلونا على{' '}
                  <a href="mailto:info@bionics.com.sa" className="text-[#00BFFF] hover:underline">info@bionics.com.sa</a>.
                </p>
              </section>

              {/* 9. Cookies */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">ملفات تعريف الارتباط</h2>
                <p>
                  نستخدم ملفات تعريف الارتباط لتشغيل الموقع ولأغراض Google Analytics لفهم كيفية استخدام الزوار لموقعنا.
                </p>
                <p className="mt-2">يمكنكم إدارة ملفات تعريف الارتباط من خلال إعدادات المتصفح.</p>
                <p className="mt-2">راجعوا سياسة ملفات تعريف الارتباط للاطلاع على التفاصيل الكاملة.</p>
              </section>

              {/* 10. Changes */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">تحديثات السياسة</h2>
                <p>قد نقوم بتحديث هذه السياسة. سيتم نشر التحديثات على هذه الصفحة.</p>
                <p className="mt-2">
                  للاستفسارات، تواصلوا معنا على{' '}
                  <a href="mailto:info@bionics.com.sa" className="text-[#00BFFF] hover:underline">info@bionics.com.sa</a>{' '}
                  أو{' '}
                  <a href="mailto:sales@bionics.com.sa" className="text-[#00BFFF] hover:underline">sales@bionics.com.sa</a>.
                </p>
              </section>

              <div className="border-t border-white/10 pt-10 mt-16">
                <p className="text-sm text-[#5B6470] italic">
                  ملاحظة: أُعدَّت هذه السياسة بحسن نية. نوصي بمراجعة قانونية مستقلة لظروفكم الخاصة.
                </p>
              </div>
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
              <Link to="/ar/about" className="hover:text-[#00BFFF] transition-colors">من نحن</Link>
              <Link to="/ar/capabilities" className="hover:text-[#00BFFF] transition-colors">قدراتنا</Link>
              <Link to="/ar/industries" className="hover:text-[#00BFFF] transition-colors">القطاعات</Link>
              <Link to="/ar#contact" className="hover:text-[#00BFFF] transition-colors">اتصل بنا</Link>
              <Link to="/ar/privacy" className="hover:text-[#00BFFF] transition-colors">سياسة الخصوصية</Link>
            </div>
          </div>
          <div className="border-t border-white/5 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#5B6470]">
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-[10px] tracking-wider">🇸🇦 متوائم مع رؤية السعودية 2030</span>
            <div className="flex items-center gap-4">
              <a href="mailto:info@bionics.com.sa" className="hover:text-[#00BFFF] transition-colors">info@bionics.com.sa</a>
              <span className="text-white/10">|</span>
              <span>© {new Date().getFullYear()} Bionic Solutions</span>
              <span className="text-white/10">|</span>
              <Link to="/" className="hover:text-[#00BFFF] transition-colors">English</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
