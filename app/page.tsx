import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { CoachCard } from '@/components/CoachCard';
import { coaches } from '@/lib/data';
import { ArrowRight, Bot, CheckCircle2, ChevronRight, Dumbbell, MapPin, ShieldCheck, Sparkles, Video } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="shell homeShell">
        <section className="hero">
          <div className="heroCopy">
            <span className="eyebrow">
              <Sparkles size={15} /> Human + AI · تدريب بشري وذكي
            </span>
            <h1>
              Your coach.
              <br />
              <em>Your way.</em>
            </h1>
            <p>
              One trusted plan for real life. Train with a verified coach at home,
              gym or online — while AI adapts every day around your progress.
            </p>
            <p className="arabicLead" dir="rtl">
              مدربك الشخصي والذكي في خطة واحدة تناسب هدفك، وقتك ومكانك.
            </p>
            <div className="heroActions">
              <Link className="primary" href="/start">
                Build my plan <ArrowRight size={18} />
              </Link>
              <Link className="secondary" href="/coaches">
                Browse coaches
              </Link>
            </div>
            <div className="trust">
              <span><b>4.9</b> coach rating</span>
              <i />
              <span><b>100%</b> verified</span>
              <i />
              <span><b>Riyadh</b> launch city</span>
            </div>
          </div>
          <div className="heroVisual">
            <div className="orb one" />
            <div className="orb two" />
            <div className="planPreview">
              <div className="planHead">
                <span>YOUR WEEK</span>
                <b>3 of 4 complete</b>
              </div>
              <div className="score">
                <strong>87</strong>
                <div>
                  <b>Ready to train</b>
                  <span>Sleep and recovery look good</span>
                </div>
              </div>
              <div className="session">
                <span><Dumbbell /></span>
                <div>
                  <small>TODAY · 48 MIN</small>
                  <b>Upper Body Strength</b>
                  <p>Adapted by Private Coach AI</p>
                </div>
                <i><ArrowRight /></i>
              </div>
              <div className="coachPing">
                <span>FA</span>
                <div>
                  <b>Fahad checked your form</b>
                  <small>&ldquo;Great control. Add 2.5 kg next set.&rdquo;</small>
                </div>
                <CheckCircle2 />
              </div>
            </div>
            <div className="floating f1">
              <ShieldCheck />
              <div>
                <b>Coach verified</b>
                <span>Identity + certification</span>
              </div>
            </div>
            <div className="floating f2">
              <span className="tinyAvatar">NA</span>
              <div>
                <b>Noura</b>
                <span>Available 5 PM</span>
              </div>
            </div>
          </div>
        </section>

        <section className="modeStrip">
          <div>
            <ShieldCheck />
            <b>Verified coaches</b>
            <span>Identity & credentials checked</span>
          </div>
          <div>
            <MapPin />
            <b>Train anywhere</b>
            <span>Home, gym or outdoors</span>
          </div>
          <div>
            <Video />
            <b>Online sessions</b>
            <span>Live coaching across KSA</span>
          </div>
          <div>
            <Sparkles />
            <b>AI between sessions</b>
            <span>Your plan adapts daily</span>
          </div>
        </section>

        <section className="section">
          <div className="sectionTitle">
            <div>
              <span className="kicker">Popular near you</span>
              <h2>Coaches worth showing up for.</h2>
            </div>
            <Link href="/coaches">
              View all <ChevronRight size={16} />
            </Link>
          </div>
          <div className="coachGrid compact">
            {coaches.slice(0, 3).map((c) => (
              <CoachCard key={c.id} coach={c} />
            ))}
          </div>
        </section>

        <section className="journey">
          <span className="kicker">One continuous journey</span>
          <h2>Not another workout library.</h2>
          <div className="journeyGrid">
            <div>
              <i>01</i>
              <Bot />
              <b>Tell us your goal</b>
              <p>A 60-second assessment builds your starting profile.</p>
            </div>
            <div>
              <i>02</i>
              <ShieldCheck />
              <b>Meet your match</b>
              <p>Choose a verified human coach, AI, or both.</p>
            </div>
            <div>
              <i>03</i>
              <Dumbbell />
              <b>Train and adapt</b>
              <p>Every session, habit and result improves the next plan.</p>
            </div>
          </div>
          <Link className="primary" href="/start">
            Start free assessment <ArrowRight size={18} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
