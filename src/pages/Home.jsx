import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { Frame, LoopBox, Arrows } from '../components/Frame';
import LogoMarquee from '../components/LogoMarquee';

const TOOLS = ['Apollo|Data','Bombora|Intent','Clay|Enrich','Outreach|Cadence','Salesforce|CRM','11x|AI SDR','Calendly|Booking','Gong|Analysis'];

const INSIGHTS = [
  { num: '01', title: 'More tools increase entropy, not output.', body: 'Every tool you add creates a new seam. Your SDRs spend 40% switching tabs. <strong class="text-text font-medium">The stack becomes the enemy of the outcome.</strong>' },
  { num: '02', title: "AI SDRs don't fail because of AI. They fail because of the data underneath.", body: 'An AI agent personalizing off stale data produces faster, more confidently-wrong outbound. <strong class="text-text font-medium">The bottleneck isn\'t the model. It\'s everything upstream.</strong>' },
  { num: '03', title: "Intent signals are a commodity. Orchestration isn't.", body: 'Every provider sells the same signals. What separates conversion from waste is <strong class="text-text font-medium">time-to-action — 48 hours vs. a report nobody reads.</strong>' },
  { num: '04', title: 'Personalization at scale is a lie. Relevance at scale is real.', body: '"Hi {FirstName}, I saw you just raised" is mail merge with extra steps. Relevance requires knowing <strong class="text-text font-medium">why you\'re reaching out — the trigger, the timing, the point of view.</strong>' },
  { num: '05', title: 'Your pipeline has a coordination problem, not a creativity problem.', body: 'SDRs, AEs, marketing, and RevOps all solve slices of the same system, in isolation. <strong class="text-text font-medium">Infrastructure fixes this by making coordination the default.</strong>' },
];

const TIMELINE = [
  { co: 'Stripe · 2011', cat: 'Payment infrastructure', desc: 'Before Stripe, you stitched processors, fraud, compliance, and ledgers. Stripe made it infrastructure.' },
  { co: 'Snowflake · 2014', cat: 'Data infrastructure', desc: 'Before Snowflake, warehouses, ETL, storage, and compute lived separately.' },
  { co: 'Vercel · 2018', cat: 'Deployment infrastructure', desc: 'Before Vercel, you managed DNS, CDN, builds, and hosting.' },
  { co: 'PravRaha · 2026', cat: 'Revenue infrastructure', desc: 'Before PravRaha, revenue was 14 tools held together by BDR labor. We made it infrastructure.', current: true },
];

const LAYERS = [
  { num: 'Layer 01', title: 'Data', sub: 'that refreshes itself.', body: "Proprietary prospect data, enriched in real time through multi-provider routing, and continuously refreshed via <strong class='text-text font-medium'>Draup's 100+ intelligence sources</strong>.", change: 'You stop buying stale lists. Your ICP updates itself.' },
  { num: 'Layer 02', title: 'Intelligence', sub: 'running on your behalf.', body: "Six agentic workers — Market Scanner, Account Research, Buyer Discovery, Messaging, Campaign Execution, Pipeline Optimizer — running <strong class='text-text font-medium'>continuously</strong>.", change: 'Every outreach is tied to a reason. Every reason, a signal.' },
  { num: 'Layer 03', title: 'Execution', sub: 'AI orchestrates, humans close.', body: "The <strong class='text-text font-medium'>Outreach Process Engine (OPE)</strong> deploys signal-driven outbound through AI agents and trained SDRs. AI handles 80%. Humans handle the 20% where judgment matters.", change: 'You stop running campaigns. You start running infrastructure.' },
];

const AGENTS = [
  { name: 'Market Scanner', activity: ['14 accounts', 'crossing ICP thresholds · fintech, Series A+'], count: '+14', unit: 'accounts' },
  { name: 'Account Research', activity: ['intelligence files', '· org chart, funding, hiring, tech stack'], count: '47', unit: 'updates' },
  { name: 'Buyer Discovery', activity: ['buying committee', '· VP Growth + Head of RevOps identified'], count: '23', unit: 'committees' },
  { name: 'Messaging', activity: ['trigger: Series A announcement', '· 3-touch sequence'], count: '31', unit: 'drafts' },
  { name: 'Campaign Execution', activity: ['OPE', '· AI handling vol · human SDR on 4 threads'], count: '89', unit: 'touches' },
  { name: 'Pipeline Optimizer', activity: ['ICP weights', '· tech-stack +0.18 · headcount −0.04'], count: '2', unit: 'reweights' },
];

