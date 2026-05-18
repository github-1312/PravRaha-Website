import { useState } from "react";

const tableOfContents = [
  { id: "acceptance", title: "1. Acceptance and Eligibility" },
  { id: "definitions", title: "2. Definitions" },
  { id: "services", title: "3. The Services" },
  { id: "accounts", title: "4. Accounts and Authorised Users" },
  { id: "subscription", title: "5. Subscription, Fees, Taxes, and Payment" },
  { id: "customer-data", title: "6. Customer Data and License Grant" },
  { id: "pravraha-data", title: "7. PravRaha-Provided Data (Prospect Database)" },
  { id: "ai-outputs", title: "8. AI Outputs and Customer Responsibility" },
  { id: "aup", title: "9. Acceptable Use Policy" },
  { id: "anti-spam", title: "10. Anti-Spam and Outreach Compliance" },
  { id: "third-party", title: "11. Third-Party Integrations and Data Sources" },
  { id: "api", title: "12. API Use and Technical Limits" },
  { id: "ip", title: "13. Intellectual Property" },
  { id: "feedback", title: "14. Feedback" },
  { id: "confidentiality", title: "15. Confidentiality" },
  { id: "privacy", title: "16. Privacy and Data Protection" },
  { id: "security", title: "17. Security" },
  { id: "availability", title: "18. Service Availability and Support" },
  { id: "beta", title: "19. Beta Features" },
  { id: "suspension", title: "20. Suspension and Termination" },
  { id: "effect", title: "21. Effect of Termination" },
  { id: "warranties", title: "22. Warranties and Disclaimers" },
  { id: "indemnification", title: "23. Indemnification" },
  { id: "liability", title: "24. Limitation of Liability" },
  { id: "force-majeure", title: "25. Force Majeure" },
  { id: "governing-law", title: "26. Governing Law, Jurisdiction, and Dispute Resolution" },
  { id: "general", title: "27. General Provisions" },
  { id: "notices", title: "28. Notices and Contact" },
];

