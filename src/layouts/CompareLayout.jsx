// // import { useEffect } from "react";

// // export default function CompareLayout({ children }) {
// //   useEffect(() => {
// //     // Basic SEO meta tags
// //     document.title = "What Makes This Infrastructure. Not Another Tool.";

// //     const setMetaTag = (name, content) => {
// //       let element = document.querySelector(`meta[name="${name}"]`);
// //       if (!element) {
// //         element = document.createElement("meta");
// //         element.setAttribute("name", name);
// //         document.head.appendChild(element);
// //       }
// //       element.setAttribute("content", content);
// //     };

// //     const setPropertyTag = (property, content) => {
// //       let element = document.querySelector(`meta[property="${property}"]`);
// //       if (!element) {
// //         element = document.createElement("meta");
// //         element.setAttribute("property", property);
// //         document.head.appendChild(element);
// //       }
// //       element.setAttribute("content", content);
// //     };

// //     // Description
// //     setMetaTag(
// //       "description",
// //       "PravRaha vs Apollo, ZoomInfo, Outreach, Salesloft, 11x, Artisan, Clay, and lead-gen agencies — compared across data freshness, signal orchestration, execution model, feedback loops, and what you actually buy."
// //     );

// //     // Open Graph
// //     setPropertyTag("og:title", "What Makes This Infrastructure. Not Another Tool.");
// //     setPropertyTag(
// //       "og:description",
// //       "PravRaha vs Apollo, ZoomInfo, Outreach, Salesloft, 11x, Artisan, Clay, and lead-gen agencies — compared across data freshness, signal orchestration, execution model, feedback loops, and what you actually buy."
// //     );
// //     setPropertyTag("og:image", "/og-compare.png");

// //     // Twitter
// //     setMetaTag("twitter:card", "summary_large_image");
// //     setMetaTag("twitter:title", "What Makes This Infrastructure. Not Another Tool.");
// //     setMetaTag(
// //       "twitter:description",
// //       "PravRaha vs Apollo, ZoomInfo, Outreach, Salesloft, 11x, Artisan, Clay, and lead-gen agencies — compared across data freshness, signal orchestration, execution model, feedback loops, and what you actually buy."
// //     );
// //     setMetaTag("twitter:image", "/og-compare.png");

// //   }, []);

// //   return <>{children}</>;
// // }

import { Helmet } from "react-helmet-async";

export default function AboutLayout({ children }) {
  return (
    <>
      <Helmet>
        {/* ✅ TITLE */}
        <title>What Makes This Infrastructure. Not Another Tool.</title>

        {/* ✅ DESCRIPTION */}
        <meta
          name="description"
          content="PravRaha vs Apollo, ZoomInfo, Outreach, Salesloft, 11x, Artisan, Clay, and lead-gen agencies-compared across data freshness, signal orchestration, execution model, feedback loops, and what you actually buy."
        />

        {/* ✅ OPEN GRAPH */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pravraha" />
        <meta property="og:url" content="https://www.pravraha.com/about" />
        <meta property="og:title" content="What Makes This Infrastructure. Not Another Tool." />
        <meta
          property="og:description"
          content="PravRaha vs Apollo, ZoomInfo, Outreach, Salesloft, 11x, Artisan, Clay, and lead-gen agencies-compared across data freshness, signal orchestration, execution model, feedback loops, and what you actually buy."
        />
        <meta property="og:image" content="https://www.pravraha.com/og-compare.png" />

        {/* ✅ TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What Makes This Infrastructure. Not Another Tool." />
        <meta
          name="twitter:description"
          content="PravRaha vs Apollo, ZoomInfo, Outreach, Salesloft, 11x, Artisan, Clay, and lead-gen agencies-compared across data freshness, signal orchestration, execution model, feedback loops, and what you actually buy."
        />
        <meta name="twitter:image" content="https://www.pravraha.com/og-compare.png" />
      </Helmet>

      {children}
    </>
  );
}