"use client";

export default function MetalCardsDemo() {
  const MAIN_PHONE = "8327050313";
  const MAIN_PRETTY = "(832) 705-0313";

  const SALES_PHONE = "3463657906";
  const SALES_PRETTY = "(346) 365-7906";

  const EMAIL = "hello@atlasdigitallab.com";

  return (
    <main style={styles.page}>
      <header style={styles.top}>
        <div style={styles.brand}>Metal Business Cards Demo</div>

        <div style={styles.topBtns}>
          <a style={styles.pill} href={`tel:${MAIN_PHONE}`}>
            Main {MAIN_PRETTY}
          </a>
          <a style={{ ...styles.pill, ...styles.pillPrimary }} href={`tel:${SALES_PHONE}`}>
            Sales {SALES_PRETTY}
          </a>
        </div>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <h1 style={styles.h1}>
            Make your first impression feel{" "}
            <span style={styles.accent}>expensive</span>.
          </h1>

          <p style={styles.sub}>
            Premium engraved metal business cards designed for high-end brands.
          </p>

          <div style={styles.ctaRow}>
            <a style={{ ...styles.btn, ...styles.btnPrimary }} href={`tel:${SALES_PHONE}`}>
              Call / Text to Order
            </a>

            <a
              style={styles.btn}
              href={`mailto:${EMAIL}?subject=${encodeURIComponent("Metal Cards Quote")}`}
            >
              Email for Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at 20% 0%, #0f2b4a 0%, #0b1426 55%, #070b14 100%)",
    color: "#eaf2ff",
    fontFamily:
      "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  },

  top: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: "14px 18px",
    background: "rgba(10, 15, 25, 0.55)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(10px)",
    flexWrap: "wrap", // ✅ helps mobile
  },

  brand: {
    fontWeight: 800,
    letterSpacing: "0.2px",
    opacity: 0.95,
  },

  topBtns: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap", // ✅ fixes phone overlap
    justifyContent: "flex-end",
  },

  pill: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "10px 12px",
    borderRadius: 999,
    background: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    color: "#eaf2ff",
    textDecoration: "none",
    fontWeight: 800,
    fontSize: 14,
    lineHeight: 1,
    whiteSpace: "nowrap",
  },

  pillPrimary: {
    background:
      "linear-gradient(135deg, rgba(46, 180, 255, 0.95), rgba(0, 210, 170, 0.95))",
    border: "0",
    color: "#07111f",
  },

  hero: {
    padding: "64px 18px 80px",
  },

  heroInner: {
    maxWidth: 980,
    margin: "0 auto",
  },

  h1: {
    margin: "0 0 12px",
    fontSize: "clamp(34px, 5.5vw, 56px)", // ✅ responsive headline
    lineHeight: 1.06,
    letterSpacing: "-1px",
  },

  accent: {
    color: "#2eb4ff",
  },

  sub: {
    margin: "0 0 22px",
    opacity: 0.9,
    fontSize: 18,
    maxWidth: 720,
  },

  ctaRow: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
  },

  btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 18px",
    borderRadius: 999,
    textDecoration: "none",
    color: "#eaf2ff",
    background: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.14)",
    fontWeight: 900,
    letterSpacing: "0.2px",
    minWidth: 180,
    flex: "1 1 220px", // ✅ stacks nicely on phone
  },

  btnPrimary: {
    background:
      "linear-gradient(135deg, rgba(46, 180, 255, 0.95), rgba(0, 210, 170, 0.95))",
    border: "0",
    color: "#07111f",
  },
};