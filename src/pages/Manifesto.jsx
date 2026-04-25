import Reveal from '../components/Reveal';

const CHAPTERS = [
  { num: '01', title: 'An <em class="text-accent italic">observation.</em>', paras: ['There are 200,000 growth-stage B2B SaaS companies in the US, UK, and Europe. Almost all of them are running outbound. Almost none of them have a system.','What they have is a collection of tools — a data provider here, a sequencing engine there. Each tool is excellent in isolation. <strong class="text-text font-medium">Together, they produce entropy.</strong>','<strong class="text-text font-medium">This is not a system. This is heroics at scale.</strong>'] },
  { num: '02', title: 'The <em class="text-accent italic">broken middle.</em>', paras: ["On one end: the manual stack. It works, but it doesn't scale. When your best SDR leaves, your pipeline follows.",'On the other: the full-AI stack. <strong class="text-text font-medium">AI hallucinates at the exact moment human judgment matters most.</strong>','The middle was empty. <strong class="text-text font-medium">Nobody had shipped the infrastructure for it.</strong>'] },
  { num: '03', title: 'The <em class="text-accent italic">inevitable shift.</em>', paras: ['Payments went from processors + fraud + compliance to Stripe. Data went from warehouses + ETL to Snowflake. Deployment went from DNS + CDN to Vercel.'], quote: 'The question was never whether this shift would happen. The question was who would ship it first.' },
  { num: '04', title: 'We call it <em class="text-accent italic">Autonomous Revenue Infrastructure.</em>', paras: ['The unification of data, intelligence, and execution into a single closed-loop system — with the right balance of AI speed and human judgment — that improves itself with every cycle.','<strong class="text-text font-medium">It is the substrate underneath your pipeline</strong> — the system that makes pipeline an engineered output, not a daily effort.'] },
  { num: '05', title: 'What it <em class="text-accent italic">replaces.</em>', paras: ["Stale data. Manual research. Template outreach. Intent data nobody acts on. AI SDRs that hallucinate. Sequences that don't learn. Pipeline that resets every Monday.",'<strong class="text-text font-medium">Infrastructure replaces all of this with a system that runs, learns, and compounds.</strong>'] },
  { num: '06', title: '<em class="text-accent italic">Why now.</em>', paras: ['<strong class="text-text font-medium">AI agents are production-ready.</strong> Not GPT wrappers — real agentic systems.','<strong class="text-text font-medium">The AI SDR backlash is real.</strong> Companies are quietly rehiring humans. The 80/20 hybrid has a window.','<strong class="text-text font-medium">Signal density has crossed a threshold.</strong> Signal-driven outbound is operationally viable at scale.'] },
  { num: '07', title: 'Our <em class="text-accent italic">commitment.</em>', paras: ['We will not pretend AI solves everything. We will deploy the right ratio and prove it with data.','We will build it from Jharkhand. We will build it for the world.'], quote: 'Pipeline is engineered. Not prayed for.' },
];

export default function Manifesto() {
  return (
    <>
      <header className="page-hero" style={{ paddingBottom: 60 }}><div className="site-container">
        <div className="eyebrow">The manifesto</div>
        <h1 className="font-display font-light" style={{ fontSize: 'clamp(40px,5vw,64px)', letterSpacing: '-0.03em', lineHeight: 1.02 }}>
          The Autonomous Revenue<br /><span className="italic-serif">Manifesto.</span>
        </h1>
      </div></header>
      <section className="border-t border-border py-[100px]"><div className="site-container">
        <div className="max-w-[740px] mx-auto">
          {CHAPTERS.map((ch, i) => (
            <Reveal key={i}>
              <div className={i > 0 ? 'mt-20 pt-10 border-t border-border' : ''}>
                <div className="font-mono text-[11px] text-accent tracking-[0.14em] uppercase mb-4">Chapter {ch.num}</div>
                <h2 className="font-display font-light mb-8" style={{ fontSize: 'clamp(26px,3vw,38px)', letterSpacing: '-0.02em', lineHeight: 1.15 }} dangerouslySetInnerHTML={{ __html: ch.title }} />
                {ch.paras.map((p, j) => <p key={j} className="prose-p" dangerouslySetInnerHTML={{ __html: p }} />)}
                {ch.quote && <blockquote className="prose-quote">{ch.quote}</blockquote>}
              </div>
            </Reveal>
          ))}
        </div>
      </div></section>
    </>
  );
}
