// import Reveal from '../components/Reveal';
// import SectionHead from '../components/SectionHead';

// const TEAM = [
//   { role: 'CEO & Co-Founder', name: 'Pankaj Kumar', prev: 'Previously: ACCELQ (founding hire) · Amazon · Tech Mahindra', bio: '<strong class="text-text font-medium">Closed $18M ARR as the founding sales hire at ACCELQ</strong> over five years. Prior experience at Amazon (Technical Consultant) and Tech Mahindra gave him visibility into how enterprise technology is bought from the customer side.' },
//   { role: 'CTO & Co-Founder', name: 'Milind Kamboj', prev: 'Previously: Verizon', bio: 'Built distributed systems at Verizon at the intersection of <strong class="text-text font-medium">data infrastructure, network intelligence, and production-grade reliability.</strong> At PravRaha, Milind architects the three-layer system with telecom-grade rigor.' },
//   { role: 'COO & Co-Founder', name: 'Priyanka Kumari', prev: 'Previously: ACCELQ', bio: 'Operated at the intersection of product delivery, customer success, and GTM operations at ACCELQ. At PravRaha, Priyanka ensures the OPE delivers <strong class="text-text font-medium">consistent quality and improves every cycle.</strong>' },
// ];

// const VALUES = [
//   ['Systems over heroics.', 'A great system makes every SDR dangerous.'],
//   ['Signal over spray.', 'Every signal should map to a buying window.'],
//   ['Compound over reset.', 'Every campaign should make the next one smarter.'],
//   ['Hybrid over purist.', '80/20 — the system that survives contact with real buyers.'],
//   ['Mechanism over claim.', "We never say 'we help you grow.' We show the mechanism."],
//   ['Jharkhand over mythology.', 'You need operators and engineers. Not a zip code.'],
// ];

// export default function About() {
//   return (
//     <>
//       <header className="page-hero"><div className="site-container">
//         <div className="eyebrow">About</div>
//         <h1 className="font-display font-light" style={{ fontSize: 'clamp(40px,5vw,64px)', letterSpacing: '-0.03em', lineHeight: 1.02 }}>
//           Built by operators who<br /><span className="italic-serif">closed $18M ARR the old way.</span>
//         </h1>
//       </div></header>

//       <section className="border-t border-border py-[120px]"><div className="site-container">
//         <Reveal><SectionHead eyebrow="The story" title="We did not start with a thesis. We started with a problem." /></Reveal>
//         <Reveal delay={0.1}>
//           <div className="max-w-[740px]">
//             <p className="prose-p">PravRaha was born from five years of selling enterprise software the hard way — researching manually, stitching tools, watching pipeline depend on individual effort.</p>
//             <p className="prose-p">Our CEO closed <strong className="text-text font-medium">$18M ARR as the founding sales hire at ACCELQ</strong>. Not with 50 SDRs. With hustle and the conviction there had to be a better way.</p>
//             <p className="prose-p">That conviction became PravRaha: <strong className="text-text font-medium">autonomous revenue infrastructure that turns pipeline into an engineered output.</strong></p>
//           </div>
//         </Reveal>
//         <Reveal delay={0.2}>
//           <div id="origin" className="border border-dashed border-accent-dim p-12 mt-16 text-center" style={{ background: 'rgba(232,168,75,0.03)' }}>
//             <div className="font-display italic font-light text-text max-w-[600px] mx-auto mb-4" style={{ fontSize: 'clamp(24px,3vw,36px)', lineHeight: 1.3 }}>Built from Jharkhand. Built for the world.</div>
//             <div className="font-mono text-[11px] text-text-dim tracking-[0.14em] uppercase">Ranchi, India · Arizona, US</div>
//           </div>
//         </Reveal>
//       </div></section>

