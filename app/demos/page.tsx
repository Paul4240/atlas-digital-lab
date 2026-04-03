"use client";

import Link from "next/link";

export default function DemosPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(240,196,138,0.16), transparent 32%), linear-gradient(180deg, #0b1218 0%, #101923 50%, #0c141c 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "56px 20px 80px",
        }}
      >
        <section style={{ marginBottom: 40 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#f0c48a",
              marginBottom: 14,
            }}
          >
            Atlas Digital Lab
          </div>

          <h1
            style={{
              fontSize: "clamp(42px, 6vw, 76px)",
              lineHeight: 0.95,
              letterSpacing: "-0.05em",
              margin: "0 0 14px",
              maxWidth: 760,
            }}
          >
            Real directions we can build from.
          </h1>

          <p
            style={{
              color: "#c5ced6",
              fontSize: 18,
              lineHeight: 1.7,
              maxWidth: 760,
              margin: 0,
            }}
          >
            These demos show the layout direction we can build around your business.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 22 }}>
            <a href="tel:3463657906" style={primaryBtn}>
              Call / Text Sales
            </a>
            <Link href="/" style={ghostBtn}>
              Back Home
            </Link>
          </div>
        </section>

        <section style={{ marginBottom: 44 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#8fe4ff",
              marginBottom: 14,
            }}
          >
            Sales Team
          </div>

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

        <section>
          <div
            className="demo-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: 24,
            }}
          >
            <Link href="/demo/pet-bakery" style={featureCard}>
              <div
                style={{
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
                }}
              >
                Featured Demo
              </div>

              <div
                style={{
                  fontSize: 42,
                  fontWeight: 800,
                  lineHeight: 1.02,
                  letterSpacing: "-0.04em",
                  marginBottom: 12,
                }}
              >
                Pet Bakery Demo
              </div>

              <div
                style={{
                  color: "#d2dae0",
                  fontSize: 17,
                  lineHeight: 1.7,
                  maxWidth: 560,
                }}
              >
                Boutique storefront direction with stronger product presentation,
                cleaner flow, and a more polished look.
              </div>

              <div
                style={{
                  marginTop: 22,
                  color: "#f0c48a",
                  fontWeight: 800,
                  fontSize: 15,
                }}
              >
                Open Demo
              </div>
            </Link>

            <div
              style={{
                display: "grid",
                gap: 18,
              }}
            >
              <Link href="/demo/home-styling" style={sideCard}>
                <div style={sideTitle}>Luxury Interior Styling</div>
                <div style={sideText}>
                  Clean, image-first residential presentation with stronger visual polish.
                </div>
                <div style={sideArrow}>Open Demo</div>
              </Link>

              <Link href="/demo/roofing" style={sideCard}>
                <div style={sideTitle}>Roofing Demo</div>
                <div style={sideText}>
                  Trust-based service layout built to get more quote calls.
                </div>
                <div style={sideArrow}>Open Demo</div>
              </Link>

              <Link href="/demo/metal-cards" style={sideCard}>
                <div style={sideTitle}>Metal Cards Demo</div>
                <div style={sideText}>
                  Product-style layout with stronger offer structure and better sales flow.
                </div>
                <div style={sideArrow}>Open Demo</div>
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

const primaryBtn: React.CSSProperties = {
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
  boxShadow: "0 12px 24px rgba(155, 99, 39, 0.24)",
};

const ghostBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 54,
  padding: "13px 20px",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.04)",
  color: "white",
  textDecoration: "none",
  fontWeight: 800,
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

const featureCard: React.CSSProperties = {
  textDecoration: "none",
  color: "white",
  borderRadius: 28,
  padding: 32,
  minHeight: 380,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 18px 44px rgba(0,0,0,0.16)",
};

const sideCard: React.CSSProperties = {
  textDecoration: "none",
  color: "white",
  borderRadius: 24,
  padding: 24,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 18px 44px rgba(0,0,0,0.12)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const sideTitle: React.CSSProperties = {
  fontSize: 24,
  fontWeight: 800,
  lineHeight: 1.08,
  marginBottom: 8,
};

const sideText: React.CSSProperties = {
  color: "#c7cfd6",
  fontSize: 16,
  lineHeight: 1.65,
  marginBottom: 16,
};

const sideArrow: React.CSSProperties = {
  color: "#f0c48a",
  fontWeight: 800,
  fontSize: 14,
};