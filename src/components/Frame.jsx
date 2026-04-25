export function Frame({ label, coord, children }) {
  return (
    <div className="frame">
      <div className="frame-head">
        <div className="font-mono text-[10px] text-text-dim tracking-[0.14em] uppercase flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 bg-signal rounded-full animate-pulse-med" />
          {label}
        </div>
        {coord && <span className="font-mono text-[10px] text-text-dim">{coord}</span>}
      </div>
      {children}
    </div>
  );
}

export function LoopBox({ children }) {
  return (
    <div className="text-center p-8 border border-dashed border-accent-dim font-mono text-[13px] text-accent tracking-[0.1em] uppercase"
         style={{ background: 'rgba(232,168,75,0.03)' }}>
      {children}
    </div>
  );
}

export function Arrows() {
  return <span className="inline-block mx-2 animate-arrows">→</span>;
}
