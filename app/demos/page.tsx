"use client";

import Link from "next/link";

export default function DemosPage() {
  return (
    <main style={page}>
      <div style={wrap}>
        <section style={hero}>
          <div style={eyebrow}>Atlas Digital Lab</div>
          <h1 style={h1}>Demos</h1>
          <p style={sub}>
            Pick a demo direction and we build from there.
          </p>

          <div style={btnRow}>
            <a href="tel:3463657906" style={goldBtn}>Call / Text Sales</a>
            <Link href="/" style={darkBtn}>Back Home</Link>
          </div>
        </section>

        <section style={salesSection}>
          <div style={eyebrowBlue}>Sales Team</div>
          <div style={salesRow}>
            <a href="tel:3463657906" style={pill}>Sales (346) 365-7906</a>
            <a href="tel:8326773150" style={pill}>Sales (832) 677-3150</a>
            <a href="tel:3465328803" style={pill}>Sales (346) 532-8803</a>
          </div>
        </section>

        <section>
          <div className="demo-grid" style={grid}>
            <Link href="/demo/pet-bakery" style={featureCard}>
              <div style={featureTag}>Featured Demo</div>
              <div style={featureTitle}>Pet Bakery Demo</div>
              <div style={featureText}>
                Boutique storefront layout with stronger product flow and cleaner presentation.
              </div>
              <div style={featureArrow}>Open Demo</div>
            </Link>

            <div style={sideCol}>
              <Link href="/demo/home-styling" style={sideCard}>
                <div style={sideTitle}>Luxury Interior Styling</div>
                <div style={sideText}>Clean, image-first layout.</div>
              </Link>

              <Link href="/demo/roofing" style={sideCard}>
                <div style={sideTitle}>Roofing Demo</div>
                <div style={sideText}>Trust-based service layout.</div>
              </Link>

              <Link href="/demo/metal-cards" style={sideCard}>
                <div style={sideTitle}>Metal Cards Demo</div>
                <div style={sideText}>Product-style layout for stronger offers.</div>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .demo-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

const page: React.CSSProperties = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #0b1218 0%, #101923 100%)",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const wrap: React.CSSProperties = {
  maxWidth: 1180,
  margin: "0 auto",
  padding: "56px 20px 80px",
};

const hero: React.CSSProperties = {
  marginBottom: 40,
};

const eyebrow: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#f0c48a",
  marginBottom: 12,
};

const eyebrowBlue: React.CSSProperties = {
  ...eyebrow,
  color: "#8fe4ff",
};

const h1: React.CSSProperties = {
  fontSize: "clamp(44px, 7vw, 84px)",
  lineHeight: 0.95,
  letterSpacing: "-0.05em",
  margin: "0 0 12px",
};

const sub: React.CSSProperties = {
  color: "#c5ced6",
  fontSize: 18,
  lineHeight: 1.6,
  maxWidth: 700,
  margin: 0,
};

const btnRow: React.CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  marginTop: 22,
};

const goldBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 54,
  padding: "13px 20px",
  borderRadius: 14,
  background: "linear-gradient(135deg, #f0c48a, #9b6327)",
  color: "#17110b",
  textDecoration: "none",
  fontWeight: 800,
};

const darkBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 54,
  padding: "13px 20px",
  borderRadius: 14,
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "white",
  textDecoration: "none",
  fontWeight: 800,
};

const salesSection: React.CSSProperties = {
  marginBottom: 40,
};

const salesRow: React.CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
};

const pill: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 46,
  padding: "10px 16px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,0.14)",
  color: "white",
  background: "rgba(255,255,255,0.04)",
  textDecoration: "none",
  fontWeight: 700,
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1.15fr 0.85fr",
  gap: 24,
};

const featureCard: React.CSSProperties = {
  textDecoration: "none",
  color: "white",
  borderRadius: 28,
  padding: 36,
  minHeight: 420,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  background: "linear-gradient(135deg, #172435 0%, #0f1823 100%)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 18px 44px rgba(0,0,0,0.16)",
};

const featureTag: React.CSSProperties = {
  display: "inline-flex",
  width: "fit-content",
  minHeight: 34,
  padding: "6px 10px",
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 800,
  background: "rgba(143,228,255,0.08)",
  border: "1px solid rgba(143,228,255,0.18)",
  color: "#8fe4ff",
  marginBottom: 18,
};

const featureTitle: React.CSSProperties = {
  fontSize: 42,
  fontWeight: 800,
  lineHeight: 1.02,
  letterSpacing: "-0.04em",
  marginBottom: 12,
};

const featureText: React.CSSProperties = {
  color: "#d2dae0",
  fontSize: 17,
  lineHeight: 1.7,
  maxWidth: 560,
};

const featureArrow: React.CSSProperties = {
  marginTop: 22,
  color: "#f0c48a",
  fontWeight: 800,
  fontSize: 15,
};

const sideCol: React.CSSProperties = {
  display: "grid",
  gap: 18,
};

const sideCard: React.CSSProperties = {
  textDecoration: "none",
  color: "white",
  borderRadius: 22,
  padding: 26,
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 18px 44px rgba(0,0,0,0.12)",
};

const sideTitle: React.CSSProperties = {
  fontSize: 28,
  fontWeight: 800,
  lineHeight: 1.05,
  marginBottom: 8,
};

const sideText: React.CSSProperties = {
  color: "#c7cfd6",
  fontSize: 16,
  lineHeight: 1.65,
};