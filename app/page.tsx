"use client";

export default function HomePage() {
  const MAIN_PHONE = "8327050313";
  const SALES_NUMBERS = [
    "(346) 365-7906",
    "(832) 677-3150",
    "(346) 532-8803"
  ];

  return (
    <main style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.left}>
          <p style={styles.kicker}>
            HOUSTON-BASED • BUILT FOR SMALL BUSINESSES • FAST TURNAROUND
          </p>

          <h1 style={styles.title}>
            Websites that make small businesses look expensive — and get more calls.
          </h1>

          <p style={styles.sub}>
            We design high-conversion websites that make your business look more trusted,
            more established, and worth contacting.
          </p>

          <div style={styles.buttons}>
            <a href={`tel:${MAIN_PHONE}`} style={styles.primaryBtn}>
              Call / Text Sales
            </a>
            <a href="#demos" style={styles.secondaryBtn}>
              See Real Examples
            </a>
            <a href="mailto:hello@atlasdigitallab.com" style={styles.secondaryBtn}>
              Get a Quote
            </a>
          </div>

          {/* SALES NUMBERS (THIS FIXES YOUR ISSUE) */}
          <div style={styles.salesWrap}>
            {SALES_NUMBERS.map((num, i) => (
              <a
                key={i}
                href={`tel:${num.replace(/\D/g, "")}`}
                style={styles.salesBtn}
              >
                Sales {num}
              </a>
            ))}
          </div>
        </div>

        <div style={styles.right}>
          <div style={styles.card}>
            <h3 style={{ marginBottom: 10 }}>
              A cleaner, more custom presentation for serious businesses.
            </h3>
            <p style={styles.cardText}>
              Cleaner hierarchy, stronger trust, and better conversion structure.
            </p>
            <button style={styles.cardBtn}>Start a Project</button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Built to help businesses look stronger online.
        </h2>

        <div style={styles.flexGrid}>
          <div style={styles.box}>
            <h3>Website Design</h3>
            <p>Clean layout, strong spacing, better first impression.</p>
          </div>

          <div style={styles.box}>
            <h3>SEO & Google Setup</h3>
            <p>Show up stronger in search and maps.</p>
          </div>

          <div style={styles.box}>
            <h3>Brand Presentation</h3>
            <p>Look more legit and more valuable online.</p>
          </div>
        </div>
      </section>

      {/* DEMOS */}
      <section id="demos" style={styles.section}>
        <h2 style={styles.sectionTitle}>Real directions we can build from.</h2>

        <div style={styles.flexGrid}>
          <div style={styles.demoCard}>Pet Bakery Demo</div>
          <div style={styles.demoCard}>Interior Styling</div>
          <div style={styles.demoCard}>Roofing Demo</div>
          <div style={styles.demoCard}>Metal Cards Demo</div>
        </div>
      </section>

      {/* PRICING */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Simple pricing for businesses ready to look more established.
        </h2>

        <div style={styles.scrollRow}>
          <div style={styles.priceCard}>
            <h3>Starter</h3>
            <h2>$299</h2>
            <p>Single page • Mobile • Contact</p>
          </div>

          <div style={styles.priceCard}>
            <h3>Growth</h3>
            <h2>$499</h2>
            <p>Multi-section • Trust blocks</p>
          </div>

          <div style={styles.priceCard}>
            <h3>Pro</h3>
            <h2>$799</h2>
            <p>Advanced SEO • Priority design</p>
          </div>

          <div style={styles.priceCardHighlight}>
            <h3>Elite</h3>
            <h2>$1,200</h2>
            <p>Custom premium build</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Want your company to look this sharp online?
        </h2>

        <div style={styles.buttons}>
          <a href="mailto:hello@atlasdigitallab.com" style={styles.primaryBtn}>
            Email Us
          </a>
          <a href={`tel:${MAIN_PHONE}`} style={styles.secondaryBtn}>
            Call ({MAIN_PHONE})
          </a>
        </div>
      </section>
    </main>
  );
}

/* ================= STYLES ================= */

const styles: any = {
  page: {
    background: "#0b0f1a",
    color: "white",
    fontFamily: "sans-serif",
    padding: "40px 20px",
    maxWidth: "1200px",
    margin: "0 auto"
  },

  hero: {
    display: "flex",
    flexWrap: "wrap",
    gap: 40,
    marginBottom: 60
  },

  left: { flex: 1, minWidth: 300 },
  right: { flex: 1, minWidth: 300 },

  kicker: { color: "#c7a96b", fontSize: 12 },
  title: { fontSize: 42, fontWeight: 800 },
  sub: { color: "#aaa", marginTop: 10 },

  buttons: { display: "flex", gap: 10, marginTop: 20 },

  primaryBtn: {
    background: "#c7a96b",
    color: "black",
    padding: "10px 18px",
    borderRadius: 8,
    textDecoration: "none"
  },

  secondaryBtn: {
    border: "1px solid #444",
    padding: "10px 18px",
    borderRadius: 8,
    textDecoration: "none",
    color: "white"
  },

  salesWrap: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 20
  },

  salesBtn: {
    border: "1px solid #444",
    padding: "8px 14px",
    borderRadius: 999,
    fontSize: 13,
    textDecoration: "none",
    color: "white"
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    padding: 20,
    borderRadius: 16
  },

  cardText: { color: "#bbb" },
  cardBtn: {
    marginTop: 10,
    padding: "10px 14px",
    background: "#222",
    color: "white",
    borderRadius: 8
  },

  section: { marginTop: 60 },

  sectionTitle: { fontSize: 28, marginBottom: 20 },

  flexGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: 20
  },

  box: {
    flex: "1 1 250px",
    background: "rgba(255,255,255,0.05)",
    padding: 20,
    borderRadius: 14
  },

  demoCard: {
    flex: "1 1 250px",
    padding: 20,
    borderRadius: 14,
    border: "1px solid #444"
  },

  scrollRow: {
    display: "flex",
    gap: 20,
    overflowX: "auto"
  },

  priceCard: {
    minWidth: 240,
    background: "rgba(255,255,255,0.05)",
    padding: 20,
    borderRadius: 14
  },

  priceCardHighlight: {
    minWidth: 240,
    background: "#c7a96b",
    color: "black",
    padding: 20,
    borderRadius: 14
  }
};