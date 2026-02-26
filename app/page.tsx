"use client";

export default function Home() {
  const styles: { [key: string]: React.CSSProperties } = {
    page: {
      minHeight: "100vh",
      background: "#0b0f17",
      color: "rgba(255,255,255,0.92)",
      fontFamily: "Arial, Helvetica, sans-serif",
      padding: "32px 18px 60px",
    },
    container: {
      maxWidth: "1100px",
      margin: "0 auto",
    },
    topKicker: {
      fontSize: "14px",
      opacity: 0.85,
      marginBottom: "10px",
    },
    h1: {
      fontSize: "44px",
      margin: "0 0 10px 0",
      letterSpacing: "-0.5px",
    },
    sub: {
      fontSize: "16px",
      lineHeight: 1.55,
      maxWidth: "720px",
      opacity: 0.9,
      marginBottom: "22px",
    },
    heroRow: {
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "18px",
      alignItems: "start",
      marginTop: "18px",
    },
    card: {
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: "18px",
      padding: "18px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
    },
    cardTitle: {
      fontSize: "18px",
      margin: "0 0 10px 0",
    },
    bullets: {
      margin: "10px 0 0 18px",
      lineHeight: 1.6,
      opacity: 0.95,
    },
    buttonRow: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      marginTop: "12px",
    },
    btn: {
      display: "inline-block",
      padding: "10px 14px",
      borderRadius: "12px",
      border: "1px solid rgba(255,255,255,0.18)",
      background: "rgba(255,255,255,0.08)",
      color: "rgba(255,255,255,0.92)",
      textDecoration: "none",
      fontWeight: 600,
    },
    btnPrimary: {
      background: "rgba(59,130,246,0.28)",
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
      borderRadius: "14px",
      padding: "12px",
      textAlign: "left" as const,
    },
    statTop: {
      fontWeight: 800,
      fontSize: "14px",
      marginBottom: "4px",
    },
    statSub: {
      fontSize: "12px",
      opacity: 0.8,
    },
    sectionTitle: {
      fontSize: "22px",
      margin: "34px 0 12px 0",
    },
    pricingGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "14px",
    },
    priceCard: {
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: "18px",
      padding: "18px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
      position: "relative" as const,
    },
    highlight: {
      border: "1px solid rgba(59,130,246,0.85)",
      boxShadow:
        "0 0 0 2px rgba(59,130,246,0.25), 0 18px 42px rgba(0,0,0,0.45)",
      background: "rgba(59,130,246,0.14)",
      transform: "scale(1.03)",
    },
    badge: {
      position: "absolute" as const,
      top: "12px",
      right: "12px",
      fontSize: "12px",
      fontWeight: 800,
      padding: "6px 10px",
      borderRadius: "999px",
      background: "rgba(59,130,246,0.25)",
      border: "1px solid rgba(59,130,246,0.55)",
    },
    premiumBadge: {
      position: "absolute" as const,
      top: "12px",
      right: "12px",
      fontSize: "12px",
      fontWeight: 800,
      padding: "6px 10px",
      borderRadius: "999px",
      background: "rgba(251,191,36,0.25)",
      border: "1px solid rgba(251,191,36,0.65)",
      color: "#fbbf24",
    },
    price: {
      fontSize: "34px",
      fontWeight: 900,
      margin: "6px 0 6px 0",
    },
    priceLabel: {
      fontSize: "14px",
      opacity: 0.85,
      marginBottom: "10px",
    },
    fine: {
      fontSize: "12px",
      opacity: 0.78,
      marginTop: "10px",
      lineHeight: 1.45,
    },
  };

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <div style={styles.topKicker}>
          Houston • Small Business Websites
        </div>
        <h1 style={styles.h1}>Atlas Digital Lab</h1>
        <div style={styles.sub}>
          We build clean, modern websites that make small businesses look
          established. Fast setup, simple pricing, and ongoing support.
        </div>

        <h2 style={styles.sectionTitle}>Pricing</h2>

        <div style={styles.pricingGrid}>
          <div style={styles.priceCard}>
            <div style={styles.price}>$299</div>
            <div style={styles.priceLabel}>Starter Website</div>
            <ul style={styles.bullets}>
              <li>5 page website</li>
              <li>Mobile optimized</li>
              <li>Contact form</li>
              <li>Basic SEO setup</li>
            </ul>
            <div style={styles.fine}>
              Best for: brand new businesses that need something clean and legit fast.
            </div>
          </div>

          <div style={{ ...styles.priceCard, ...styles.highlight }}>
            <div style={styles.badge}>Most Popular</div>
            <div style={styles.price}>$799</div>
            <div style={styles.priceLabel}>Pro Website</div>
            <ul style={styles.bullets}>
              <li>Everything in Starter</li>
              <li>Priority design</li>
              <li>Advanced SEO</li>
              <li>Google Business setup</li>
            </ul>
            <div style={styles.fine}>
              Best for: local service businesses that want calls and leads.
            </div>
          </div>

          {/* ELITE WITH PREMIUM BADGE */}
          <div style={styles.priceCard}>
            <div style={styles.premiumBadge}>Premium Option</div>
            <div style={styles.price}>$1,200</div>
            <div style={styles.priceLabel}>Elite Website</div>
            <ul style={styles.bullets}>
              <li>Custom premium design</li>
              <li>Brand strategy layout</li>
              <li>High-conversion structure</li>
              <li>Service area + trust sections</li>
              <li>Everything included in Pro</li>
            </ul>
            <div style={styles.fine}>
              Best for: businesses that want a high-end, custom build with stronger positioning.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}