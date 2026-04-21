"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function PreviewPage() {
  const searchParams = useSearchParams();

  const businessName =
    searchParams.get("businessName") || "Your Business Name";
  const city = searchParams.get("city") || "Your City";
  const niche = searchParams.get("niche") || "Your Industry";
  const notes = searchParams.get("notes") || "";
  const phone = searchParams.get("phone") || "(346) 365-7906";
  const email = searchParams.get("email") || "hello@atlasdigitallab.com";

  const phoneDigits = phone.replace(/\D/g, "") || "3463657906";
  const nicheLabel =
    niche && niche !== "Your Industry" ? niche : "business";

  return (
    <main style={styles.page}>
      <div style={styles.glowA} />
      <div style={styles.glowB} />
      <div style={styles.starWrap} aria-hidden>
        <div style={styles.star}>★</div>
      </div>

      <div style={styles.container}>
        <header style={styles.topbar}>
          <Link href="/" style={styles.brand}>
            <div style={styles.brandMark}>★</div>
            <div>
              <div style={styles.brandName}>Atlas Digital Lab</div>
              <div style={styles.brandSub}>Preview Direction</div>
            </div>
          </Link>

          <div style={styles.topActions}>
            <Link href="/" style={styles.darkBtn}>
              Back to Site
            </Link>
            <a href={`mailto:${email}`} style={styles.goldBtn}>
              Request This Style
            </a>
          </div>
        </header>

        <section style={styles.heroGrid} className="heroGrid">
          <div>
            <div style={styles.kicker}>
              PREVIEW DIRECTION • {city.toUpperCase()} • {nicheLabel.toUpperCase()}
            </div>

            <h1 style={styles.heroTitle}>{businessName}</h1>

            <p style={styles.heroCopy}>
              A cleaner, more premium website direction built to make your{" "}
              {nicheLabel.toLowerCase()} look more established online and turn
              more visitors into real leads.
            </p>

            <div style={styles.ctaRow}>
              <a href={`tel:${phoneDigits}`} style={styles.goldBtn}>
                Call Now
              </a>
              <a href={`mailto:${email}`} style={styles.darkBtn}>
                Email Us
              </a>
            </div>

            <div style={styles.salesRow}>
              <div style={styles.salesChip}>Premium Look</div>
              <div style={styles.salesChip}>Clear Offer Flow</div>
              <div style={styles.salesChip}>Built for More Calls</div>
            </div>
          </div>

          <div style={styles.heroPanel}>
            <div style={styles.smallKicker}>PREVIEW SUMMARY</div>
            <h2 style={styles.panelTitle}>
              Built to feel sharper, cleaner, and more valuable.
            </h2>

            <div style={styles.panelList}>
              <div>
                <div style={styles.panelHead}>Business</div>
                <p style={styles.panelText}>{businessName}</p>
              </div>

              <div>
                <div style={styles.panelHead}>Location</div>
                <p style={styles.panelText}>{city}</p>
              </div>

              <div>
                <div style={styles.panelHead}>Industry</div>
                <p style={styles.panelText}>{niche}</p>
              </div>

              <div>
                <div style={styles.panelHead}>Direction</div>
                <p style={styles.panelText}>
                  {notes ||
                    "Premium presentation, stronger trust, and better structure for lead generation."}
                </p>
              </div>
            </div>

            <a href={`mailto:${email}`} style={styles.fullGoldBtn}>
              Launch This Direction
            </a>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHead} className="sectionHead">
            <div>
              <div style={styles.smallKicker}>SERVICES</div>
              <h2 style={styles.sectionTitle}>
                What this website direction would focus on.
              </h2>
            </div>

            <p style={styles.sectionCopy}>
              The goal is simple — make {businessName} feel like the obvious
              choice when somebody lands on the page.
            </p>
          </div>

          <div style={styles.serviceList}>
            <div style={styles.serviceRow} className="serviceRow">
              <div style={styles.serviceNumber}>01</div>
              <div>
                <h3 style={styles.serviceTitle}>Stronger Presentation</h3>
                <p style={styles.serviceText}>
                  Cleaner layout, larger typography, and better spacing so the
                  business feels more established instantly.
                </p>
              </div>
              <div style={styles.tagRow}>
                <span style={styles.tag}>Premium look</span>
                <span style={styles.tag}>Clear trust</span>
                <span style={styles.tag}>Better flow</span>
              </div>
            </div>

            <div style={styles.serviceRow} className="serviceRow">
              <div style={styles.serviceNumber}>02</div>
              <div>
                <h3 style={styles.serviceTitle}>Clear Lead Conversion</h3>
                <p style={styles.serviceText}>
                  More direct calls to action and simpler structure so people
                  know what to do next.
                </p>
              </div>
              <div style={styles.tagRow}>
                <span style={styles.tag}>More calls</span>
                <span style={styles.tag}>More trust</span>
                <span style={styles.tag}>Cleaner CTA</span>
              </div>
            </div>

            <div style={styles.serviceRow} className="serviceRow">
              <div style={styles.serviceNumber}>03</div>
              <div>
                <h3 style={styles.serviceTitle}>Positioning That Fits {city}</h3>
                <p style={styles.serviceText}>
                  A more local and niche-aware presentation that feels tailored
                  to your market.
                </p>
              </div>
              <div style={styles.tagRow}>
                <span style={styles.tag}>{city}</span>
                <span style={styles.tag}>{niche}</span>
                <span style={styles.tag}>Local growth</span>
              </div>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.previewMock}>
            <div style={styles.mockTop}>
              <div>
                <div style={styles.smallKicker}>HOMEPAGE DIRECTION</div>
                <h2 style={styles.sectionTitle}>{businessName}</h2>
              </div>

              <div style={styles.mockButtons}>
                <a href={`tel:${phoneDigits}`} style={styles.goldBtn}>
                  Call
                </a>
                <a href={`mailto:${email}`} style={styles.darkBtn}>
                  Get Quote
                </a>
              </div>
            </div>

            <div style={styles.mockGrid} className="mockGrid">
              <div style={styles.mockMain}>
                <div style={styles.mockCardTitle}>
                  Premium {nicheLabel} website direction for {city}
                </div>
                <p style={styles.mockCardText}>
                  This area shows how the brand can feel stronger online with a
                  cleaner hero, sharper messaging, and better lead flow.
                </p>
              </div>

              <div style={styles.mockSide}>
                <div style={styles.mockMini}>Trust Section</div>
                <div style={styles.mockMini}>Service Section</div>
                <div style={styles.mockMini}>Call to Action</div>
              </div>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={{ ...styles.sectionTitle, textAlign: "center" }}>
            Want us to build this out for real?
          </h2>

          <div style={styles.finalActions}>
            <a href={`mailto:${email}`} style={styles.goldBtn}>
              Launch This Style
            </a>
            <Link href="/" style={styles.darkBtn}>
              Back to Homepage
            </Link>
          </div>
        </section>
      </div>

      <style jsx>{`
        @media (max-width: 1080px) {
          .heroGrid,
          .sectionHead,
          .mockGrid {
            grid-template-columns: 1fr !important;
          }

          .serviceRow {
            grid-template-columns: 80px 1fr !important;
          }
        }

        @media (max-width: 760px) {
          .heroGrid,
          .sectionHead,
          .mockGrid {
            grid-template-columns: 1fr !important;
          }

          .serviceRow {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, rgba(216,180,79,0.08), transparent 22%), linear-gradient(180deg, #060b14 0%, #08101b 50%, #050a12 100%)",
    color: "#f4efe4",
    fontFamily: 'Georgia, "Times New Roman", serif',
    position: "relative",
    overflowX: "hidden",
  },

  glowA: {
    position: "fixed",
    width: 260,
    height: 260,
    top: 70,
    left: -120,
    borderRadius: 999,
    filter: "blur(90px)",
    background: "rgba(216,180,79,0.5)",
    opacity: 0.14,
    pointerEvents: "none",
  },

  glowB: {
    position: "fixed",
    width: 280,
    height: 280,
    right: -100,
    bottom: 120,
    borderRadius: 999,
    filter: "blur(90px)",
    background: "rgba(44,74,124,0.5)",
    opacity: 0.14,
    pointerEvents: "none",
  },

  starWrap: {
    position: "fixed",
    right: -10,
    top: 130,
    width: 640,
    height: 640,
    opacity: 0.44,
    pointerEvents: "none",
    zIndex: 0,
  },

  star: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(216, 180, 79, 0.28)",
    fontSize: 260,
    lineHeight: 1,
  },

  container: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "0 24px 80px",
    position: "relative",
    zIndex: 2,
  },

  topbar: {
    minHeight: 76,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 18,
    paddingTop: 18,
  },

  brand: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    textDecoration: "none",
    color: "#f4efe4",
  },

  brandMark: {
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    background: "rgba(216,180,79,0.12)",
    color: "#d8b44f",
    fontSize: 18,
    boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
  },

  brandName: {
    fontFamily: "Arial, sans-serif",
    fontSize: 15,
    fontWeight: 800,
  },

  brandSub: {
    fontFamily: "Arial, sans-serif",
    fontSize: 12,
    color: "#b8c2cf",
  },

  topActions: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    flexWrap: "wrap",
  },

  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.08fr 0.92fr",
    gap: 44,
    alignItems: "start",
    paddingTop: 42,
  },

  kicker: {
    fontFamily: "Arial, sans-serif",
    fontSize: 12,
    letterSpacing: "0.12em",
    fontWeight: 800,
    color: "#d8b44f",
    marginBottom: 16,
  },

  heroTitle: {
    margin: "0 0 22px",
    fontSize: "clamp(52px, 7vw, 84px)",
    lineHeight: 0.97,
    letterSpacing: "-0.04em",
    maxWidth: "10ch",
  },

  heroCopy: {
    fontFamily: "Arial, sans-serif",
    color: "#bcc6d4",
    lineHeight: 1.65,
    fontSize: 17,
    maxWidth: 620,
    margin: "0 0 22px",
  },

  ctaRow: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    flexWrap: "wrap",
  },

  goldBtn: {
    fontFamily: "Arial, sans-serif",
    textDecoration: "none",
    fontWeight: 700,
    padding: "13px 18px",
    borderRadius: 12,
    background: "linear-gradient(135deg, #e1c15f, #c89e2c)",
    color: "#111",
    boxShadow: "0 12px 34px rgba(216,180,79,0.16)",
  },

  darkBtn: {
    fontFamily: "Arial, sans-serif",
    textDecoration: "none",
    fontWeight: 700,
    padding: "13px 18px",
    borderRadius: 12,
    color: "#f4efe4",
    background: "rgba(255,255,255,0.055)",
  },

  salesRow: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 18,
  },

  salesChip: {
    fontFamily: "Arial, sans-serif",
    textDecoration: "none",
    fontWeight: 700,
    color: "#eef3fb",
    background: "rgba(255,255,255,0.05)",
    padding: "10px 14px",
    borderRadius: 999,
    fontSize: 13,
    boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
  },

  heroPanel: {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025))",
    boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
    padding: "34px 32px",
    borderRadius: 32,
  },

  smallKicker: {
    fontFamily: "Arial, sans-serif",
    fontSize: 12,
    letterSpacing: "0.12em",
    fontWeight: 800,
    color: "#d8b44f",
    marginBottom: 16,
  },

  panelTitle: {
    margin: "0 0 14px",
    fontSize: 38,
    lineHeight: 1.02,
    letterSpacing: "-0.03em",
  },

  panelList: {
    display: "grid",
    gap: 18,
    margin: "22px 0 24px",
  },

  panelHead: {
    display: "block",
    fontFamily: "Arial, sans-serif",
    fontSize: 15,
    marginBottom: 6,
    fontWeight: 700,
  },

  panelText: {
    margin: 0,
    fontFamily: "Arial, sans-serif",
    color: "#bcc6d4",
    fontSize: 14,
    lineHeight: 1.6,
  },

  fullGoldBtn: {
    width: "100%",
    textAlign: "center",
    display: "block",
    fontFamily: "Arial, sans-serif",
    textDecoration: "none",
    fontWeight: 700,
    padding: "13px 18px",
    borderRadius: 12,
    background: "linear-gradient(135deg, #e1c15f, #c89e2c)",
    color: "#111",
    boxShadow: "0 12px 34px rgba(216,180,79,0.16)",
  },

  section: {
    marginTop: 92,
  },

  sectionHead: {
    display: "grid",
    gridTemplateColumns: "1fr 0.9fr",
    gap: 28,
    alignItems: "end",
    marginBottom: 28,
  },

  sectionTitle: {
    margin: 0,
    fontSize: "clamp(38px, 4vw, 56px)",
    lineHeight: 1.04,
    letterSpacing: "-0.03em",
  },

  sectionCopy: {
    fontFamily: "Arial, sans-serif",
    color: "#bcc6d4",
    lineHeight: 1.65,
    fontSize: 17,
  },

  serviceList: {
    display: "grid",
    gap: 18,
  },

  serviceRow: {
    display: "grid",
    gridTemplateColumns: "80px 1fr 0.95fr",
    gap: 22,
    alignItems: "start",
    background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))",
    borderRadius: 22,
    padding: 22,
  },

  serviceNumber: {
    fontSize: 38,
    lineHeight: 1,
    color: "#d8b44f",
    fontWeight: 700,
  },

  serviceTitle: {
    margin: "0 0 10px",
    fontSize: 30,
    lineHeight: 1.05,
  },

  serviceText: {
    margin: 0,
    fontFamily: "Arial, sans-serif",
    color: "#bcc6d4",
    lineHeight: 1.65,
    fontSize: 17,
  },

  tagRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    alignSelf: "center",
  },

  tag: {
    fontFamily: "Arial, sans-serif",
    fontSize: 13,
    fontWeight: 700,
    color: "#dbe2ec",
    padding: "9px 12px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.05)",
  },

  previewMock: {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025))",
    boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
    borderRadius: 32,
    padding: 30,
  },

  mockTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 20,
    flexWrap: "wrap",
    marginBottom: 24,
  },

  mockButtons: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
  },

  mockGrid: {
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: 18,
  },

  mockMain: {
    minHeight: 260,
    borderRadius: 28,
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(111,182,255,0.06))",
    padding: 28,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    boxShadow: "0 20px 50px rgba(0,0,0,0.16)",
  },

  mockCardTitle: {
    fontSize: 34,
    lineHeight: 1.04,
    marginBottom: 10,
  },

  mockCardText: {
    margin: 0,
    fontFamily: "Arial, sans-serif",
    color: "#bcc6d4",
    fontSize: 16,
    lineHeight: 1.7,
    maxWidth: 560,
  },

  mockSide: {
    display: "grid",
    gap: 18,
  },

  mockMini: {
    minHeight: 74,
    borderRadius: 22,
    background: "rgba(255,255,255,0.05)",
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    fontFamily: "Arial, sans-serif",
    fontWeight: 700,
    color: "#eef3fb",
    boxShadow: "0 16px 34px rgba(0,0,0,0.12)",
  },

  finalActions: {
    marginTop: 18,
    display: "flex",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};