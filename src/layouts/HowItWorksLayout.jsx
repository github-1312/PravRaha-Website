// import { Helmet } from "react-helmet-async";

// export default function HowItWorksLayout({ children }) {
//   return (
//     <>
//       <Helmet>
//         <title>Six steps from ICP to compounding pipeline</title>

//         <meta
//           name="description"
//           content="Learn how PravRaha''s operational flow turns your ideal customer profile into a self-improving pipeline system. Six steps from ICP to compounding pipeline."
//         />

//         {/* Open Graph */}
//         <meta property="og:title" content="Six steps from ICP to compounding pipeline" />
//         <meta
//           property="og:description"
//           content="Learn how PravRaha''s operational flow turns your ideal customer profile into a self-improving pipeline system. Six steps from ICP to compounding pipeline."
//         />
//         <meta property="og:image" content="/og-how-it-works.png" />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content="Six steps from ICP to compounding pipeline"
//         />
//         <meta
//           name="twitter:description"
//           content="Learn how PravRaha''s operational flow turns your ideal customer profile into a self-improving pipeline system. Six steps from ICP to compounding pipeline."
//         />
//         <meta name="twitter:image" content="/og-how-it-works.png" />
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
        <title>Six Steps from ICP to Compounding Pipeline.</title>

        {/* ✅ DESCRIPTION */}
        <meta
          name="description"
          content="Define ICP with signal-weighted scoring. Identify buying signals in real time. Map the committee. Draft trigger-based messaging. Execute through the OPE. Learn, re-score, repeat. Every cycle makes the next one smarter."
        />

        {/* ✅ OPEN GRAPH */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pravraha" />
        <meta property="og:url" content="https://www.pravraha.com/about" />
        <meta property="og:title" content="Six Steps from ICP to Compounding Pipeline." />
        <meta
          property="og:description"
          content="Define ICP with signal-weighted scoring. Identify buying signals in real time. Map the committee. Draft trigger-based messaging. Execute through the OPE. Learn, re-score, repeat. Every cycle makes the next one smarter."
        />
        <meta property="og:image" content="https://www.pravraha.com/og-compare.png" />

        {/* ✅ TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Six Steps from ICP to Compounding Pipeline." />
        <meta
          name="twitter:description"
          content="Define ICP with signal-weighted scoring. Identify buying signals in real time. Map the committee. Draft trigger-based messaging. Execute through the OPE. Learn, re-score, repeat. Every cycle makes the next one smarter."
        />
        <meta name="twitter:image" content="https://www.pravraha.com/og-compare.png" />
      </Helmet>

      {children}
    </>
  );
}
