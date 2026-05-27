import React, { useState } from "react";

import { submitApplication } from "../../services/applicationService";

const ApplyForm = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    position: "",
    experience: "",
    coverLetter: "",
  });

  const [resume, setResume] = useState(null);

  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] =
    useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      data.append(
        "fullName",
        formData.fullName
      );

      data.append(
        "email",
        formData.email
      );

      data.append(
        "phone",
        formData.phone
      );

      data.append(
        "linkedin",
        formData.linkedin
      );

      data.append(
        "portfolio",
        formData.portfolio
      );

      data.append(
        "position",
        formData.position
      );

      data.append(
        "experience",
        formData.experience
      );

      data.append(
        "coverLetter",
        formData.coverLetter
      );

      if (resume) {
        data.append("resume", resume);
      }

      await submitApplication(data);

      setSuccessMessage(
        "Application submitted successfully!"
      );

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        linkedin: "",
        portfolio: "",
        position: "",
        experience: "",
        coverLetter: "",
      });

      setResume(null);

    } catch (error) {
      console.error(error);

      alert(
        "Something went wrong. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-neutral-800 bg-neutral-900 rounded-3xl p-10">

      <h2 className="text-4xl font-bold mb-10">
        Apply Now
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          placeholder="Full Name"
          onChange={handleChange}
          required
          className="w-full bg-black border border-neutral-700 rounded-xl px-5 py-4 text-white outline-none"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email Address"
          onChange={handleChange}
          required
          className="w-full bg-black border border-neutral-700 rounded-xl px-5 py-4 text-white outline-none"
        />

        <input
          type="text"
          name="phone"
          value={formData.phone}
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full bg-black border border-neutral-700 rounded-xl px-5 py-4 text-white outline-none"
        />

        <input
          type="text"
          name="linkedin"
          value={formData.linkedin}
          placeholder="LinkedIn Profile URL"
          onChange={handleChange}
          className="w-full bg-black border border-neutral-700 rounded-xl px-5 py-4 text-white outline-none"
        />

        <input
          type="text"
          name="portfolio"
          value={formData.portfolio}
          placeholder="Portfolio Website"
          onChange={handleChange}
          className="w-full bg-black border border-neutral-700 rounded-xl px-5 py-4 text-white outline-none"
        />

        <select
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
          className="w-full bg-black border border-neutral-700 rounded-xl px-5 py-4 text-white outline-none"
        >
          <option value="">
            Select Position
          </option>

          <option value="AI Engineer">
            AI Engineer
          </option>

          <option value="Frontend Developer">
            Frontend Developer
          </option>

          <option value="AI Agent Engineer">
            AI Agent Engineer
          </option>

          <option value="Marketing Intern">
            Marketing Intern
          </option>

        </select>

        <input
          type="text"
          name="experience"
          value={formData.experience}
          placeholder="Years of Experience"
          onChange={handleChange}
          className="w-full bg-black border border-neutral-700 rounded-xl px-5 py-4 text-white outline-none"
        />

        <textarea
          name="coverLetter"
          rows="5"
          value={formData.coverLetter}
          placeholder="Tell us about yourself..."
          onChange={handleChange}
          className="w-full bg-black border border-neutral-700 rounded-xl px-5 py-4 text-white outline-none"
        />

        <div>

          <label className="block mb-3 text-gray-400">
            Upload Resume
          </label>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeChange}
            className="text-gray-400"
          />

        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          {loading
            ? "Submitting..."
            : "Submit Application"}
        </button>

        {successMessage && (
          <p className="text-green-500 mt-4">
            {successMessage}
          </p>
        )}

      </form>

    </div>
  );
};

export default ApplyForm;