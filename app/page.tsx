"use client";

import React from "react";

export default function Home() {
  const styles: { [key: string]: React.CSSProperties } = {
    page: {
      minHeight: "100vh",
      background:
        "radial-gradient(900px 500px at 20% 10%, rgba(59,130,246,0.18), transparent 60%), radial-gradient(700px 420px at 80% 20%, rgba(251,191,36,0.12), transparent 55%), #0b0f17",
      color: "rgba(255,255,255,0.92)",
      fontFamily:
        'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
      padding: "32px 18px 70px",
    },
    container: { maxWidth: "1100px", margin: "0 auto" },

    topKicker: {
      display: "inline-block",
      padding: "6px 14px",
      borderRadius: "999px",
      border: "1px solid rgba(255,255,255,0.18)",
      background: "rgba(255,255,255,0.06)",
      fontSize: "13px",
      opacity: 0.9,
      marginBottom: "16px",
    },

    h1: {
      fontSize: "48px",
      margin: "0 0 12px 0",
      letterSpacing: "-0.8px",
      lineHeight: 1.05,
    },

    sub: {
      fontSize: "18px",
      lineHeight: 1.6,
      maxWidth: "760px",
      opacity: 0.85,
      marginBottom: "22px",
    },

    heroGrid: {
      display: "grid",
      gridTemplateColumns: "1.15fr 0.85fr",
      gap: "16px",
      alignItems: "start",
      marginTop: "16px",
    },

    card: {
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.10)",
      borderRadius: "20px",
      padding: "20px",
      boxShadow: "0 18px 50px rgba(0,0,0,0.45)",
      backdropFilter: "blur(10px)",
    },

    cardTitle: {
      fontSize: "18px",
      margin: "0 0 10px 0",
      letterSpacing: "-0.2px",
    },

    bullets: { margin: "10px 0 0 18px", lineHeight: 1.75, opacity: 0.92 },

    buttonRow: { display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "12px" },

    btn: {
      display: "inline-block",
      padding: "11px 16px",
      borderRadius: "14px",
      border: "1px solid rgba(255,255,255,0.16)",
      background: "rgba(255,255,255,0.08)",
      color: "rgba(255,255,255,0.95)",
      textDecoration: "none",
      fontWeight: 800,
      letterSpacing: "0.2px",
    },

    btnPrimary: {
      background:
        "linear-gradient(180deg, rgba(59,130,246,0.38), rgba(59,130,246,0.18))",
      border: "1px solid rgba(59,130,246,0.55)",
    },

    miniStats: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "10px",
      marginTop: "14px",
    },

    stat: {
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.10)",
      borderRadius: "16px",
      padding: "12px",
    },

    statTop: { fontWeight: 900, fontSize: "14px", marginBottom: "4px" },
    statSub: { fontSize: "12px", opacity: 0.78 },

    sectionTitleRow: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "12px",
      marginTop: "34px",
      marginBottom: "12px",
    },

    sectionTitle: { fontSize: "22px", margin: 0, letterSpacing: "-0.2px" },
    sectionHint: { fontSize: "13px", opacity: 0.72 },

    pricingGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "14px",
    },

    priceCard: {
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: "20px",
      padding: "18px",
      boxShadow: "0 18px 50px rgba(0,0,0,0.45)",
      position: "relative" as const,
    },

    highlight: {
      border: "1px solid rgba(59,130,246,0.75)",
      boxShadow:
        "0 0 0 2px rgba(59,130,246,0.20), 0 22px 60px rgba(0,0,0,0.55)",
      background:
        "linear-gradient(180deg, rgba(59,130,246,0.14), rgba(255,255,255,0.06))",
      transform: "translateY(-2px)",
    },

    badge: {
      position: "absolute" as const,
      top: "12px",
      right: "12px",
      fontSize: "12px",
      fontWeight: 900,
      padding: "6px 10px",
      borderRadius: "999px",
      background: "rgba(59,130,246,0.22)",
      border: "1px solid rgba(59,130,246,0.55)",
    },

    badgeGold: { background: "rgba(251,191,36,0.18)", border: "1px solid rgba(251,191,36,0.55)" },
    badgeGreen: { background: "rgba(34,197,94,0.16)", border: "1px solid rgba(34,197,94,0.45)" },

    price: { fontSize: "34px", fontWeight: 950, margin: "6px 0 6px 0", letterSpacing: "-0.6px" },
    priceLabel: { fontSize: "14px", opacity: 0.85, marginBottom: "10px" },

    divider: { height: "1px", background: "rgba(255,255,255,0.12)", margin: "14px 0" },

    fine: { fontSize: "12px", opacity: 0.75, marginTop: "10px", lineHeight: 1.45 },

    // NEW: monthly line styling
    monthlyWrap: {
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.10)",
      borderRadius: "14px",
      padding: "12px",
      marginTop: "12px",
    },
    monthlyTop: { fontWeight: 950, fontSize: "13px", marginBottom: "4px" },
    monthlyPrice: { fontWeight: 950 },
    monthlyNote: { fontSize: "12px", opacity: 0.75, lineHeight: 1.45 },

    contactGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", alignItems: "start" },

    input: {
      width: "100%",
      padding: "12px 12px",
      borderRadius: "14px",
      border: "1px solid rgba(255,255,255,0.14)",
      background: "rgba(255,255,255,0.06)",
      color: "rgba(255,255,255,0.92)",
      outline: "none",
      marginTop: "8px",
      boxSizing: "border-box" as const,
    },

    textarea: {
      width: "100%",
      minHeight: "120px",
      padding: "12px 12px",
      borderRadius: "14px",
      border: "1px solid rgba(255,255,255,0.14)",
      background: "rgba(255,255,255,0.06)",
      color: "rgba(255,255,255,0.92)",
      outline: "none",
      marginTop: "8px",
      boxSizing: "border-box" as const,
      resize: "vertical" as const,
    },

    footer: {
      marginTop: "26px",
      fontSize: "12px",
      opacity: 0.65,
      textAlign: "center" as const,
      lineHeight: 1.6,
    },

    note: { fontSize: "13px", opacity: 0.85, lineHeight: 1.55, marginTop: "10px" },
  };

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        {/* HERO */}
        <div style={styles.topKicker}>Houston · Small Business Websites</div>
        <h1 style={styles.h1}>Atlas Digital Lab</h1>
        <div style={styles.sub}>
          Professional websites for small businesses. Fast setup. Simple pricing. Ongoing support.
        </div>

        <div style={styles.heroGrid}>
          {/* WHAT WE DO */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Get a professional website that brings you customers.</h2>
            <div style={styles.note}>
              We build modern, mobile-friendly websites for local businesses — designed to look legit, load fast,
              and help you get calls, leads, and bookings.
            </div>

            <ul style={styles.bullets}>
              <li>Custom 5-page website (Home, About, Services, Gallery/Projects, Contact)</li>
              <li>Mobile-first design + fast load speeds</li>
              <li>Contact forms, call/email buttons, and lead capture</li>
              <li>Basic local SEO setup (titles, descriptions, indexing)</li>
            </ul>

            <div style={styles.buttonRow}>
              <a style={{ ...styles.btn, ...styles.btnPrimary }} href="mailto:hello@atlasdigitallab.com">
                Email Us
              </a>
              <a style={styles.btn} href="#pricing">
                View Pricing
              </a>
              <a style={styles.btn} href="#demos">
                View Demos
              </a>
            </div>

            <div style={styles.miniStats}>
              <div style={styles.stat}>
                <div style={styles.statTop}>1–7 Days</div>
                <div style={styles.statSub}>Typical launch time</div>
              </div>
              <div style={styles.stat}>
                <div style={styles.statTop}>Mobile</div>
                <div style={styles.statSub}>Looks great on phones</div>
              </div>
              <div style={styles.stat}>
                <div style={styles.statTop}>SEO</div>
                <div style={styles.statSub}>Built for local search</div>
              </div>
            </div>
          </div>

          {/* FREE QUOTE */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Free Quote</h2>
            <div style={{ fontSize: "13px", opacity: 0.85 }}>
              Tell us what you do and we’ll reply fast. Response time: usually within 24 hours.
            </div>

            <label style={{ display: "block", marginTop: "12px", fontSize: "13px" }}>
              Name
              <input style={styles.input} placeholder="Your name" />
            </label>

            <label style={{ display: "block", marginTop: "10px", fontSize: "13px" }}>
              Business name
              <input style={styles.input} placeholder="Business name" />
            </label>

            <label style={{ display: "block", marginTop: "10px", fontSize: "13px" }}>
              Phone (optional)
              <input style={styles.input} placeholder="(555) 555-5555" />
            </label>

            <label style={{ display: "block", marginTop: "10px", fontSize: "13px" }}>
              What do you need?
              <textarea style={styles.textarea} placeholder="Website, updates, redesign, SEO, etc." />
            </label>

            <a
              style={{ ...styles.btn, ...styles.btnPrimary, display: "block", textAlign: "center", marginTop: "12px" }}
              href="mailto:hello@atlasdigitallab.com?subject=Website%20Quote%20Request"
            >
              Email Us To Start
            </a>
          </div>
        </div>

        {/* PRICING */}
        <div style={styles.sectionTitleRow} id="pricing">
          <h2 style={styles.sectionTitle}>Pricing</h2>
          <div style={styles.sectionHint}>One-time build or monthly option.</div>
        </div>

        <div style={styles.pricingGrid}>
          {/* MONTHLY PLAN */}
          <div style={styles.priceCard}>
            <div style={{ ...styles.badge, ...styles.badgeGreen }}>Monthly Plan</div>
            <div style={styles.price}>$99/mo</div>
            <div style={styles.priceLabel}>Monthly Website Plan</div>
            <div style={styles.sectionHint}>No big upfront cost</div>

            <div style={styles.divider} />

            <ul style={styles.bullets}>
              <li>5 page professional website</li>
              <li>Hosting included</li>
              <li>Basic SEO setup</li>
              <li>Ongoing support</li>
            </ul>

            <div style={styles.monthlyWrap}>
              <div style={styles.monthlyTop}>
                Monthly terms: <span style={styles.monthlyPrice}>3-month minimum</span>
              </div>
              <div style={styles.monthlyNote}>
                After 3 months, it’s month-to-month. Cancel anytime after the minimum term.
              </div>
            </div>

            <div style={styles.fine}>
              Best for: businesses that want a legit website without paying a big upfront cost.
            </div>
          </div>

          {/* STARTER */}
          <div style={styles.priceCard}>
            <div style={styles.price}>$299</div>
            <div style={styles.priceLabel}>Starter (One-time Build)</div>
            <div style={styles.sectionHint}>Perfect for new businesses</div>

            <div style={styles.divider} />

            <ul style={styles.bullets}>
              <li>5 page website</li>
              <li>Mobile optimized</li>
              <li>Contact form</li>
              <li>Basic SEO setup</li>
            </ul>

            <div style={styles.monthlyWrap}>
              <div style={styles.monthlyTop}>
                Monthly option: <span style={styles.monthlyPrice}>$79/mo</span>
              </div>
              <div style={styles.monthlyNote}>
                Includes hosting + support. 3-month minimum, then month-to-month.
              </div>
            </div>

            <div style={styles.fine}>
              Best for: a clean professional site fast — with an optional monthly plan.
            </div>
          </div>

          {/* PRO */}
          <div style={{ ...styles.priceCard, ...styles.highlight }}>
            <div style={styles.badge}>Most Popular</div>
            <div style={styles.price}>$799</div>
            <div style={styles.priceLabel}>Pro (One-time Build)</div>
            <div style={styles.sectionHint}>Best for higher competition</div>

            <div style={styles.divider} />

            <ul style={styles.bullets}>
              <li>Everything in Starter</li>
              <li>Priority design</li>
              <li>Advanced SEO</li>
              <li>Google Business setup</li>
            </ul>

            <div style={styles.monthlyWrap}>
              <div style={styles.monthlyTop}>
                Monthly option: <span style={styles.monthlyPrice}>$129/mo</span>
              </div>
              <div style={styles.monthlyNote}>
                Includes hosting + support. 3-month minimum, then month-to-month.
              </div>
            </div>

            <div style={styles.fine}>
              Best for: local service businesses that want calls, leads, and a site that looks premium.
            </div>
          </div>

          {/* ELITE */}
          <div style={styles.priceCard}>
            <div style={{ ...styles.badge, ...styles.badgeGold }}>Premium Option</div>
            <div style={styles.price}>$1,200</div>
            <div style={styles.priceLabel}>Elite (One-time Build)</div>
            <div style={styles.sectionHint}>High-end custom build</div>

            <div style={styles.divider} />

            <ul style={styles.bullets}>
              <li>Custom premium design</li>
              <li>Brand strategy layout</li>
              <li>High-conversion structure</li>
              <li>Service area + trust sections</li>
              <li>Everything included in Pro</li>
            </ul>

            <div style={styles.monthlyWrap}>
              <div style={styles.monthlyTop}>
                Monthly option: <span style={styles.monthlyPrice}>$179/mo</span>
              </div>
              <div style={styles.monthlyNote}>
                Includes hosting + support. 3-month minimum, then month-to-month.
              </div>
            </div>

            <div style={styles.fine}>
              Best for: businesses that want a high-end, custom build with stronger positioning.
            </div>
          </div>
        </div>

        <div style={styles.divider} />

        {/* DEMOS */}
        <h2 style={styles.sectionTitle} id="demos">
          Demos
        </h2>

        <div style={styles.contactGrid}>
          <div style={styles.card}>
            <h3 style={{ margin: "0 0 8px 0" }}>Click a demo</h3>
            <div style={{ fontSize: "13px", opacity: 0.9, lineHeight: 1.6 }}>
              These are example sites we’ll show prospects to close $799 builds.
            </div>

            <div style={styles.buttonRow}>
              <a style={styles.btn} href="/demo/roofing">
                Roofing Demo (Pro)
              </a>
              <a style={styles.btn} href="#">
                Contractor Demo (Coming Soon)
              </a>
              <a style={styles.btn} href="#">
                Barbershop Demo (Coming Soon)
              </a>
            </div>

            <div style={styles.fine}>
              Note: Demos can be swapped to match any niche (HVAC, plumbing, detailing, landscaping, etc.).
            </div>
          </div>

          <div style={styles.card}>
            <h3 style={{ margin: "0 0 8px 0" }}>What makes our demos close</h3>
            <ul style={styles.bullets}>
              <li>Clean modern look (trust)</li>
              <li>Clear services + CTAs (conversions)</li>
              <li>Mobile first (most customers)</li>
              <li>Fast load + SEO basics</li>
            </ul>
          </div>
        </div>

        <div style={styles.divider} />

        {/* CONTACT */}
        <h2 style={styles.sectionTitle} id="contact">
          Contact
        </h2>

        <div style={styles.contactGrid}>
          <div style={styles.card}>
            <h3 style={{ margin: "0 0 8px 0" }}>Reach us</h3>
            <div style={{ lineHeight: 1.7, opacity: 0.92 }}>
              <div>
                <strong>Main:</strong>{" "}
                <a href="tel:+18327050313" style={{ color: "#fff", textDecoration: "none" }}>
                  (832) 705-0313
                </a>
              </div>
              <div>
                <strong>Sales & Estimates:</strong>{" "}
                <a href="tel:+18325935740" style={{ color: "#fff", textDecoration: "none" }}>
                  (832) 593-5740
                </a>
              </div>
              <div style={{ marginTop: "8px" }}>
                <strong>Email:</strong>{" "}
                <a href="mailto:hello@atlasdigitallab.com" style={{ color: "#fff", textDecoration: "none" }}>
                  hello@atlasdigitallab.com
                </a>
              </div>
              <div style={{ marginTop: "8px", fontSize: "12px", opacity: 0.8 }}>
                Response time: usually within 24 hours.
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h3 style={{ margin: "0 0 8px 0" }}>Availability</h3>
            <div style={{ fontSize: "13px", opacity: 0.9, lineHeight: 1.6 }}>
              We take a limited number of builds each week so every site gets done fast and looks premium.
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div style={styles.footer}>
          © 2026 Atlas Digital Lab. All rights reserved.
          <div style={{ marginTop: "6px", fontSize: "12px", opacity: 0.5 }}>
            Now hiring: Part-time sales representative (commission-based).
          </div>
        </div>
      </div>
    </main>
  );
}