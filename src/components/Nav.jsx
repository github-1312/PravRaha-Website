// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const NAV_LINKS = [
//   { to: '/platform', label: 'Platform' },
//   { to: '/how-it-works', label: 'How it works' },
//   { to: '/compare', label: 'Compare' },
//   { to: '/services', label: 'Services' },
//   { to: '/about', label: 'About' },
//   { to: '/resources', label: 'Resources' },
// ];

// export default function Nav() {
//   const [scrolled, setScrolled] = useState(false);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     const handler = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handler);
//     return () => window.removeEventListener('scroll', handler);
//   }, []);

//   return (
//     <nav
//       className="fixed top-0 left-0 right-0 py-[18px] px-8 z-[100] transition-[border-color] duration-300"
//       style={{
//         background: 'rgba(10,10,11,0.72)',
//         backdropFilter: 'blur(24px) saturate(1.2)',
//         WebkitBackdropFilter: 'blur(24px) saturate(1.2)',
//         borderBottom: `1px solid ${scrolled ? '#1f1f24' : 'transparent'}`,
//       }}
//     >
//       <div className="max-w-site mx-auto flex items-center justify-between">
//         <Link
//           to="/"
//           className="font-display text-[22px] font-normal text-text no-underline flex items-baseline gap-0.5"
//           style={{ letterSpacing: '-0.02em' }}
//         >
//           PravRaha
//           <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block ml-0.5 animate-pulse" />
//         </Link>

//         <div className="flex items-center gap-9 nav-desktop">
//           {NAV_LINKS.map(({ to, label }) => (
//             <Link
//               key={to}
//               to={to}
//               className={`text-sm no-underline transition-colors duration-200 ${
//                 pathname === to ? 'text-text' : 'text-text-muted hover:text-text'
//               }`}
//             >
//               {label}
//             </Link>
//           ))}



//            <a
//             href="https://panel.pravraha.com/login"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="font-body text-[13px] font-medium py-2.5 px-[18px] bg-text text-bg rounded-full
//                        no-underline transition-all duration-200 hover:bg-accent hover:text-bg"
//           >
//             Get Started
//           </a>
//           <Link
//             to="/book"
//             className="font-body text-[13px] font-medium py-2.5 px-[18px] bg-text text-bg rounded-full
//                        no-underline transition-all duration-200 hover:bg-accent hover:text-bg"
//           >
//             Book a Pipeline Review
//           </Link>
          
          
//         </div>
//       </div>
//     </nav>
//   );
// }

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/platform', label: 'Platform' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/compare', label: 'Compare' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/resources', label: 'Resources' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 py-[18px] px-6 md:px-8 z-[100]"
      style={{
        backgroundColor: '#C4CECF',
        backdropFilter: 'blur(24px) saturate(1.2)',
        WebkitBackdropFilter: 'blur(24px) saturate(1.2)',
        borderBottom: `1px solid ${scrolled ? '#1f1f24' : 'transparent'}`,
      }}
    >
      <div className="max-w-site mx-auto flex items-center justify-between">
        
        {/* Logo */}
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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-semibold transition-colors duration-200 ${
                pathname === to
                  ? 'text-black'
                  : 'text-black/70 hover:text-black'
              }`}
            >
              {label}
            </Link>
          ))}

          <a
  href="https://panel.pravraha.com/login"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[13px] py-2.5 px-[18px] text-bg rounded-full hover:bg-accent transition bg-[#dcb479] font-medium"
>
  Get Started
</a>

<Link
  to="/book"
  className="text-[13px] py-2.5 px-[18px] text-bg rounded-full hover:bg-accent transition bg-[#dcb479] font-medium"
>
  Book a Pipeline Review
</Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span
            className={`block w-6 h-[2px] bg-black transition ${
              menuOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-black transition ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-black transition ${
              menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 pb-6 space-y-4  backdrop-blur-xl rounded-xl text-center">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`block text-sm font-semibold ${
                pathname === to
                  ? 'text-white'
                  : 'text-white/70'
              }`}
            >
              {label}
            </Link>
          ))}

          <a
            href="https://panel.pravraha.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-2.5 bg-text text-bg rounded-full"
          >
            Get Started
          </a>

          <Link
            to="/book"
            className="block text-center py-2.5 bg-text text-bg rounded-full"
          >
            Book a Pipeline Review
          </Link>
        </div>
      )}
    </nav>
  );
}