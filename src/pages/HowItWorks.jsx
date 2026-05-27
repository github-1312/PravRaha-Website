import HowItWorksLayout from "../layouts/HowItWorksLayout";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import { Frame } from "../components/Frame";

const STEPS = [
  {
    title: "Define your ICP with engineering precision.",
    body: 'Not a persona doc. A <strong class="text-text font-medium">signal-weighted scoring model</strong> built on firmographics, technographics, hiring velocity, funding stage. PravRaha reverse-engineers what made your best customers convert.',
    agent: "Market Scanner",
    output: "ICP scoring model",
  },
  {
    title: "Identify signals in real time.",
    body: 'Funding rounds. Leadership hires. Technology adoption. PravRaha monitors <strong class="text-text font-medium">100+ intelligence sources via Draup</strong> surfacing accounts the moment they cross activation thresholds.',
    agent: "Market Scanner",
    output: "signal-qualified accounts",
  },
  {
    title: "Map the buying committee.",
    body: 'For every qualified account, Buyer Discovery identifies economic buyer, technical evaluator, champion, and blockers so your outreach targets <strong class="text-text font-medium">the right person with the right message at the right level.</strong>',
    agent: "Buyer Discovery",
    output: "committee maps",
  },
  {
    title: "Draft signal-based messaging.",
    body: 'Every outreach is tied to a specific trigger. <strong class="text-text font-medium">Each message has a reason</strong> (the signal), <strong class="text-text font-medium">a point of view</strong> (your insight), and <strong class="text-text font-medium">a timing thesis</strong> (why now).',
    agent: "Messaging",
    output: "trigger-specific sequences",
  },
  {
    title: "Execute through the Outreach Process Engine.",
    body: "AI handles 80% of volume. Trained SDRs handle the <strong class=\"text-text font-medium\">20% where human judgment matters</strong>. This hybrid architecture is PravRaha's hardest-to-replicate component.",
    agent: "Campaign Execution",
    output: "meetings booked, pipeline",
  },
  {
    title: "Learn, re-score, re-target.",
    body: 'Pipeline Optimizer analyzes which signals converted, which ICP weights need adjustment. <strong class="text-text font-medium">Feeds learnings back</strong> refining data, sharpening intelligence, improving execution.',
    agent: "Pipeline Optimizer",
    output: "improved ICP model",
  },
];

const DIFFS = [
  ["Signal-to-action latency", "2–4 weeks (manual)", "Under 48 hours (continuous)"],
  ["Data freshness", "Quarterly lists, 30% decay", "Continuous refresh, 100+ sources"],
  ["Personalization depth", "First name + company name", "Signal-specific: trigger + POV + timing"],
  ["Time to scale new ICP", "6–8 weeks", "1–2 weeks (reconfigure)"],
  ["Learning cadence", "Quarterly QBR", "Every cycle automatic"],
  ["Pipeline compounding", "Resets every Monday", "Each cycle improves the next"],
  ["Human/AI balance", "100% human OR 100% AI", "80/20 hybrid"],
];

export default function HowItWorks() {
  return (
    <HowItWorksLayout>
      <header className="page-hero">
        <div className="site-container">
          <div className="eyebrow">How it works</div>

          <h1
            className="font-display font-light"
            style={{
              fontSize: "clamp(40px,5vw,64px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
            }}
          >
            Six steps from ICP
            <br />
            <span className="italic-serif">
              to compounding pipeline.
            </span>
          </h1>

          <p
            className="text-[19px] text-text-muted font-light max-w-[640px] mt-7"
            style={{ lineHeight: 1.55 }}
          >
            PravRaha's operational flow turns your ideal customer profile into a
            self-improving pipeline system. Each step feeds the next. Each cycle
            compounds the last.
          </p>
        </div>
      </header>

      <section className="border-t border-border py-[140px]">
        <div className="site-container">
          <Reveal>
            <Frame label="operational flow · 6 steps" coord="/flow·v1">
              <div className="px-10 pb-10 pt-4">
                {STEPS.map((s, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[60px_1fr] lg:grid-cols-[80px_1fr] gap-5 lg:gap-8 py-12 border-b border-border last:border-b-0 items-start"
                  >
                    <div className="font-display italic font-light text-[36px] lg:text-[48px] text-accent leading-none opacity-90">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h3
                        className="font-display text-2xl font-normal mb-3"
                        style={{ letterSpacing: "-0.02em", lineHeight: 1.2 }}
                      >
                        {s.title}
                      </h3>

                      <p
                        className="text-[15px] text-text-muted font-light"
                        style={{ lineHeight: 1.6 }}
                        dangerouslySetInnerHTML={{ __html: s.body }}
                      />

                      <div className="mt-4 pt-3 border-t border-border font-mono text-[11px] text-text-dim tracking-[0.08em] uppercase">
                        Agent:{" "}
                        <strong className="text-accent font-medium">
                          {s.agent}
                        </strong>{" "}
                        · Output:{" "}
                        <strong className="text-accent font-medium">
                          {s.output}
                        </strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Frame>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-bg-elevated py-[140px]">
        <div className="site-container">
          <Reveal>
            <SectionHead
              eyebrow="The measurable difference"
              title="Traditional stack vs. PravRaha infrastructure."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-x-auto">
              <table className="compare-tbl">
                <thead>
                  <tr>
                    <th></th>
                    <th>Traditional stack</th>
                    <th className="us-th">PravRaha</th>
                  </tr>
                </thead>

                <tbody>
                  {DIFFS.map(([label, trad, prav], i) => (
                    <tr key={i}>
                      <th>{label}</th>
                      <td>{trad}</td>
                      <td className="us-td">{prav}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>
    </HowItWorksLayout>
  );
}