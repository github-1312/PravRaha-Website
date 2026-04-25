import { Link } from 'react-router-dom';

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] text-black tracking-[0.14em] uppercase mb-5 font-bold">
        {title}
      </h4>
      <ul className="list-none flex flex-col gap-3">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link
              to={to}
              className="text-sm text-black/70 font-normal no-underline hover:text-black transition-colors duration-200"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="border-t pt-20 pb-10"
      style={{
        backgroundColor: '#C4CECF',
        borderColor: '#AAB3B8',
      }}
    >
      <div className="site-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12 mb-16">
          
          {/* Logo + Description */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 no-underline"
            >
              <img
                src="/navbarlogo.avif"
                alt="PravRaha Logo"
                className="h-8 w-auto object-contain"
              />
            </Link>

            <p
              className="text-sm text-black/70 font-normal mt-4 max-w-[280px]"
              style={{ lineHeight: 1.6 }}
            >
              Autonomous revenue infrastructure for modern B2B. Built by operators who closed $18M ARR the old way so you don't have to.
            </p>
          </div>

          <FooterCol
            title="Platform"
            links={[
              ['Data Layer', '/platform'],
              ['Intelligence Layer', '/platform#intelligence'],
              ['Execution Layer', '/platform#execution'],
              ['How it works', '/how-it-works'],
            ]}
          />

          <FooterCol
            title="Compare"
            links={[
              ['vs Apollo / ZoomInfo', '/compare'],
              ['vs Outreach / Salesloft', '/compare'],
              ['vs 11x / Artisan', '/compare'],
              ['vs Clay', '/compare'],
            ]}
          />

          <FooterCol
            title="Resources"
            links={[
              ['Manifesto', '/manifesto'],
              ['SIGNAL Framework', '/resources'],
              ['Pillar guides', '/resources'],
            ]}
          />

          <FooterCol
            title="Company"
            links={[
              ['About', '/about'],
              ['Built from Jharkhand', '/about#origin'],
              ['Book a Pipeline Review', '/book'],
            ]}
          />
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t flex justify-between font-mono text-[11px] text-black/70 tracking-[0.08em] flex-wrap gap-4"
          style={{ borderColor: '#AAB3B8' }}
        >
          <span>&copy; 2025 PravRaha · Ranchi · Arizona</span>
          <span>Privacy · Security · GDPR · SOC 2 (in progress)</span>
        </div>
      </div>
    </footer>
  );
}