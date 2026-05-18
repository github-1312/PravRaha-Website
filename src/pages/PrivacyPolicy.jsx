import { useState } from "react";

const tableOfContents = [
  { id: "who-we-are", title: "1. Who We Are" },
  { id: "two-track", title: "2. The Two-Track Data Architecture" },
  { id: "personal-data", title: "3. Personal Data We Collect" },
  { id: "sources", title: "4. Sources of Personal Data" },
  { id: "how-why", title: "5. How and Why We Use Personal Data" },
  { id: "ai", title: "6. AI and Automated Processing" },
  { id: "sharing", title: "7. Sharing of Personal Data" },
  { id: "international", title: "8. International Data Transfers" },
  { id: "retention", title: "9. Data Retention" },
  { id: "rights", title: "10. Your Rights" },
  { id: "security", title: "11. Security" },
  { id: "cookies", title: "12. Cookies and Tracking" },
  { id: "children", title: "13. Children" },
  { id: "grievance", title: "14. Grievance Officer and Regulatory Contacts" },
  { id: "changes", title: "15. Changes to this Policy" },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.logo}>PravRaha</div>
          <div style={styles.headerMeta}>
            <span style={styles.badge}>Privacy Policy</span>
          </div>
        </div>
        <div style={styles.headerSubtitle}>
          How PravRaha collects, uses, and protects personal data.
        </div>
        <div style={styles.headerDetails}>
          <span>
            <strong>Effective Date:</strong> December 1, 2025
          </span>
          <span style={styles.dot}>·</span>
          <span>
            <strong>Issued by:</strong> Pravraha Software Technology Private
            Limited, Ranchi, Jharkhand, India 834004
          </span>
          <span style={styles.dot}>·</span>
          <span>
            <strong>Contact:</strong>{" "}
            <a href="mailto:support@pravraha.com" style={styles.link}>
              support@pravraha.com
            </a>{" "}
            ·{" "}
            <a href="https://pravraha.com" style={styles.link}>
              https://pravraha.com
            </a>
          </span>
        </div>
        <p style={styles.intro}>
          This Privacy Policy explains how Pravraha Software Technology Private
          Limited ("PravRaha," "we," "us," "our") collects, uses, shares, and
          protects personal data in connection with our website at{" "}
          <a href="https://pravraha.com" style={styles.link}>
            https://pravraha.com
          </a>{" "}
          (the "Site") and our cloud-hosted sales intelligence and outbound
          infrastructure platform (the "Platform"), together with associated
          APIs, integrations, and services (collectively, the "Services").
        </p>
        <p style={styles.intro}>
          We have written this Policy to be readable. Where legal terms are
          necessary, we explain them. Where we make commitments, we mean them.
        </p>
      </header>

      <div style={styles.layout}>
        {/* Sidebar TOC */}
        <aside style={styles.sidebar}>
          <div style={styles.tocTitle}>Table of Contents</div>
          <nav>
            {tableOfContents.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  ...styles.tocItem,
                  ...(activeSection === item.id ? styles.tocItemActive : {}),
                }}
              >
                {item.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main style={styles.main}>
          {/* Section 1 */}
          <section id="who-we-are" style={styles.section}>
            <h2 style={styles.h2}>1. Who We Are</h2>
            <p style={styles.p}>
              PravRaha is a private company incorporated in India. Our
              registered office is at Ranchi, Jharkhand, India 834004. For any
              privacy-related question, complaint, or rights request, contact
              our Grievance Officer at{" "}
              <a href="mailto:support@pravraha.com" style={styles.link}>
                support@pravraha.com
              </a>{" "}
              with the subject line "Grievance Officer."
            </p>
            <p style={styles.p}>
              PravRaha's authorised representative for European Union matters
              and any UK-specific contact details, where applicable, are
              published at{" "}
              <a href="https://pravraha.com/legal" style={styles.link}>
                https://pravraha.com/legal
              </a>
              .
            </p>
          </section>

          {/* Section 2 */}
          <section id="two-track" style={styles.section}>
            <h2 style={styles.h2}>
              2. The Two-Track Data Architecture You Should Know About
            </h2>
            <p style={styles.p}>
              PravRaha is unusual among privacy notices in being explicit about
              this: we process two materially different categories of personal
              data, and they carry different rights and obligations.
            </p>
            <div style={styles.trackBox}>
              <div style={styles.trackBadge}>Track A</div>
              <strong> Customer Data.</strong> Personal data of our paying
              customers, their employees, and authorised users (account
              information, billing details, usage telemetry, communications with
              our team, and any data our customers upload, integrate, or
              generate while using the Platform). For Track A, our customer is
              the controller and PravRaha is the processor, acting on the
              customer's documented instructions.
            </div>
            <div style={styles.trackBox}>
              <div style={styles.trackBadge}>Track B</div>
              <strong> Prospect Data.</strong> Business contact and professional
              information about individuals that customers wish to engage in B2B
              sales outreach (typically: name, business email, business phone,
              job title, employer, professional history, publicly observable
              signals of buying intent). For Track B, PravRaha acts as an
              independent controller, or, where the customer co-determines the
              purposes, as a joint controller.
            </div>
            <p style={styles.p}>
              The rights you have, and the obligations we carry, depend on which
              track applies. Section 10 sets this out by individual.
            </p>
          </section>

          {/* Section 3 */}
          <section id="personal-data" style={styles.section}>
            <h2 style={styles.h2}>3. Personal Data We Collect</h2>

            <h3 style={styles.h3}>3.1 Customer and Authorised User Data</h3>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <strong>Identity and contact:</strong> name, business email,
                business phone, job title, employer.
              </li>
              <li style={styles.li}>
                <strong>Authentication:</strong> hashed passwords, SSO
                identifiers, MFA factors.
              </li>
              <li style={styles.li}>
                <strong>Billing:</strong> company name, billing contact, GSTIN
                and other tax identifiers, billing address. We do not store full
                payment card numbers; payment processors handle that.
              </li>
              <li style={styles.li}>
                <strong>Usage telemetry:</strong> features used, queries run,
                exports, login timestamps, IP addresses, device and browser
                metadata.
              </li>
              <li style={styles.li}>
                <strong>Support and communications:</strong> tickets, emails,
                recordings of voluntarily joined demo or training calls, chat
                transcripts.
              </li>
            </ul>

            <h3 style={styles.h3}>3.2 Customer-Uploaded Data</h3>
            <p style={styles.p}>
              Any data the customer chooses to upload, integrate, or generate
              through the Platform — including CRM records, target account
              lists, sequence content, and outreach activity logs. PravRaha
              processes this as a processor under the customer's written
              agreement and our Data Processing Agreement ("DPA").
            </p>

            <h3 style={styles.h3}>3.3 Prospect Data</h3>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <strong>Identity and professional:</strong> name, business
                email, business phone, current and prior job titles, employer,
                location at country, region, and city level, professional
                profile URLs.
              </li>
              <li style={styles.li}>
                <strong>Business signals:</strong> company size, funding events,
                technology stack, hiring activity, publicly observable role
                changes, buying-intent signals derived from third-party data
                partners.
              </li>
              <li style={styles.li}>
                <strong>Derived and inferred:</strong> scoring, fit indicators,
                recommended sequencing.
              </li>
            </ul>
            <p style={styles.p}>
              We do not knowingly collect, infer, or maintain special categories
              of personal data (including data revealing racial or ethnic origin,
              political opinions, religious or philosophical beliefs, trade union
              membership, genetic data, biometric data, health data, or data
              concerning sexual orientation) about prospects. Customers shall
              not upload such data to the Platform.
            </p>

            <h3 style={styles.h3}>3.4 Technical Data</h3>
            <p style={styles.p}>
              IP address, browser type, device identifiers, referring URL, pages
              viewed, time on page, cookie identifiers, and similar telemetry
              from visitors to our Site and users of the Platform.
            </p>
          </section>

          {/* Section 4 */}
          <section id="sources" style={styles.section}>
            <h2 style={styles.h2}>4. Sources of Personal Data</h2>
            <p style={styles.p}>
              We collect personal data from four sources:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <strong>Directly from you</strong>, when you sign up,
                communicate with us, or use the Platform.
              </li>
              <li style={styles.li}>
                <strong>From our customers</strong>, when they upload, integrate,
                or otherwise transmit data to the Platform.
              </li>
              <li style={styles.li}>
                <strong>From licensed third-party data providers</strong> under
                written contracts that include representations as to lawful
                sourcing. Our current data-provider categories are summarised in
                our Sub-processor List (Section 7); specific provider identities
                are made available to enterprise customers under non-disclosure
                agreement.
              </li>
              <li style={styles.li}>
                <strong>From publicly available sources</strong>, including
                corporate websites, regulatory filings, public business
                directories, and professional networking platforms (only to the
                extent the relevant platform's terms permit, and only for
                business contact information used in a B2B sales context).
              </li>
            </ul>
            <p style={styles.p}>
              We do not purchase consumer data, scrape platforms in violation of
              their terms of service, or accept data of unverifiable origin.
            </p>
          </section>

          {/* Section 5 */}
          <section id="how-why" style={styles.section}>
            <h2 style={styles.h2}>5. How and Why We Use Personal Data</h2>
            <p style={styles.p}>
              The following table sets out our processing purposes, the track
              they relate to, and the lawful basis (under the EU General Data
              Protection Regulation) or the ground of processing (under India's
              Digital Personal Data Protection Act, 2023) on which we rely.
            </p>
            <div style={styles.tableWrapper}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Purpose</th>
                    <th style={styles.th}>Track</th>
                    <th style={styles.th}>Lawful Basis / Ground</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Provide the Services to you or your employer", "A", "Contract performance"],
                    ["Authenticate users, prevent fraud, secure the Platform", "A", "Legitimate interests; legal obligation"],
                    ["Bill customers and collect payment", "A", "Contract; legal obligation"],
                    ["Provide product support and respond to inquiries", "A", "Contract; legitimate interests"],
                    ["Improve the Platform (aggregate analytics, debugging)", "A, B", "Legitimate interests"],
                    ["Compile and maintain the Prospect Database for B2B sales intelligence", "B", "Legitimate interests (B2B sales context) / certain legitimate uses under the DPDP Act"],
                    ["Communicate marketing about PravRaha (existing customers or with separate consent)", "A", "Consent; legitimate interests"],
                    ["Comply with law and lawful requests", "A, B", "Legal obligation"],
                  ].map(([purpose, track, basis], i) => (
                    <tr key={i} style={i % 2 === 0 ? styles.trEven : {}}>
                      <td style={styles.td}>{purpose}</td>
                      <td style={{ ...styles.td, textAlign: "center" }}>{track}</td>
                      <td style={styles.td}>{basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={styles.callout}>
              <strong>Commitment on AI model training.</strong> PravRaha does
              not use Customer Data or Prospect Data to train third-party
              (foundation) AI models. We may use customer-aggregated,
              de-identified, or PravRaha-controlled data to improve our own
              internal ranking, scoring, and recommendation models. Customers
              may opt their account out of contributing to model improvement at
              any time via their account settings or by emailing{" "}
              <a href="mailto:support@pravraha.com" style={styles.link}>
                support@pravraha.com
              </a>
              . This commitment is contractual, not merely policy-stated, and is
              restated in our Terms and DPA.
            </div>
          </section>

          {/* Section 6 */}
          <section id="ai" style={styles.section}>
            <h2 style={styles.h2}>6. AI and Automated Processing</h2>
            <p style={styles.p}>
              The Platform uses machine learning and large language models —
              both PravRaha-developed and third-party (which currently include
              Anthropic) — to generate recommendations, scoring, draft outreach
              content, and other outputs. You should understand:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                AI outputs are probabilistic. They can be wrong, out of date,
                biased, or unsuitable for a given purpose. Human review by a
                competent operator is required before any AI-generated content
                is sent, published, or relied upon.
              </li>
              <li style={styles.li}>
                We do not make solely automated decisions that produce legal or
                similarly significant effects on individuals, within the meaning
                of Article 22 of the GDPR or comparable provisions.
              </li>
              <li style={styles.li}>
                We log AI inputs and outputs for security, abuse detection, and
                model improvement, subject to the retention periods in Section 9
                and the customer opt-out described in Section 5.
              </li>
              <li style={styles.li}>
                Where the EU AI Act or comparable regulations require disclosure
                that content has been generated or materially modified by AI,
                customers are responsible for making that disclosure in their
                own outreach.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="sharing" style={styles.section}>
            <h2 style={styles.h2}>7. Sharing of Personal Data</h2>
            <p style={styles.p}>
              We share personal data with the following recipients:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <strong>Sub-processors</strong> who provide infrastructure and
                services strictly to deliver the Platform (cloud hosting, data
                enrichment partners, email infrastructure providers, customer
                support, analytics). Our current Sub-processor List, including
                each sub-processor's name, function, and jurisdiction of
                processing, is maintained at{" "}
                <a href="https://pravraha.com/subprocessors" style={styles.link}>
                  https://pravraha.com/subprocessors
                </a>{" "}
                and is updated with at least 14 days' advance notice for
                enterprise customers, who may reasonably object as set out in
                our Terms.
              </li>
              <li style={styles.li}>
                <strong>Service providers</strong> under written confidentiality
                and data protection terms.
              </li>
              <li style={styles.li}>
                <strong>Authorities</strong> when required by law, court order,
                or to protect rights, safety, and property.
              </li>
              <li style={styles.li}>
                <strong>Successors</strong> in the event of merger, acquisition,
                financing, or sale of assets, subject to equivalent privacy
                commitments.
              </li>
            </ul>
            <p style={styles.p}>
              <strong>We do not sell personal data</strong>, as that term is
              defined under the California Consumer Privacy Act or comparable
              laws. We do not share Customer Data with other customers. We do
              not share Prospect Data with any party except as strictly
              necessary to deliver the Services to the customer that retrieved
              or licensed it.
            </p>
          </section>

          {/* Section 8 */}
          <section id="international" style={styles.section}>
            <h2 style={styles.h2}>8. International Data Transfers</h2>
            <p style={styles.p}>
              We are headquartered in India and our primary data hosting is in
              AWS Asia Pacific (Mumbai). Sub-processors operate from multiple
              jurisdictions including the United States and the European
              Economic Area.
            </p>
            <p style={styles.p}>
              Where personal data of EU, EEA, or UK data subjects is transferred
              outside those regions, we rely on the Standard Contractual Clauses
              adopted by the European Commission, the UK International Data
              Transfer Agreement or Addendum, and supplementary technical and
              organisational measures as appropriate. Where personal data of
              Indian data subjects is transferred outside India, we comply with
              the cross-border transfer requirements of the DPDP Act, 2023 and
              the rules issued thereunder.
            </p>
            <p style={styles.p}>
              A copy of our standard transfer instruments is available to
              enterprise customers on written request.
            </p>
          </section>

          {/* Section 9 */}
          <section id="retention" style={styles.section}>
            <h2 style={styles.h2}>9. Data Retention</h2>
            <p style={styles.p}>
              We retain personal data only as long as needed for the purposes
              described in this Policy, or as required by law. Indicative
              retention periods are set out below; specific contracts may vary
              these for enterprise customers.
            </p>
            <div style={styles.tableWrapper}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Data Category</th>
                    <th style={styles.th}>Retention Period</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Active customer account data", "Duration of the customer agreement plus 12 months"],
                    ["Billing and financial records", "8 years (Indian Companies Act and GST requirements)"],
                    ["Customer-uploaded data after termination", "Returned or deleted within 30 days of written request, then purged from backups within 90 days"],
                    ["Prospect Database records", "Refreshed continuously; opt-out requests result in suppression within 30 days, and durable suppression-list retention thereafter"],
                    ["Support communications", "3 years"],
                    ["Site and product analytics", "26 months"],
                    ["Security logs", "12 months"],
                  ].map(([cat, period], i) => (
                    <tr key={i} style={i % 2 === 0 ? styles.trEven : {}}>
                      <td style={styles.td}>{cat}</td>
                      <td style={styles.td}>{period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 10 */}
          <section id="rights" style={styles.section}>
            <h2 style={styles.h2}>10. Your Rights</h2>
            <p style={styles.p}>
              Subject to applicable law, you have rights including: access,
              rectification, erasure, restriction of processing, objection to
              processing, portability, withdrawal of consent, and the right to
              lodge a complaint with a supervisory authority.
            </p>

            <h3 style={styles.h3}>10.1 If You Are a Customer or Authorised User</h3>
            <p style={styles.p}>
              Most of your rights are exercised through your account settings or
              by contacting your account administrator. For requests we must
              action directly, write to{" "}
              <a href="mailto:support@pravraha.com" style={styles.link}>
                support@pravraha.com
              </a>
              . We will respond to verifiable requests within 30 days,
              extendable to 60 days for complex requests, and we will not charge
              you for reasonable requests.
            </p>

            <h3 style={styles.h3}>10.2 If You Are a Prospect</h3>
            <p style={styles.p}>
              If your information appears in the PravRaha Prospect Database
              without you being our customer, the following apply:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                You may opt out of being included in the Database and request
                suppression at{" "}
                <a href="https://pravraha.com/opt-out" style={styles.link}>
                  https://pravraha.com/opt-out
                </a>{" "}
                or by emailing{" "}
                <a href="mailto:support@pravraha.com" style={styles.link}>
                  support@pravraha.com
                </a>
                .
              </li>
              <li style={styles.li}>
                You may request a copy of the personal data we hold about you,
                including its source category.
              </li>
              <li style={styles.li}>
                We will action verifiable requests within 30 days (extendable
                to 60 days where complex), and we will not charge you for
                reasonable requests.
              </li>
            </ul>
            <p style={styles.p}>
              Where we have not collected your data directly from you, we rely
              on the disproportionate-effort exception in Article 14(5)(b) of
              the GDPR (and comparable provisions in other regimes) for
              individual notice. We discharge the residual obligation through
              public availability of this Policy and the opt-out and access
              mechanisms above.
            </p>

            <h3 style={styles.h3}>10.3 Jurisdictional Add-ons</h3>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <strong>India (DPDP Act, 2023):</strong> You may exercise the
                rights of a Data Principal, including correction, erasure,
                nomination, and grievance redressal. Our Grievance Officer is
                reachable at{" "}
                <a href="mailto:support@pravraha.com" style={styles.link}>
                  support@pravraha.com
                </a>{" "}
                (subject: Grievance Officer). Unresolved grievances may be
                referred to the Data Protection Board of India.
              </li>
              <li style={styles.li}>
                <strong>EU, EEA, and UK (GDPR and UK GDPR):</strong> All rights
                under Articles 15 to 22 apply where we are the controller. You
                may complain to your local supervisory authority.
              </li>
              <li style={styles.li}>
                <strong>California (CCPA and CPRA):</strong> Right to know,
                delete, correct, opt out of sale or sharing, and
                non-discrimination. We do not sell personal information.
              </li>
              <li style={styles.li}>
                <strong>Brazil (LGPD), Canada (PIPEDA), Australia (Privacy Act):</strong>{" "}
                Equivalent rights apply where the underlying law applies to
                processing.
              </li>
            </ul>
          </section>

          {/* Section 11 */}
          <section id="security" style={styles.section}>
            <h2 style={styles.h2}>11. Security</h2>
            <p style={styles.p}>
              We maintain administrative, technical, and physical safeguards
              designed to protect personal data, including: encryption in
              transit (TLS 1.2 or higher) and at rest (AES-256), role-based
              access control, multi-factor authentication enforced on production
              systems, principle-of-least-privilege access, vulnerability
              management, logging and monitoring, an incident-response
              procedure, and vendor security reviews. We are progressing toward
              SOC 2 Type II and ISO/IEC 27001 certifications and will publish
              updated assurance documentation when available.
            </p>
            <p style={styles.p}>
              No system is perfectly secure. If you believe your account has
              been compromised, contact us immediately at{" "}
              <a href="mailto:support@pravraha.com" style={styles.link}>
                support@pravraha.com
              </a>
              .
            </p>
          </section>

          {/* Section 12 */}
          <section id="cookies" style={styles.section}>
            <h2 style={styles.h2}>12. Cookies and Tracking</h2>
            <p style={styles.p}>
              The Site uses cookies and similar technologies for authentication,
              preference storage, analytics, and (where you consent) marketing
              measurement. You can manage your preferences via the cookie banner
              on first visit or your browser settings at any time. A detailed
              list of cookies, their purposes, and durations is available at{" "}
              <a href="https://pravraha.com/cookies" style={styles.link}>
                https://pravraha.com/cookies
              </a>
              .
            </p>
          </section>

          {/* Section 13 */}
          <section id="children" style={styles.section}>
            <h2 style={styles.h2}>13. Children</h2>
            <p style={styles.p}>
              The Services are intended for business users 18 years of age or
              older. We do not knowingly collect personal data from anyone known
              or reasonably believed to be under 18, and our customers undertake
              not to upload such data to the Platform. If you believe we have
              collected such data, contact us and we will delete it. Where
              India's DPDP Act or other applicable laws impose stricter rules
              for children's data, those apply.
            </p>
          </section>

          {/* Section 14 */}
          <section id="grievance" style={styles.section}>
            <h2 style={styles.h2}>14. Grievance Officer and Regulatory Contacts</h2>
            <p style={styles.p}>
              <strong>India (DPDP Act, 2023) Grievance Officer.</strong> A
              designated officer is responsible for redressal of grievances
              raised by Data Principals. Contact:{" "}
              <a href="mailto:support@pravraha.com" style={styles.link}>
                support@pravraha.com
              </a>
              , subject line "Grievance Officer." Acknowledgement within 7
              business days; resolution within 30 days of acknowledgement, save
              for matters requiring extended review.
            </p>
            <p style={styles.p}>
              <strong>EU and UK queries.</strong>{" "}
              <a href="mailto:support@pravraha.com" style={styles.link}>
                support@pravraha.com
              </a>
              , subject line "EU Data Protection."
            </p>
            <p style={styles.p}>
              <strong>All other jurisdictions.</strong>{" "}
              <a href="mailto:support@pravraha.com" style={styles.link}>
                support@pravraha.com
              </a>
              .
            </p>
          </section>

          {/* Section 15 */}
          <section id="changes" style={styles.section}>
            <h2 style={styles.h2}>15. Changes to this Policy</h2>
            <p style={styles.p}>
              We may update this Policy. Material changes will be notified to
              active customers by email at least 14 days before they take
              effect, and posted on the Site with a revised Effective Date.
              Continued use of the Services after the Effective Date constitutes
              acceptance. Where required by law, we will obtain consent before
              applying material changes.
            </p>
          </section>

          <footer style={styles.footer}>
            © Pravraha Software Technology Private Limited. All rights reserved.
            This Policy was last updated on the Effective Date stated on the
            cover page.
          </footer>
        </main>
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    color: "#1a1a2e",
    backgroundColor: "#fafaf8",
    minHeight: "100vh",
    paddingTop: "90px",
  },
  header: {
    backgroundColor: "#0f3460",
    color: "#fff",
    padding: "48px 48px 36px",
  },
  headerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "16px",
  },
  logo: {
    fontSize: "28px",
    fontWeight: "700",
    letterSpacing: "0.5px",
    color: "#fff",
  },
  badge: {
    backgroundColor: "#e94560",
    color: "#fff",
    padding: "4px 14px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "600",
    letterSpacing: "0.5px",
  },
  headerSubtitle: {
    fontSize: "17px",
    color: "#c8d6e5",
    marginBottom: "12px",
    fontStyle: "italic",
  },
  headerDetails: {
    fontSize: "13px",
    color: "#a0b4c8",
    marginBottom: "20px",
    lineHeight: "1.8",
  },
  dot: { margin: "0 8px" },
  intro: {
    fontSize: "15px",
    color: "#d0dcea",
    lineHeight: "1.7",
    maxWidth: "820px",
    marginBottom: "12px",
  },
  layout: {
    display: "flex",
    alignItems: "flex-start",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 24px",
    gap: "40px",
  },
  sidebar: {
    width: "240px",
    flexShrink: 0,
    position: "sticky",
    top: "24px",
  },
  tocTitle: {
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#888",
    marginBottom: "12px",
    fontFamily: "'Arial', sans-serif",
  },
  tocItem: {
    display: "block",
    width: "100%",
    textAlign: "left",
    background: "none",
    border: "none",
    padding: "6px 10px",
    fontSize: "13px",
    color: "#444",
    cursor: "pointer",
    borderLeft: "2px solid #e0e0e0",
    marginBottom: "2px",
    fontFamily: "'Arial', sans-serif",
    lineHeight: "1.4",
    transition: "all 0.15s",
  },
  tocItemActive: {
    borderLeftColor: "#e94560",
    color: "#e94560",
    fontWeight: "600",
  },
  main: { flex: 1, minWidth: 0 },
  section: {
    marginBottom: "48px",
    paddingBottom: "32px",
    borderBottom: "1px solid #e8e8e0",
  },
  h2: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#0f3460",
    marginBottom: "16px",
    marginTop: 0,
    paddingBottom: "8px",
    borderBottom: "2px solid #e94560",
    display: "inline-block",
  },
  h3: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#1a1a2e",
    margin: "24px 0 10px",
    fontFamily: "'Arial', sans-serif",
  },
  p: {
    fontSize: "15px",
    lineHeight: "1.75",
    color: "#333",
    margin: "0 0 14px",
  },
  ul: { paddingLeft: "22px", margin: "0 0 14px" },
  li: {
    fontSize: "15px",
    lineHeight: "1.75",
    color: "#333",
    marginBottom: "8px",
  },
  link: { color: "#e94560", textDecoration: "none" },
  callout: {
    backgroundColor: "#f0f4ff",
    borderLeft: "4px solid #0f3460",
    padding: "16px 20px",
    borderRadius: "4px",
    fontSize: "14px",
    lineHeight: "1.7",
    color: "#333",
    margin: "20px 0",
  },
  trackBox: {
    backgroundColor: "#f7f7f2",
    border: "1px solid #ddd",
    borderRadius: "6px",
    padding: "16px 20px",
    margin: "12px 0",
    fontSize: "15px",
    lineHeight: "1.7",
    color: "#333",
  },
  trackBadge: {
    display: "inline-block",
    backgroundColor: "#0f3460",
    color: "#fff",
    fontSize: "11px",
    fontWeight: "700",
    padding: "2px 8px",
    borderRadius: "3px",
    marginRight: "6px",
    fontFamily: "'Arial', sans-serif",
    letterSpacing: "0.5px",
  },
  tableWrapper: { overflowX: "auto", margin: "16px 0" },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "14px",
    fontFamily: "'Arial', sans-serif",
  },
  th: {
    backgroundColor: "#0f3460",
    color: "#fff",
    padding: "12px 16px",
    textAlign: "left",
    fontWeight: "600",
    whiteSpace: "nowrap",
  },
  td: {
    padding: "10px 16px",
    borderBottom: "1px solid #e8e8e0",
    color: "#333",
    lineHeight: "1.5",
    verticalAlign: "top",
  },
  trEven: { backgroundColor: "#f7f7f2" },
  footer: {
    marginTop: "48px",
    paddingTop: "24px",
    borderTop: "1px solid #ddd",
    fontSize: "13px",
    color: "#888",
    fontFamily: "'Arial', sans-serif",
  },
};