import { motion } from "framer-motion";

const logos = [
  "/productlogo1.png",
  "/productlogo2.png",
  "/productlogo3.jpg",
  "/productlogo4.jpeg"
];

export default function LogoMarquee() {
  return (
    <section className="relative w-full overflow-hidden py-12">
      <motion.div
        className="flex w-max items-center gap-20"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center"
            style={{
              width: "200px",   // ✅ equal width
              height: "200px",  // ✅ equal height (square)
            }}
          >
            <img
              src={logo}
              alt="Company Logo"
              style={{
                width: "200%",     // ✅ makes it feel fuller
                height: "200%",
                objectFit: "contain",
                mixBlendMode: "lighten",
                filter: "brightness(1.15) contrast(1.05)",
              }}
            />
          </div>
        ))}
      </motion.div>

      {/* Left fade */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-32"
        style={{
          background: "linear-gradient(to right, #0a0a0a, transparent)",
        }}
      />

      {/* Right fade */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-32"
        style={{
          background: "linear-gradient(to left, #0a0a0a, transparent)",
        }}
      />
    </section>
  );
}
