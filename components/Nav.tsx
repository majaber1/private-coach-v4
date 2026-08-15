'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Sparkles, Activity, UserRound, Languages } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from './LanguageProvider';

const items = [
  ['/', 'Home', Home],
  ['/coaches', 'Find a coach', Search],
  ['/ai-coach', 'AI Coach', Sparkles],
  ['/progress', 'Progress', Activity],
] as const;

export function Nav() {
  const p = usePathname();
  const { lang, setLang } = useLanguage();
  const ar = lang === 'ar';
  const labels = ar
    ? ['الرئيسية', 'المدربون', 'مدرب AI', 'تقدمي']
    : items.map((x) => x[1]);

  return (
    <>
      <header className="topbar">
        <Logo />
        <nav>
          {items.map(([h, , I], n) => (
            <Link key={h} className={p === h ? 'active' : ''} href={h}>
              <I size={17} />
              {labels[n]}
            </Link>
          ))}
        </nav>
        <div className="navActions">
          <Link className="coachPortalLink" href="/coach-portal">
            {ar ? 'بوابة المدربين' : 'For coaches'}
          </Link>
          <button
            className="langBtn"
            onClick={() => setLang(ar ? 'en' : 'ar')}
          >
            <Languages size={15} />
            {ar ? 'EN' : 'العربية'}
          </button>
          <Link href="/login" className="profileBtn">
            <span>MJ</span>
            <UserRound size={16} />
          </Link>
        </div>
      </header>
      <nav className="mobileNav">
        {items.map(([h, , I], n) => (
          <Link key={h} className={p === h ? 'active' : ''} href={h}>
            <I size={19} />
            <small>{labels[n]}</small>
          </Link>
        ))}
      </nav>
    </>
  );
}
