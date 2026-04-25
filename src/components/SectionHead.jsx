export default function SectionHead({ eyebrow, title, sub }) {
  return (
    <div className="section-head">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2
        className="font-display font-light leading-[1.05] mb-5"
        style={{ fontSize: 'clamp(34px, 4.2vw, 56px)', letterSpacing: '-0.025em' }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {sub && (
        <p
          className="text-text-muted text-[17px] font-light max-w-[620px]"
          style={{ lineHeight: 1.55 }}
          dangerouslySetInnerHTML={{ __html: sub }}
        />
      )}
    </div>
  );
}
