// import React from "react";
// import { Target, Users, Bot, BarChart3 } from "lucide-react";
// import { motion } from "framer-motion";

// const features = [
//   {
//     title: "Ideal Customer Profile (ICP) Definition & Account Targeting",
//     desc: "We map your ideal customer profile using firmographic, technographic, and behavioural filters then build a precision target account list sized to your TAM, so every outreach dollar goes to accounts that can actually buy",
//     icon: Target,
//   },
//   {
//     title: "SDR-Led Multi-Channel Outreach",
//     desc: "Our trained SDRs run personalised cold email, LinkedIn, and phone sequences on your behalf crafted to your ICP, timed to buying signals, and written to start real conversations with decision-makers",
//     icon: Users,
//   },
//   {
//     title: "Buyer Intent Data & In-Market Account Signals",
//     desc: "We track job changes, funding rounds, hiring signals, tech stack shifts, and web behavioural data to identify accounts showing active buying intent so your SDRs reach out when prospects are in-market, not just on a list",
//     icon: Bot,
//   },
//   {
//     title: "B2B Appointment Setting & Meeting Booking",
//     desc: "Our SDRs handle the full outreach cycle and deliver sales-qualified meetings with verified decision-makers booked directly into your calendar, with a pre-call brief so your AE walks in prepared",
//     icon: BarChart3,
//   },
// ];

// const steps = [
//   {
//     title: "Strategy & Discovery",
//     desc: "Understand your business, goals, and ideal customers.",
//   },
//   {
//     title: "List Building & Enrichment",
//     desc: "Build a targeted and enriched prospect list.",
//   },
//   {
//     title: "Campaign Execution",
//     desc: "Launch and optimize outreach campaigns.",
//   },
//   {
//     title: "Reporting & Optimization",
//     desc: "Track performance and continuously improve ROI.",
//   },
// ];

// const scrollToContact = () => {
//   const section = document.getElementById("contact");
//   if (section) {
//     section.scrollIntoView({ behavior: "smooth" });
//   }
// };

// export default function Services() {
//   return (
//     <div className="bg-bg text-text">

//       {/* HERO */}
//       <section className="site-container py-[140px] grid md:grid-cols-2 gap-14 items-center">
//         <div>
//           <div className="eyebrow mb-6">Services</div>

//           <h1
//             className="font-display font-light"
//             style={{
//               fontSize: "clamp(40px,5vw,64px)",
//               letterSpacing: "-0.03em",
//               lineHeight: 1.05,
//             }}
//           >
//             B2B Lead <br />
//             <span className="italic-serif">Generation Services.</span>
//           </h1>

//              <p
//                className="relative z-10 text-[19px] text-white font-light mt-7 max-w-[640px]"
//                style={{ lineHeight: 1.6 }}
//               >
//                PravRaha is a B2B lead generation service that combines proprietary
//                 contact data, intent-based account targeting, and SDR-led outbound
//                 prospecting built for SaaS and tech companies that want qualified
//                 meetings, not just contact lists.
//                </p>

         
//         </div>

//         <div className="rounded-2xl overflow-hidden border border-border h-[420px]">
//           <img
//             src="/services.png"
//             alt="Services"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section className="border-t border-border py-[140px]">
//         <div className="site-container">

//           <div className="max-w-[720px] mb-16">
//             <div className="eyebrow mb-4">What we do</div>

//             <h2
//               className="font-display font-light text-[40px]"
//               style={{ letterSpacing: "-0.02em" }}
//             >
//               B2B Lead<br />
//               <span className="italic-serif"> Generation Services That Go From Data to Booked Meetings</span>
//             </h2>

//             <p className="text-text-muted font-light mt-6">

//               Proprietary B2B contact data. Intent-based account targeting. SDR-executed outreach. One platform, precision prospecting, and meetings on your calendar
              
              
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
//             {features.map((item, i) => {
//               const Icon = item.icon;

//               return (
//                 <div key={i} className="bg-bg-elevated p-8">
//                   <Icon className="w-6 h-6 text-accent mb-5" />

//                   <h3 className="font-display text-[20px] font-normal mb-3" style={{ letterSpacing: "-0.01em" }}>
//                     {item.title}
//                   </h3>

//                   <p className="text-sm text-text-muted font-light" style={{ lineHeight: 1.6 }}>
//                     {item.desc}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* PROCESS */}
//       <section className="border-t border-border bg-bg-elevated py-[140px]">
//         <div className="site-container max-w-[800px]">

//           <div className="mb-16">
//             <div className="eyebrow mb-4">Process</div>

//             <h2
//               className="font-display font-light text-[40px]"
//               style={{ letterSpacing: "-0.02em" }}
//             >
            
//               <span className="italic-serif"> Our Proven Process.</span>
//             </h2>

//             <p className="text-text-muted font-light mt-6">
//               A structured workflow designed for predictable and scalable growth.


//             </p>
//           </div>

