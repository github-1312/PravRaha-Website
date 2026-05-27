import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { to: "/platform", label: "Platform" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/compare", label: "Compare" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/resources", label: "Resources" },
  { to: "/careers", label: "Careers" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // CLOSE MOBILE MENU ON ROUTE CHANGE
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-8 py-[18px]"
      style={{
        backgroundColor: "#C4CECF",
        backdropFilter: "blur(24px) saturate(1.2)",
        WebkitBackdropFilter: "blur(24px) saturate(1.2)",
        borderBottom: `1px solid ${
          scrolled ? "#1f1f24" : "transparent"
        }`,
      }}
    >
      <div className="max-w-site mx-auto flex items-center justify-between">

        {/* LOGO */}
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

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-9">

          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-semibold transition-colors duration-200 ${
                pathname === to
                  ? "text-black"
                  : "text-black/70 hover:text-black"
              }`}
            >
              {label}
            </Link>
          ))}

          {/* GET STARTED BUTTON */}
          <a
            href="https://panel.pravraha.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] py-2.5 px-[18px] rounded-full bg-[#dcb479] text-black font-medium hover:opacity-90 transition"
          >
            Get Started
          </a>

          {/* BOOK REVIEW BUTTON */}
          <Link
            to="/book"
            className="text-[13px] py-2.5 px-[18px] rounded-full bg-[#dcb479] text-black font-medium hover:opacity-90 transition"
          >
            Book a Pipeline Review
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >

          <span
            className={`block w-6 h-[2px] bg-black transition duration-300 ${
              menuOpen
                ? "rotate-45 translate-y-[6px]"
                : ""
            }`}
          />

          <span
            className={`block w-6 h-[2px] bg-black transition duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block w-6 h-[2px] bg-black transition duration-300 ${
              menuOpen
                ? "-rotate-45 -translate-y-[6px]"
                : ""
            }`}
          />

        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 pb-6 pt-4 rounded-2xl bg-[#C4CECF] border border-black/10 shadow-xl">

          <div className="flex flex-col gap-5 text-center">

            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  pathname === to
                    ? "text-black"
                    : "text-black/70 hover:text-black"
                }`}
              >
                {label}
              </Link>
            ))}

            {/* MOBILE GET STARTED */}
            <a
              href="https://panel.pravraha.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3 rounded-full bg-[#dcb479] text-black font-medium"
            >
              Get Started
            </a>

            {/* MOBILE BOOK BUTTON */}
            <Link
              to="/book"
              className="block text-center py-3 rounded-full bg-[#dcb479] text-black font-medium"
            >
              Book a Pipeline Review
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}