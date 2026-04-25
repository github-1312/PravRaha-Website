// import Reveal from '../components/Reveal';
// import SectionHead from '../components/SectionHead';

// const ROWS = [
//   ['Core unit', 'Contact record', 'Sequence', 'AI agent', 'Workflow table', 'System'],
//   ['Data freshness', 'Quarterly-ish', 'N/A-imports', 'Source-dependent', 'On-demand', 'Continuous, multi-source'],
//   ['Signal orchestration', 'None', 'None', 'Limited', 'Manual', 'OPE-native, automatic'],
//   ['Execution model', 'Manual', 'Manual', 'Pure AI', 'Manual / API', '80/20 AI + human hybrid'],
//   ['Feedback loop', 'None', 'Per-sequence', 'Per-agent', 'None', 'System-wide, compounding'],
//   ['What you buy', 'Seats + credits', 'Seats', 'Agent seats', 'Credits', 'Infrastructure'],
// ];

// const VS = [
//   { tag: 'vs Apollo / ZoomInfo', title: 'They sell data. Data without signal is trivia.', body: 'Apollo and ZoomInfo are excellent databases. The problem is that <strong class="text-text font-medium">a database is an ingredient, not a system.</strong> We don\'t sell contacts. We sell the system that makes contacts convert.', verdict: "If your challenge is 'we need more contacts,' Apollo works. If your challenge is 'we need more pipeline,' you need infrastructure." },
//   { tag: 'vs Outreach / Salesloft', title: 'Activity tracking without intelligence is noise at scale.', body: 'Outreach and Salesloft manage sequences. But they assume you already know <strong class="text-text font-medium">who to target, what signal triggered the outreach, and what message will resonate.</strong> Outreach is a sequence runner. PravRaha decides what sequence to run.', verdict: 'If your SDR team is already great at targeting, Outreach extends their reach. If you need the whole system, you need infrastructure.' },
//   { tag: 'vs 11x / Artisan', title: 'AI without human accountability hallucinates at scale.', body: 'Pure AI SDR companies are compelling in theory. In practice, <strong class="text-text font-medium">AI hallucinates at the exact moment human judgment matters most.</strong> The OPE\'s 80/20 hybrid is designed to survive contact with real buyers.', verdict: '11x is a bet on full automation. PravRaha is a bet on the right automation with human accountability.' },
//   { tag: 'vs Clay', title: 'A power tool for operators. Infrastructure for everyone else.', body: 'Clay is excellent the most flexible enrichment tool on the market. <strong class="text-text font-medium">If you have a RevOps engineer who thinks in APIs, Clay is transformative.</strong> Most Seed Series B companies don\'t have that person. PravRaha is the infrastructure Clay users are building, pre-built and self-improving.', verdict: "Clay is the best power tool. PravRaha is the infrastructure so you don't need one." },
//   { tag: 'vs Lead-gen agencies', title: "Labor doesn't compound. Infrastructure does.", body: '<strong class="text-text font-medium">When the contract ends, the knowledge walks out.</strong> PravRaha\'s infrastructure learns from every campaign, improves every cycle. The system in month 6 is measurably better than month 1.', verdict: 'Agencies are operating expense. Infrastructure is a compounding asset.' },
// ];

// export default function Compare() {
//   return (
//     <>
//       <header className="page-hero"><div className="site-container">
//         <div className="eyebrow">Compare</div>
//         <h1 className="font-display font-light" style={{ fontSize: 'clamp(40px,5vw,64px)', letterSpacing: '-0.03em', lineHeight: 1.02 }}>
//           What makes this infrastructure.<br /><span className="italic-serif">Not another tool.</span>
//         </h1>
//       </div></header>

//       <section className="border-t border-border py-[100px]"><div className="site-container">
//         <Reveal><SectionHead eyebrow="At a glance" title="The full comparison." /></Reveal>
//         <Reveal delay={0.1}><div className="overflow-x-auto">
//           <table className="compare-tbl">
//             <thead><tr><th></th><th>Apollo / ZoomInfo</th><th>Outreach / Salesloft</th><th>11x / Artisan</th><th>Clay</th><th className="us-th">PravRaha</th></tr></thead>
//             <tbody>{ROWS.map(([label, ...vals], i) => (
//               <tr key={i}><th>{label}</th>{vals.map((v, j) => <td key={j} className={j === 4 ? 'us-td' : ''}>{v}</td>)}</tr>
//             ))}</tbody>
//           </table>
//         </div></Reveal>
//       </div></section>

//       {VS.map((v, i) => (
//         <section key={i} className={`border-t border-border py-[100px] ${i % 2 === 1 ? 'bg-bg-elevated' : ''}`}>
//           <div className="site-container">
//             <Reveal>
//               <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 items-start mb-10">
//                 <div className="font-mono text-[11px] text-accent tracking-[0.14em] uppercase pt-2">{v.tag}</div>
//                 <h2 className="font-display font-light" style={{ fontSize: 'clamp(28px,3vw,40px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>{v.title}</h2>
//               </div>
//             </Reveal>
//             <Reveal delay={0.1}>
//               <div className="max-w-[700px] text-[17px] text-text-muted font-light" style={{ lineHeight: 1.65 }} dangerouslySetInnerHTML={{ __html: v.body }} />
//               <div className="mt-8 p-7 border border-dashed border-accent-dim font-mono text-[13px] text-accent max-w-[700px]" style={{ lineHeight: 1.7, background: 'rgba(232,168,75,0.03)' }}>{v.verdict}</div>
//             </Reveal>
//           </div>
//         </section>
//       ))}
//     </>
//   );
// }
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import CompareLayout from '../layouts/CompareLayout'; // ✅ FIXED