const UCARDS = [
  { role: 'Founder-CRO · Seed–Series B', title: "You're the strategist, the SDR, and the coach. You shouldn't be.", body: 'PravRaha becomes the system — so you can stop being the system.' },
  { role: 'CRO · Series B–D', title: 'Three SDR pods. Four tools. Inconsistent pipeline across regions.', body: 'PravRaha collapses the seams — so pipeline stops depending on who your best SDR is.' },
  { role: 'RevOps Leader', title: "You've built Clay tables, wired Bombora, debugged five sequences this week.", body: 'PravRaha gives you infrastructure, not another tool. You move from plumber to architect.' },
  { role: 'SDR Team Lead', title: 'Your reps spend more time researching than reaching out.', body: 'PravRaha hands your SDRs signal-ready accounts with full context.' },
];

export default function Home() {
  const [dots, setDots] = useState([true, true, false, true, false, true]);
  const [times, setTimes] = useState(['live', '2m ago', '5m ago', 'live', '8m ago', 'live']);

  useEffect(() => {
    const i1 = setInterval(() => setDots(d => d.map(v => Math.random() > 0.6 ? !v : v)), 2200);
    const i2 = setInterval(() => setTimes(t => t.map(v => {
      if (v !== 'live' && Math.random() > 0.7) { const n = parseInt(v) || 1; return `${n + 1}m ago`; }
      return v;
    })), 8000);
    return () => { clearInterval(i1); clearInterval(i2); };
  }, []);

  return (
    <>
      {/* ══ HERO ══ */}
      <header className="pt-[180px] pb-[140px] overflow-hidden">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-20 items-center">
            <div>
              <div className="eyebrow">Autonomous Revenue Infrastructure</div>
              <h1 className="font-display font-light" style={{ fontSize: 'clamp(48px,7vw,96px)', letterSpacing: '-0.035em', lineHeight: 0.98 }}>
                <span className="block">Pipeline is engineered.</span>
                <span className="block text-text-dim italic font-light">Not prayed for.</span>
              </h1>
              <p className="text-[19px] text-text-muted max-w-[560px] mt-8 mb-11 font-light" style={{ lineHeight: 1.55 }}>
                PravRaha is the autonomous revenue infrastructure for modern B2B unifying proprietary data, buying-signal intelligence, and AI-orchestrated execution into one closed-loop system.{' '}
                <strong className="text-text font-medium">Your pipeline stops depending on heroics. It starts depending on architecture.</strong>
              </p>

              <div className="flex gap-3.5 mb-14 flex-wrap">
                <Link to="/book" className="btn-primary">Book a Pipeline Review</Link>
                <Link to="/platform" className="btn-ghost">See the infrastructure <span className="arrow">↓</span></Link>
              </div>
              <div className="pt-7 border-t border-border flex gap-7 flex-wrap">
                {[['Built for', 'Founder-CROs, Seed–Series B'], ['Deployed from', 'Ranchi, Jharkhand · Arizona, US'], ['System state', 'Design-partner onboarding']].map(([l, v]) => (
                  <div key={l} className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-text-dim tracking-[0.14em] uppercase">{l}</span>
                    <span className="text-[13px] text-text-muted">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture SVG */}
            <div className="max-w-[480px] lg:ml-auto w-full">
              <div className="w-full aspect-square border border-border rounded bg-bg-elevated overflow-hidden relative"
                   style={{ background: 'radial-gradient(circle at 50% 50%, rgba(232,168,75,0.04) 0%, transparent 60%), #111113' }}>
                <div className="absolute top-4 left-4 font-mono text-[10px] text-text-dim tracking-[0.14em] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-signal rounded-full animate-pulse" />system active
                </div>
                <div className="absolute top-4 right-4 font-mono text-[10px] text-text-dim">/arch·v1</div>
                <svg viewBox="0 0 400 400" className="w-full h-full block">
                  {[[80, '01', 'Data', 'continuous'], [170, '02', 'Intelligence', '6 agents'], [260, '03', 'Execution', 'AI + human']].map(([y, n, t, r]) => (
                    <g key={n}>
                      <rect x="60" y={y} width="280" height="60" rx="2" fill="#16161a" stroke="#2a2a30" strokeWidth="1" />
                      <text x="76" y={y + 22} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, fill: '#8a8a85', letterSpacing: '0.1em', textTransform: 'uppercase' }}>layer {n}</text>
                      <text x="76" y={y + 44} style={{ fontFamily: "'Fraunces',serif", fontSize: 15, fill: '#ecebe3' }}>{t}</text>
                      <text x="324" y={y + 44} textAnchor="end" style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, fill: '#8a8a85', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{r}</text>
                    </g>
                  ))}
                  <path d="M 340 290 Q 380 290 380 200 Q 380 110 340 110" fill="none" stroke="#e8a84b" strokeWidth="1" strokeDasharray="3 4" className="arch-flow" />
                  <path d="M 60 110 Q 20 110 20 200 Q 20 290 60 290" fill="none" stroke="#e8a84b" strokeWidth="1" strokeDasharray="3 4" className="arch-flow" />
                  {[[340, 110], [340, 290], [60, 110], [60, 290]].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="3" fill="#e8a84b" />)}
                  <circle cx="340" cy="110" r="3" fill="#e8a84b" opacity="0.3" className="arch-pulse" />
                  <circle cx="60" cy="290" r="3" fill="#e8a84b" opacity="0.3" className="arch-pulse" />
                  <text x="380" y="200" textAnchor="middle" transform="rotate(90 380 200)" style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, fill: '#8a8a85', letterSpacing: '0.1em', textTransform: 'uppercase' }}>feedback</text>
                  <text x="20" y="200" textAnchor="middle" transform="rotate(-90 20 200)" style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, fill: '#8a8a85', letterSpacing: '0.1em', textTransform: 'uppercase' }}>signal</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ══ PROBLEM ══ */}
      <section className="border-t border-border py-[140px]">
        <div className="site-container">
          <Reveal><SectionHead eyebrow="The problem" title="The modern B2B stack is a pile of tools pretending to be a system." sub="Every company running outbound today is stitching together the same broken architecture — excellent tools, terrible seams." /></Reveal>
          <Reveal delay={0.1}>
            <div className="border border-border bg-bg-elevated p-12 mb-16 relative">
              <div className="font-mono text-[10px] text-text-dim tracking-[0.14em] uppercase mb-7 flex justify-between">
                <span>stack_audit · typical_b2b_gtm</span>
                <span className="text-danger">seam_count: 7 · leak_factor: high</span>
              </div>
              <div className="grid grid-cols-4 lg:grid-cols-8 gap-2.5 mb-4">
                {TOOLS.map(t => { const [n, ty] = t.split('|'); return (
                  <div key={n} className="p-4 border border-border bg-bg-subtle text-center">
                    <div className="font-mono text-[11px] text-text tracking-[0.04em] mb-1">{n}</div>
                    <div className="text-[10px] text-text-dim tracking-[0.08em] uppercase">{ty}</div>
                  </div>
                ); })}
              </div>
              <div className="hidden lg:grid grid-cols-7 mx-[6%] mb-4">
                {[1,2,3,4,5,6,7].map(i => (
                  <div key={i} className="border-l border-r border-dashed border-danger relative opacity-70 h-9">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-danger bg-bg-elevated px-1">✕</span>
                  </div>
                ))}
              </div>
              <div className="text-center pt-5 border-t border-border font-mono text-xs text-text-dim">
                8 tools · 1 outcome · <strong className="text-danger">0 architecture</strong>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-display font-light max-w-[780px]" style={{ fontSize: 'clamp(28px,3.4vw,42px)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              The problem isn't any single tool. Every one of them is excellent.<br />
              The problem is that <em className="text-accent italic">nobody shipped the infrastructure underneath.</em>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ CONTRARIAN ══ */}
      <section className="border-t border-border bg-bg-elevated py-[120px]">
        <div className="site-container">
          <Reveal><SectionHead eyebrow="Contrarian insight" title="Five reasons your outbound is broken. None of them are about effort." /></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {INSIGHTS.map((ins, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="bg-bg-elevated p-11">
                  <div className="font-display italic font-light text-[44px] text-accent leading-none mb-6 opacity-90">{ins.num}</div>
                  <h3 className="font-display text-[22px] font-normal leading-[1.2] mb-3.5" style={{ letterSpacing: '-0.02em' }}>{ins.title}</h3>
                  <p className="text-[15px] text-text-muted font-light" style={{ lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: ins.body }} />
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div className="bg-bg p-11 border-l-[3px] border-accent">
                <div className="font-display text-[44px] text-text leading-none mb-6">⟶</div>
                <h3 className="font-display text-[22px] font-normal leading-[1.2] text-accent mb-3.5" style={{ letterSpacing: '-0.02em' }}>The through-line.</h3>
                <p className="text-[15px] text-text-muted font-light" style={{ lineHeight: 1.6 }}>
                  None of these are fixed by a better tool. They're fixed by a different architecture.{' '}
                  <strong className="text-text font-medium">That architecture has a name: autonomous revenue infrastructure.</strong>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ CATEGORY TIMELINE ══ */}
      <section className="border-t border-border py-[160px]">
        <div className="site-container">
          <Reveal><SectionHead eyebrow="The category shift" title="From tools. To platforms. To infrastructure." sub='Every software category eventually consolidates. Payments did it. Data did it. Deployment did it. <strong class="text-text">B2B revenue is next.</strong>' /></Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {TIMELINE.map((t, i) => (
                <div key={i} className="pt-8">
                  <div className="font-mono text-[11px] text-text-dim tracking-[0.12em] uppercase mb-2">{t.co}</div>
                  <div className={`font-display text-xl font-normal mb-2.5 ${t.current ? 'text-accent' : 'text-text'}`} style={{ letterSpacing: '-0.015em', lineHeight: 1.15 }}>{t.cat}</div>
                  <div className="text-[13px] text-text-muted font-light" style={{ lineHeight: 1.5 }}>{t.desc}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-center mt-24 font-display italic font-light text-text-muted max-w-[820px] mx-auto" style={{ fontSize: 'clamp(22px,2.6vw,30px)', lineHeight: 1.4 }}>
              This category was inevitable. <strong className="text-text not-italic font-normal">It just needed someone to ship it.</strong>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ SYSTEM LAYERS ══ */}
      <section className="border-t border-border bg-bg-elevated py-[120px]">
        <div className="site-container">
          <Reveal><SectionHead eyebrow="The system" title="Three layers. One loop. Zero seams." sub="PravRaha is not a tool. It's the infrastructure your tools should have been built on." /></Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {LAYERS.map((l, i) => (
                <div key={i} className="p-9 bg-bg-elevated border border-border-strong flex flex-col">
                  <div className="font-mono text-[11px] text-accent tracking-[0.14em] mb-5">{l.num}</div>
                  <div className="font-display text-[28px] font-normal mb-2" style={{ letterSpacing: '-0.02em' }}>{l.title}</div>
                  <div className="font-display italic text-[15px] font-light text-text-muted mb-6">{l.sub}</div>
                  <p className="text-sm text-text-muted font-light flex-grow mb-6" style={{ lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: l.body }} />
                  <div className="pt-5 border-t border-border">
                    <div className="font-mono text-[11px] text-accent tracking-[0.08em] uppercase mb-2">What changes</div>
                    <div className="text-[13px] text-text-muted" style={{ lineHeight: 1.55 }}>{l.change}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12">
              <LoopBox>execution<Arrows />intelligence<Arrows />data<Arrows />execution<br /><span className="text-text-dim mt-2 inline-block">every cycle makes the next one smarter</span></LoopBox>
            </div>
            <div className="text-center mt-12">
              <Link to="/platform" className="btn-ghost">Deep-dive into the platform <span className="arrow">→</span></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ USE CASES ══ */}
      <section className="border-t border-border py-[120px]">
        <div className="site-container">
          <Reveal><SectionHead eyebrow="Built for" title="Infrastructure for the operators actually on the hook for pipeline." /></Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border mt-14">
              {UCARDS.map((u, i) => (
                <Link key={i} to="/use-cases" className="bg-bg-elevated p-10 no-underline text-inherit flex flex-col min-h-[260px] hover:bg-bg-subtle transition-colors duration-200">
                  <div className="font-mono text-[11px] text-accent tracking-[0.14em] uppercase mb-3.5">{u.role}</div>
                  <h3 className="font-display text-2xl font-normal mb-4" style={{ lineHeight: 1.2, letterSpacing: '-0.02em' }}>{u.title}</h3>
                  <p className="text-[15px] text-text-muted font-light flex-grow mb-6" style={{ lineHeight: 1.6 }}>{u.body}</p>
                  <div className="font-mono text-xs text-text tracking-[0.04em]">See playbook →</div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ LIVE DASHBOARD ══ */}
      <section className="border-t border-border bg-bg-elevated py-[120px]">
        <div className="site-container">
          <Reveal><SectionHead eyebrow="Architecture as proof" title="Six agents. One engine. Zero copy-paste." sub="This is the infrastructure running. Every agent has a narrow domain, a clear success metric, and a measurable handoff to the next." /></Reveal>
          <Reveal delay={0.1}>
            <Frame label="ope · pipeline infrastructure" coord="● operational · 6/6 agents">
              {AGENTS.map((a, i) => (
                <div key={i} className="grid grid-cols-1 lg:grid-cols-[180px_1fr_140px_80px] p-5 border-b border-border items-center gap-5 hover:bg-bg-subtle transition-colors">
                  <div className="flex items-center gap-2.5 font-mono font-medium text-[13px] text-text">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dots[i] ? 'bg-accent animate-pulse-fast' : 'bg-signal'}`} />
                    {a.name}
                  </div>
                  <div className="font-mono text-xs text-text-muted overflow-hidden whitespace-nowrap text-ellipsis">
                    <span className="text-text">{a.activity[0]}</span> {a.activity[1]}
                  </div>
                  <div className="font-mono text-xs text-text text-right">
                    <span className="text-accent text-sm font-medium">{a.count}</span> {a.unit}
                  </div>
                  <div className="font-mono text-[10px] text-text-dim text-right">{times[i]}</div>
                </div>
              ))}
              <div className="p-4 bg-bg-subtle border-t border-border flex justify-between font-mono text-[11px] text-text-dim">
                <span>loop_cycle: <strong className="text-text">continuous</strong> · latency: <strong className="text-text">signal→action &lt;48h</strong></span>
                <span>system_uptime: <strong className="text-text">99.98%</strong></span>
              </div>
            </Frame>
          </Reveal>
        </div>
      </section>

      {/* ══ MANIFESTO TEASER ══ */}
      <section className="border-t border-border py-[160px]">
        <div className="site-container text-center">
          <Reveal>
            <div className="max-w-[820px] mx-auto">
              <div className="eyebrow inline-block">The manifesto</div>
              <h2 className="font-display font-light mb-12" style={{ fontSize: 'clamp(28px,3.4vw,42px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                We believe revenue should be treated like <em className="text-accent italic">infrastructure</em> — not like activity.
              </h2>
              <div className="flex flex-col gap-6 mb-14">
                {['We believe outbound is a <strong class="text-text not-italic font-normal">systems problem</strong>, not a creativity problem.',
                  'We believe <strong class="text-text not-italic font-normal">AI without human accountability</strong> breaks at contact with real buyers.',
                  'We believe pipeline should <strong class="text-text not-italic font-normal">compound</strong>, not reset every Monday.'
                ].map((b, i) => (
                  <div key={i} className="font-display italic font-light text-xl text-text-muted pl-7 border-l-2 border-accent-dim text-left" style={{ lineHeight: 1.45 }} dangerouslySetInnerHTML={{ __html: b }} />
                ))}
              </div>
              <Link to="/manifesto" className="btn-ghost">Read the Autonomous Revenue Manifesto <span className="arrow">→</span></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ LOGO MARQUEE ══ */}
      <LogoMarquee />

    </>
  );
}

