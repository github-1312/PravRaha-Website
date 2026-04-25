import Reveal from '../components/Reveal';

const PERSONAS = [
  { id: 'founder-cro', role: 'Founder-CRO · Seed–Series B', title: 'You are the strategist, the SDR, and the coach. You should not be.', problem: 'You are signing the outbound strategy, running the first SDR motion, reviewing every sequence, and still missing board targets. <strong class="text-text font-medium">Every hour on outbound is an hour not spent on product, fundraising, or hiring.</strong>', solution: "PravRaha becomes the infrastructure you've been trying to build. It defines your ICP, monitors signals, maps committees, drafts outreach, and executes through the OPE. <strong class='text-text font-medium'>You stop being the system. You start having a system.</strong>", outcome: 'Pipeline becomes predictable. You reclaim 15–20 hours per week. Outbound compounds instead of resetting.' },
  { id: 'cro', role: 'CRO · Series B–D', title: 'Three SDR pods. Four tools. Inconsistent pipeline across regions.', problem: 'SDR teams in multiple regions running different playbooks on different tools. <strong class="text-text font-medium">Pipeline quality varies based on which SDR is working which territory.</strong>', solution: 'One infrastructure layer for every region. Same data quality, same signal orchestration, same execution standards. <strong class="text-text font-medium">Pipeline depends on architecture, not talent.</strong>', outcome: 'Pipeline consistency improves across pods. Tool spend consolidates. New market entry goes from 8-week ramp to 2-week reconfiguration.' },
  { id: 'revops', role: 'RevOps Leader', title: "You've built Clay tables, wired Bombora, debugged five sequences this week.", problem: 'You spend 80% of your time plumbing — Clay workflows, Outreach templates, Salesforce integrations, data reconciliation. <strong class="text-text font-medium">You are an architect working as a plumber.</strong>', solution: 'PravRaha is the infrastructure you rebuild in Clay every quarter — pre-built and self-improving. <strong class="text-text font-medium">You move from plumber to architect.</strong>', outcome: "Tool maintenance drops. Time shifts to strategy. The system learns — no quarterly rebuilds." },
  { id: 'sdr', role: 'SDR Team Lead', title: 'Your reps spend more time researching than reaching out.', problem: 'SDRs spend 40% of their time on manual research. <strong class="text-text font-medium">The ratio is backwards.</strong>', solution: 'Signal-ready accounts with full context — org charts, committees, triggers, draft messaging. <strong class="text-text font-medium">Every outreach is relevant by default.</strong>', outcome: 'SDR research time drops 60%+. Outreach quality improves. New SDR ramp decreases.' },
];

export default function UseCases() {
  return (
    <>
      <header className="page-hero"><div className="site-container">
        <div className="eyebrow">Use cases</div>
        <h1 className="font-display font-light" style={{ fontSize: 'clamp(40px,5vw,64px)', letterSpacing: '-0.03em', lineHeight: 1.02 }}>
          Infrastructure for the operators<br /><span className="italic-serif">on the hook for pipeline.</span>
        </h1>
      </div></header>
      {PERSONAS.map((p, i) => (
        <section key={p.id} id={p.id} className={`border-t border-border py-[120px] ${i % 2 === 1 ? 'bg-bg-elevated' : ''}`}>
          <div className="site-container">
            <Reveal>
              <div className="font-mono text-[11px] text-accent tracking-[0.14em] uppercase mb-4">{p.role}</div>
              <h2 className="font-display font-light max-w-[780px] mb-12" style={{ fontSize: 'clamp(30px,3.5vw,48px)', letterSpacing: '-0.025em', lineHeight: 1.08 }}>{p.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                <div>
                  <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase mb-5 text-danger">The problem</h3>
                  <div className="text-[16px] text-text-muted font-light" style={{ lineHeight: 1.65 }} dangerouslySetInnerHTML={{ __html: p.problem }} />
                </div>
                <div>
                  <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase mb-5 text-signal">What PravRaha does</h3>
                  <div className="text-[16px] text-text-muted font-light" style={{ lineHeight: 1.65 }} dangerouslySetInnerHTML={{ __html: p.solution }} />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-12 p-7 border border-border bg-bg-subtle">
                <div className="font-mono text-[10px] text-accent tracking-[0.14em] uppercase mb-3">Typical 90-day outcome</div>
                <div className="text-[15px] text-text font-normal" style={{ lineHeight: 1.6 }}>{p.outcome}</div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}
    </>
  );
}
