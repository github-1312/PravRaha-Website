import React, { useEffect, useState } from "react";

const InternshipSection = () => {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {

    fetch("https://node.encleadus.cloud/api/jobs")
      .then((res) => res.json())
      .then((data) => {

        // only active jobs
        const activeJobs = data.filter(
          (job) => job.status === "Active"
        );

        setJobs(activeJobs);

      })
      .catch((err) => {
        console.error("Failed to fetch jobs:", err);
      });

  }, []);

  const handleApplyClick = () => {

    const section = document.getElementById("apply-form");

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

    }
  };

  return (
    <section className="px-6 md:px-16 py-24 border-t border-neutral-800">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Career Opportunities
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {jobs.map((job) => (

            <div
              key={job._id}
              className="border border-neutral-800 bg-neutral-900 rounded-3xl p-8 hover:border-yellow-500/30 transition duration-300"
            >

              <h3 className="text-2xl font-semibold mb-4">
                {job.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-4">
                {job.description}
              </p>

              <p className="text-sm text-yellow-500 mb-6">
                {job.jobType} • {job.location}
              </p>

              <button
                onClick={handleApplyClick}
                className="bg-yellow-500 text-black px-5 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
              >
                Apply
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default InternshipSection;