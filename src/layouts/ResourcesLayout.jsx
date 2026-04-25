// import { Helmet } from "react-helmet-async";

// export default function ResourcesLayout({ children }) {
//   return (
//     <>
//       <Helmet>
//         <title>Frameworks, Not Fluff. Guides That Ship.</title>

//         <meta
//           name="description"
//           content="The Autonomous Revenue Manifesto. The SIGNAL Framework. The Signal-Driven Outbound Playbook. ICP Engineering guide. Pipeline Predictability Framework. Plus 10 contrarian essays on why the B2B outbound stack is collapsing into infrastructure."
//         />

//         {/* Open Graph */}
//         <meta
//           property="og:title"
//           content="Frameworks, Not Fluff. Guides That Ship."
//         />
//         <meta
//           property="og:description"
//           content="The Autonomous Revenue Manifesto. The SIGNAL Framework. The Signal-Driven Outbound Playbook. ICP Engineering guide. Pipeline Predictability Framework. Plus 10 contrarian essays on why the B2B outbound stack is collapsing into infrastructure."
//         />
//         <meta property="og:image" content="/og-resources.png" />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content="Frameworks, Not Fluff. Guides That Ship."
//         />
//         <meta
//           name="twitter:description"
//           content="The Autonomous Revenue Manifesto. The SIGNAL Framework. The Signal-Driven Outbound Playbook. ICP Engineering guide. Pipeline Predictability Framework. Plus 10 contrarian essays on why the B2B outbound stack is collapsing into infrastructure."
//         />
//         <meta name="twitter:image" content="/og-resources.png" />
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
        <title>Frameworks, Not Fluff. Guides That Ship.</title>

        {/* ✅ DESCRIPTION */}
        <meta
          name="description"
          content="The Autonomous Revenue Manifesto. The SIGNAL Framework. The Signal-Driven Outbound Playbook. ICP Engineering guide. Pipeline Predictability Framework. Plus 10 contrarian essays on why the B2B outbound stack is collapsing into infrastructure."
        />

        {/* ✅ OPEN GRAPH */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pravraha" />
        <meta property="og:url" content="https://www.pravraha.com/about" />
        <meta property="og:title" content="Frameworks, Not Fluff. Guides That Ship." />
        <meta
          property="og:description"
          content="The Autonomous Revenue Manifesto. The SIGNAL Framework. The Signal-Driven Outbound Playbook. ICP Engineering guide. Pipeline Predictability Framework. Plus 10 contrarian essays on why the B2B outbound stack is collapsing into infrastructure."
        />
        <meta property="og:image" content="https://www.pravraha.com/og-compare.png" />

        {/* ✅ TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Frameworks, Not Fluff. Guides That Ship." />
        <meta
          name="twitter:description"
          content="The Autonomous Revenue Manifesto. The SIGNAL Framework. The Signal-Driven Outbound Playbook. ICP Engineering guide. Pipeline Predictability Framework. Plus 10 contrarian essays on why the B2B outbound stack is collapsing into infrastructure."
        />
        <meta name="twitter:image" content="https://www.pravraha.com/og-compare.png" />
      </Helmet>

      {children}
    </>
  );
}