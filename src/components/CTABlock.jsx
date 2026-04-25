import { Link } from 'react-router-dom';
import Reveal from './Reveal';

export default function CTABlock() {
  return (
    <section className="border-t border-border py-[140px] text-center relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(232,168,75,0.06) 0%, transparent 50%)' }}
      />
      <div className="relative max-w-[720px] mx-auto px-8">
        <Reveal>
          <div className="eyebrow" style={{ display: 'inline-block' }}>Next step</div>
          <h2
            className="font-display font-light mb-5"
            style={{ fontSize: 'clamp(36px,5vw,64px)', letterSpacing: '-0.03em', lineHeight: 1 }}
          >
            Book a Pipeline Review.
          </h2>
          <p className="text-[17px] text-text-muted font-light mb-10" style={{ lineHeight: 1.6 }}>
            45 minutes. We audit your outbound architecture, identify the seams costing you pipeline,
            and show you what <strong className="text-text font-medium">autonomous revenue infrastructure</strong> looks
            like on your ICP. No slides. No generic demo.
          </p>
          <Link to="/book" className="btn-primary" style={{ padding: '18px 36px', fontSize: 16 }}>
            Book a Pipeline Review <span className="arrow">→</span>
          </Link>
         <div className="mt-16 font-display italic text-sm text-white font-semibold tracking-wide">
           Built from Ranchi. Built for the world.
           </div>
        </Reveal>
      </div>
    </section>
  );
}