//       <section className="border-t border-border bg-bg-elevated py-[120px]"><div className="site-container">
//         <Reveal><SectionHead eyebrow="The team" title="Operators and engineers. Not consultants." /></Reveal>
//         <Reveal delay={0.1}>
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border border border-border">
//             {TEAM.map((t, i) => (
//               <div key={i} className="bg-bg-elevated p-12">
//                 <div className="font-mono text-[11px] text-accent tracking-[0.14em] uppercase mb-4">{t.role}</div>
//                 <div className="font-display text-[28px] font-normal mb-2" style={{ letterSpacing: '-0.02em' }}>{t.name}</div>
//                 <div className="font-mono text-xs text-text-dim tracking-[0.06em] mb-5">{t.prev}</div>
//                 <div className="text-[15px] text-text-muted font-light" style={{ lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: t.bio }} />
//               </div>
//             ))}
//           </div>
//         </Reveal>
//       </div></section>

//       <section className="border-t border-border py-[120px]"><div className="site-container">
//         <Reveal><SectionHead eyebrow="What we believe" title="Principles, not platitudes." /></Reveal>
//         <Reveal delay={0.1}>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border mt-14">
//             {VALUES.map(([title, body], i) => (
//               <div key={i} className="bg-bg-elevated p-10">
//                 <h3 className="font-display text-[22px] font-normal mb-3.5" style={{ letterSpacing: '-0.02em' }}>{title}</h3>
//                 <div className="text-[15px] text-text-muted font-light" style={{ lineHeight: 1.6 }}><strong className="text-text font-medium">{body}</strong></div>
//               </div>
//             ))}
//           </div>
//         </Reveal>
//       </div></section>
//     </>
//   );
// }
// import AboutLayout from "../components/AboutLayout";
// import Reveal from '../components/Reveal';
// import SectionHead from '../components/SectionHead';



// const TEAM = [
//   {
//     role: 'CEO & Co-Founder',
//     name: 'Pankaj Kumar',
//     prev: 'Previously: ACCELQ (founding hire) · Amazon · Tech Mahindra',
//     bio: '<strong class="text-text font-medium">Closed $18M ARR as the founding sales hire at ACCELQ</strong> over five years. Prior experience at Amazon (Technical Consultant) and Tech Mahindra gave him deep visibility into how enterprise technology is bought.'
//   }
// ];

// const VALUES = [
//   ['Systems over heroics.', 'A great system makes every SDR dangerous.'],
//   ['Signal over spray.', 'Every signal should map to a buying window.'],
//   ['Compound over reset.', 'Every campaign should make the next one smarter.'],
//   ['Hybrid over purist.', '80/20 the system that survives contact with real buyers.'],
//   ['Mechanism over claim.', "We show the mechanism, not empty claims."],
//   ['Jharkhand over mythology.', 'Operators and engineers matter more than geography.'],
// ];

// export default function About() {
//   return (      
//     <>
    
//       {/* HERO */}
//       <header className="page-hero">
//         <div className="site-container max-w-[900px]">
//           <div className="eyebrow mb-6">About PravRaha</div>

//           <h1
//             className="font-display font-light mb-6"
//             style={{
//               fontSize: 'clamp(44px,5vw,68px)',
//               letterSpacing: '-0.03em',
//               lineHeight: 1.05
//             }}
//           >
//             Autonomous revenue infrastructure
//             <br />
//             <span className="italic-serif">for modern B2B sales</span>
//           </h1>

//           <p className="text-text-muted text-[18px] max-w-[640px] font-light leading-[1.7]">
//             Precision over volume. PravRaha helps companies engage the right decision-makers,
//             at the right time, using real buying signals not guesswork.
//           </p>
//         </div>
//       </header>

//       {/* WHAT IS PRAVRAHA */}
//       <section className="border-t border-border py-[120px]">
//         <div className="site-container grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
//           <Reveal>
//             <div>
//               <div className="font-display text-[32px] mb-6">What is PravRaha?</div>
//               <p className="text-text-muted font-light leading-[1.7]">
//                 PravRaha comes from the Sanskrit word for “High Quality,” and that idea defines everything we build.
//               </p>
//             </div>
//           </Reveal>

//           <Reveal delay={0.1}>
//             <div className="space-y-6 text-[16px] text-text-muted font-light leading-[1.7]">
//               <p>
//                 In B2B sales, success is not about reaching more people. It is about reaching the right companies, the right decision-makers, at the right moment.
//               </p>

//               <p>
//                 Yet most teams still rely on fragmented tools, outdated data, and high-volume outreach that creates more noise than results.
//               </p>

