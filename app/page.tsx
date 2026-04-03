"use client";

export default function HomePage() {
  const MAIN_PHONE = "8327050313";
  const SALES_1 = "(346) 365-7906";
  const SALES_2 = "(832) 677-3150";
  const SALES_3 = "(346) 532-8803";

  return (
    <main style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <p style={styles.kicker}>
            HOUSTON-BASED • BUILT FOR SMALL BUSINESSES • FAST TURNAROUND
          </p>

          <h1 style={styles.heading}>
            Websites that make small businesses look expensive — and get more
            calls.
          </h1>

          <p style={styles.sub}>
            We design high-conversion websites that make your business look more
            trusted, more established, and worth contacting.
          </p>

          <div style={styles.ctaRow}>
            <button style={styles.primaryBtn}>Call / Text Sales</button>
            <button style={styles.secondaryBtn}>See Real Examples</button>
            <button style={styles.secondaryBtn}>Get a Quote</button>
          </div>

          {/* SALES NUMBERS */}
          <div style={styles.salesRow}>
            <div style={styles.pill}>Sales {SALES_1}</div>
            <div style={styles.pill}>Sales {SALES_2}</div>
            <div style={styles.pill}>Sales {SALES_3}</div>
          </div>
        </div>

        <div style={styles.heroCard}>
          <h3>A cleaner, more custom presentation for serious businesses.</h3>
          <p>
            Cleaner hierarchy, stronger trust, and better conversion structure.
          </p>
          <button style={styles.secondaryBtn}>Start a Project</button>
        </div>
      </section>

      {/* SERVICES */}
      <section>
        <h2 style={styles.sectionTitle}>
          Built to help businesses look stronger online.
        </h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Website Design</h3>
            <p>Clean layout, strong spacing, better first impression.</p>
          </div>

          <div style={styles.card}>
            <h3>SEO & Google Setup</h3>
            <p>Show up stronger in search and maps.</p>
          </div>

          <div style={styles.card}>
            <h3>Brand Presentation</h3>
            <p>Look more legit and more valuable online.</p>
          </div>
        </div>
      </section>

      {/* DEMOS */}
      <section>
        <h2 style={styles.sectionTitle}>
          Real directions we can build from.
        </h2>

        <div style={styles.grid}>
          <div style={styles.demoCard}>Pet Bakery Demo</div>
          <div style={styles.demoCard}>Interior Styling</div>
          <div style={styles.demoCard}>Roofing Demo</div>
          <div style={styles.demoCard}>Metal Cards Demo</div>
        </div>
      </section>

      {/* PRICING */}
      <section>
        <h2 style={styles.sectionTitle}>
          Simple pricing for businesses ready to look more established.
        </h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Starter</h3>
            <h2>$299</h2>
            <p>Single page • Mobile • Contact</p>
          </div>

          <div style={styles.card}>
            <h3>Growth</h3>
            <h2>$499</h2>
            <p>Multi-section • Trust blocks</p>
          </div>

          <div style={styles.card}>
            <h3>Pro</h3>
            <h2>$799</h2>
            <p>Advanced SEO • Priority design</p>
          </div>

          <div style={styles.elite}>
            <h3>Elite</h3>
            <h2>$1,200</h2>
            <p>Custom premium build</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <h2>Want your company to look this sharp online?</h2>
        <div style={styles.ctaRow}>
          <button style={styles.primaryBtn}>Email Us</button>
          <button style={styles.secondaryBtn}>
            Call ({MAIN_PHONE})
          </button>
        </div>
      </section>
    </main>
  );
}

const styles: any = {
  page: {
    background: "#0b0f1a",
    color: "#fff",
    padding: 24,
    fontFamily: "sans-serif",
  },

  hero: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: 30,
    marginBottom: 60,
  },

  heroLeft: {},

  kicker: {
    color: "#c8a96a",
    marginBottom: 10,
    fontSize: 12,
  },

  heading: {
    fontSize: 42,
    fontWeight: 800,
    lineHeight: 1.2,
    marginBottom: 15,
  },

  sub: {
    color: "#9aa4b2",
    marginBottom: 20,
  },

  ctaRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginBottom: 15,
  },

  primaryBtn: {
    background: "#c8a96a",
    color: "#000",
    padding: "10px 16px",
    borderRadius: 8,
    border: "none",
  },

  secondaryBtn: {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#fff",
    padding: "10px 16px",
    borderRadius: 8,
  },

  salesRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
  },

  pill: {
    padding: "8px 12px",
    borderRadius: 20,
    border: "1px solid rgba(255,255,255,0.2)",
    fontSize: 12,
  },

  heroCard: {
    background: "rgba(255,255,255,0.05)",
    padding: 20,
    borderRadius: 16,
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 20,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 20,
    marginBottom: 50,
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    padding: 20,
    borderRadius: 14,
  },

  demoCard: {
    border: "1px solid rgba(255,255,255,0.2)",
    padding: 20,
    borderRadius: 12,
  },

  elite: {
    background: "#c8a96a",
    color: "#000",
    padding: 20,
    borderRadius: 14,
  },

  ctaSection: {
    marginTop: 60,
    textAlign: "center",
  },
};