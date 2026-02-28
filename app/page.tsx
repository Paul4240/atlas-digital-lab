"use client";

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
    container: {
      maxWidth: "1100px",
      margin: "0 auto",
    },

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

    bullets: {
      margin: "10px 0 0 18px",
      lineHeight: 1.75,
      opacity: 0.92,
    },

    buttonRow: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      marginTop: "12px",
    },

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

    statTop: {
      fontWeight: 900,
      fontSize: "14px",
      marginBottom: "4px",
    },

    statSub: {
      fontSize: "12px",
      opacity: 0.78,
    },

    sectionTitleRow: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "12px",
      marginTop: "34px",
      marginBottom: "12px",
    },

    sectionTitle: {
      fontSize: "22px",
      margin: 0,
      letterSpacing: "-0.2px",
    },

    sectionHint: {
      fontSize: "13px",
      opacity: 0.72,
    },

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

    badgeGold: {
      background: "rgba(251,191,36,0.18)",
      border: "1px solid rgba(251,191,36,0.55)",
    },

    price: {
      fontSize: "34px",
      fontWeight: 950,
      margin: "6px 0 6px 0",
      letterSpacing: "-0.6px",
    },

    priceLabel: {
      fontSize: "14px",
      opacity: 0.85,
      marginBottom: "10px",
    },

    fine: {
      fontSize: "12px",
      opacity: 0.75,
      marginTop: "10px",
      lineHeight: 1.45,
    },

    divider: {
      height: "1px",
      background: "rgba(255,255,255,0.12)",
      margin: "22px 0",
    },

    contactGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "14px",
      alignItems: "start",
    },

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
    },

    // responsive helper (we’ll use inline: if screen is small, stack)
    note: {
      fontSize: "13px",
      opacity: 0.85,
      lineHeight: 1.55,
      marginTop: "10px",
    },
  };

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        {/* HERO */}
        <div style={styles.topKicker}>Houston · Small Business Websites</div>
        <h1 style={styles.h1}>Atlas Digital Lab</h1>
        <div style={styles.sub}>
          Professional websites for small businesses. Fast setup. Simple pricing.
          Ongoing support.
        </div>

        <div style={styles.heroGrid}>
          {/* WHAT WE DO */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              Get a professional website that brings you customers.
            </h2>
            <div style={styles.note}>
              We build modern, mobile-friendly websites for local businesses —
              designed to look legit, load fast, and help you get calls, leads,
              and bookings.
            </div>

            <ul style={styles.bullets}>
              <li>
                Custom 5-page website (Home, About, Services, Gallery/Projects,
                Contact)
              </li>
              <li>Mobile-first design + fast load speeds</li>
              <li>Contact forms, call/email buttons, and lead capture</li>
              <li>Basic local SEO setup (titles, descriptions, indexing)</li>
            </ul>

            <div style={styles.buttonRow}>
              <a
                style={{ ...styles.btn, ...styles.btnPrimary }}
                href="mailto:hello@atlasdigitallab.com"
              >
                Email Us
              </a>
              <a style={styles.btn} href="#contact">
                Contact Info
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
              Tell us what you do and we’ll reply fast. Response time: usually
              within 24 hours.
            </div>

            <label
              style={{ display: "block", marginTop: "12px", fontSize: "13px" }}
            >
              Name
              <input style={styles.input} placeholder="Your name" />
            </label>

            <label
              style={{ display: "block", marginTop: "10px", fontSize: "13px" }}
            >
              Business name
              <input style={styles.input} placeholder="Business name" />
            </label>

            <label
              style={{ display: "block", marginTop: "10px", fontSize: "13px" }}
            >
              Phone (optional)
              <input style={styles.input} placeholder="(555) 555-5555" />
            </label>

            <label
              style={{ display: "block", marginTop: "10px", fontSize: "13px" }}
            >
              What do you need?
              <textarea
                style={styles.textarea}
                placeholder="Website, updates, redesign, SEO, etc."
              />
            </label>

            <a
              style={{
                ...styles.btn,
                ...styles.btnPrimary,
                display: "block",
                textAlign: "center",
                marginTop: "12px",
              }}
              href="mailto:hello@atlasdigitallab.com?subject=Website%20Quote%20Request"
            >
              Email Us To Start
            </a>
          </div>
        </div>

        {/* PRICING */}
        <div style={styles.sectionTitleRow} id="pricing">
          <h2 style={styles.sectionTitle}>Pricing</h2>
          <div style={styles.sectionHint}>Simple packages. Clear results.</div>
        </div>

        <div style={styles.pricingGrid}>
          <div style={styles.priceCard}>
            <div style={styles.price}>$299</div>
            <div style={styles.priceLabel}>Starter</div>
            <div style={styles.sectionHint}>
              Perfect for new businesses
            </div>
            <div style={styles.divider} />
            <ul style={styles.bullets}>
              <li>5 page website</li>
              <li>Mobile optimized</li>
              <li>Contact form</li>
              <li>Basic SEO setup</li>
            </ul>
            <div style={styles.fine}>
              Best for: brand new businesses that need something clean and legit
              fast.
            </div>
          </div>

          <div style={{ ...styles.priceCard, ...styles.highlight }}>
            <div style={styles.badge}>Most Popular</div>
            <div style={styles.price}>$799</div>
            <div style={styles.priceLabel}>Pro</div>
            <div style={styles.sectionHint}>
              Best for higher competition
            </div>
            <div style={styles.divider} />
            <ul style={styles.bullets}>
              <li>Everything in Starter</li>
              <li>Priority design</li>
              <li>Advanced SEO</li>
              <li>Google Business setup</li>
            </ul>
            <div style={styles.fine}>
              Best for: local service businesses that want calls, leads, and a
              site that looks premium.
            </div>
          </div>

          <div style={styles.priceCard}>
            <div style={{ ...styles.badge, ...styles.badgeGold }}>
              Premium Option
            </div>
            <div style={styles.price}>$1,200</div>
            <div style={styles.priceLabel}>Elite</div>
            <div style={styles.sectionHint}>
              High-end custom build
            </div>
            <div style={styles.divider} />
            <ul style={styles.bullets}>
              <li>Custom premium design</li>
              <li>Brand strategy layout</li>
              <li>High-conversion structure</li>
              <li>Service area + trust sections</li>
              <li>Everything included in Pro</li>
            </ul>
            <div style={styles.fine}>
              Best for: businesses that want a high-end, custom build with
              stronger positioning.
            </div>
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
                <strong>Email:</strong> hello@atlasdigitallab.com
              </div>
              <div>
                <strong>Phone:</strong> (832) 705-0313
              </div>
              <div style={{ marginTop: "8px", fontSize: "12px", opacity: 0.8 }}>
                Response time: usually within 24 hours.
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h3 style={{ margin: "0 0 8px 0" }}>Demos</h3>
            <div style={{ fontSize: "13px", opacity: 0.9, lineHeight: 1.6 }}>
              We’ll be adding clickable demo sites here (roofing, barbershop,
              and your buddy’s site). This will turn into a gallery section.
            </div>
          </div>
        </div>

        <div style={styles.footer}>
          © 2026 Atlas Digital Lab. All rights reserved.
        </div>
      </div>
    </main>
  );
}