//               <p>
//                 PravRaha changes that by turning market signals into qualified pipeline combining intelligence, signal detection, research, and personalization.
//               </p>

//               <p className="text-text font-medium">
//                 Because in revenue generation, precision always beats volume.
//               </p>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* STORY */}
//       <section className="border-t border-border py-[120px] bg-bg-elevated">
//         <div className="site-container max-w-[800px]">
//           <Reveal>
//             <SectionHead
//               eyebrow="The story"
//               title="Built from real pipeline experience"
//               className="whitespace-nowrap"
//             />
//           </Reveal>

//           <Reveal delay={0.1}>
//             <div className="space-y-6 text-text-muted font-light leading-[1.7] mt-10">
//               <p>
//                 PravRaha was born from years of selling enterprise software the hard way manual research, fragmented tools, and pipeline dependent on individual effort.
//               </p>

//               <p>
//                 The realization was simple: pipeline should not depend on hustle. It should be engineered.
//               </p>

//               <p>
//                 Founded in Ranchi, India, PravRaha is building autonomous revenue infrastructure for modern B2B sales teams backed by strong engineering and real operator experience.
//               </p>
//             </div>
//           </Reveal>

//           <Reveal delay={0.2}>
//             <div className="border border-dashed border-accent-dim p-12 mt-16 text-center">
//               <div className="font-display italic text-text text-[28px] mb-4">
//                 Built from Ranchi. Built for the world.
//               </div>
//               <div className="font-mono text-xs text-text-dim uppercase tracking-wider">
//                 Ranchi, India · Arizona, US
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* TEAM */}
//       <section className="border-t border-border py-[120px]">
//         <div className="site-container">
//           <Reveal>
//             <SectionHead eyebrow="Leadership" title="Built by operators" />
//           </Reveal>

//           <Reveal delay={0.1}>
//             <div className="max-w-[700px] mt-14">
//               {TEAM.map((t, i) => (
//                 <div key={i} className="flex flex-col md:flex-row gap-10 items-start">
                  
//                   {/* IMAGE */}
//                   <img
//                     src="/image.jpg"
//                     alt={t.name}
//                     className="w-[120px] h-[120px] rounded-full object-cover border border-border"
//                   />

//                   <div>
//                     <div className="font-display text-[26px] mb-1">{t.name}</div>

//                     <div className="text-accent text-xs uppercase tracking-wider mb-3">
//                       {t.role}
//                     </div>

//                     <div className="text-text-dim text-sm mb-4">{t.prev}</div>

//                     <div
//                       className="text-text-muted font-light leading-[1.6]"
//                       dangerouslySetInnerHTML={{ __html: t.bio }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* VALUES */}
//       <section className="border-t border-border py-[120px] bg-bg-elevated">
//         <div className="site-container">
//           <Reveal>
//             <SectionHead
//               eyebrow="Principles"
//               title="How we think about revenue"
//             />
//           </Reveal>

//           <Reveal delay={0.1}>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
//               {VALUES.map(([title, body], i) => (
//                 <div key={i}>
//                   <h3 className="font-display text-[20px] mb-2">{title}</h3>
//                   <p className="text-text-muted font-light leading-[1.6]">
//                     {body}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </Reveal>
//         </div>
//       </section>
//     </>
//   );
// }

import AboutLayout from "../layouts/AboutLayout";
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';

const TEAM = [
  {
    role: 'CEO & Co-Founder',
    name: 'Pankaj Kumar',
    prev: 'Previously: ACCELQ (founding hire) · Amazon · Tech Mahindra',
    bio: '<strong class="text-text font-medium">Closed $18M ARR as the founding sales hire at ACCELQ</strong> over five years. Prior experience at Amazon (Technical Consultant) and Tech Mahindra gave him deep visibility into how enterprise technology is bought.'
  }
];

const VALUES = [
  ['Systems over heroics.', 'A great system makes every SDR dangerous.'],
  ['Signal over spray.', 'Every signal should map to a buying window.'],
  ['Compound over reset.', 'Every campaign should make the next one smarter.'],
  ['Hybrid over purist.', '80/20 the system that survives contact with real buyers.'],
  ['Mechanism over claim.', "We show the mechanism, not empty claims."],
  ['Jharkhand over mythology.', 'Operators and engineers matter more than geography.'],
];

