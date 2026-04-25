// import { Link } from 'react-router-dom';
// import Reveal from '../components/Reveal';
// import SectionHead from '../components/SectionHead';

// const PILLARS = [
//   ['Manifesto', 'The Autonomous Revenue Manifesto', '/manifesto'],
//   ['Framework', 'The SIGNAL Framework: Source, Identify, Gauge, Navigate, Activate, Learn', null],
//   ['Playbook', 'The Signal-Driven Outbound Playbook', null],
//   ['Guide', 'ICP Engineering: From Persona Docs to Scoring Models', null],
//   ['Framework', 'The Pipeline Predictability Framework', null],
// ];

// const BLOGS = [
//   ['Analysis', 'Why every AI SDR vendor is quietly rehiring humans'],
//   ['Analysis', 'Apollo, ZoomInfo, and the end of the data-provider category'],
//   ['Insight', 'The 80/20 thesis: why hybrid AI + human outbound is the only architecture that survives'],
//   ['Guide', 'How to audit your outbound stack in 60 minutes'],
//   ['Insight', 'Intent data is a commodity. Here is what to do about it.'],
//   ['Insight', 'The coordination tax: what your 8-tool stack is actually costing you'],
//   ['Insight', 'Personalization at scale is a lie. Relevance at scale is real.'],
//   ['Playbook', 'Building signal-driven outbound without PravRaha (yes, we wrote this)'],
//   ['Comparison', 'Clay vs. PravRaha: power tool vs. infrastructure'],
//   ['Analysis', 'What Stripe, Snowflake, and Vercel teach us about the future of B2B revenue'],
// ];

// function ResourceItem({ type, title, to }) {
//   const inner = (
//     <>
//       <span className="font-mono text-[10px] text-accent tracking-[0.14em] uppercase">{type}</span>
//       <span className="font-display text-lg font-normal text-text" style={{ letterSpacing: '-0.015em' }}>{title}</span>
//       <span className="font-mono text-sm text-text-dim transition-all duration-200 group-hover:text-accent group-hover:translate-x-1">→</span>
//     </>
//   );
//   const cls = "group grid grid-cols-1 md:grid-cols-[120px_1fr_auto] p-7 border-b border-border items-center gap-4 md:gap-6 transition-colors duration-200 hover:bg-bg-elevated no-underline text-inherit";
//   if (to) return <Link to={to} className={cls}>{inner}</Link>;
//   return <div className={cls} style={{ cursor: 'pointer' }}>{inner}</div>;
// }

// export default function Resources() {
//   return (
//     <>
//       <header className="page-hero"><div className="site-container">
//         <div className="eyebrow">Resources</div>
//         <h1 className="font-display font-light" style={{ fontSize: 'clamp(40px,5vw,64px)', letterSpacing: '-0.03em', lineHeight: 1.02 }}>
//           Frameworks, not fluff.<br /><span className="italic-serif">Guides that ship.</span>
//         </h1>
//       </div></header>

//       <section className="border-t border-border py-[120px]"><div className="site-container">
//         <Reveal><SectionHead eyebrow="Pillar guides" title="The definitive resources on autonomous revenue infrastructure." /></Reveal>
//         <Reveal delay={0.1}>
//           <div className="flex flex-col border border-border">
//             {PILLARS.map(([type, title, to], i) => <ResourceItem key={i} type={type} title={title} to={to} />)}
//           </div>
//         </Reveal>
//       </div></section>

//       <section className="border-t border-border bg-bg-elevated py-[120px]"><div className="site-container">
//         <Reveal><SectionHead eyebrow="Blog" title="Contrarian perspectives on B2B revenue." /></Reveal>
//         <Reveal delay={0.1}>
//           <div className="flex flex-col border border-border">
//             {BLOGS.map(([type, title], i) => <ResourceItem key={i} type={type} title={title} />)}
//           </div>
//         </Reveal>
//       </div></section>
//     </>
//   );
// }

import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import ResourcesLayout from '../layouts/ResourcesLayout';

const PILLARS = [
  ['Manifesto', 'The Autonomous Revenue Manifesto', '/manifesto'],
  ['Framework', 'The SIGNAL Framework: Source, Identify, Gauge, Navigate, Activate, Learn', null],
  ['Playbook', 'The Signal-Driven Outbound Playbook', null],
  ['Guide', 'ICP Engineering: From Persona Docs to Scoring Models', null],
  ['Framework', 'The Pipeline Predictability Framework', null],
];

const BLOGS = [
  ['Analysis', 'Why every AI SDR vendor is quietly rehiring humans'],
  ['Analysis', 'Apollo, ZoomInfo, and the end of the data-provider category'],
  ['Insight', 'The 80/20 thesis: why hybrid AI + human outbound is the only architecture that survives'],
  ['Guide', 'How to audit your outbound stack in 60 minutes'],
  ['Insight', 'Intent data is a commodity. Here is what to do about it.'],
  ['Insight', 'The coordination tax: what your 8-tool stack is actually costing you'],
  ['Insight', 'Personalization at scale is a lie. Relevance at scale is real.'],
  ['Playbook', 'Building signal-driven outbound without PravRaha (yes, we wrote this)'],
  ['Comparison', 'Clay vs. PravRaha: power tool vs. infrastructure'],
  ['Analysis', 'What Stripe, Snowflake, and Vercel teach us about the future of B2B revenue'],
];

function ResourceItem({ type, title, to }) {
  const inner = (
    <>
      <span className="font-mono text-[10px] text-accent tracking-[0.14em] uppercase">{type}</span>
      <span
        className="font-display text-lg font-normal text-text"
        style={{ letterSpacing: '-0.015em' }}
      >
        {title}
      </span>
      <span className="font-mono text-sm text-text-dim transition-all duration-200 group-hover:text-accent group-hover:translate-x-1">
        →
      </span>
    </>
  );

  const cls =
    "group grid grid-cols-1 md:grid-cols-[120px_1fr_auto] p-7 border-b border-border items-center gap-4 md:gap-6 transition-colors duration-200 hover:bg-bg-elevated no-underline text-inherit";

  if (to) return <Link to={to} className={cls}>{inner}</Link>;

  return <div className={cls} style={{ cursor: 'pointer' }}>{inner}</div>;
}

export default function Resources() {
  return (
    <ResourcesLayout>
      <header className="page-hero">
        <div className="site-container">
          <div className="eyebrow">Resources</div>
          <h1
            className="font-display font-light"
            style={{
              fontSize: 'clamp(40px,5vw,64px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.02,
            }}
          >
            Frameworks, not fluff.<br />
            <span className="italic-serif">Guides that ship.</span>
          </h1>
        </div>
      </header>

      <section className="border-t border-border py-[120px]">
        <div className="site-container">
          <Reveal>
            <SectionHead
              eyebrow="Pillar guides"
              title="The definitive resources on autonomous revenue infrastructure."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col border border-border">
              {PILLARS.map(([type, title, to], i) => (
                <ResourceItem key={i} type={type} title={title} to={to} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-bg-elevated py-[120px]">
        <div className="site-container">
          <Reveal>
            <SectionHead
              eyebrow="Blog"
              title="Contrarian perspectives on B2B revenue."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col border border-border">
              {BLOGS.map(([type, title], i) => (
                <ResourceItem key={i} type={type} title={title} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </ResourcesLayout>
  );
}