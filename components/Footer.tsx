'use client';
import Link from 'next/link';
import { Logo } from './Logo';
import { useLanguage } from './LanguageProvider';

export function Footer() {
  const { lang } = useLanguage();
  const ar = lang === 'ar';

  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerBrand">
          <Logo />
          <p>
            {ar
              ? 'منصة التدريب الشخصي الأولى في السعودية. مدربون موثّقون، ذكاء اصطناعي، وخطة تناسبك.'
              : 'Saudi Arabia\'s premier personal coaching platform. Verified coaches, AI-powered plans, and training that fits your life.'}
          </p>
        </div>
        <div className="footerCol">
          <h4>{ar ? 'المنصة' : 'Platform'}</h4>
          <Link href="/coaches">{ar ? 'تصفح المدربين' : 'Find a Coach'}</Link>
          <Link href="/ai-coach">{ar ? 'مدرب الذكاء الاصطناعي' : 'AI Coach'}</Link>
          <Link href="/start">{ar ? 'ابدأ الآن' : 'Get Started'}</Link>
          <Link href="/progress">{ar ? 'تتبع التقدم' : 'Track Progress'}</Link>
        </div>
        <div className="footerCol">
          <h4>{ar ? 'للمدربين' : 'For Coaches'}</h4>
          <Link href="/coach-portal">{ar ? 'بوابة المدربين' : 'Coach Portal'}</Link>
          <Link href="/login">{ar ? 'انضم كمدرب' : 'Join as Coach'}</Link>
        </div>
        <div className="footerCol">
          <h4>{ar ? 'الشركة' : 'Company'}</h4>
          <Link href="#">{ar ? 'من نحن' : 'About Us'}</Link>
          <Link href="#">{ar ? 'سياسة الخصوصية' : 'Privacy Policy'}</Link>
          <Link href="#">{ar ? 'الشروط والأحكام' : 'Terms of Service'}</Link>
          <Link href="#">{ar ? 'تواصل معنا' : 'Contact'}</Link>
        </div>
      </div>
      <div className="footerBottom">
        <span>© {new Date().getFullYear()} Private Coach. {ar ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</span>
        <div className="footerSocial">
          <Link href="#">𝕏</Link>
          <Link href="#">in</Link>
          <Link href="#">ig</Link>
        </div>
      </div>
    </footer>
  );
}
