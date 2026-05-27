import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { Frame, LoopBox, Arrows } from '../components/Frame';

const SOURCES = [
  { name: 'Draup', desc: '100+ intelligence sources: technographics, hiring, funding, partnerships, org changes', live: true },
  { name: 'Proprietary DB', desc: "PravRaha's own prospect data layer curated, de-duplicated, ICP-scored", live: true },
  { name: 'Multi-provider enrichment', desc: 'Automatic routing across enrichment providers for coverage, accuracy, cost', live: false },
  { name: 'Signal feeds', desc: 'Job postings, funding events, tech stack changes, leadership transitions', live: true },
];

const AGENTS = [
  { n: '01', name: 'Market Scanner', desc: 'Monitors your addressable market for ICP-fit companies crossing activation thresholds.', metric: 'accounts surfaced / week' },
  { n: '02', name: 'Account Research', desc: 'Builds deep intelligence files org chart, news, competitive landscape, tech stack.', metric: 'research depth score' },
  { n: '03', name: 'Buyer Discovery', desc: 'Maps buying committees. Identifies economic buyer, technical champion, internal coach.', metric: 'committees mapped / accuracy' },
  { n: '04', name: 'Messaging', desc: 'Drafts signal-based outreach tied to specific triggers not templates.', metric: 'reply rate by trigger type' },
  { n: '05', name: 'Campaign Execution', desc: 'Routes outreach through OPE AI volume + human high-stakes threads.', metric: 'meetings booked / cost per meeting' },
  { n: '06', name: 'Pipeline Optimizer', desc: 'Closes the loop. Re-scores ICP, adjusts signals, rebalances AI/human ratios.', metric: 'ICP accuracy improvement / cycle' },
];

export default function Platform() {
  return (
    <>
      {/* ✅ SEO added properly */}
      <Helmet>
        <title>Platform | PravRaha</title>
        <meta
          name="description"
          content="Explore PravRaha's autonomous revenue platform combining data, intelligence, and execution to drive qualified B2B meetings."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Platform | PravRaha" />
        <meta
          property="og:description"
          content="Explore PravRaha's autonomous revenue platform combining data, intelligence, and execution."
        />
        <meta property="og:image" content="/prod.jpeg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Platform | PravRaha" />
        <meta
          name="twitter:description"
          content="Explore PravRaha's autonomous revenue platform."
        />
        <meta name="twitter:image" content="/prod.jpeg" />
      </Helmet>

      <header className="page-hero">
        <div className="site-container">
          <div className="eyebrow">Platform</div>
          <h1 className="font-display font-light" style={{ fontSize: 'clamp(40px,5vw,64px)', letterSpacing: '-0.03em', lineHeight: 1.02 }}>
            Three layers. One loop.<br /><span className="italic-serif">Zero seams.</span>
          </h1>
          <p className="text-[19px] text-text-muted font-light max-w-[640px] mt-7" style={{ lineHeight: 1.55 }}>
            PravRaha is not a tool you log into. It is the infrastructure underneath your pipeline unifying data, intelligence, and execution so every outreach is signal-driven and every cycle compounds.
          </p>
        </div>
      </header>

      {/* DATA LAYER */}
      <section className="border-t border-border py-[140px]">
        <div className="site-container">
          <Reveal>
            <SectionHead eyebrow="Layer 01" title='Data <span class="italic-serif">that refreshes itself.</span>' sub="Proprietary prospect data, enriched in real time through multi-provider routing, continuously refreshed via Draup's 100+ intelligence sources." />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="prose-p max-w-[680px]">
              Most B2B teams buy data annually, import it into a CRM, and watch it decay at 30% per year.
            </div>
            <div className="prose-p max-w-[680px]">
              PravRaha's data layer is <strong className="text-text font-medium">continuously refreshed</strong>.
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border mt-10">
              {SOURCES.map((s, i) => (
                <div key={i} className="bg-bg-elevated p-7">
                  <div className="font-mono text-[13px] text-text font-medium mb-1.5">{s.name}</div>
                  <div className="text-[13px] text-text-muted font-light">{s.desc}</div>
                  <div className={`mt-3 font-mono text-[10px] uppercase ${s.live ? 'text-signal' : 'text-accent'}`}>
                    ● {s.live ? 'live stream' : 'enriching'}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* LOOP */}
      <section className="border-t border-border bg-bg-elevated py-[140px]">
        <div className="site-container">
          <Reveal>
            <SectionHead eyebrow="The loop" title="Every cycle makes the next one smarter." />
          </Reveal>

          <Reveal delay={0.1}>
            <LoopBox>
              <span>DATA<Arrows />INTELLIGENCE<Arrows />EXECUTION<Arrows />FEEDBACK<Arrows />DATA</span>
            </LoopBox>

            <div className="text-center mt-12">
              <Link to="/how-it-works" className="btn-ghost">
                See the 6-step operational flow →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}