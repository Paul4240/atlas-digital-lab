"use client";

import Link from "next/link";

export default function HomePage() {
  const phone = "3463657906";
  const phonePretty = "(346) 365-7906";
  const email = "hello@atlasdigitallab.com";

  return (
    <main style={styles.page}>
      {/* Top nav */}
      <header style={styles.nav}>
        <div style={styles.brand}>
          <div style={styles.logoMark} />
          <div>
            <div style={styles.brandName}>Atlas Digital Lab</div>
            <div style={styles.brandTag}>Websites • SEO • Small Business Growth</div>
          </div>
        </div>

        <div style={styles.navRight}>
          <a style={styles.navLink} href="#services">Services</a>
          <a style={styles.navLink} href="#demos">Demos</a>
          <a style={styles.navLink} href="#pricing">Pricing</a>

          <a
            href={`tel:${phone}`}
            style={{ ...styles.navCta, ...styles.navCtaSecondary }}
          >
            Call/Text {phonePretty}
          </a>

          <a href={`mailto:${email}`} style={styles.navCta}>
            Get a Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <div style={styles.pill}>Fast turnaround • Mobile-first • Clear pricing</div>

          <h1 style={styles.h1}>
            Websites that make small businesses look premium — and get calls.
          </h1>

          <p style={styles.heroP}>
            We build clean, fast websites with a conversion-first layout (so people
            actually contact you). Perfect for local businesses that want to look
            “worth it” online.
          </p>

          <div style={styles.heroCtas}>
            <a href={`mailto:${email}`} style={styles.primaryBtn}>
              Get a Quote
            </a>
            <a href="#demos" style={styles.secondaryBtn}>
              See Demos
            </a>
          </div>

          <div style={styles.trustRow}>
            <div style={styles.trustItem}>
              <div style={styles.trustTitle}>Quick builds</div>
              <div style={styles.trustText}>Launch fast with a proven layout.</div>
            </div>
            <div style={styles.trustItem}>
              <div style={styles.trustTitle}>SEO-ready</div>
              <div style={styles.trustText}>Built for Google + speed.</div>
            </div>
            <div style={styles.trustItem}>
              <div style={styles.trustTitle}>You own it</div>
              <div style={styles.trustText}>No lock-ins. Your site, your assets.</div>
            </div>
          </div>
        </div>

        <div style={styles.heroRight}>
          <div style={styles.previewCard}>
            <div style={styles.previewTop}>
              <div style={styles.previewDot} />
              <div style={styles.previewDot} />
              <div style={styles.previewDot} />
            </div>

            <div style={styles.previewBody}>
              <div style={styles.previewBadge}>Live demo style</div>
              <div style={styles.previewTitle}>High-conversion layout</div>
              <div style={styles.previewLine} />
              <div style={styles.previewLineShort} />
              <div style={styles.previewGrid}>
                <div style={styles.previewMiniCard} />
                <div style={styles.previewMiniCard} />
                <div style={styles.previewMiniCard} />
              </div>
              <div style={styles.previewCtaRow}>
                <div style={styles.previewCta} />
                <div style={styles.previewCtaGhost} />
              </div>
            </div>
          </div>

          <div style={styles.quickContact}>
            <div style={styles.quickContactTitle}>Fast contact</div>
            <div style={styles.quickContactRow}>
              <a href={`tel:${phone}`} style={styles.quickChip}>
                Text/Call {phonePretty}
              </a>
              <a href={`mailto:${email}`} style={styles.quickChipAlt}>
                {email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={styles.section}>
        <div style={styles.sectionHead}>
          <h2 style={styles.h2}>What we do</h2>
          <p style={styles.sectionP}>
            Simple packages, clean design, and a clear path to getting customers.
          </p>
        </div>

        <div style={styles.grid3}>
          <div style={styles.card}>
            <div style={styles.cardTitle}>Websites</div>
            <div style={styles.cardP}>
              Fast, modern sites that look expensive and load quick.
            </div>
            <ul style={styles.ul}>
              <li>Mobile-first layout</li>
              <li>Clear calls-to-action</li>
              <li>Speed + best practices</li>
            </ul>
          </div>

          <div style={styles.card}>
            <div style={styles.cardTitle}>SEO & Google Setup</div>
            <div style={styles.cardP}>
              Get found locally and build trust fast.
            </div>
            <ul style={styles.ul}>
              <li>Google Business profile help</li>
              <li>On-page SEO basics</li>
              <li>Performance + indexing ready</li>
            </ul>
          </div>

          <div style={styles.card}>
            <div style={styles.cardTitle}>Branding</div>
            <div style={styles.cardP}>
              Clean logos, colors, and polish that makes you look legit.
            </div>
            <ul style={styles.ul}>
              <li>Logo refresh</li>
              <li>Color + typography</li>
              <li>Professional layout</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Demos */}
      <section id="demos" style={styles.section}>
        <div style={styles.sectionHead}>
          <h2 style={styles.h2}>Demos you can show clients</h2>
          <p style={styles.sectionP}>
            Use these as proof of quality when selling your services.
          </p>
        </div>

        <div style={styles.demoGrid}>
          <div style={styles.demoCard}>
            <div style={styles.demoTop}>
              <div style={styles.demoTitle}>Metal Business Cards Demo</div>
              <div style={styles.demoTag}>Premium product-style</div>
            </div>
            <div style={styles.demoBody}>
              Looks like a real high-end brand page (finishes, packages, contact).
            </div>
            <div style={styles.demoBottom}>
              <Link href="/demo/metal-cards" style={styles.demoBtn}>
                Open Metal Cards Demo
              </Link>
            </div>
          </div>

          <div style={styles.demoCard}>
            <div style={styles.demoTop}>
              <div style={styles.demoTitle}>Roofing Demo</div>
              <div style={styles.demoTag}>Local service-style</div>
            </div>
            <div style={styles.demoBody}>
              Built to get calls: strong hero, trust blocks, and simple quote path.
            </div>
            <div style={styles.demoBottom}>
              <Link href="/roofing" style={styles.demoBtn}>
                Open Roofing Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={styles.section}>
        <div style={styles.sectionHead}>
          <h2 style={styles.h2}>Simple pricing</h2>
          <p style={styles.sectionP}>
            Start clean. Upgrade when you want more features or a custom build.
          </p>
        </div>

        <div style={styles.pricingGrid}>
          <div style={styles.priceCard}>
            <div style={styles.priceName}>Starter</div>
            <div style={styles.priceNumber}>$299</div>
            <div style={styles.priceSub}>Best for: quick online presence</div>
            <ul style={styles.ul}>
              <li>Single-page layout</li>
              <li>Mobile-first</li>
              <li>Contact section</li>
            </ul>
            <a href={`mailto:${email}`} style={styles.priceBtn}>
              Start Starter
            </a>
          </div>

          <div style={{ ...styles.priceCard, ...styles.priceCardHot }}>
            <div style={styles.hotBadge}>Most popular</div>
            <div style={styles.priceName}>Pro</div>
            <div style={styles.priceNumber}>$499</div>
            <div style={styles.priceSub}>Best for: more trust + structure</div>
            <ul style={styles.ul}>
              <li>High-conversion sections</li>
              <li>Service + trust blocks</li>
              <li>Everything in Starter</li>
            </ul>
            <a href={`mailto:${email}`} style={{ ...styles.priceBtn, ...styles.priceBtnHot }}>
              Start Pro
            </a>
          </div>

          <div style={styles.priceCard}>
            <div style={styles.priceName}>Elite</div>
            <div style={styles.priceNumber}>$799+</div>
            <div style={styles.priceSub}>Best for: custom build + positioning</div>
            <ul style={styles.ul}>
              <li>Custom layout + sections</li>
              <li>Better branding polish</li>
              <li>Everything in Pro</li>
            </ul>
            <a href={`tel:${phone}`} style={styles.priceBtn}>
              Call/Text to Plan
            </a>
          </div>
        </div>

        <div style={styles.bottomCta}>
          <div style={styles.bottomCtaText}>
            Want us to build your next demo site for a specific niche?
          </div>
          <div style={styles.bottomCtaRow}>
            <a href={`tel:${phone}`} style={styles.secondaryBtn}>
              Text {phonePretty}
            </a>
            <a href={`mailto:${email}`} style={styles.primaryBtn}>
              Email for Quote
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div>
            <div style={styles.footerBrand}>Atlas Digital Lab</div>
            <div style={styles.footerSmall}>
              Websites • SEO • Branding
            </div>
          </div>

          <div style={styles.footerLinks}>
            <a style={styles.footerLink} href={`tel:${phone}`}>{phonePretty}</a>
            <a style={styles.footerLink} href={`mailto:${email}`}>{email}</a>
          </div>
        </div>

        <div style={styles.footerBottom}>
          <div style={styles.footerSmall}>
            © {new Date().getFullYear()} Atlas Digital Lab
          </div>
          <div style={styles.footerSmall}>Fast response • clear pricing</div>
        </div>
      </footer>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at 10% 10%, rgba(0,180,255,0.18), transparent 55%), radial-gradient(circle at 90% 30%, rgba(115,80,255,0.16), transparent 55%), #070a12",
    color: "rgba(255,255,255,0.92)",
    fontFamily:
      'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
  },

  nav: {
    position: "sticky",
    top: 0,
    zIndex: 30,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 22px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(7,10,18,0.72)",
    backdropFilter: "blur(10px)",
  },
  brand: { display: "flex", gap: 12, alignItems: "center" },
  logoMark: {
    width: 38,
    height: 38,
    borderRadius: 12,
    background:
      "linear-gradient(135deg, rgba(0,200,255,0.9), rgba(130,90,255,0.9))",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
  },
  brandName: { fontWeight: 900, letterSpacing: 0.2 },
  brandTag: { fontSize: 12, color: "rgba(255,255,255,0.65)" },

  navRight: { display: "flex", gap: 12, alignItems: "center" },
  navLink: {
    color: "rgba(255,255,255,0.75)",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: 14,
    padding: "8px 10px",
    borderRadius: 10,
  },
  navCta: {
    textDecoration: "none",
    fontWeight: 900,
    fontSize: 14,
    padding: "10px 14px",
    borderRadius: 12,
    color: "#061018",
    background:
      "linear-gradient(135deg, rgba(0,200,255,0.95), rgba(130,90,255,0.95))",
    boxShadow: "0 14px 38px rgba(0,0,0,0.35)",
    whiteSpace: "nowrap",
  },
  navCtaSecondary: {
    color: "rgba(255,255,255,0.9)",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "none",
  },

  hero: {
    display: "grid",
    gridTemplateColumns: "1.25fr 0.95fr",
    gap: 46,
    maxWidth: 1180,
    margin: "0 auto",
    padding: "54px 22px 18px",
    alignItems: "start",
  },
  heroLeft: {},
  pill: {
    display: "inline-flex",
    gap: 10,
    alignItems: "center",
    padding: "8px 12px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    color: "rgba(255,255,255,0.75)",
    fontWeight: 800,
    fontSize: 13,
    marginBottom: 18,
  },
  h1: {
    fontSize: 52,
    lineHeight: 1.05,
    margin: "0 0 16px",
    letterSpacing: -0.6,
    fontWeight: 950,
  },
  heroP: {
    margin: "0 0 22px",
    color: "rgba(255,255,255,0.75)",
    fontSize: 16.5,
    lineHeight: 1.55,
    maxWidth: 560,
  },
  heroCtas: { display: "flex", gap: 12, alignItems: "center" },
  primaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    fontWeight: 950,
    padding: "12px 16px",
    borderRadius: 14,
    color: "#061018",
    background:
      "linear-gradient(135deg, rgba(0,200,255,0.95), rgba(130,90,255,0.95))",
    boxShadow: "0 18px 46px rgba(0,0,0,0.35)",
  },
  secondaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    fontWeight: 900,
    padding: "12px 16px",
    borderRadius: 14,
    color: "rgba(255,255,255,0.92)",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
  },

  trustRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 12,
    marginTop: 22,
    maxWidth: 620,
  },
  trustItem: {
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.05)",
    borderRadius: 16,
    padding: "12px 12px",
  },
  trustTitle: { fontWeight: 950, marginBottom: 4, fontSize: 13 },
  trustText: { color: "rgba(255,255,255,0.70)", fontSize: 12.5, lineHeight: 1.35 },

  heroRight: { display: "grid", gap: 14 },
  previewCard: {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.05)",
    overflow: "hidden",
    boxShadow: "0 24px 80px rgba(0,0,0,0.42)",
  },
  previewTop: {
    display: "flex",
    gap: 8,
    padding: "12px 14px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.04)",
  },
  previewDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    background: "rgba(255,255,255,0.25)",
  },
  previewBody: { padding: 16 },
  previewBadge: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(0,200,255,0.12)",
    border: "1px solid rgba(0,200,255,0.24)",
    color: "rgba(255,255,255,0.82)",
    fontWeight: 900,
    fontSize: 12,
    marginBottom: 10,
  },
  previewTitle: { fontWeight: 950, fontSize: 18, marginBottom: 10 },
  previewLine: {
    height: 10,
    borderRadius: 999,
    background: "rgba(255,255,255,0.10)",
    marginBottom: 8,
  },
  previewLineShort: {
    height: 10,
    width: "70%",
    borderRadius: 999,
    background: "rgba(255,255,255,0.10)",
    marginBottom: 14,
  },
  previewGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 10,
    marginBottom: 14,
  },
  previewMiniCard: {
    height: 54,
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.06)",
  },
  previewCtaRow: { display: "flex", gap: 10 },
  previewCta: {
    height: 38,
    flex: 1,
    borderRadius: 12,
    background:
      "linear-gradient(135deg, rgba(0,200,255,0.9), rgba(130,90,255,0.9))",
  },
  previewCtaGhost: {
    height: 38,
    width: 120,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
  },

  quickContact: {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.05)",
    padding: 16,
  },
  quickContactTitle: { fontWeight: 950, marginBottom: 10 },
  quickContactRow: { display: "flex", gap: 10, flexWrap: "wrap" },
  quickChip: {
    textDecoration: "none",
    fontWeight: 950,
    padding: "10px 12px",
    borderRadius: 14,
    color: "#061018",
    background:
      "linear-gradient(135deg, rgba(0,200,255,0.95), rgba(130,90,255,0.95))",
  },
  quickChipAlt: {
    textDecoration: "none",
    fontWeight: 900,
    padding: "10px 12px",
    borderRadius: 14,
    color: "rgba(255,255,255,0.9)",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
  },

  section: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "44px 22px",
  },
  sectionHead: { marginBottom: 18 },
  h2: { margin: 0, fontSize: 30, fontWeight: 950, letterSpacing: -0.3 },
  sectionP: { margin: "8px 0 0", color: "rgba(255,255,255,0.72)", maxWidth: 720 },

  grid3: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 },
  card: {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.05)",
    padding: 18,
  },
  cardTitle: { fontWeight: 950, fontSize: 18, marginBottom: 8 },
  cardP: { color: "rgba(255,255,255,0.72)", lineHeight: 1.5, marginBottom: 10 },
  ul: { margin: 0, paddingLeft: 18, color: "rgba(255,255,255,0.78)", lineHeight: 1.7 },

  demoGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 },
  demoCard: {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.05)",
    padding: 18,
  },
  demoTop: { display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" },
  demoTitle: { fontWeight: 950, fontSize: 18 },
  demoTag: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    color: "rgba(255,255,255,0.75)",
    whiteSpace: "nowrap",
  },
  demoBody: { marginTop: 10, color: "rgba(255,255,255,0.72)", lineHeight: 1.5 },
  demoBottom: { marginTop: 14 },
  demoBtn: {
    display: "inline-flex",
    textDecoration: "none",
    fontWeight: 950,
    padding: "11px 14px",
    borderRadius: 14,
    color: "rgba(255,255,255,0.92)",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
  },

  pricingGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 },
  priceCard: {
    position: "relative",
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.05)",
    padding: 18,
  },
  priceCardHot: {
    border: "1px solid rgba(0,200,255,0.25)",
    background:
      "linear-gradient(180deg, rgba(0,200,255,0.10), rgba(255,255,255,0.05))",
  },
  hotBadge: {
    position: "absolute",
    top: 14,
    right: 14,
    fontSize: 12,
    fontWeight: 950,
    padding: "6px 10px",
    borderRadius: 999,
    color: "rgba(255,255,255,0.88)",
    background: "rgba(0,200,255,0.14)",
    border: "1px solid rgba(0,200,255,0.26)",
  },
  priceName: { fontWeight: 950, fontSize: 18 },
  priceNumber: { fontWeight: 950, fontSize: 40, marginTop: 6 },
  priceSub: { color: "rgba(255,255,255,0.70)", margin: "6px 0 10px" },
  priceBtn: {
    marginTop: 12,
    display: "inline-flex",
    justifyContent: "center",
    width: "100%",
    textDecoration: "none",
    fontWeight: 950,
    padding: "12px 14px",
    borderRadius: 14,
    color: "rgba(255,255,255,0.92)",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
  },
  priceBtnHot: {
    color: "#061018",
    background:
      "linear-gradient(135deg, rgba(0,200,255,0.95), rgba(130,90,255,0.95))",
    border: "none",
  },

  bottomCta: {
    marginTop: 18,
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.05)",
    padding: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
    flexWrap: "wrap",
  },
  bottomCtaText: { fontWeight: 900, color: "rgba(255,255,255,0.86)" },
  bottomCtaRow: { display: "flex", gap: 10, flexWrap: "wrap" },

  footer: {
    borderTop: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(7,10,18,0.75)",
    backdropFilter: "blur(8px)",
  },
  footerInner: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "20px 22px",
    display: "flex",
    justifyContent: "space-between",
    gap: 14,
    alignItems: "center",
    flexWrap: "wrap",
  },
  footerBrand: { fontWeight: 950 },
  footerLinks: { display: "flex", gap: 12, flexWrap: "wrap" },
  footerLink: { color: "rgba(255,255,255,0.78)", textDecoration: "none", fontWeight: 800 },
  footerBottom: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "0 22px 18px",
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
  },
  footerSmall: { color: "rgba(255,255,255,0.60)", fontSize: 12.5 },
};

/* Responsive */
const _responsive = `
@media (max-width: 980px) {}
`;