export default function About() {
  return (
    <AboutLayout>
      <>
        {/* HERO */}
        <header className="page-hero">
          <div className="site-container max-w-[900px]">
            <div className="eyebrow mb-6">About PravRaha</div>

            <h1
              className="font-display font-light mb-6"
              style={{
                fontSize: 'clamp(44px,5vw,68px)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05
              }}
            >
              Autonomous revenue infrastructure
              <br />
              <span className="italic-serif">for modern B2B sales</span>
            </h1>

            <p className="text-text-muted text-[18px] max-w-[640px] font-light leading-[1.7]">
              Precision over volume. PravRaha helps companies engage the right decision-makers,
              at the right time, using real buying signals not guesswork.
            </p>
          </div>
        </header>

        {/* WHAT IS PRAVRAHA */}
        <section className="border-t border-border py-[120px]">
          <div className="site-container grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            <Reveal>
              <div>
                <div className="font-display text-[32px] mb-6">What is PravRaha?</div>
                <p className="text-text-muted font-light leading-[1.7]">
                  PravRaha comes from the Sanskrit word for “High Quality,” and that idea defines everything we build.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6 text-[16px] text-text-muted font-light leading-[1.7]">
                <p>
                  In B2B sales, success is not about reaching more people. It is about reaching the right companies, the right decision-makers, at the right moment.
                </p>

                <p>
                  Yet most teams still rely on fragmented tools, outdated data, and high-volume outreach that creates more noise than results.
                </p>

                <p>
                  PravRaha changes that by turning market signals into qualified pipeline combining intelligence, signal detection, research, and personalization.
                </p>

                <p className="text-text font-medium">
                  Because in revenue generation, precision always beats volume.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* STORY */}
        <section className="border-t border-border py-[120px] bg-bg-elevated">
          <div className="site-container max-w-[800px]">
            <Reveal>
              <SectionHead
                eyebrow="The story"
                title="Built from real pipeline experience"
                className="whitespace-nowrap"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6 text-text-muted font-light leading-[1.7] mt-10">
                <p>
                  PravRaha was born from years of selling enterprise software the hard way manual research, fragmented tools, and pipeline dependent on individual effort.
                </p>

                <p>
                  The realization was simple: pipeline should not depend on hustle. It should be engineered.
                </p>

                <p>
                  Founded in Ranchi, India, PravRaha is building autonomous revenue infrastructure for modern B2B sales teams backed by strong engineering and real operator experience.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="border border-dashed border-accent-dim p-12 mt-16 text-center">
                <div className="font-display italic text-text text-[28px] mb-4">
                  Built from Ranchi. Built for the world.
                </div>
                <div className="font-mono text-xs text-text-dim uppercase tracking-wider">
                  Ranchi, India · Arizona, US
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TEAM */}
        <section className="border-t border-border py-[120px]">
          <div className="site-container">
            <Reveal>
              <SectionHead eyebrow="Leadership" title="Built by operators" />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="max-w-[700px] mt-14">
                {TEAM.map((t, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-10 items-start">

                    <img
                      src="/image.jpg"
                      alt={t.name}
                      className="w-[120px] h-[120px] rounded-full object-cover border border-border"
                    />

                    <div>
                      <div className="font-display text-[26px] mb-1">{t.name}</div>

                      <div className="text-accent text-xs uppercase tracking-wider mb-3">
                        {t.role}
                      </div>

                      <div className="text-text-dim text-sm mb-4">{t.prev}</div>

                      <div
                        className="text-text-muted font-light leading-[1.6]"
                        dangerouslySetInnerHTML={{ __html: t.bio }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* VALUES */}
        <section className="border-t border-border py-[120px] bg-bg-elevated">
          <div className="site-container">
            <Reveal>
              <SectionHead
                eyebrow="Principles"
                title="How we think about revenue"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
                {VALUES.map(([title, body], i) => (
                  <div key={i}>
                    <h3 className="font-display text-[20px] mb-2">{title}</h3>
                    <p className="text-text-muted font-light leading-[1.6]">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </>
    </AboutLayout>
  );
}