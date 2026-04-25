// import { Helmet } from "react-helmet-async";

// export default function ServicesLayout({ children }) {
//   return (
//     <>
//       <Helmet>
//         <title>
//           You Don't Hire SDRs. You Deploy Infrastructure.
//         </title>

//         <meta
//           name="description"
//           content="Full-stack autonomous revenue infrastructure deployed on your ICP. Signal-driven outbound through the OPE with AI handling volume and human SDRs on high-stakes threads. Pipeline architecture audits in 45 minutes."
//         />

//         {/* Open Graph */}
//         <meta
//           property="og:title"
//           content="You Don't Hire SDRs. You Deploy Infrastructure."
//         />
//         <meta
//           property="og:description"
//           content="Full-stack autonomous revenue infrastructure deployed on your ICP. Signal-driven outbound through the OPE with AI handling volume and human SDRs on high-stakes threads. Pipeline architecture audits in 45 minutes."
//         />
//         <meta property="og:image" content="og-services.png" />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content="You Don't Hire SDRs. You Deploy Infrastructure."
//         />
//         <meta
//           name="twitter:description"
//           content="Full-stack autonomous revenue infrastructure deployed on your ICP. Signal-driven outbound through the OPE with AI handling volume and human SDRs on high-stakes threads. Pipeline architecture audits in 45 minutes."
//         />
//         <meta name="twitter:image" content="/og-services.png" />
//       </Helmet>

//       {children}
//     </>
//   );
// }
import { Helmet } from "react-helmet-async";

export default function AboutLayout({ children }) {
  return (
    <>
      <Helmet>
        {/* ✅ TITLE */}
        <title>You Don't Hire SDRs. You Deploy Infrastructure.</title>

        {/* ✅ DESCRIPTION */}
        <meta
          name="description"
          content="Full-stack autonomous revenue infrastructure deployed on your ICP. Signal-driven outbound through the OPE with AI handling volume and human SDRs on high-stakes threads. Pipeline architecture audits in 45 minutes."
        />

        {/* ✅ OPEN GRAPH */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pravraha" />
        <meta property="og:url" content="https://www.pravraha.com/about" />
        <meta property="og:title" content="You Don't Hire SDRs. You Deploy Infrastructure." />
        <meta
          property="og:description"
          content="Full-stack autonomous revenue infrastructure deployed on your ICP. Signal-driven outbound through the OPE with AI handling volume and human SDRs on high-stakes threads. Pipeline architecture audits in 45 minutes."
        />
        <meta property="og:image" content="https://www.pravraha.com/og-compare.png" />

        {/* ✅ TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="You Don't Hire SDRs. You Deploy Infrastructure." />
        <meta
          name="twitter:description"
          content="Full-stack autonomous revenue infrastructure deployed on your ICP. Signal-driven outbound through the OPE with AI handling volume and human SDRs on high-stakes threads. Pipeline architecture audits in 45 minutes."
        />
        <meta name="twitter:image" content="https://www.pravraha.com/og-compare.png" />
      </Helmet>

      {children}
    </>
  );
}