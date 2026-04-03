"use client";

import Link from "next/link";

export default function DemosPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(240,196,138,0.15), transparent 30%), #0b1218",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "60px 20px" }}>
        
        {/* HEADER */}
        <section style={{ marginBottom: 50 }}>
          <div style={tag}>Atlas Digital Lab</div>

          <h1 style={title}>
            Real directions we can build from.
          </h1>

          <p style={sub}>
            These demos show the structure and layout we build for different businesses.
          </p>

          <div style={{ marginTop: 20 }}>
            <a href="tel:3463657906" style={primaryBtn}>
              Call / Text Sales
            </a>
          </div>
        </section>

        {/* SALES TEAM */}
        <section style={{ marginBottom: 50 }}>
          <div style={tagBlue}>Sales Team</div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="tel:3463657906" style={pill}>
              Sales (346) 365-7906
            </a>
            <a href="tel:8326773150" style={pill}>
              Sales (832) 677-3150
            </a>
            <a href="tel:3465328803" style={pill}>
              Sales (346) 532-8803
            </a>
          </div>
        </section>

        {/* DEMOS GRID */}
        <section>
          <div
            className="grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
            }}
          >
            <Link href="/demo/pet-bakery" style={card}>
              <div style={cardTitle}>Pet Bakery Demo</div>
              <div style={cardText}>
                Storefront layout built for product flow and clean presentation.
              </div>
            </Link>

            <Link href="/demo/home-styling" style={card}>
              <div style={cardTitle}>Interior Styling</div>
              <div style={cardText}>
                Image-first layout designed for premium residential brands.
              </div>
            </Link>

            <Link href="/demo/roofing" style={card}>
              <div style={cardTitle}>Roofing Demo</div>
              <div style={cardText}>
                Service layout focused on calls, trust, and conversions.
              </div>
            </Link>

            <Link href="/demo/metal-cards" style={card}>
              <div style={cardTitle}>Metal Cards Demo</div>
              <div style={cardText}>
                Product-style layout with pricing and strong offer flow.
              </div>
            </Link>
          </div>
        </section>

      </div>

      {/* MOBILE FIX */}
      <style jsx>{`
        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

/* STYLES */

const tag: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#f0c48a",
  marginBottom: 12,
};

const tagBlue: React.CSSProperties = {
  ...tag,
  color: "#8fe4ff",
};

const title: React.CSSProperties = {
  fontSize: "clamp(42px, 6vw, 72px)",
  fontWeight: 800,
  lineHeight: 0.95,
  letterSpacing: "-0.04em",
  marginBottom: 14,
};

const sub: React.CSSProperties = {
  color: "#c5ced6",
  fontSize: 18,
  lineHeight: 1.6,
  maxWidth: 700,
};

const primaryBtn: React.CSSProperties = {
  display: "inline-flex",
  padding: "12px 20px",
  borderRadius: 12,
  background: "linear-gradient(135deg, #f0c48a, #9b6327)",
  color: "#17110b",
  textDecoration: "none",
  fontWeight: 800,
};

const pill: React.CSSProperties = {
  padding: "10px 16px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,0.15)",
  color: "white",
  textDecoration: "none",
  fontWeight: 600,
};

const card: React.CSSProperties = {
  padding: 30,
  borderRadius: 18,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  textDecoration: "none",
  color: "white",
};

const cardTitle: React.CSSProperties = {
  fontSize: 26,
  fontWeight: 800,
  marginBottom: 8,
};

const cardText: React.CSSProperties = {
  color: "#c7cfd6",
  fontSize: 15,
};