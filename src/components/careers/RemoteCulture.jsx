import React from "react";

const RemoteCulture = () => {
  return (
    <section className="px-6 md:px-16 py-24 border-t border-neutral-800">

      <div className="max-w-5xl mx-auto text-center">

        <p className="text-yellow-500 uppercase tracking-[0.3em] mb-4 text-sm">
          Remote First Culture
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Work From Anywhere.
          <br />
          Build Without Limits.
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
          At PravRaha, we optimize for builders, not bureaucracy.
          Our remote-first culture empowers ambitious engineers,
          designers, marketers, and AI innovators to collaborate
          globally while building meaningful autonomous systems.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="border border-neutral-800 bg-neutral-900 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-4">
              Flexible Work
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Work remotely with flexible schedules and async collaboration.
            </p>

          </div>

          <div className="border border-neutral-800 bg-neutral-900 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-4">
              Startup Speed
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Move fast, take ownership, and build impactful AI systems.
            </p>

          </div>

          <div className="border border-neutral-800 bg-neutral-900 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-4">
              Global Talent
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Collaborate with passionate builders from around the world.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default RemoteCulture;