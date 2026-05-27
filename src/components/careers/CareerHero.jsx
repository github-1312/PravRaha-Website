import React from "react";

const CareerHero = () => {
  return (
    <section className="px-6 md:px-16 py-28 border-b border-neutral-800">

      <div className="max-w-7xl mx-auto">

        <p className="text-yellow-500 uppercase tracking-[0.3em] mb-6 text-sm">
          Careers at PravRaha
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl">
          Build the Future of Autonomous Revenue Infrastructure.
        </h1>

        <p className="text-gray-400 text-lg mt-8 max-w-3xl leading-relaxed">
          We’re building AI-native systems that redefine B2B growth infrastructure.
        </p>

        <div className="mt-10 flex gap-5 flex-wrap">

          <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
            Join Our Team
          </button>

          <button className="border border-gray-700 px-8 py-4 rounded-full hover:bg-neutral-900 transition">
            Explore Culture
          </button>

        </div>

      </div>

    </section>
  );
};

export default CareerHero;