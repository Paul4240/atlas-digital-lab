"use client";

export default function HomePage() {
  const MAIN_PHONE = "8327050313";

  const SALES = [
    "(346) 365-7906",
    "(832) 677-3150",
    "(346) 532-8803"
  ];

  return (
    <main style={styles.page}>
      {/* BACKGROUND GLOW */}
      <div style={styles.bgGlow} />
      <div style={styles.bgCircle} />

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.left}>
          <p style={styles.kicker}>
            HOUSTON • SMALL BUSINESS WEBSITES • FAST TURNAROUND
          </p>

          <h1 style={styles.title}>
            Websites that make small businesses look expensive — and get more calls.
          </h1>

          <p style={styles.sub}>
            Clean layouts, stronger trust, and better conversion structure so your business
            actually looks worth hiring.
          </p>

          <div style={styles.buttons}>
            <a href={`tel:${MAIN_PHONE}`} style={styles.primaryBtn}>
              Call / Text Sales
            </a>

            <a href="#demos" style={styles.secondaryBtn}>
              View Demos
            </a>

            <a href="mailto:hello@atlasdigitallab.com" style={styles.secondaryBtn}>
              Get a Quote
            </a>
          </div>

          {/* SALES NUMBERS */}
          <div style={styles.salesWrap}>
            {SALES.map((num, i) => (
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
          <div style={styles.heroCard}>
            <h3>A cleaner, more custom presentation for serious businesses.</h3>
            <p>
              Stronger first impression, better structure, and more calls from real customers.
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

        <div style={styles.flex}>
          <div style={styles.glass}>
            <h3>Website Design</h3>
            <p>Modern layout, better spacing, stronger first impression.</p>
          </div>

          <div style={styles.glass}>
            <h3>SEO & Google Setup</h3>
            <p>Show up stronger in search and maps.</p>
          </div>

          <div style={styles.glass}>
            <h3>Brand Presentation</h3>
            <p>Look more legit and more valuable online.</p>
          </div>
        </div>
      </section>

      {/* DEMOS */}
      <section id="demos" style={styles.section}>
        <h2 style={styles.sectionTitle}>Real directions we can build from.</h2>

        <div style={styles.flex}>
          <div style={styles.demo}>Pet Bakery Demo</div>
          <div style={styles.demo}>Interior Styling</div>
          <div style={styles.demo}>Roofing Demo</div>
          <div style={styles.demo}>Metal Cards Demo</div>
        </div>
      </section>

      {/* PRICING */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Simple pricing for businesses ready to look more established.
        </h2>

        <div style={styles.pricingRow}>
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

          <div style={styles.priceHighlight}>
            <h3>Elite</h3>
            <h2>$1,200</h2>
            <p>Premium custom build</p>
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
    background: "radial-gradient(circle at top left, #1a2238, #0b0f1a 60%)",
    color: "white",
    padding: "60px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh"
  },

  bgGlow: {
    position: "absolute",
    top: "-200px",
    left: "-200px",
    width: "500px",
    height: "500px",
    background: "rgba(212,175,55,0.15)",
    filter: "blur(120px)"
  },

  bgCircle: {
    position: "absolute",
    right: "-250px",
    top: "200px",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.05)"
  },

  hero: {
    display: "flex",
    flexWrap: "wrap",
    gap: 40
  },

  left: { flex: 1, minWidth: 300 },
  right: { flex: 1, minWidth: 300 },

  kicker: { color: "#d4af37", fontSize: 12 },

  title: {
    fontSize: 52,
    fontWeight: 800,
    lineHeight: 1.1
  },

  sub: { color: "#aaa", marginTop: 10 },

  buttons: { display: "flex", gap: 12, marginTop: 20 },

  primaryBtn: {
    background: "linear-gradient(135deg, #d4af37, #f5d76e)",
    color: "black",
    padding: "12px 20px",
    borderRadius: 10,
    textDecoration: "none"
  },

  secondaryBtn: {
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "12px 20px",
    borderRadius: 10,
    color: "white",
    textDecoration: "none"
  },

  salesWrap: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 20
  },

  salesBtn: {
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "8px 14px",
    borderRadius: 999,
    fontSize: 13,
    textDecoration: "none",
    color: "white"
  },

  heroCard: {
    background: "rgba(255,255,255,0.04)",
    padding: 24,
    borderRadius: 20,
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.08)"
  },

  cardBtn: {
    marginTop: 10,
    padding: "10px 16px",
    background: "#222",
    borderRadius: 8,
    color: "white"
  },

  section: { marginTop: 80 },

  sectionTitle: { fontSize: 30, marginBottom: 20 },

  flex: {
    display: "flex",
    flexWrap: "wrap",
    gap: 20
  },

  glass: {
    flex: "1 1 260px",
    padding: 24,
    borderRadius: 18,
    background: "rgba(255,255,255,0.04)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.08)"
  },

  demo: {
    flex: "1 1 260px",
    padding: 24,
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.1)"
  },

  pricingRow: {
    display: "flex",
    gap: 20,
    overflowX: "auto"
  },

  priceCard: {
    minWidth: 260,
    padding: 24,
    borderRadius: 18,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)"
  },

  priceHighlight: {
    minWidth: 260,
    padding: 24,
    borderRadius: 18,
    background: "#d4af37",
    color: "black"
  }
};