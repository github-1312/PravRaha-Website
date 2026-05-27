import React from "react";

const WhyJoin = () => {
  return (
    <section className="px-6 md:px-16 py-24">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-16">
          Why Join PravRaha
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            "Remote First",
            "High Ownership",
            "AI-Native Culture",
            "Fast Execution",
          ].map((item, index) => (
            <div
              key={index}
              className="border border-neutral-800 bg-neutral-900 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {item}
              </h3>

              <p className="text-gray-400">
                Build impactful AI systems with startup speed.
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyJoin;