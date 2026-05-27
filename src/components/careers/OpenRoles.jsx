import React, {
  useEffect,
  useState,
} from "react";

import { getJobs } from "../../services/jobService";

const OpenRoles = () => {

  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {

      const data = await getJobs();

      console.log("API RESPONSE:", data);

      // FIXED
      setJobs(data.data || []);

    } catch (error) {
      console.log(error);

      // SAFETY
      setJobs([]);
    }
  };

  useEffect(() => {
    fetchJobs();
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

        <p className="text-yellow-500 uppercase tracking-[0.3em] mb-4 text-sm">
          Open Roles
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Join Our Team
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {Array.isArray(jobs) &&
            jobs.map((job) => (

              <div
                key={job._id}
                className="border border-neutral-800 rounded-3xl p-8 bg-neutral-950"
              >

                <div className="flex items-center justify-between mb-6">

                  <h3 className="text-2xl font-semibold">
                    {job.title}
                  </h3>

                  <span className="text-sm bg-yellow-500 text-black px-4 py-2 rounded-full">
                    {job.status}
                  </span>

                </div>

                <div className="space-y-3 text-gray-400">

                  <p>
                    <strong className="text-white">
                      Department:
                    </strong>{" "}
                    {job.department}
                  </p>

                  <p>
                    <strong className="text-white">
                      Location:
                    </strong>{" "}
                    {job.location}
                  </p>

                  <p>
                    <strong className="text-white">
                      Type:
                    </strong>{" "}
                    {job.type}
                  </p>

                  <p>
                    <strong className="text-white">
                      Salary:
                    </strong>{" "}
                    {job.salary || "Not disclosed"}
                  </p>

                </div>

                <p className="text-gray-400 mt-6 leading-relaxed">
                  {job.description}
                </p>

                <button
                  onClick={handleApplyClick}
                  className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
                >
                  Apply Now
                </button>

              </div>

            ))}

        </div>

      </div>

    </section>
  );
};

export default OpenRoles;