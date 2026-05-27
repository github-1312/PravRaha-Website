import React from "react";

const LinkedInCTA = () => {
  return (
    <section className="px-6 md:px-16 py-24 border-t border-neutral-800">

      <div className="max-w-4xl mx-auto text-center">

        <p className="text-yellow-500 uppercase tracking-[0.3em] mb-4 text-sm">
          Connect With PravRaha
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Join Our Growing AI Ecosystem
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Follow PravRaha on LinkedIn to stay updated with hiring opportunities,
          AI innovations, product launches, startup growth, and autonomous
          infrastructure development.
        </p>

        <a
          href="https://linkedin.com/company/pravraha"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300"
        >
          Follow on LinkedIn
        </a>

      </div>

    </section>
  );
};

export default LinkedInCTA;