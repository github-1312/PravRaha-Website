import React from "react";

import CareerHero from "../components/careers/CareerHero";
import WhyJoin from "../components/careers/WhyJoin";
import OpenRoles from "../components/careers/OpenRoles";
import InternshipSection from "../components/careers/InternshipSection";
import RemoteCulture from "../components/careers/RemoteCulture";
// import TechStack from "../components/careers/TechStack";
import LinkedInCTA from "../components/careers/LinkedInCTA";
import ApplyForm from "../components/careers/ApplyForm";

const Careers = () => {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">

      {/* HERO SECTION */}
      <CareerHero />

      {/* WHY JOIN */}
      <WhyJoin />

      {/* OPEN ROLES */}
      <OpenRoles />

      {/* INTERNSHIP SECTION */}
      <InternshipSection />

      {/* REMOTE CULTURE */}
      <RemoteCulture />

      {/* TECH STACK */}
      {/* <TechStack /> */}

      {/* LINKEDIN CTA */}
      <LinkedInCTA />

      {/* APPLICATION FORM */}
      <section
        id="apply-form"
        className="px-6 md:px-16 py-24 border-t border-neutral-800"
      >

        <div className="max-w-5xl mx-auto">

          <ApplyForm />

        </div>

      </section>

    </div>
  );
};

export default Careers;