import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Activity, CheckCircle2, Dumbbell, Flame, Footprints, TrendingUp } from 'lucide-react';

export default function Progress() {
  return (
    <div>
      <Nav />
      <main className="shell">
        <div className="pageIntro row">
          <div>
            <span className="kicker">Your performance</span>
            <h1>Progress, without the noise.</h1>
            <p>Your AI and human coaching data in one clear view.</p>
          </div>
          <select>
            <option>Last 4 weeks</option>
            <option>Last 12 weeks</option>
          </select>
        </div>
        <div className="statsGrid">
          <div>
            <span className="statIcon"><Dumbbell /></span>
            <small>SESSIONS</small>
            <strong>14</strong>
            <p><b>+3</b> vs last month</p>
          </div>
          <div>
            <span className="statIcon"><CheckCircle2 /></span>
            <small>ADHERENCE</small>
            <strong>86%</strong>
            <p><b>+8%</b> improving</p>
          </div>
          <div>
            <span className="statIcon"><Flame /></span>
            <small>ACTIVE CALORIES</small>
            <strong>8,420</strong>
            <p><b>+12%</b> vs last month</p>
          </div>
          <div>
            <span className="statIcon"><Footprints /></span>
            <small>AVG. STEPS</small>
            <strong>8.6k</strong>
            <p><b>+5%</b> daily average</p>
          </div>
        </div>
        <div className="progressGrid">
          <section className="chartCard">
            <div className="cardTitle">
              <div>
                <small>TRAINING LOAD</small>
                <h2>Consistency is trending up.</h2>
              </div>
              <span className="pill"><TrendingUp size={14} /> +18%</span>
            </div>
            <div className="bars">
              {[45, 58, 49, 72, 68, 82, 76, 90, 71, 85, 94, 88].map((h, i) => (
                <div key={i}>
                  <i style={{ height: `${h}%` }} />
                  <span>{i % 2 === 0 ? 'W' + (Math.floor(i / 2) + 1) : ''}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="goalCard">
            <small>12-WEEK GOAL</small>
            <h2>Build strength</h2>
            <div className="goalRing">
              <strong>63<small>%</small></strong>
            </div>
            <p>You&apos;re ahead of your expected pace.</p>
            <div className="goalMetric"><span>Sessions complete</span><b>14 / 24</b></div>
            <div className="goalMetric"><span>Current streak</span><b>11 days</b></div>
            <div className="goalMetric"><span>Coach check-ins</span><b>4</b></div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