const ROWS = [
  ['Core unit', 'Contact record', 'Sequence', 'AI agent', 'Workflow table', 'System'],
  ['Data freshness', 'Quarterly-ish', 'N/A-imports', 'Source-dependent', 'On-demand', 'Continuous, multi-source'],
  ['Signal orchestration', 'None', 'None', 'Limited', 'Manual', 'OPE-native, automatic'],
  ['Execution model', 'Manual', 'Manual', 'Pure AI', 'Manual / API', '80/20 AI + human hybrid'],
  ['Feedback loop', 'None', 'Per-sequence', 'Per-agent', 'None', 'System-wide, compounding'],
  ['What you buy', 'Seats + credits', 'Seats', 'Agent seats', 'Credits', 'Infrastructure'],
];

const VS = [
  { tag: 'vs Apollo / ZoomInfo', title: 'They sell data. Data without signal is trivia.', body: 'Apollo and ZoomInfo are excellent databases. The problem is that <strong class="text-text font-medium">a database is an ingredient, not a system.</strong> We don\'t sell contacts. We sell the system that makes contacts convert.', verdict: "If your challenge is 'we need more contacts,' Apollo works. If your challenge is 'we need more pipeline,' you need infrastructure." },
  { tag: 'vs Outreach / Salesloft', title: 'Activity tracking without intelligence is noise at scale.', body: 'Outreach and Salesloft manage sequences. But they assume you already know <strong class="text-text font-medium">who to target, what signal triggered the outreach, and what message will resonate.</strong> Outreach is a sequence runner. PravRaha decides what sequence to run.', verdict: 'If your SDR team is already great at targeting, Outreach extends their reach. If you need the whole system, you need infrastructure.' },
  { tag: 'vs 11x / Artisan', title: 'AI without human accountability hallucinates at scale.', body: 'Pure AI SDR companies are compelling in theory. In practice, <strong class="text-text font-medium">AI hallucinates at the exact moment human judgment matters most.</strong> The OPE\'s 80/20 hybrid is designed to survive contact with real buyers.', verdict: '11x is a bet on full automation. PravRaha is a bet on the right automation with human accountability.' },
  { tag: 'vs Clay', title: 'A power tool for operators. Infrastructure for everyone else.', body: 'Clay is excellent the most flexible enrichment tool on the market. <strong class="text-text font-medium">If you have a RevOps engineer who thinks in APIs, Clay is transformative.</strong> Most Seed Series B companies don\'t have that person. PravRaha is the infrastructure Clay users are building, pre-built and self-improving.', verdict: "Clay is the best power tool. PravRaha is the infrastructure so you don't need one." },
  { tag: 'vs Lead-gen agencies', title: "Labor doesn't compound. Infrastructure does.", body: '<strong class="text-text font-medium">When the contract ends, the knowledge walks out.</strong> PravRaha\'s infrastructure learns from every campaign, improves every cycle. The system in month 6 is measurably better than month 1.', verdict: 'Agencies are operating expense. Infrastructure is a compounding asset.' },
];

export default function Compare() {
  return (
    <CompareLayout> {/* ✅ wrapped everything */}

      <header className="page-hero">
        <div className="site-container">
          <div className="eyebrow">Compare</div>
          <h1
            className="font-display font-light"
            style={{
              fontSize: 'clamp(40px,5vw,64px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.02,
            }}
          >
            What makes this infrastructure.<br />
            <span className="italic-serif">Not another tool.</span>
          </h1>
        </div>
      </header>

      <section className="border-t border-border py-[100px]">
        <div className="site-container">
          <Reveal>
            <SectionHead eyebrow="At a glance" title="The full comparison." />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-x-auto">
              <table className="compare-tbl">
                <thead>
                  <tr>
                    <th></th>
                    <th>Apollo / ZoomInfo</th>
                    <th>Outreach / Salesloft</th>
                    <th>11x / Artisan</th>
                    <th>Clay</th>
                    <th className="us-th">PravRaha</th>
                  </tr>
                </thead>

                <tbody>
                  {ROWS.map(([label, ...vals], i) => (
                    <tr key={i}>
                      <th>{label}</th>
                      {vals.map((v, j) => (
                        <td key={j} className={j === 4 ? 'us-td' : ''}>
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {VS.map((v, i) => (
        <section
          key={i}
          className={`border-t border-border py-[100px] ${
            i % 2 === 1 ? 'bg-bg-elevated' : ''
          }`}
        >
          <div className="site-container">
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 items-start mb-10">
                <div className="font-mono text-[11px] text-accent tracking-[0.14em] uppercase pt-2">
                  {v.tag}
                </div>
                <h2
                  className="font-display font-light"
                  style={{
                    fontSize: 'clamp(28px,3vw,40px)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                  }}
                >
                  {v.title}
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div
                className="max-w-[700px] text-[17px] text-text-muted font-light"
                style={{ lineHeight: 1.65 }}
                dangerouslySetInnerHTML={{ __html: v.body }}
              />

              <div
                className="mt-8 p-7 border border-dashed border-accent-dim font-mono text-[13px] text-accent max-w-[700px]"
                style={{
                  lineHeight: 1.7,
                  background: 'rgba(232,168,75,0.03)',
                }}
              >
                {v.verdict}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

    </CompareLayout>
  );
}