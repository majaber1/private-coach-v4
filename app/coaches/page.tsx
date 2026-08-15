import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { CoachSearch } from '@/components/CoachSearch';

export default function Coaches() {
  return (
    <div>
      <Nav />
      <main className="shell">
        <div className="pageIntro">
          <span className="kicker">Verified professionals</span>
          <h1>Find the right coach.</h1>
          <p>
            Book a coach for home, gym, park or field — based on your goal,
            location and schedule.
          </p>
        </div>
        <CoachSearch />
      </main>
      <Footer />
    </div>
  );
}