export default function TermsConditions() {
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
            <span style={styles.badge}>Terms &amp; Conditions</span>
          </div>
        </div>
        <div style={styles.headerSubtitle}>
          The agreement governing access to and use of PravRaha's services.
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
          These Terms govern your access to and use of the PravRaha Site at{" "}
          <a href="https://pravraha.com" style={styles.link}>
            https://pravraha.com
          </a>{" "}
          (the "Site"), the PravRaha cloud-hosted Platform, associated APIs and
          integrations, and any professional or managed services (together, the
          "Services") provided by Pravraha Software Technology Private Limited
          ("PravRaha," "we," "us," "our").
        </p>
        <p style={styles.intro}>
          By creating an account, accessing the Platform, executing an order
          form or statement of work that references these Terms, or otherwise
          using the Services, you agree to these Terms on behalf of yourself and
          the entity you represent ("Customer").
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
          <section id="acceptance" style={styles.section}>
            <h2 style={styles.h2}>1. Acceptance and Eligibility</h2>
            <p style={styles.p}>
              You represent that you are at least 18 years old, have authority
              to bind the entity you represent, and will use the Services solely
              in the course of business. The Services are not offered to
              consumers.
            </p>
          </section>

          {/* Section 2 */}
          <section id="definitions" style={styles.section}>
            <h2 style={styles.h2}>2. Definitions</h2>
            <dl style={styles.dl}>
              <dt style={styles.dt}>"Agreement"</dt>
              <dd style={styles.dd}>
                means these Terms together with any order form, SOW, DPA, or
                addendum executed between PravRaha and Customer.
              </dd>
              <dt style={styles.dt}>"Authorised User"</dt>
              <dd style={styles.dd}>
                means an individual employee, contractor, or agent of Customer
                permitted to use the Services under Customer's account.
              </dd>
              <dt style={styles.dt}>"AI Output"</dt>
              <dd style={styles.dd}>
                means content generated by AI or machine-learning features of
                the Platform, including drafted emails, summaries, scores, and
                recommendations.
              </dd>
              <dt style={styles.dt}>"Customer Data"</dt>
              <dd style={styles.dd}>
                means data uploaded to, generated within, or transmitted through
                the Platform by Customer or its Authorised Users.
              </dd>
              <dt style={styles.dt}>"PravRaha Data"</dt>
              <dd style={styles.dd}>
                means data made available by PravRaha through the Platform,
                including the Prospect Database and any derived insights.
              </dd>
              <dt style={styles.dt}>"DPA"</dt>
              <dd style={styles.dd}>
                means PravRaha's Data Processing Agreement, available at{" "}
                <a href="https://pravraha.com/dpa" style={styles.link}>
                  https://pravraha.com/dpa
                </a>
                , which is incorporated by reference where Customer Data
                includes personal data.
              </dd>
              <dt style={styles.dt}>"SLA"</dt>
              <dd style={styles.dd}>
                means the Service Level Agreement for the Platform, as set out
                in Section 18.
              </dd>
            </dl>
          </section>

          {/* Section 3 */}
          <section id="services" style={styles.section}>
            <h2 style={styles.h2}>3. The Services</h2>
            <p style={styles.p}>
              PravRaha provides a cloud-hosted Platform comprising prospect
              discovery, data enrichment, intent signal analysis, AI-generated
              recommendations and content, email outreach infrastructure, CRM
              integrations, analytics, and related functionality. Specific
              features, usage tiers, and limits are defined in the applicable
              order form.
            </p>
            <p style={styles.p}>
              PravRaha may also provide professional or managed services
              (including SDR-led prospecting) under separate SOWs that reference
              these Terms. Where this Agreement conflicts with the order form or
              SOW, the order form or SOW prevails for the matter it addresses.
            </p>
          </section>

          {/* Section 4 */}
          <section id="accounts" style={styles.section}>
            <h2 style={styles.h2}>4. Accounts and Authorised Users</h2>
            <p style={styles.p}>
              Customer is responsible for: maintaining the confidentiality of
              credentials; the acts and omissions of its Authorised Users;
              ensuring use of the Services complies with these Terms; and
              promptly notifying PravRaha of any unauthorised access. Customer
              is liable for activity under its account. PravRaha may enforce a
              maximum number of Authorised Users per the order form.
            </p>
          </section>

          {/* Section 5 */}
          <section id="subscription" style={styles.section}>
            <h2 style={styles.h2}>5. Subscription, Fees, Taxes, and Payment</h2>
            <p style={styles.p}>
              Fees are set forth in the order form. Unless otherwise specified:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>Invoices are due net 15 days from issue.</li>
              <li style={styles.li}>
                Subscriptions auto-renew for successive terms equal to the
                initial term, unless terminated with at least 30 days' notice
                prior to the end of the then-current term.
              </li>
              <li style={styles.li}>
                Renewal fees may increase with at least 60 days' written notice
                prior to renewal.
              </li>
              <li style={styles.li}>
                Fees are exclusive of taxes; Customer is responsible for all
                taxes (including GST) other than PravRaha's income taxes.
              </li>
              <li style={styles.li}>
                Late payments accrue interest at 1.5% per month or the maximum
                permitted by applicable law, whichever is lower, plus reasonable
                collection costs.
              </li>
              <li style={styles.li}>
                PravRaha may suspend the Services for non-payment after 15 days'
                written notice of overdue undisputed fees.
              </li>
              <li style={styles.li}>
                Fees are non-refundable except as expressly stated in this
                Agreement.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="customer-data" style={styles.section}>
            <h2 style={styles.h2}>6. Customer Data and License Grant</h2>
            <p style={styles.p}>
              As between the parties, Customer owns and retains all rights in
              Customer Data. Customer grants PravRaha a worldwide, non-exclusive,
              royalty-free, sub-licensable (only to sub-processors) licence to
              host, process, transmit, copy, display, and otherwise use Customer
              Data solely to (i) provide and maintain the Services, (ii) prevent
              or address service or technical problems, (iii) comply with law,
              and (iv) as otherwise expressly permitted in the Agreement.
            </p>
            <p style={styles.p}>
              Customer represents that it has all necessary rights, lawful bases,
              and notices in place to provide Customer Data to PravRaha,
              including for any personal data it transmits to or through the
              Platform.
            </p>
          </section>

          {/* Section 7 */}
          <section id="pravraha-data" style={styles.section}>
            <h2 style={styles.h2}>7. PravRaha-Provided Data (Prospect Database)</h2>
            <p style={styles.p}>
              PravRaha grants Customer a non-exclusive, non-transferable,
              non-sublicensable licence to access and use the PravRaha Data
              solely in connection with Customer's internal B2B sales and
              marketing activities for the term of the Agreement.
            </p>
            <p style={styles.p}>
              <strong>Customer shall not:</strong>
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                Sell, license, transfer, sublicense, or distribute PravRaha Data
                to third parties.
              </li>
              <li style={styles.li}>
                Build a competing data, sales-intelligence, or prospecting
                product using PravRaha Data.
              </li>
              <li style={styles.li}>
                Use PravRaha Data to enrich a database for resale, syndication,
                or distribution to third parties.
              </li>
              <li style={styles.li}>
                Use PravRaha Data after termination of the Agreement, except as
                expressly permitted by Section 21.
              </li>
              <li style={styles.li}>
                Use PravRaha Data for any purpose other than legitimate B2B
                sales, marketing, or recruitment activity.
              </li>
              <li style={styles.li}>
                Use PravRaha Data in a manner that violates applicable
                data-protection, anti-spam, or telecommunications laws.
              </li>
            </ul>
            <p style={styles.p}>
              PravRaha Data is provided "AS IS." We do not warrant accuracy,
              completeness, or that any prospect is available, interested, or
              appropriate for outreach. Customer is responsible for verifying
              suitability and complying with applicable law before contacting
              any individual.
            </p>
          </section>

          {/* Section 8 */}
          <section id="ai-outputs" style={styles.section}>
            <h2 style={styles.h2}>8. AI Outputs and Customer Responsibility</h2>
            <p style={styles.p}>
              The Platform generates AI Output. Customer acknowledges and agrees:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                AI Output is probabilistic and may contain errors, omissions,
                biased framings, fabricated facts, or content unsuitable for
                use.
              </li>
              <li style={styles.li}>
                <strong>
                  Customer is solely responsible for reviewing AI Output before
                  sending, publishing, or otherwise relying on it.
                </strong>{" "}
                Sending AI-drafted content to a recipient is Customer's decision
                and Customer's act.
              </li>
              <li style={styles.li}>
                PravRaha makes no representation that AI Output is original,
                non-infringing, accurate, or fit for purpose, except as
                expressly stated in an order form.
              </li>
              <li style={styles.li}>
                Customer will not present AI Output in a manner that
                misrepresents its origin or nature where law requires disclosure
                (for example, EU AI Act transparency obligations).
              </li>
              <li style={styles.li}>
                Customer is responsible for complying with any AI-specific
                regulatory requirements applicable to its use, including
                transparency, record-keeping, and impact-assessment obligations.
              </li>
              <li style={styles.li}>
                Customer's use of AI Output, or harm caused by such use, is{" "}
                <strong>
                  expressly excluded from PravRaha's indemnity obligations
                </strong>{" "}
                under Section 23, regardless of whether Customer claims to have
                relied on the AI Output.
              </li>
            </ul>
          </section>

          {/* Section 9 */}
          <section id="aup" style={styles.section}>
            <h2 style={styles.h2}>9. Acceptable Use Policy</h2>
            <p style={styles.p}>
              Customer and its Authorised Users shall not:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                Use the Services to send unsolicited commercial communications
                in violation of applicable law (including CAN-SPAM, CASL, the
                GDPR and ePrivacy Directive, and India's DPDP Act and any
                successor anti-spam framework).
              </li>
              <li style={styles.li}>
                Send communications that are deceptive, defamatory, harassing,
                threatening, obscene, or otherwise unlawful.
              </li>
              <li style={styles.li}>
                Target communications based on protected characteristics in a
                manner that constitutes unlawful discrimination.
              </li>
              <li style={styles.li}>
                Use the Services to send phishing, malware, or
                credential-harvesting communications.
              </li>
              <li style={styles.li}>
                Scrape, mirror, or otherwise extract PravRaha Data en masse
                beyond the documented API limits.
              </li>
              <li style={styles.li}>
                Reverse-engineer, decompile, or attempt to discover source code
                of the Platform.
              </li>
              <li style={styles.li}>
                Circumvent rate limits, security controls, or commercial
                protections.
              </li>
              <li style={styles.li}>
                Probe, scan, or test the vulnerability of the Platform without
                prior written consent.
              </li>
              <li style={styles.li}>
                Use the Services to compete with PravRaha or to train a
                competing AI or data product.
              </li>
              <li style={styles.li}>
                Misrepresent identity, affiliation, or sender information in
                outreach.
              </li>
              <li style={styles.li}>
                Solicit, employ, or engage any PravRaha SDR, account manager,
                or technical staff during the term of the Agreement and for 12
                months thereafter, without PravRaha's prior written consent
                (this restriction does not apply to general-purpose recruitment
                advertising not specifically targeted at PravRaha personnel).
              </li>
            </ul>
            <p style={styles.p}>
              PravRaha may suspend or terminate access for violations, with
              notice where reasonably practicable.
            </p>
          </section>

          {/* Section 10 */}
          <section id="anti-spam" style={styles.section}>
            <h2 style={styles.h2}>10. Anti-Spam and Outreach Compliance</h2>
            <p style={styles.p}>
              Customer is exclusively responsible for the lawfulness of all
              outreach sent through or facilitated by the Platform, including:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                Maintaining a valid lawful basis (consent, legitimate interests,
                B2B exemptions as applicable) for each communication.
              </li>
              <li style={styles.li}>
                Providing accurate sender information and a functioning,
                prominent opt-out mechanism in commercial emails.
              </li>
              <li style={styles.li}>
                Honouring unsubscribe and opt-out requests within statutory
                periods.
              </li>
              <li style={styles.li}>Maintaining suppression lists.</li>
              <li style={styles.li}>
                Complying with calling-time restrictions, do-not-call
                registries, and any sector-specific rules (financial services,
                healthcare, etc.).
              </li>
              <li style={styles.li}>
                Holding and maintaining any required registrations or filings.
              </li>
            </ul>
            <p style={styles.p}>
              PravRaha provides tooling (suppression lists, unsubscribe
              insertion, sender authentication) but does not act as legal
              guarantor of Customer's outreach. Repeated abuse complaints,
              blocklist incidents, or reasonable evidence of unlawful outreach
              are grounds for immediate suspension.
            </p>
          </section>

          {/* Section 11 */}
          <section id="third-party" style={styles.section}>
            <h2 style={styles.h2}>11. Third-Party Integrations and Data Sources</h2>
            <p style={styles.p}>
              The Platform integrates with third-party services (CRMs, email
              providers, data partners). Customer's use of those third-party
              services is governed by the terms between Customer and the third
              party. PravRaha does not warrant the availability, accuracy, or
              compliance of third-party services, and is not liable for losses
              arising from third-party service disruption, modification, or
              termination.
            </p>
          </section>

          {/* Section 12 */}
          <section id="api" style={styles.section}>
            <h2 style={styles.h2}>12. API Use and Technical Limits</h2>
            <p style={styles.p}>
              API access is governed by published rate limits, fair-use
              thresholds, and technical documentation. PravRaha may modify
              limits with reasonable notice. Sustained excess usage may result
              in throttling, additional fees per the order form, or suspension.
              Customer will use commercially reasonable efforts to design
              integrations that respect rate limits and degrade gracefully.
            </p>
          </section>

          {/* Section 13 */}
          <section id="ip" style={styles.section}>
            <h2 style={styles.h2}>13. Intellectual Property</h2>
            <p style={styles.p}>
              PravRaha and its licensors retain all right, title, and interest
              in the Platform, the Site, the PravRaha Data, all software,
              models, algorithms, model weights and parameters, training data
              sets, documentation, branding, and any derivative works,
              improvements, fine-tunings, or feedback incorporated into them,
              including improvements derived from operating the Platform.
            </p>
            <p style={styles.p}>
              Customer retains all right, title, and interest in Customer Data.
              Subject to Section 8, as between PravRaha and Customer, Customer
              owns AI Output generated specifically for Customer through
              Customer-supplied inputs, subject to PravRaha's underlying rights
              in the models and any rights of third parties whose data or rights
              are implicated.
            </p>
            <p style={styles.p}>
              For the avoidance of doubt, Customer does not acquire any rights
              in PravRaha's models, model weights, or improvements thereto by
              virtue of contributing Customer Data or providing feedback.
            </p>
            <p style={styles.p}>
              Nothing in these Terms grants any party a licence except as
              expressly stated.
            </p>
          </section>

          {/* Section 14 */}
          <section id="feedback" style={styles.section}>
            <h2 style={styles.h2}>14. Feedback</h2>
            <p style={styles.p}>
              If Customer or its Authorised Users provide suggestions, ideas, or
              feedback, PravRaha may use them without restriction, attribution,
              or compensation. Customer assigns all rights in feedback to
              PravRaha to the extent permitted by applicable law.
            </p>
          </section>

          {/* Section 15 */}
          <section id="confidentiality" style={styles.section}>
            <h2 style={styles.h2}>15. Confidentiality</h2>
            <p style={styles.p}>
              Each party will protect the other's Confidential Information with
              at least the degree of care it uses for its own confidential
              information, and no less than reasonable care. Confidential
              Information may be used only to perform the Agreement and
              disclosed only to representatives with a need to know who are
              bound by equivalent obligations.
            </p>
            <p style={styles.p}>
              Standard exclusions apply: information that is or becomes public
              through no fault of the receiving party; was already known to the
              receiving party without confidentiality obligation; is
              independently developed without use of the disclosing party's
              Confidential Information; or is lawfully received from a third
              party. A receiving party may disclose Confidential Information
              where compelled by law, provided it gives prompt notice (where
              lawful) and reasonable cooperation in seeking protective treatment.
            </p>
            <p style={styles.p}>
              Confidentiality obligations survive termination for five years;
              trade secrets are protected for so long as they qualify as such
              under applicable law.
            </p>
          </section>

          {/* Section 16 */}
          <section id="privacy" style={styles.section}>
            <h2 style={styles.h2}>16. Privacy and Data Protection</h2>
            <p style={styles.p}>
              PravRaha's processing of personal data is governed by its Privacy
              Policy and, where Customer Data includes personal data, the DPA.
              The DPA incorporates the Standard Contractual Clauses adopted by
              the European Commission (and the UK International Data Transfer
              Addendum) where applicable and is incorporated into this Agreement
              by reference.
            </p>
            <p style={styles.p}>
              <strong>Sub-processor objections.</strong> PravRaha will provide
              at least 14 days' advance notice of any new sub-processor that
              will process Customer's personal data. If Customer has a
              reasonable, documented basis to object, the parties will work in
              good faith to identify an alternative; if no alternative is
              reasonably available within a further 30 days, Customer may
              terminate the affected Services and receive a pro-rated refund of
              prepaid unused fees for the affected portion.
            </p>
          </section>

          {/* Section 17 */}
          <section id="security" style={styles.section}>
            <h2 style={styles.h2}>17. Security</h2>
            <p style={styles.p}>
              PravRaha maintains the security program described in its Privacy
              Policy and in its Security Overview, available to enterprise
              customers under NDA. PravRaha will notify Customer without undue
              delay (and in any event within 72 hours of confirmation) of any
              confirmed security incident materially affecting Customer Data.
            </p>
            <p style={styles.p}>
              <strong>Audit rights.</strong> No more than once per
              twelve-month period, on at least 30 days' written notice, and at
              Customer's reasonable cost, Customer may request: (a) PravRaha's
              then-current SOC 2 Type II report or equivalent third-party
              assurance report (when available); (b) a completed standard
              security questionnaire (such as CAIQ or SIG); or (c) where (a)
              and (b) are demonstrably insufficient and Customer is required by
              law or regulator to perform an on-site audit, an audit limited to
              materials and personnel reasonably required, subject to mutually
              agreed scope and NDA.
            </p>
            <p style={styles.p}>
              <strong>Insurance.</strong> PravRaha will maintain, with
              reputable insurers, commercial general liability, professional
              errors and omissions, and cyber liability insurance with coverage
              levels appropriate for the scale and nature of the Services, and
              will provide certificates of insurance to enterprise customers on
              written request.
            </p>
          </section>

          {/* Section 18 */}
          <section id="availability" style={styles.section}>
            <h2 style={styles.h2}>18. Service Availability and Support</h2>
            <p style={styles.p}>
              PravRaha targets a monthly availability of 99.5% for the Platform
              (excluding Beta Features), measured as set out in the SLA, with
              higher targets available under enterprise order forms. Scheduled
              maintenance (announced at least 48 hours in advance), force
              majeure events, and third-party outages (including upstream cloud,
              network, or telecommunications providers) are excluded from
              availability calculations.
            </p>
            <p style={styles.p}>
              <strong>Sole and exclusive remedy</strong> for availability
              shortfalls is the service credit set out in the SLA, if any.
              Support response targets, escalation procedures, and severity
              definitions are set out in the SLA.
            </p>
          </section>

          {/* Section 19 */}
          <section id="beta" style={styles.section}>
            <h2 style={styles.h2}>19. Beta Features</h2>
            <p style={styles.p}>
              Features marked "beta," "preview," "experimental," or similar are
              provided "AS IS," without warranty, and may be modified or
              discontinued at any time. PravRaha's liability arising from beta
              features is capped at the fees paid for the beta feature in the
              preceding three months (if any) or, where no specific fees are
              charged, zero.
            </p>
          </section>

          {/* Section 20 */}
          <section id="suspension" style={styles.section}>
            <h2 style={styles.h2}>20. Suspension and Termination</h2>
            <p style={styles.p}>
              PravRaha may suspend Services immediately and without prior notice
              where Customer (a) presents a security or legal risk to PravRaha
              or third parties; (b) materially breaches the Acceptable Use
              Policy; or (c) fails to pay undisputed fees after notice.
            </p>
            <p style={styles.p}>
              Either party may terminate this Agreement (or any affected SOW or
              order form) for material breach not cured within 30 days of
              written notice. Either party may terminate immediately for the
              other party's insolvency, assignment for the benefit of creditors,
              or filing for bankruptcy.
            </p>
          </section>

          {/* Section 21 */}
          <section id="effect" style={styles.section}>
            <h2 style={styles.h2}>21. Effect of Termination</h2>
            <p style={styles.p}>
              Upon termination or expiration of the Agreement:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                All rights and licences granted to Customer end, including the
                right to use PravRaha Data.
              </li>
              <li style={styles.li}>
                Customer may export Customer Data for 30 days using available
                export tools, in machine-readable format (CSV, JSON, or
                comparable).
              </li>
              <li style={styles.li}>
                PravRaha will delete or return Customer Data within 30 days
                after the export period, subject to retention required by law
                and to standard backup-purge cycles (typically not exceeding 90
                days).
              </li>
              <li style={styles.li}>
                Accrued fees become immediately due and payable.
              </li>
              <li style={styles.li}>
                Sections that by their nature should survive — including
                provisions on IP, confidentiality, indemnity, limitation of
                liability, governing law, and any other accrued rights — survive
                termination.
              </li>
            </ul>
          </section>

          {/* Section 22 */}
          <section id="warranties" style={styles.section}>
            <h2 style={styles.h2}>22. Warranties and Disclaimers</h2>
            <p style={styles.p}>
              PravRaha warrants that the Platform will materially perform in
              accordance with its documentation under normal use. Customer's
              sole and exclusive remedy for breach of this warranty is, at
              PravRaha's option, repair, replacement, or refund of prepaid
              unused fees for the non-conforming Service.
            </p>
            <div style={styles.disclaimer}>
              EXCEPT FOR THE FOREGOING, THE SERVICES, PRAVRAHA DATA, AI OUTPUT,
              AND ALL RELATED MATERIALS ARE PROVIDED "AS IS" AND "AS
              AVAILABLE." PRAVRAHA DISCLAIMS ALL OTHER WARRANTIES, EXPRESS,
              IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              NON-INFRINGEMENT, AND ACCURACY. PRAVRAHA DOES NOT WARRANT
              UNINTERRUPTED OR ERROR-FREE OPERATION.
            </div>
          </section>

          {/* Section 23 */}
          <section id="indemnification" style={styles.section}>
            <h2 style={styles.h2}>23. Indemnification</h2>
            <p style={styles.p}>
              <strong>PravRaha's indemnity.</strong> PravRaha will defend
              Customer against third-party claims alleging that the Platform, as
              provided by PravRaha and used in accordance with the Agreement,
              infringes the third party's intellectual property rights, and will
              pay damages finally awarded or amounts paid in settlement approved
              by PravRaha. PravRaha may at its option modify the Platform to be
              non-infringing, procure rights for Customer's continued use, or
              terminate the affected portion of the Services with refund of
              prepaid unused fees. PravRaha has no obligation for claims arising
              from (i) Customer Data; (ii) Customer modifications; (iii)
              combinations not provided by PravRaha; (iv) use of AI Output; or
              (v) use outside the Agreement.
            </p>
            <p style={styles.p}>
              <strong>Customer's indemnity.</strong> Customer will defend
              PravRaha against third-party claims arising from (i) Customer
              Data; (ii) Customer's outreach activity; (iii) Customer's breach
              of the Acceptable Use Policy or Section 10; (iv) Customer's use of
              AI Output, regardless of whether Customer claims to have relied on
              it; or (v) any combination of the foregoing with third-party
              materials.
            </p>
            <p style={styles.p}>
              <strong>Procedure.</strong> Indemnification is conditional on the
              indemnified party giving prompt written notice, granting sole
              control of defence and settlement to the indemnifying party
              (provided that no settlement imposing non-monetary obligations on
              the indemnified party may be made without that party's prior
              written consent, not to be unreasonably withheld), and providing
              reasonable cooperation. This Section states the exclusive remedy
              for the claims it covers.
            </p>
          </section>

          {/* Section 24 */}
          <section id="liability" style={styles.section}>
            <h2 style={styles.h2}>24. Limitation of Liability</h2>
            <div style={styles.disclaimer}>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEITHER PARTY
              WILL BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
              EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, LOST REVENUE,
              LOST OR CORRUPTED DATA, OR BUSINESS INTERRUPTION, EVEN IF ADVISED
              OF THE POSSIBILITY.
            </div>
            <p style={styles.p}>
              <strong>
                Each party's aggregate liability arising out of or related to the
                Agreement is capped at the fees paid by Customer to PravRaha in
                the 12 months preceding the event giving rise to the liability
                (the "General Cap").
              </strong>
            </p>
            <p style={styles.p}>
              <strong>
                Super-cap for breaches of confidentiality, data protection, or
                security.
              </strong>{" "}
              A party's aggregate liability for (i) breaches of confidentiality;
              (ii) violations of applicable data-protection law; and (iii)
              breaches of Section 17 (Security), where attributable to that
              party's acts or omissions, is capped at two times (2x) the fees
              paid by Customer to PravRaha in the 12 months preceding the event
              giving rise to liability.
            </p>
            <p style={styles.p}>
              <strong>Uncapped items.</strong> The General Cap and Super-cap do
              not apply to: (a) Customer's payment obligations; (b) either
              party's indemnification obligations under Section 23; (c) willful
              misconduct or fraud; (d) gross negligence; (e) infringement of the
              other party's intellectual property rights; or (f) liability that
              cannot be limited under applicable law.
            </p>
          </section>

          {/* Section 25 */}
          <section id="force-majeure" style={styles.section}>
            <h2 style={styles.h2}>25. Force Majeure</h2>
            <p style={styles.p}>
              Neither party is liable for delay or failure caused by events
              beyond reasonable control, including natural disasters, acts of
              war or terrorism, civil unrest, pandemics, governmental action,
              internet or telecommunications failures, or material third-party
              service outages, provided the affected party gives prompt notice
              and uses reasonable efforts to mitigate. If a force majeure event
              persists for more than 60 consecutive days, either party may
              terminate the affected Services without further liability, except
              for accrued payment obligations.
            </p>
          </section>

          {/* Section 26 */}
          <section id="governing-law" style={styles.section}>
            <h2 style={styles.h2}>
              26. Governing Law, Jurisdiction, and Dispute Resolution
            </h2>
            <p style={styles.p}>
              <strong>
                Default (Customers in India and elsewhere unless otherwise
                agreed).
              </strong>{" "}
              This Agreement is governed by the laws of India, without regard to
              conflict-of-laws principles. The parties will first attempt
              resolution by good-faith negotiation between senior executives for
              30 days from written notice of dispute.
            </p>
            <p style={styles.p}>
              If unresolved, disputes will be finally resolved by arbitration
              administered under the Arbitration and Conciliation Act, 1996
              (India), by a sole arbitrator mutually appointed (failing mutual
              appointment, appointed under the Act), with seat and venue at
              Bengaluru, India, and proceedings in English. Judgment on award
              may be entered in any court of competent jurisdiction.
            </p>
            <p style={styles.p}>
              <strong>
                Enterprise variant (available by written agreement in the order
                form).
              </strong>{" "}
              For Customers headquartered outside India, the parties may instead
              agree to arbitration under the SIAC Rules with seat at Singapore
              (or such other neutral seat as the parties agree), with English
              law or such other mutually-agreed law as the governing substantive
              law of the contract.
            </p>
            <p style={styles.p}>
              <strong>Equitable relief.</strong> Notwithstanding the foregoing,
              either party may seek injunctive or equitable relief in any court
              of competent jurisdiction to protect intellectual property,
              confidentiality, or to enforce payment obligations.
            </p>
          </section>

          {/* Section 27 */}
          <section id="general" style={styles.section}>
            <h2 style={styles.h2}>27. General Provisions</h2>
            <p style={styles.p}>
              <strong>Assignment.</strong> Neither party may assign this
              Agreement without the other's prior written consent, except either
              party may assign to an affiliate or in connection with a merger,
              acquisition, financing, or sale of substantially all assets, with
              notice to the other party.
            </p>
            <p style={styles.p}>
              <strong>Notices.</strong> Notices must be in writing to the
              addresses on the order form, with copies to support@pravraha.com
              for PravRaha. Email notice with confirmation of receipt is
              sufficient for routine matters; recognised courier or certified
              post is required for breach, termination, or indemnity notices.
            </p>
            <p style={styles.p}>
              <strong>Entire Agreement.</strong> The Agreement (these Terms,
              order form, DPA, and SOWs) is the entire agreement and supersedes
              prior agreements and communications. Customer purchase order terms,
              vendor portal click-through terms, and similar Customer-issued
              instruments are expressly rejected and have no effect, regardless
              of any acknowledgement by PravRaha.
            </p>
            <p style={styles.p}>
              <strong>Severability and Waiver.</strong> If any provision is
              found unenforceable, the rest survives and the provision will be
              reformed to the minimum extent necessary. Failure to enforce is
              not waiver.
            </p>
            <p style={styles.p}>
              <strong>Independent Contractors.</strong> The parties are
              independent contractors. No agency, partnership, joint venture, or
              employment relationship is created.
            </p>
            <p style={styles.p}>
              <strong>No Third-Party Beneficiaries.</strong> None, except as
              expressly stated.
            </p>
            <p style={styles.p}>
              <strong>Publicity.</strong> PravRaha may identify Customer as a
              customer and use Customer's name and logo on its website and
              marketing materials in standard customer-listing form, unless
              Customer opts out by written notice. Any case study or quote
              requires Customer's prior written approval.
            </p>
            <p style={styles.p}>
              <strong>Modifications.</strong> PravRaha may modify these Terms;
              material changes will be notified to active Customers at least 30
              days before they take effect. Continued use after the effective
              date constitutes acceptance. For Customers under a current order
              form, the version of these Terms in effect at the start of the
              then-current term continues to apply through that term unless the
              parties agree in writing otherwise.
            </p>
            <p style={styles.p}>
              <strong>Export and Sanctions.</strong> Customer represents that it
              is not, and will not allow Authorised Users to be, persons or
              entities subject to applicable export controls or sanctions
              (including those administered by the United States, the European
              Union, the United Kingdom, the United Nations, or India).
            </p>
          </section>

          {/* Section 28 */}
          <section id="notices" style={styles.section}>
            <h2 style={styles.h2}>28. Notices and Contact</h2>
            <p style={styles.p}>
              <strong>PravRaha.</strong> Pravraha Software Technology Private
              Limited, Ranchi, Jharkhand, India 834004. Email:{" "}
              <a href="mailto:support@pravraha.com" style={styles.link}>
                support@pravraha.com
              </a>
              . Website:{" "}
              <a href="https://pravraha.com" style={styles.link}>
                https://pravraha.com
              </a>
              .
            </p>
            <p style={styles.p}>
              <strong>Customer.</strong> As stated on the executed order form,
              or such other address as Customer designates in writing.
            </p>
          </section>

          <footer style={styles.footer}>
            © Pravraha Software Technology Private Limited. All rights reserved.
            These Terms were last updated on the Effective Date stated on the
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
    backgroundColor: "#1b1f3b",
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
    backgroundColor: "#f5a623",
    color: "#1b1f3b",
    padding: "4px 14px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "0.5px",
  },
  headerSubtitle: {
    fontSize: "17px",
    color: "#b0bcd4",
    marginBottom: "12px",
    fontStyle: "italic",
  },
  headerDetails: {
    fontSize: "13px",
    color: "#8a9bb8",
    marginBottom: "20px",
    lineHeight: "1.8",
  },
  dot: { margin: "0 8px" },
  intro: {
    fontSize: "15px",
    color: "#c8d2e8",
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
    padding: "5px 10px",
    fontSize: "12px",
    color: "#444",
    cursor: "pointer",
    borderLeft: "2px solid #e0e0e0",
    marginBottom: "2px",
    fontFamily: "'Arial', sans-serif",
    lineHeight: "1.4",
    transition: "all 0.15s",
  },
  tocItemActive: {
    borderLeftColor: "#f5a623",
    color: "#c07c00",
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
    color: "#1b1f3b",
    marginBottom: "16px",
    marginTop: 0,
    paddingBottom: "8px",
    borderBottom: "2px solid #f5a623",
    display: "inline-block",
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
  dl: { margin: "0 0 14px" },
  dt: {
    fontWeight: "700",
    color: "#1b1f3b",
    fontSize: "15px",
    marginTop: "14px",
    fontFamily: "'Arial', sans-serif",
  },
  dd: {
    marginLeft: "20px",
    fontSize: "15px",
    lineHeight: "1.7",
    color: "#333",
    marginBottom: "4px",
  },
  link: { color: "#c07c00", textDecoration: "none" },
  disclaimer: {
    backgroundColor: "#fff8ec",
    border: "1px solid #f5a623",
    borderRadius: "4px",
    padding: "16px 20px",
    fontSize: "13px",
    lineHeight: "1.7",
    color: "#444",
    fontFamily: "'Arial', sans-serif",
    fontWeight: "600",
    letterSpacing: "0.1px",
    margin: "16px 0",
  },
  footer: {
    marginTop: "48px",
    paddingTop: "24px",
    borderTop: "1px solid #ddd",
    fontSize: "13px",
    color: "#888",
    fontFamily: "'Arial', sans-serif",
  },
};