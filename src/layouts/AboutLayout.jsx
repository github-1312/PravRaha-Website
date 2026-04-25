// import { useEffect } from "react";
// import { Helmet } from "react-helmet-async";

// export default function AboutLayout({ children }) {
//   return (
//     <>
//       <Helmet>
//         <title>Built by Operators Who Closed $18M ARR the Old Way.</title>
//         <meta
//           name="description"
//           content="Pankaj Kumar closed $18M ARR as the founding sales hire at ACCELQ. Milind Kamboj built distributed systems at Verizon. Priyanka Kumari ran GTM operations at ACCELQ. Now they are building autonomous revenue infrastructure from Jharkhand for the world."
//         />
//         <meta property="og:title" content="Built by Operators Who Closed $18M ARR the Old Way." />
//         <meta
//           property="og:description"
//           content="Pankaj Kumar closed $18M ARR as the founding sales hire at ACCELQ. Milind Kamboj built distributed systems at Verizon. Priyanka Kumari ran GTM operations at ACCELQ. Now they are building autonomous revenue infrastructure from Jharkhand for the world."
//         />
//         <meta property="og:image" content="https://www.pravraha.com/og-about.png" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Built by Operators Who Closed $18M ARR the Old Way." />
//         <meta
//           name="twitter:description"
//           content="Pankaj Kumar closed $18M ARR as the founding sales hire at ACCELQ. Milind Kamboj built distributed systems at Verizon. Priyanka Kumari ran GTM operations at ACCELQ. Now they are building autonomous revenue infrastructure from Jharkhand for the world."
//         />
//         <meta name="twitter:image" content="https://www.pravraha.com/og-about.png" />
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
        <title>Built by Operators Who Closed $18M ARR the Old Way.</title>

        {/* ✅ DESCRIPTION */}
        <meta
          name="description"
          content="Pankaj Kumar closed $18M ARR as the founding sales hire at ACCELQ. Milind Kamboj built distributed systems at Verizon. Priyanka Kumari ran GTM operations at ACCELQ. Now they are building autonomous revenue infrastructure from Jharkhand for the world."
        />

        {/* ✅ OPEN GRAPH */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pravraha" />
        <meta property="og:url" content="https://www.pravraha.com/about" />
        <meta property="og:title" content="Built by Operators Who Closed $18M ARR the Old Way." />
        <meta
          property="og:description"
          content="Pankaj Kumar closed $18M ARR as the founding sales hire at ACCELQ. Milind Kamboj built distributed systems at Verizon. Priyanka Kumari ran GTM operations at ACCELQ. Now they are building autonomous revenue infrastructure from Jharkhand for the world."
        />
        <meta property="og:image" content="https://www.pravraha.com/og-about.png" />

        {/* ✅ TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Built by Operators Who Closed $18M ARR the Old Way." />
        <meta
          name="twitter:description"
          content="Pankaj Kumar closed $18M ARR as the founding sales hire at ACCELQ. Milind Kamboj built distributed systems at Verizon. Priyanka Kumari ran GTM operations at ACCELQ. Now they are building autonomous revenue infrastructure from Jharkhand for the world."
        />
        <meta name="twitter:image" content="https://www.pravraha.com/og-about.png" />
      </Helmet>

      {children}
    </>
  );
}