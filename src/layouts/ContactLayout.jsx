import { Helmet } from "react-helmet-async";

export default function AboutLayout({ children }) {
  return (
    <>
      <Helmet>
        {/* ✅ TITLE */}
        <title>Book a Pipeline Review. Not a Demo-an Architecture Audit</title>

        {/* ✅ DESCRIPTION */}
        <meta
          name="description"
          content="45 minutes. We map your current tools and data sources. We assess which buying signals you track and how fast you act. We blueprint your outbound as unified infrastructure. No slides. No generic demo. One working map of your pipeline system."
        />

        {/* ✅ OPEN GRAPH */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pravraha" />
        <meta property="og:url" content="https://www.pravraha.com/about" />
        <meta property="og:title" content="Book a Pipeline Review. Not a Demo-an Architecture Audit" />
        <meta
          property="og:description"
          content="45 minutes. We map your current tools and data sources. We assess which buying signals you track and how fast you act. We blueprint your outbound as unified infrastructure. No slides. No generic demo. One working map of your pipeline system."
        />
        <meta property="og:image" content="https://www.pravraha.com/og-compare.png" />

        {/* ✅ TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book a Pipeline Review. Not a Demo-an Architecture Audit" />
        <meta
          name="twitter:description"
          content="45 minutes. We map your current tools and data sources. We assess which buying signals you track and how fast you act. We blueprint your outbound as unified infrastructure. No slides. No generic demo. One working map of your pipeline system."
        />
        <meta name="twitter:image" content="https://www.pravraha.com/og-compare.png" />
      </Helmet>

      {children}
    </>
  );
}