//           <div className="relative border-l border-border pl-10">
//             {steps.map((step, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.15 }}
//                 className="mb-12 relative"
//               >
//                 <div className="absolute -left-[22px] top-1 w-4 h-4 bg-accent rounded-full" />

//                 <h3 className="font-display text-[20px] mb-2">
//                   {step.title}
//                 </h3>

//                 <p className="text-text-muted font-light text-sm">
//                   {step.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }
import React from "react";
import { Target, Users, Bot, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import ServicesLayout from "../layouts/ServicesLayout";

const features = [
  {
    title: "Ideal Customer Profile (ICP) Definition & Account Targeting",
    desc: "We map your ideal customer profile using firmographic, technographic, and behavioural filters then build a precision target account list sized to your TAM, so every outreach dollar goes to accounts that can actually buy",
    icon: Target,
  },
  {
    title: "SDR-Led Multi-Channel Outreach",
    desc: "Our trained SDRs run personalised cold email, LinkedIn, and phone sequences on your behalf crafted to your ICP, timed to buying signals, and written to start real conversations with decision-makers",
    icon: Users,
  },
  {
    title: "Buyer Intent Data & In-Market Account Signals",
    desc: "We track job changes, funding rounds, hiring signals, tech stack shifts, and web behavioural data to identify accounts showing active buying intent so your SDRs reach out when prospects are in-market, not just on a list",
    icon: Bot,
  },
  {
    title: "B2B Appointment Setting & Meeting Booking",
    desc: "Our SDRs handle the full outreach cycle and deliver sales-qualified meetings with verified decision-makers booked directly into your calendar, with a pre-call brief so your AE walks in prepared",
    icon: BarChart3,
  },
];

const steps = [
  {
    title: "Strategy & Discovery",
    desc: "Understand your business, goals, and ideal customers.",
  },
  {
    title: "List Building & Enrichment",
    desc: "Build a targeted and enriched prospect list.",
  },
  {
    title: "Campaign Execution",
    desc: "Launch and optimize outreach campaigns.",
  },
  {
    title: "Reporting & Optimization",
    desc: "Track performance and continuously improve ROI.",
  },
];

const scrollToContact = () => {
  const section = document.getElementById("contact");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Services() {
  return (
    <ServicesLayout>
      <div className="bg-bg text-text">

        {/* HERO */}
        <section className="site-container py-[140px] grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="eyebrow mb-6">Services</div>

            <h1
              className="font-display font-light"
              style={{
                fontSize: "clamp(40px,5vw,64px)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
              }}
            >
              B2B Lead <br />
              <span className="italic-serif">Generation Services.</span>
            </h1>

            <p
              className="relative z-10 text-[19px] text-white font-light mt-7 max-w-[640px]"
              style={{ lineHeight: 1.6 }}
            >
              PravRaha is a B2B lead generation service that combines proprietary
              contact data, intent-based account targeting, and SDR-led outbound
              prospecting built for SaaS and tech companies that want qualified
              meetings, not just contact lists.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border h-[420px]">
            <img
              src="/services.png"
              alt="Services"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* FEATURES */}
        <section className="border-t border-border py-[140px]">
          <div className="site-container">

            <div className="max-w-[720px] mb-16">
              <div className="eyebrow mb-4">What we do</div>

              <h2
                className="font-display font-light text-[40px]"
                style={{ letterSpacing: "-0.02em" }}
              >
                B2B Lead<br />
                <span className="italic-serif"> Generation Services That Go From Data to Booked Meetings</span>
              </h2>

              <p className="text-text-muted font-light mt-6">
                Proprietary B2B contact data. Intent-based account targeting. SDR-executed outreach. One platform, precision prospecting, and meetings on your calendar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
              {features.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div key={i} className="bg-bg-elevated p-8">
                    <Icon className="w-6 h-6 text-accent mb-5" />

                    <h3 className="font-display text-[20px] font-normal mb-3" style={{ letterSpacing: "-0.01em" }}>
                      {item.title}
                    </h3>

                    <p className="text-sm text-text-muted font-light" style={{ lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-t border-border bg-bg-elevated py-[140px]">
          <div className="site-container max-w-[800px]">

            <div className="mb-16">
              <div className="eyebrow mb-4">Process</div>

              <h2
                className="font-display font-light text-[40px]"
                style={{ letterSpacing: "-0.02em" }}
              >
                <span className="italic-serif"> Our Proven Process.</span>
              </h2>

              <p className="text-text-muted font-light mt-6">
                A structured workflow designed for predictable and scalable growth.
              </p>
            </div>

            <div className="relative border-l border-border pl-10">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="mb-12 relative"
                >
                  <div className="absolute -left-[22px] top-1 w-4 h-4 bg-accent rounded-full" />

                  <h3 className="font-display text-[20px] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-text-muted font-light text-sm">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

      </div>
    </ServicesLayout>
  );
}