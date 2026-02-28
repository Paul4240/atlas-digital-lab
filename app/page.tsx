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
      padding: "40px 20px 80px",
    },

    container: {
      maxWidth: "1100px",
      margin: "0 auto",
    },

    badge: {
      display: "inline-block",
      padding: "6px 14px",
      borderRadius: "999px",
      border: "1px solid rgba(255,255,255,0.2)",
      fontSize: "13px",
      opacity: 0.85,
      marginBottom: "20px",
    },

    h1: {
      fontSize: "46px",
      margin: "0 0 16px",
      lineHeight: 1.05,
      letterSpacing: "-0.5px",
    },

    sub: {
      fontSize: "18px",
      lineHeight: 1.6,
      maxWidth: "720px",
      opacity: 0.85,
      marginBottom: "30px",
    },

    buttonRow: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      marginBottom: "40px",
    },

    btn: {
      display: "inline-block",
      padding: "12px 18px",
      borderRadius: "14px",
      border: "1px solid rgba(255,255,255,0.16)",
      background: "rgba(255,255,255,0.08)",
      color: "white",
      textDecoration: "none",
      fontWeight: 700,
    },

    btnPrimary: {
      background:
        "linear-gradient(180deg, rgba(59,130,246,0.38), rgba(59,130,246,0.18))",
      border: "1px solid rgba(59,130,246,0.55)",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "20px",
      marginTop: "60px",
    },

    card: {
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.10)",
      borderRadius: "20px",
      padding: "24px",
      boxShadow: "0 18px 50px rgba(0,0,0,0.45)",
      backdropFilter: "blur(10px)",
    },

    price: {
      fontSize: "32px",
      fontWeight: 800,
      marginBottom: "10px",
    },

    muted: {
      opacity: 0.7,
      fontSize: "14px",
      marginBottom: "12px",
    },

    list: {
      paddingLeft: "18px",
      lineHeight: 1.8,
      opacity: 0.9,
    },

    highlight: {
      border: "1px solid rgba(59,130,246,0.6)",
      boxShadow: "0 0 25px rgba(59,130,246,0.25)",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.badge}>Houston · Small Business Websites</div>

        <h1 style={styles.h1}>Atlas Digital Lab</h1>

        <p style={styles.sub}>
          Professional websites for small businesses. Fast setup. Simple
          pricing. Ongoing support.
        </p>

        <div style={styles.buttonRow}>
          <a href="mailto:hello@atlasdigitallab.com" style={{ ...styles.btn, ...styles.btnPrimary }}>
            Email Us
          </a>
          <a href="#pricing" style={styles.btn}>
            View Pricing
          </a>
        </div>

        <div id="pricing" style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.price}>$299</div>
            <div style={styles.muted}>Starter Website</div>
            <ul style={styles.list}>
              <li>5 page website</li>
              <li>Mobile optimized</li>
              <li>Contact form</li>
              <li>Basic SEO setup</li>
            </ul>
          </div>

          <div style={{ ...styles.card, ...styles.highlight }}>
            <div style={styles.price}>$799</div>
            <div style={styles.muted}>Pro Website</div>
            <ul style={styles.list}>
              <li>Everything in Starter</li>
              <li>Priority design</li>
              <li>Advanced SEO</li>
              <li>Google Business setup</li>
            </ul>
          </div>

          <div style={styles.card}>
            <div style={styles.price}>$1,200</div>
            <div style={styles.muted}>Elite Website</div>
            <ul style={styles.list}>
              <li>Custom premium design</li>
              <li>Brand strategy layout</li>
              <li>High-conversion structure</li>
              <li>Everything included in Pro</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}